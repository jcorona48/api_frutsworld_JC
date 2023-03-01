import {Router} from 'express'
import {getDestinosExportacion, createDestinosExportacion, updateDestinosExportacion, deleteDestinosExportacion, getDestinoExportacion} from '../controllers/DestinosExportacion.controller.js'

const router = Router()

router.get("/DestinosExportacion", getDestinosExportacion);

router.get("/DestinosExportacion/:id", getDestinoExportacion);

router.post("/DestinosExportacion", createDestinosExportacion);

router.patch("/DestinosExportacion/:id", updateDestinosExportacion);

router.delete("/DestinosExportacion/:id", deleteDestinosExportacion);

export default router;