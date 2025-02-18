//const User = require("../../models/user");
const {User} = require("../../models");
class UsersService{
    static async obtenerU() {
        try {
            let users = await User.findAll();
            return users;
        }
          catch(e){      
        }
      }

    static async crearUsuarios(nombre, correo, contrasena){
        return await User.create({nombre, correo, contrasena});
    }

  }

module.exports = UsersService;