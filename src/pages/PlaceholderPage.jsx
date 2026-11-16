function PlaceholderPage({ title, description = 'Halaman ini akan segera tersedia.' }) {
  return (
    <section className="placeholder-page">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export default PlaceholderPage
