# Prisma 101 - Ultimate Guide

A TypeScript-based project demonstrating how to use Prisma ORM with a simple setup.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Database Migration](#database-migration)
- [File Structure](#file-structure)
- [Example Code](#example-code)
- [License](#license)

## Project Overview

This project provides a starting template to work with Prisma ORM in TypeScript.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- A database supported by Prisma (e.g., PostgreSQL, MySQL, SQLite)

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ostafinskim/prisma-101.git
   cd prisma-101
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Database**:
   Set up your database connection in `prisma/schema.prisma` file.

4. **Generate Prisma Client**:
   Run the following command to generate the Prisma client:
   ```bash
   npx prisma generate
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server with TypeScript Node Dev, automatically restarting upon changes.

### `npm run db:migrate`

Creates and applies a migration for your database schema. Update the migration name (e.g., `user-entity`) in the command if needed.

### `npm run db:push`

Pushes the current Prisma schema to your database, syncing the database schema with your Prisma schema without creating migrations.

## Usage

The server script (`server.ts`) contains sample code to:

- Create a single user
- Create multiple users
- ***more to follow***

Uncomment the appropriate lines in `server.ts` to test creating users with the Prisma client.

## Example Code

### Single User Creation

To create a single user, uncomment the following block in `server.ts`:

```typescript
const user = await prisma.user.create({
    data: {
        name: 'User 101',
        email: 'user101@gmail.com',
    }
});
console.log(JSON.stringify(user, null, 2));
```

### Multiple User Creation

To create multiple users, uncomment the following block in `server.ts`:

```typescript
const users = await prisma.user.createMany({
    data: [
        { name: 'User 102', email: 'user102@gmail.com' },
        { name: 'User 103', email: 'user103@gmail.com' },
        { name: 'User 104', email: 'user104@gmail.com' },
    ]
});
console.log(JSON.stringify(users, null, 2));
```

### Running the Script

Execute the following command to start the server:

```bash
npm start
```

## Database Migration

To create a migration:

1. Run `npm run db:migrate` to create and apply migrations.
2. Use `npm run db:push` to sync your schema without creating a new migration file.

## License

This project is licensed under the MIT License.
