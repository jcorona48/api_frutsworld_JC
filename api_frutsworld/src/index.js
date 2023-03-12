// Express App Setup
import cors from 'cors'
import express from 'express'
import ProductosRoutes from './routes/Productos.routes.js'
import DestinosRoutes from './routes/DestinosExportacion.routes.js'
import IndexRoutes from './routes/index.routes.js'

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));

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


