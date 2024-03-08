const express = require("express")
const path = require("path")

const startServer = (options)=>{
    const {port, public_path = "public"} = options
    const app = express()

    //Middlewares
    app.use(express.static(public_path))

    // Ruta inicial, donde devolvemos nuestro html
    app.get("*", (req, res)=>{
        const indexPath = path.join(__dirname, + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    // Arrancamos nuestra aplicación
    app.listen(port, ()=> {
        console.log(`Escuchando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}