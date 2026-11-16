import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import {
  createTask as createTaskRecord,
  deleteTask as deleteTaskRecord,
  getTasks,
  updateTask as updateTaskRecord,
} from '../services/tasksService.js'
import useAuth from './useAuth.js'

function useTasks() {
  const { loading: authLoading, session } = useAuth()
  const userId = session?.user?.id ?? null
  const activeUserId = useRef(userId)
  const [taskState, setTaskState] = useState({ userId: null, tasks: [] })
  const [requestState, setRequestState] = useState({
    userId: null,
    loading: false,
    error: null,
  })

  useLayoutEffect(() => {
    activeUserId.current = userId
  }, [userId])

  const refreshTasks = useCallback(async () => {
    const requestUserId = activeUserId.current

    if (!requestUserId) {
      return
    }

    setRequestState({ userId: requestUserId, loading: true, error: null })

    try {
      const currentTasks = await getTasks()

      if (activeUserId.current === requestUserId) {
        setTaskState({ userId: requestUserId, tasks: currentTasks })
      }
    } catch (loadError) {
      if (activeUserId.current === requestUserId) {
        setRequestState({
          userId: requestUserId,
          loading: true,
          error: loadError,
        })
      }
    } finally {
      if (activeUserId.current === requestUserId) {
        setRequestState((currentState) =>
          currentState.userId === requestUserId
            ? { ...currentState, loading: false }
            : currentState,
        )
      }
    }
  }, [])

  useEffect(() => {
    if (!authLoading && userId) {
      refreshTasks()
    }
  }, [authLoading, userId, refreshTasks])

  const runMutation = useCallback(async (mutation, updateTasks) => {
    const requestUserId = activeUserId.current
    setRequestState({ userId: requestUserId, loading: true, error: null })

    try {
      if (!requestUserId) {
        throw new Error('Masuk terlebih dahulu untuk mengelola tugas.')
      }

      const result = await mutation()

      if (activeUserId.current === requestUserId) {
        setTaskState((currentState) => ({
          userId: requestUserId,
          tasks: updateTasks(
            currentState.userId === requestUserId ? currentState.tasks : [],
            result,
          ),
        }))
      }

      return result
    } catch (mutationError) {
      if (activeUserId.current === requestUserId) {
        setRequestState({
          userId: requestUserId,
          loading: true,
          error: mutationError,
        })
      }
      throw mutationError
    } finally {
      if (activeUserId.current === requestUserId) {
        setRequestState((currentState) =>
          currentState.userId === requestUserId
            ? { ...currentState, loading: false }
            : currentState,
        )
      }
    }
  }, [])

  const createTask = useCallback(
    (taskData) =>
      runMutation(
        () => createTaskRecord(taskData),
        (currentTasks, createdTask) => [createdTask, ...currentTasks],
      ),
    [runMutation],
  )

  const updateTask = useCallback(
    (taskId, taskData) =>
      runMutation(
        () => updateTaskRecord(taskId, taskData),
        (currentTasks, updatedTask) =>
          currentTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task,
          ),
      ),
    [runMutation],
  )

  const deleteTask = useCallback(
    (taskId) =>
      runMutation(
        () => deleteTaskRecord(taskId),
        (currentTasks, deletedTask) =>
          currentTasks.filter((task) => task.id !== deletedTask.id),
      ),
    [runMutation],
  )

  const tasks = taskState.userId === userId ? taskState.tasks : []
  const requestError =
    requestState.userId === userId ? requestState.error : null
  const loading =
    authLoading ||
    (Boolean(userId) &&
      (requestState.userId !== userId || requestState.loading))

  return {
    tasks,
    loading,
    error: requestError,
    refreshTasks,
    createTask,
    updateTask,
    deleteTask,
  }
}

export default useTasks
