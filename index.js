import { getUsers, createUser, updateUser, deleteUser, getUsersAll } from "./controllers.js"


const argv = process.argv
const params = argv.slice(2)
const operacion = params[0]

//Tabla de comandos
const mensaje = `
╔══════════════════════════════════════════════╗
║        CLI Gestión de Usuarios               ║
╠══════════════════════════════════════════════╣
║                                              ║
║ Comandos disponibles:                        ║
║                                              ║
║  add <username> <email> <password>           ║
║  get <id>                                    ║
║  getAll                                      ║
║  update <username> <email> <password> <id>   ║
║  delete <id>                                 ║
║                                              ║
╚══════════════════════════════════════════════╝
`
let resultado


//operaciones del Cli
switch (operacion) {
  case "get":
    resultado = await getUsers(params[1])
    break
  case "getAll":
    resultado = await getUsersAll()
    break
  case "add":
    resultado = await createUser(params[1], params[2], params[3])
    break
  case "update":
    const updates = { username: params[1], email: params[2], password: params[3] }
    resultado = await updateUser(params[4], updates)
    break
  case "delete":
    resultado = await deleteUser(params[1])
    break
  default:
    resultado = "Operación invalida."
    console.log(mensaje)
}

const main = () => {
  console.log(resultado)
}

main()