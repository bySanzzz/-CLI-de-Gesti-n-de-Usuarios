import { db } from "./config.js"

//En vez de darle toda mi BD a el usuario le consulto por cual Id esta buscando para mandarselo, con la idea de que si tenemos millones de usuarios no poner todos

const getUsers = async (id) => {
  const q = `SELECT * FROM users WHERE id = ?;`
  const [response] = await db.query(q, [id])
  return response
}
//Aun asi, mantengo mi GetUsers pero con la idea de utilizarlo en tablas pequeñas
const getUsersAll = async () => {
  const q = `SELECT * FROM users`
  const [response] = await db.query(q)
  return response
}

const createUser = async (username, email, password) => {
  

  if (!username || !email || !password ) {
    return "Data invalida, necesitas enviar username, email y password para registrar un usuario."
  }

  //Modifico la condicion, en donde mi correo debete contener un @ y terminar con ".com (permitiendo utilizar tango gmail, hotmail, entre otros)" 
  if (!email.includes("@") || !email.endsWith(".com")) {
    return "El correo electrónico esta incompleto"
  }
  // Anchura minima de contraseña tiene que ser minimo de 6 caracteres
  if (password.length <= 5){
    return "Necesitas que tu contraseña tenga al menos 6 caracteres"
  }

  const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`

  const [response] = await db.query(q, [crypto.randomUUID(), username, email, password])


  //Cant.  de filas modificadas o afectadas, si es igual a 1 indica que se logro
  if (response.affectedRows === 1) {
    return "Usuario creado con éxito."
  }
}

const updateUser = async (id, updates) => {
  
  const { username, email, password } = updates;
  
  if (!id) {
    return "ID requerido"
  }
  //Modifico la condicion, en donde mi correo debete contener un @ y terminar con ".com (permitiendo utilizar tango gmail, hotmail, entre otros)" 
  if (!email.includes("@") || !email.endsWith(".com")) {
    return "El correo electrónico esta incompleto"
  }
  // Anchura minima de contraseña tiene que ser minimo de 6 caracteres
  if (password.length <= 5){
    return "Necesitas que tu contraseña tenga al menos 6 caracteres"
  }

  const q = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`
  
  const [response] = await db.query(q, [username, email, password, id])

  return "Usuario actualizado exitosamente";
}

const deleteUser = async (id) => {
  const q = `DELETE from users WHERE id = ?;`
  const [response] = await db.query(q, [id]);

  
  //Cant.  de filas modificadas o afectadas, si es igual a 1 indica que se logro, sino indica que no se encontro usuario
  if (response.affectedRows === 1) {
    return "Usuario/s eliminado/s"
  } else {
    return "No se encontro el Usuario con el ID ingresado"
  }
}

export { getUsers, createUser, updateUser, deleteUser, getUsersAll }