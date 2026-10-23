# Biblioteca Horizonte — ejemplo educativo React + Vite

Este proyecto muestra cómo separar una página sencilla en archivos.

## Cómo ejecutarlo

Necesitás tener Node.js instalado. Desde una terminal abierta en esta carpeta:

```bash
npm install
npm run dev
```

Vite mostrará una dirección local (normalmente `http://localhost:5173`). Abrila en el navegador.

Para comprobar la versión que se publicaría:

```bash
npm run build
```

## ¿Qué hace cada archivo?

- `index.html`: documento HTML base. `#root` es el espacio donde React dibuja la aplicación.
- `src/main.jsx`: punto de entrada. Importa el CSS global y monta el componente `App` dentro de `#root`.
- `src/App.jsx`: contenido y comportamiento de la página. Incluye los datos de ejemplo de los libros, el buscador y los filtros.
- `src/App.css`: diseño de las secciones, tarjetas, botones y adaptación a pantallas chicas.
- `src/index.css`: estilos globales, tipografía, colores y reglas básicas para todos los elementos.
- `vite.config.js`: configuración de Vite.
- `package.json`: dependencias y comandos disponibles.
- `node_modules/`: se crea al ejecutar `npm install`; no hace falta incluirla ni editarla a mano.

## Para aprender

1. Cambiá el texto del título en `src/App.jsx` y guardá.
2. Cambiá el color de `.hero` o `.book-cover` en `src/App.css`.
3. Agregá otro objeto al arreglo `books` en `src/App.jsx`.
4. Probá el buscador y los filtros: usan `useState` para recordar lo que elegís.

Las tapas son diseños de muestra creados con CSS, no imágenes oficiales de los libros. El botón “Consultar ejemplar” solo muestra un mensaje de demostración; no contacta a una biblioteca real.
