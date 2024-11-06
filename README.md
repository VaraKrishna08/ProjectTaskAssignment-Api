# Project Task Assignment API

This project is a Node.js API built with Express and MongoDB for managing project task assignments. It exposes a set of RESTful endpoints to handle CRUD operations for tasks. The API can be consumed by frontend applications built with Angular or React.

## Code Overview

- **Dependencies**:
  - `express`: Handles the server and routing.
  - `mongoose`: Connects to MongoDB and provides a schema-based solution to model application data.
  - `cors`: Allows cross-origin requests, enabling the API to be accessed by frontend applications on different domains.
  - `body-parser`: Parses incoming request bodies for easier access to form data.

- **Database Model**:
  - `Project_task`: A Mongoose model representing a task assignment. It includes fields for `AssignmentId`, `ProjectId`, `AssignedTo`, `TaskDescription`, and `Deadline`.

- **Routes**:
  - `GET /getall`: Fetches all project task assignments.
  - `GET /getbyid/:id`: Fetches a specific task assignment by `AssignmentId`.
  - `POST /insert`: Inserts a new task assignment. Expects `AssignmentId`, `ProjectId`, `AssignedTo`, `TaskDescription`, and `Deadline` in the request body.
  - `PUT /update/:id`: Updates an existing task assignment by `AssignmentId` with new values for `AssignedTo`, `TaskDescription`, and `Deadline`.
  - `DELETE /delete/:id`: Deletes a task assignment by `AssignmentId`.

## Features

- **CRUD Operations**: Create, read, update, and delete project task assignments.
- **Angular & React Integration**: This API can be consumed by Angular or React frontends to manage project tasks effectively.
- **Data Validation**: Ensures required fields are provided for task creation and updates.
- **Easy Expansion**: New fields or routes can be easily added to extend functionality.
- **Cross-Origin Support**: CORS-enabled, allowing secure interaction with various frontend frameworks.
