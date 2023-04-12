## Getting Started

## Architecture

### Clean Architecture

En *Clean Architecture*, un proyecto se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.

Se basa en que la capa de dominio (Models/State) no dependa de ninguna capa exterior. 
La de aplicación sólo depende de la de dominio y el resto (normalmente presentación y acceso a datos) depende de la capa de aplicación. 
Esto se logra con la implementación de interfaces que luego tendrán que implementar las capas externas mediante la inyección de dependencias.

El siguiente diagrama representa la adaptación hecha de Clean Architecture para un proyecto Frontend basado en Typescrit y React

![CleanArchitectureReact](https://user-images.githubusercontent.com/32858351/173492130-2400f1b6-0262-4214-86c8-2733a5219f57.svg)


### Layers

- **Servicios Externos:** es la capa que contiene los servicios que conectan el dominio con el mundo exterior (capas exteriores). Aquí se definen los contratos, interfaces destinados a consumir los servicios externos.

    - **services**: todos aquellos lugares donde vamos a estar llamando para buscar la información


- **Adaptadores:** es la capa de estandarización datos. Implementa interfaces definida en la capa de Servicios Externos y estandariza los responses de los servicios externos buscando llevar a la aplicación la menor cantidad errores humanos.

    - **adapters**: estandarizar en base al modelo y el endpoint de momento. Reciben informacion y la devuelven.
    - **interceptors**: se busca en base a los adapters adaptar lo que enviamos y lo que recibimos (usalmente se utiliza axios como estandar)


- **Componentes:** Aqui se define toda la logica de negocio, mediante los components como tal, los hooks, utilities entre otros...

    - **components**: logica de negocio / componentes estilizados
    - **hooks**: pueden encontrarse los custom hooks que sean reutilizables en un segmento o toda la aplicación, para controlar su ciclo de vida.
    - **routes**: hace referencia a definir las rutas de la aplicación y sus conexiones
    - **utilities**: porciones de logica reutilizables en la aplicacion
    - **assets**: estilos, fonts, recursos graficos, entre otros.


- **Models/State:** es el corazon de la aplicación y tiene que estar totalmente aislada de cualquier dependencia ajena a la lógica o los datos de negocio. Puede contener entidades, value objects, eventos y servicios del dominio. Representan el state y el state en sí.

    - **types/interfaces/models**: dar la representacion de nuestras entidades, y estandarizar un contrato sobre lo que se utilizara.
    - **context**: cualquier recurso que se necesite para manejar el state dentro de un alcance definido y que no sera necesario en toda la aplicación en todo momento.
    - **redux**: información que se necesita en toda la aplicación en todo momento. 

### Patrones y metodologías utilizadas:


*  **Axios**: Para el consumo de servicios en la capa de Servicios Externos

*  **Pruebas unitarias**: Se debe utilizar jest asi como react-testing-library