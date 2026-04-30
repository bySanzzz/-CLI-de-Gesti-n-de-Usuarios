# 📦 CLI Gestión de Usuarios

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en Node.js para gestionar usuarios en una base de datos. Permite crear, obtener, actualizar y eliminar usuarios.

---

## 🛠️ Configuración

Ejecutá las siguientes consultas en tu gestor de base de datos:

```sql
USE gestorUsers;

CREATE TABLE users (
    id VARCHAR(40),
    username VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40)
);

INSERT INTO users (id, username, email, password) VALUES
('1', 'juan123', 'juan@gmail.com', '123456'),
('2', 'maria_dev', 'maria@gmail.com', 'abc123'),
('3', 'carlos99', 'carlos@gmail.com', 'pass789'),
('4', 'ana_code', 'ana@gmail.com', 'qwerty'),
('5', 'luis_pro', 'luis@gmail.com', 'luis123');
```

---

## ▶️ Cómo ejecutar

El proyecto se ejecuta desde la terminal usando Node:

```bash
node index.js <comando> [parámetros]
```

---

## 📌 Comandos disponibles

### ➕ Crear usuario

```bash
node index.js add <username> <email> <password>
```

Ejemplo:

```bash
node index.js add juan juan@gmail.com 123456
```

---

### 🔍 Obtener usuario por ID

```bash
node index.js get <id>
```

Ejemplo:

```bash
node index.js get 1
```

---

### 📋 Obtener todos los usuarios

```bash
node index.js getAll
```

---

### ✏️ Actualizar usuario

```bash
node index.js update <username> <email> <password> <id>
```

Ejemplo:

```bash
node index.js update juan nuevo@gmail.com 123456 1
```

---

### ❌ Eliminar usuario

```bash
node index.js delete <id>
```

Ejemplo:

```bash
node index.js delete 1
```

---

## ⚠️ Validaciones incluidas

* Todos los campos son obligatorios al crear usuario.
* El email debe contener `@` y terminar en `.com`.
* La contraseña debe tener al menos 6 caracteres.

---

## 🧠 Notas

* Se utiliza `crypto.randomUUID()` para generar IDs únicos.
* Las consultas SQL usan parámetros (`?`) para evitar inyecciones SQL.
* `affectedRows` se usa para verificar si una operación fue exitosa.

---

## 👨‍💻 Autor

Proyecto realizado como práctica de backend con Node.js. Hecho por Santiago Galeano 
