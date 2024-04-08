# Pronóstico del Clima  <img src="https://img.icons8.com/color/32/000000/javascript--v1.png"/><img src="https://img.icons8.com/color/32/000000/react-native.png"/>

Este es un proyecto desarrollado en [React](https://reactjs.org) que muestra el clima actual y el pronóstico semanal, el usuario puede activar su ubicación y obtener su pronóstico climático o también puede ingresar un lugar desde un formulario. También se cambia la imagen de fondo según la condición del clima, para una experiencia visual agradable.

[![App del pronóstico del clima](/public/img/screen-weather-app.webp)](https://weatherapp-jsx.netlify.app)

## Características principales

- **Diseño Responsive:** La aplicación está diseñada para adaptarse a diferentes dispositivos y tamaños de pantalla, asegurando una experiencia óptima tanto en computadoras de escritorio como en dispositivos móviles.
  
- **Interactividad:** He implementado elementos interactivos y animaciones suaves para mejorar la experiencia del usuario.
    - Pantalla de carga para una mejor experiencia de usuario. 
    - Formulario para ingresar un lugar de forma manual en caso de que el usuario no de la autorización para ver su ubicación. 
    - Fondo dinámico según la condición del clima.
    - Formulario para hacer búsqueda de otras ciudades o países por su nombre. 
    - Botón para obtener el clima según la ubicación del usuario.
    - Toggle para cambiar la temperatura de Celsius a Kelvin.

- **Tecnologías utilizadas:**
    - <img src="https://img.icons8.com/color/32/000000/html-5--v1.png"/> HTML5 (Con estructura semántica y buenas practicas de accesibilidad)
    - <img src="https://img.icons8.com/color/32/000000/css3.png"/> CSS3 (Con Flexbox y Grid para diseño responsivo)
    - <img src="https://img.icons8.com/color/32/000000/javascript--v1.png"/>Javascript (Como lenguaje de programación del proyecto)
    - <img src="https://img.icons8.com/color/32/000000/react-native.png"/> React (Para añadir funcionalidad e interactividad)



## Ejecución local

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:** Ejecuta el siguiente comando en tu terminal para clonar este repositorio en tu máquina local:
```
git clone https://github.com/tonatiujsanchez/weather-app.git
```

2. **Ingresa las variables de entorno:** Modifica en archivo .env.template a .env y llena las variables correspondientes:
```
VITE_OPEN_WEATHER_API_KEY=
```

3. **Installa la dependencias:** Navega hasta la carpeta del proyecto clonado y ejecuta el siguiente comando para instalar los node_modules:
```
npm install
```

4. **Corre el proyecto:** Ejecuta el siguiente comando para correr el proyecto de modo desarrollo:
```
npm run dev
```

5. **Explora:** ¡Explora el pronóstico del tiempo de lugares que elijas con fondos dinámicos!

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un __issue__ para discutir nuevas características o problemas, o enviar un __pull request__ con tus mejoras propuestas.


## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en https://tsx-dev.netlify.app/#contacto.

¡Gracias por visitar este proyecto! Espero que disfrutes explorando mi trabajo. 🤗
