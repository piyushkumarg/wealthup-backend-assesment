# Backend for Code Verification System

### [Frontend Repo](https://github.com/piyushkumarg/wealthup-assesment) This is frontend repo for UI Design of Both section of assesment

This backend project serves as the core API for a code verification system. It utilizes Node.js and MongoDB to generate and verify codes with specific conditions.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web application framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Cors**: Middleware for handling Cross-Origin Resource Sharing.
- **Dotenv**: Module for loading environment variables from a .env file.

## API Description

The API serves routes to generate and validate codes based on the specified criteria.

### Routes:

1. **GET /api/codes**: Generates and returns a new code.
2. **POST /api/codes/use**: Verifies if the submitted code is valid.

#### Code Specifications:

- The code can contain both alphabets and numbers (e.g., abc32d, x32Dc, AAd32).
- Code length is typically 5 to 6 characters.
- Each code can only be used once. If reused, it returns an error: `{ error: ‘This code has already been used’ }`.
- Codes expire after 60 seconds. If an expired code is used, it returns an error: `{ error: ‘The code has expired’ }`.
- If an invalid code is entered, it returns an error: `{ error: ‘Enter a valid code’ }`.
- All codes are stored in MongoDB for validation.

## Usage

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file.
4. Start the server using `npm start`.

## API Endpoints

- `/api/codes` (GET): Generates a new code.
- `/api/codes/use` (POST): Validates the entered code.



