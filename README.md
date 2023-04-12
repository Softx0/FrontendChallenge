## Getting Started

## Architecture

### Clean Architecture

In *Clean Architecture*, a project is divided into responsibilities and usually each of these responsibilities is represented in the form of a layer.

It is based on the fact that the domain layer (Models/State) does not depend on any outer layer.
The application layer only depends on the domain layer and the rest (usually presentation and data access) depends on the application layer.
This is accomplished by implementing interfaces that the outer layers will then have to implement through dependency injection.

The following diagram represents the adaptation made of Clean Architecture for a Frontend project based on Typescript and React.

![CleanArchitectureReact](https://user-images.githubusercontent.com/32858351/173492130-2400f1b6-0262-4214-86c8-2733a5219f57.svg)


### Layers

- **External services:** It is the layer that contains the services that connect the domain with the outside world (outer layers). Here the contracts are defined, interfaces destined to consume the external services.

    - **services**: all those places where we are going to be calling to look for the information


- **Adapters:** is the data standardization layer. It implements interfaces defined in the External Services layer and standardizes the responses of external services, seeking to bring the least amount of human errors to the application.

    - **adapters**: standardize based on the model and the endpoint at the moment. They receive information and return it.
    - **interceptors**: It is searched based on the adapters to adapt what we send and what we receive (usually axios is used as standard).


- **Components:** Here all the business logic is defined, through the components as such, the hooks, utilities among others...

    - **components**: business logic / stylized components
    - **hooks**: custom hooks that are reusable in a segment or the entire application can be found to control their life cycle.
    - **routes**: refers to defining the routes of the application and its connections
    - **utilities**: reusable portions of logic in the application
    - **assets**: styles, fonts, graphic resources, among others.


- **Models/State:** It is the heart of the application and has to be completely isolated from any dependencies other than business logic or data. It can contain entities, value objects, events and domain services. They represent the state and the state itself.

    - **types/interfaces/models**: give the representation of our entities, and standardize a contract on what will be used.
    - **context**: any resource that is needed to handle the state within a defined scope and that will not be needed throughout the application at all times.
    - **redux**: information that is needed throughout the application at all times.
