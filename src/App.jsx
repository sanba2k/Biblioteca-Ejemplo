// App.jsx: acá definimos los datos y las partes visibles de la página.
import { useState } from 'react'
import './App.css'

// Por ahora, los libros son datos de ejemplo escritos a mano.
const books = [
  { id: 1, title: 'La biblioteca de la medianoche', author: 'Matt Haig', category: 'Novela', color: 'lilac', mark: '✦' },
  { id: 2, title: 'Hábitos atómicos', author: 'James Clear', category: 'Desarrollo personal', color: 'peach', mark: '↗' },
  { id: 3, title: 'El principito', author: 'Antoine de Saint-Exupéry', category: 'Clásicos', color: 'blue', mark: '☆' },
  { id: 4, title: 'Cuentos de amor, de locura y de muerte', author: 'Horacio Quiroga', category: 'Clásicos', color: 'sage', mark: '❧' },
  { id: 5, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Historia', color: 'gold', mark: '◎' },
  { id: 6, title: 'El océano al final del camino', author: 'Neil Gaiman', category: 'Novela', color: 'night', mark: '☾' },
]

const categories = ['Todos', 'Novela', 'Clásicos', 'Desarrollo personal', 'Historia']

function App() {
  // useState recuerda lo que escribe la persona y la categoría elegida.
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [message, setMessage] = useState('')

  // Filtramos los libros según la búsqueda y la categoría seleccionada.
  const visibleBooks = books.filter((book) => {
    const matchesSearch = `${book.title} ${book.author}`
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'Todos' || book.category === activeCategory
    return matchesSearch && matchesCategory
  })

  function handleRequest(book) {
    setMessage(`Elegiste consultar por “${book.title}”. ¡Esta es una demo!`)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Biblioteca Horizonte, inicio">
          <span className="brand-mark">h.</span>
          <span>horizonte<span className="brand-subtitle">biblioteca de barrio</span></span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">La biblioteca</a>
          <a href="#visitanos">Visitános</a>
        </nav>

        <a className="header-cta" href="#catalogo">Explorar libros <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> TU PRÓXIMA HISTORIA EMPIEZA ACÁ</p>
            <h1>Un mundo de historias <em>te espera.</em></h1>
            <p className="hero-description">Un rincón para descubrir libros, encontrar nuevas ideas y dejarte llevar por la lectura.</p>
            <a className="primary-button" href="#catalogo">Descubrí el catálogo <span>↓</span></a>
            <div className="hero-note"><span className="reader-dots">● ● ●</span><span>Un lugar para lectores curiosos.</span></div>
          </div>
          <div className="hero-art" aria-label="Ilustración decorativa de libros" role="img">
            <div className="sun-shape" />
            <div className="plant plant-one">〰</div>
            <div className="book-stack stack-one"><span>HISTORIAS</span></div>
            <div className="book-stack stack-two"><span>OTROS MUNDOS</span></div>
            <div className="book-stack stack-three"><span>IDEAS QUE QUEDAN</span></div>
            <div className="little-star star-one">✳</div>
            <div className="little-star star-two">✦</div>
            <div className="art-caption">LEER ES VIAJAR<br />SIN MOVERSE.</div>
          </div>
        </section>

        <section className="catalog-section" id="catalogo">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ELEGIDOS PARA VOS</p>
              <h2>Encontrá tu próximo libro<span>.</span></h2>
            </div>
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar libro o autor..."
                aria-label="Buscar libro o autor"
              />
            </label>
          </div>

          <div className="filters" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'filter-chip active' : 'filter-chip'}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="book-grid">
            {visibleBooks.map((book) => (
              <article className="book-card" key={book.id}>
                <div className={`book-cover ${book.color}`} aria-hidden="true">
                  <span className="cover-mark">{book.mark}</span>
                  <span className="cover-title">{book.title}</span>
                  <span className="cover-author">{book.author}</span>
                  <span className="cover-bottom">HORIZONTE · LECTURAS</span>
                </div>
                <div className="book-info">
                  <span className="book-category">{book.category}</span>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <button className="text-button" type="button" onClick={() => handleRequest(book)}>
                    Consultar ejemplar <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          {visibleBooks.length === 0 && <p className="empty-state">No encontramos libros con esa búsqueda. Probá con otro título o autor.</p>}
          {message && (
            <div className="notice" role="status">
              <span>{message}</span>
              <button type="button" onClick={() => setMessage('')} aria-label="Cerrar mensaje">×</button>
            </div>
          )}
        </section>

        <section className="about-section" id="nosotros">
          <div className="about-number">01 <span>— NUESTRA ESENCIA</span></div>
          <div>
            <h2>Más que libros,<br /><em>un punto de encuentro.</em></h2>
            <p>Somos una biblioteca de barrio que cree en el poder de las historias para acercarnos, inspirarnos y abrir nuevas ventanas. Vení a descubrir tu próxima lectura.</p>
          </div>
          <div className="about-stamp">LEER<br />CONECTA<br />✳</div>
        </section>
      </main>

      <footer className="footer" id="visitanos">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">h.</span><span>horizonte<span className="brand-subtitle">biblioteca de barrio</span></span></a>
        <p>Un libro puede abrir mil puertas.</p>
        <a href="mailto:hola@bibliotecahorizonte.example">Escribinos ↗</a>
        <span className="copyright">© 2026 · Ejemplo educativo</span>
      </footer>
    </div>
  )
}

export default App
