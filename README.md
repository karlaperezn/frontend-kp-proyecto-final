#### Aplicación web multi-tenant para crear invitaciones de boda virtuales.
Desarrollada con React en el frontend y Node.js/Express con MongoDB en el backend.

Permite que cualquier usuario registrado cree su propia invitación de boda dentro de la plataforma, configurando los datos principales (nombres de los novios, fecha del evento, hora, ubicaciones y diseño de la invitación), e invitar a otros colaboradores, de momento, para visualizar las respuestas de los invitados en el panel de RSVP.

El flujo de acción del usuario es el siguiente:

1- Se registra e inicia sesión.
2- Crea una invitación de boda web o, en caso de haber una ya existente, la selecciona para editar, ver las respuestas de sus invitados o visualizarla.
3- Visualiza y/o comparte el enlace de la invitación web que obtiene en "Ver invitación", para que los invitados rellenen el formulario de confirmación de asistencia. Estas respuestas las verá en el panel.

4- En el mismo panel puede eliminar la invitación.
5- También puede añadir un colaborador con rol "viewer", y puede eliminar la colaboración haciendo clic en "quitar".
6- En el navbar, al hacer clic en su nombre, accede a los ajustes de cuenta para editar la información de usuario, cerrar sesión o eliminar la cuenta.

### Variable de entorno
db = mongodb://admin:admin123@127.0.0.1:27017

### usuario de prueba
