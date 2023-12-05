# Foundesk ... Escala tu potencial

Este proyecto presenta un nuevo servicio de skills para emprendedores y fundadores de empresa, especialmente para quienes se inician como founders. Está desarrollado integramente con el stack MERN, esto es, Mongo como sistema de base de datos (específicamente se está usando Mongo DB Atlas en su version gratuita por ahora), Express para la API que está alojado en Render, React como lenguaje de programación y código, y Node como framework de desarrollo.

A continuación se indican las URL directas tanto para el web (aplicativo) como para la API alojado en render: 

- [Aplicativo](https://cristianibanezvillarroel.github.io/foundesk/)
- [API en render](https://api-foundesk.onrender.com/v1)

Cuenta con dos ambientes de navegacion:
- Ambiente de presentación de servicios que no exige login
- Ambiente de produccion que sí exige login
- El servicio permite agregar cursos al carro de compras, aún cuando el usuario no está logueado. Sin embargo, cuando el usuario desea acceder al carro de compras, sí se exige login.
- Se utilizó LocalStorage para la carga del carro de compras. Y el hooks useNavigate para redirigir al usuario al carro de compras una vez que llegó al login precedido de los cursos.
- Para la administración de la cantidad total de productos en el carro de compras, se utilizó useContext, como así también para el token de usuario logueado. Para cada uno de estos dos casos se crearon dos context:
- UserContext
- ShoppingContext
Se utilizó también manejo de PropsTypes para la administración de variables en la página de cursos, específicamente para que el selector de categorías de cursos informara categoria y totales al componente padre.
Se utilizó useState en gran parte del aplicativo.
- También es importante mencionar que se crearon dos esquemas de rutas diferenciadas en función de la existencia de token. De ese modo el NavBar en cada caso es distinto. Así por ejemplo, en el caso de estgar logueado y existir token, el NavBar incluye la sección Mi Cuenta.
- Se creo la carpeta de Services para agregar allí las rutas de cada solicitud a la API de render.
- Para la conexión a la API se utilizó .env y se registraron en render las variables de entorno necesarias.
- Utilice finalmente Fetch en vez de Axios para la conexión por un tema de CORS. Me resultó posible aprobar con política de CORS utilizando fetch, y con eso seguí adelante.
Procedí a utilizar .json para poder trabajar la data al interior del código.
- En la composición de los distintos arreglos utilizados dentro del código, es importante mencionar lo siguiente:
- Se utilizó .map para la generación de arreglos con el detalle de todos los cursos.
- Se utilizó .filter para la generación de arreglos con el detalle específico de cursos pertencientes a una determinada categoría y también en el proceso de remove del item en el localstorage.
- Se utilizó .reduce para la sumarización del total del carro de compra, utilizando también contexto del shopping cart.
- Se utilizó Intl.NumberFormat nativa de Javascript para el trabajo del formato con separador de miles.
- Se utilizó la función Object.entries(data).forEach(([key, value])) con la finalidad de entrar al objeto en un sector preciso y desde allí construir un arreglo de datos.
- Se utilió .slice para la paginación.
- Se utilizó el recurso Modal y Badge de react para mejorar la experiencia visual del usuario.
- Se incorporaron validaciones varias tanto en la solicitud de Agendamiento de la demo, la creación de usuarios, el login, y la agregación de cursos al carro de compras. Así por ejemplo, un usuario no puede solicitar dos veces un agendamiento, ni tampoco puede cargar dos veces el mismo curso al carro de compras. Si registra mal la clave al intentar loguearse, el sistema se lo informará. Si no está creado el usuario, el sistema también le dirá.
- Se incoporaron validaciones de token para las páginas en producción, de modo de que si el usuario intenta acceder a ellas, el sistema se lo informa a través de un Modal y lo lleva al login, tras lo cual, el sistema lo redirecciona, mediante el uso de Navigate, a la página donde deseo ingresar, como por ejemplo, al carro de compras.
- Se utilizaron un sinnúmero de recursos de react bootstrap para este proyecto, tales como Carousel, Accordion, Button, Cards, Modal, Badge, por nombrar algunas.
- Las imagenes se administraron en la carpeta Public y para ciertos casos se utilizó la figura de Import con ellas.

Este proyecto se ha creado con la intención de llevarlo a producción real dentro de 2024.
Les saluda,
Cristian Ibañez Villarroel.
