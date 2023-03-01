import {pool} from "../db.js"

export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from T_Producto where ID_Producto=?', [req.params.id]);
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'No se encuentra Producto'
        })
        
        res.json(rows[0]); 
    } catch (error) {
        res.json({error});
    }


};

export const getProductos = async (req, res) => {
    const [rows] = await pool.query('select * from T_Producto');
    res.send([rows]); 
};

export const createProductos = async (req, res) => {
    
    try{
    const {nombre, precio} = req.body;
    const [rows] = await pool.query('insert into T_Producto(Nombre,Precio_Unitario) values(?, ?)', [nombre, precio]);
    
    res.send({
        id: rows.insertId,
        nombre,
        precio
        }); 

    } catch (error) {
        res.json({error});
    }
        
};

export const updateProductos = async (req, res) => {
    
    try{
    const {id} = req.params;
    const {nombre, precio} = req.body;

    const [rows] = await pool.query('update T_Producto set Nombre= IFNULL(?, Nombre), Precio_Unitario=IFNULL(?, Precio_Unitario) where ID_Producto=?', [nombre,precio, id]);
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: 'No se encuentra Producto'
    })

    const [result] = await pool.query('select * from T_Producto where ID_Producto=?', [id])
    res.json(result[0]); 

} catch (error) {
    res.json({error});
}
}

export const deleteProductos = async (req, res) => {

    try{
    const [rows] = await pool.query('delete from T_Producto where ID_Producto=?', [req.params.id]);
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: 'No se encuentra Producto'
    })
    res.sendStatus(204);

} catch (error) {
    res.json({error});
}
}