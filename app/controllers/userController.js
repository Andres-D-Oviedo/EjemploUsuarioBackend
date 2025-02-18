 let UsersService = require("../services/usersService");
 
 class UserController{
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UsersService.obtenerU();
            res.json(users);
        } catch (e) {
            res.json({error: "error en la petición"});
    }
    }


    static async login(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
       static async register(req, res) {
        try {
            let {nombre, correo, contrasena} = req.body;
            let user = await UsersService.crearUsuarios(nombre, correo, contrasena)
            res.json(user);
            //let user = await UsersService.crearUsuarios(req.body)
        } catch (e) {
            res.json({error: "error en la peticion de la peticion"});
    }
    }
       static async eliminarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
         static async actualizarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
}
module.exports = UserController;