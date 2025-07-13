# 🍽️ FoodiesBNB MVP

Este proyecto es un MVP básico de **FoodiesBNB**.  
Permite a los usuarios:

- Registrarse y confirmar su correo
- Iniciar sesión
- Listar restaurantes disponibles
- Filtrar restaurantes por **nombre**, **ubicación** y **tipo de cocina**
- Ver calificaciones de cada restaurante

---

## 🚀 Stack utilizado

- **Next.js** – Framework React para frontend y SSR
- **Supabase** – Base de datos y autenticación
- **TailwindCSS** – Framework de estilos
- **Shadcn/ui** – Componentes reutilizables estilizados
- **Arquitectura hexagonal** – Para separación clara entre capas (infra, aplicación, dominio, UI)

---

## 🗂️ Rutas del proyecto

| Ruta             | Descripción                                        |
|------------------|----------------------------------------------------|
| `/`        | Ventana principal de NextJS                        |
| `/signup`        | Registro de nuevos usuarios                        |
| `/confirmation`  | Mensaje de registro exitoso y aviso para verificar email |
| `/login`         | Inicio de sesión                                   |
| `/dashboard`     | Vista principal con el listado de restaurantes     |

---

## 🛠️ Instalación y ejecución local

```bash
git clone https://github.com/will-berth/foodies-mvp.git
cd foodies-mvp
npm install
npm run dev
```

---

## 💡 Decisiones técnicas

- Usé **Supabase** para gestionar autenticación y base de datos, ya que facilita mucho el desarrollo rápido de un MVP y permite desplegarlo de forma pública sin configurar servidores externos.
- Utilicé **Shadcn/ui** porque cuenta con componentes estilizados y reutilizables que permiten construir una interfaz funcional.
- Opté por una **arquitectura hexagonal** para mantener una estructura clara, desacoplar la lógica de negocio de la infraestructura y facilitar la escalabilidad futura.

---

## ⏱️ Si tuviera más tiempo...

- **Dockerizar** el proyecto para facilitar su despliegue y mantener consistencia en distintos entornos.
- Separar el frontend y backend, usando un backend personalizado o utilizando el **Supabase server client** para un mayor control sobre la lógica del servidor.
- Agregar una funcionalidad para que los usuarios puedan **marcar restaurantes como favoritos**.
- Implementar **paginación** y mejorar los filtros de búsqueda.

---

## 🧩 Retos técnicos

- Nunca había utilizado **Supabase** antes de esta prueba. Su sistema de autenticación y gestión de base de datos es muy accesible y permite implementar flujos de registro y verificación de correo de forma muy sencilla.
- Toda la documentación oficial de Supabase es clara y suficiente para implementar estas funcionalidades sin complicaciones.

---

## ✅ Estado del proyecto

✔️ MVP funcional completado y desplegado.  
🔗 [Vercel](https://foodies-mvp.vercel.app/login)
