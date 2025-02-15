# API de Noticias con Node.js y Express

Este proyecto es una API desarrollada con Node.js y Express que permite buscar y listar noticias utilizando [NewsAPI](https://newsapi.org/).

## Características
- Obtener una lista de fuentes de noticias.
- Consultar las principales noticias del momento (top headlines) con filtros como país, categoría o fuente.
- Buscar noticias con base en una palabra clave.
- Respuestas en formato JSON.

## Configuracion
- Para correr este proyecto es necesario usar el comando npm run dev
- En el archivo .env se debe de poner una variable API_KEY con el api key de NewsAPI, ademas de SOURCE con la ruta a NewsAPI, es decir: https://newsapi.org/v2