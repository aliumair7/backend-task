### Using this repository to run

In order to run migrations or seeders or even creating the database you have create your .env file in that repository using the format

```text
NODE_ENV=
DATABASE=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
SECRET=
```

#### Install Node MOdules

```
npm install
```

In order to query on database First run all migrations to setup schemas in database

#### Run Migrations

```
npx sequelize-cli db:migrate

```

### Start Server

```
npm start
```
