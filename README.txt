=======================================================================================================================
Autor: FRANCISCO JAVIER GUTIERREZ REPISO
Proyecto: Genially_Cypress
Fecha: 11/11/2021
=======================================================================================================================

He diseñado 4 casos de prueba de regresión en los que explico en la siguiente lista:

  - 1 - Login - Realiza login con datos incorrectos y posteriormente el correcto.
  - 2 - Planes - Comprueba que aparece los tipos de planes con el botón para solicitarlo correctamente.
  - 3 - Idiomas - Cambia de idiomas en el desplegable y comprueba que se aplica el cambio.
  - 4 - Registro - Realiza un registro con email comprobando incorrectos hasta llegar a pantalla de selección de modalidad.

(*) Los diseños de los casos de prueba los he redactado en un fichero Excel dentro de la raiz llamado Diseños_test.xlsx

(*) He considerado que son apropiados por que quiero mostrar los flujos en los que el propio usuario interactuaría con más
    frecuencia al navegar a la web de primeras (como son el registro, login y la solicitud de planes).

(!!) Para ejecutar los tests hay que ejecutar el siguiente comando desde el terminal, dentro de la carpeta "Genially_Cypress":

  npm run cy:run:chrome 

(!!) En uno de los casos, concretamente en el de registro a veces me falla durante la ejecución, he pensado que podría ser 
     por los tiempos de ejecución entre paso y paso. Para validar que el test me ha funcionado lo he ejecutado desde el visor de cypress 
     con el siguiente comando en el terminal, seleccionando posteriormente el caso a ejecutar (registro.spec.js):

  npm run cy:open

(!!) He deshabilitado la salida en formato video ya que me mostraba un error a la hora de comprimirlo.



