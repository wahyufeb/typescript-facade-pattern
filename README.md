## Setup

### Install all dependencies

---

#### NPM
```bash
npm install
```

### Create a schema of Prisma
```bash 
npx prisma init
```

To connect your database, 
you need to set the url field of the datasource in your Prisma schema 
to your database connection URL and set <b>DATABASE_URL</b> in .env file


### Create a table & using Prisma Migrate
To create the tables in your database, add following Prisma data model
to your Prisma schema in prisma/schema.prisma

To migrate a table using Prisma Migrate
```bash 
npx prisma migrate dev --name init
```

### Start Project
```bash 
npm start
```

### Todo List
- [X] Install dependencies
- [X] Create schema.prisma
- [X] Create migrations
- [X] Migrate schema
- [X] Create connections
- [X] Create repository pattern 
- [X] Create CRUD
- [X] Using Camel Case code style
