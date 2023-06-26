Repositorio del curso de Laracast [Learn Vue 3: Step by Step](https://laracasts.com/series/learn-vue-3-step-by-step).

## Simular datos con una API falsa:

### Instalar json-server

```shell
npm install json-server --save-dev
```

Crear fichero `db.json` con datos falsos.

Sin dejar de ejecutar `npx serve`, ejecutar el servidor en otro puerto:

```shell
npx json-server db.json -p 3001
```
> Si se hace un cambio en la base de datos hay que resetar el server.
