import {pool} from "../db.js"

export const getDestinoExportacion = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from T_DestinosExportacion where ID_Destino=?', [req.params.id]);
        if(rows.length <= 0) return res.status(404).json({
            message: 'No se encuentra Destinos Exportacion'
        })
        res.json(rows[0]); 
    } catch (error) {
        res.json({error});
    }


};

export const getDestinosExportacion = async (req, res) => {
    const [rows] = await pool.query('select * from T_DestinosExportacion');
    res.send([rows]); 
};

export const createDestinosExportacion = async (req, res) => {
    
    try{
    const {nombre, precio} = req.body;
    const [rows] = await pool.query('insert into T_DestinosExportacion(Nombre,Precio_Unitario) values(?, ?)', [nombre, precio]);
    
    res.send({
        id: rows.insertId,
        nombre,
        precio
        }); 

    } catch (error) {
        res.json({error});
    }
        
};

export const updateDestinosExportacion = async (req, res) => {
    
    try{
    const {id} = req.params;
    const {nombre, precio} = req.body;

    const [rows] = await pool.query('update T_DestinosExportacion set Nombre= IFNULL(?, Nombre), Precio_Unitario=IFNULL(?, Precio_Unitario) where ID_Destinos=?', [nombre,precio, id]);
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: 'No se encuentra Destinos Exportacion'
    })

    const [result] = await pool.query('select * from T_DestinosExportacion where ID_Destinos=?', [id])
    res.json(result[0]); 

} catch (error) {
    res.json({error});
}
}

export const deleteDestinosExportacion = async (req, res) => {

    try{
    const [rows] = await pool.query('delete from T_DestinosExportacion where ID_Destinos=?', [req.params.id]);
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: 'No se encuentra Destinos Exportacion'
    })
    res.sendStatus(204);

} catch (error) {
    res.json({error});
}
}