// Express App Setup
import express from 'express'
import ProductosRoutes from './routes/Productos.routes.js'
import DestinosRoutes from './routes/DestinosExportacion.routes.js'
import IndexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());

app.use(IndexRoutes);


app.use('/api',ProductosRoutes);

app.use('/api',DestinosRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ruta no Encontrada'
  })
})

app.listen(5000, (err) => {
  console.log("Listening");
});


