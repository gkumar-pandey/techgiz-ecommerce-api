import express from 'express';
const app = express.Router();

/**
 * default routes
 */
app.get('/', (req, res) => {
  return res.send('Private Route');
});

/**
 * users routes
 */
app.get('/users', (req, res) => {
  return res.send('Private Route For Get all Users');
})
app.patch('/users/:id', (req, res) => {
  return res.send('Private Route For Update User');
})

export default app;
