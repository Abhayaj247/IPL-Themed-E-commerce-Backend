# IPL Themed E-commerce Platform - Backend

Node.js/Express backend for the IPL-themed e-commerce platform, providing API endpoints for user authentication and product management.

## Live API
[https://ipl-themed-e-commerce-backend.onrender.com/api](https://ipl-themed-e-commerce-backend.onrender.com/api)

## Features
- User authentication (Register/Login)
- Automatic team assignment for new users
- Product management (CRUD operations)
- JWT-based authentication
- MongoDB integration

## Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- Zod for validation

## Getting Started

### Prerequisites
- Node.js (>= 14.0.0)
- MongoDB database

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Abhayaj247/IPL-Themed-E-commerce-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### Building for Production
```bash
npm run build
npm start
```

## Environment Variables
- `PORT`: Server port number (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/team/:team` - Get product by team

## Team Assignment Logic
The backend implements a fair team assignment system:

1. When a new user registers:
   - System checks the current distribution of users across teams
   - Assigns the user to the team with the least number of members
   - If multiple teams have the same number of members, randomly selects one
   - Stores the team assignment permanently with the user's data

2. Implementation:
   ```typescript
   // Example team assignment logic
   const teams = ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", ...];
   const assignTeam = async () => {
     const teamCounts = await User.aggregate([
       { $group: { _id: "$team", count: { $sum: 1 } } }
     ]);
     // Assign to team with least members
     // If tied, randomly select from tied teams
   };
   ```

## Deployment
The backend is deployed on Render with automatic deployments from the main branch.

## Repository Links
- Frontend: [\[GitHub Repository URL\]](https://github.com/Abhayaj247/IPL-Themed-E-commerce-Frontend)
- Backend: [\[GitHub Repository URL\]](https://github.com/Abhayaj247/IPL-Themed-E-commerce-Backend)
