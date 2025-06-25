React Ecommerce Frontend - FunkoShop
Este es el frontend de un ecommerce desarrollado con React. El proyecto proporciona una interfaz de usuario interactiva para navegar, comprar y gestionar productos en línea.

🌟 Características
Visualización de productos: Muestra productos con imágenes, descripciones y precios.

Carrito de compras: Agrega productos al carrito, ajusta cantidades, y elimina artículos.

Registro e inicio de sesión: Funcionalidades para crear cuentas y gestionar el inicio de sesión.

Checkout y pagos: Integración con una API de pagos (Stripe, PayPal, etc.) - PENDIENTE

Filtros: Filtra productos por categorías, precio y otras características.

📦 Requisitos previos
Node.js y npm. Puedes descargarlos desde Node.js.

🛠 Instalación
Sigue estos pasos para configurar el proyecto localmente:

Clona el repositorio:
```
git clone https://github.com/mtk-gonza/TT-25022.git
```
Ubicacion del Proyecto Final/funkoshop:
```
cd '.\Proyecto Final\funkoshop\'
```
renombra el .env.example a .env

Instala las dependencias:
```
npm install
```

Inicia el servidor de desarrollo:
```
npm run dev
```
Accede a la aplicación en tu navegador: http://localhost:5173

🚀 Despliegue
Para un entorno de producción, crea una versión optimizada del proyecto:

```
npm run build
```
Esto generará los archivos de producción en la carpeta build/, listos para ser desplegados en plataformas como Netlify, Vercel o Heroku.

🔌 Integración con Backend
Este frontend está diseñado para conectarse a una API que proporciona datos de productos y usuarios. https://mockapi.io/

📚 Dependencias
react: La biblioteca de JavaScript para la interfaz de usuario.

react-router-dom: Para gestionar la navegación entre las páginas.

fortawesome: Para utilizar iconos.

axios/fetch: Para realizar peticiones HTTP.