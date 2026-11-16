import { supabase } from '../lib/supabaseClient.js'

const TASK_COLUMNS =
  'id, user_id, title, description, subject, priority, status, due_date, created_at, updated_at'
const TASK_WRITE_FIELDS = [
  'title',
  'description',
  'subject',
  'priority',
  'status',
  'due_date',
]

function selectTaskFields(taskData) {
  return Object.fromEntries(
    TASK_WRITE_FIELDS.filter((field) =>
      Object.prototype.hasOwnProperty.call(taskData, field),
    ).map((field) => [field, taskData[field]]),
  )
}

export async function getTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select(TASK_COLUMNS)

  if (error) {
    throw error
  }

  return data
}

export async function createTask(taskData) {
  const task = selectTaskFields(taskData)
  const { data, error } = await supabase
    .from('tasks')
    .insert(task)
    .select(TASK_COLUMNS)
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function updateTask(taskId, taskData) {
  const task = selectTaskFields(taskData)
  const { data, error } = await supabase
    .from('tasks')
    .update(task)
    .eq('id', taskId)
    .select(TASK_COLUMNS)
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function deleteTask(taskId) {
  const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId)
    .select('id')
    .single()

  if (error) {
    throw error
  }

  return data
}
