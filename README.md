# Intern Management System

A console-based Intern Management System built using Core JavaScript (ES6+). This project demonstrates JavaScript fundamentals, including arrays, objects, functions, loops, array methods, and input validation.

## Features

The application supports the following operations:

1. **Add Intern:** Add a new intern with ID, name, email, department, and performance score.
2. **Search Intern:** Find an intern using their unique ID.
3. **Filter by Department:** Retrieve interns belonging to a specific department.
4. **Update Performance Score:** Update an intern's performance score using their ID.
5. **Calculate Average Score:** Calculate the average performance score of all interns.

## Project Structure

```text
Intern-management-system/
│
├── data/
│   └── interns.js
│
├── utils/
│   └── validation.js
│
├── script.js
│
├── package.json
│
└── README.md
```

## Technologies Used

- JavaScript (ES6+)
- Node.js
- ES Modules

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/shishir-lgtm/Intern-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Intern-management-system
   ```

3. Run the application:

   ```bash
   node script.js
   ```

## Validation

The application includes separate validation functions to ensure data consistency:

- `isValidId()` – Validates intern IDs.
- `isValidScore()` – Validates performance scores.
- `isValidDepartment()` – Validates department names.
- `validateInternDetails()` – Validates the required details when adding an intern.

## Screen Recording

[Watch the project demonstration]
https://drive.google.com/file/d/18TozZvYcTyodBjqJ-tyKekEW6DcEIf76/view?usp=drivesdk

## Author

Shishir Dubey
