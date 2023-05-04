const express = require('express');

const {
  handleGetAllData,
  handleGetByIdData,
  handleDeleteData,
  handleCreateData,
  handleUpdateData,
} = require('./controller')

const app = express();

// Middleware -> Función que se ejecuta antes de que llegue a la ruta -> Body parser
app.use(express.json())


// RUTAS
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

// GET -> /users
app.get('/api/users', handleGetAllData)

// GET -> /users/10
app.get('/api/users/:id', handleGetByIdData)

// POST -> /users
app.post('/api/users', handleCreateData)

// patch -> /users/10
app.patch('/api/users/:id', handleUpdateData)

// DELETE -> /users/10
app.delete('/api/users/:id', handleDeleteData)


const port = 8080
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
