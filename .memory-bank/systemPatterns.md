# System Patterns

The Sascha backend follows a modular architecture pattern, dividing the application into distinct modules such as authentication, user management, and resource handling. Each module encapsulates its own controllers, services, and data models.

The system uses dependency injection extensively, leveraging NestJS's built-in DI container to manage service lifecycles and dependencies.

Error handling is centralized using global exception filters to provide consistent API responses.

Logging is implemented via middleware to capture request and response details for monitoring and debugging.

Security patterns include JWT-based authentication, role-based access control, and input validation using DTOs and pipes.

The project follows a layered architecture separating controllers, services, and repositories for clear responsibility boundaries.
