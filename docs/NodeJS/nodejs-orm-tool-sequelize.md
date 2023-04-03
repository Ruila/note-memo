---
title: "[NodeJS] ORM Tool - Sequelize"
---

# [NodeJS] ORM Tool - Sequelize

## Basic usage

```javascript
const sequelizeInstance = new Sequelize({
  database: "url_shortener_db",
  username: "user",
  password: "password",
  host: "postgres",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  },
  define: {
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
})
```

#### -> [see demo here](https://github.com/Ruila/url-shortener-backend)

## Model synchronization

Note that this changes only the table in the database, not the model in the JavaScript side.

+ `User.sync()` - This creates the table if it doesn't exist (and does nothing if it already exists).
+ `User.sync({ force: true })` - This creates the table, **dropping it first if it already existed**.
+ `User.sync({ alter: true })` - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

## Reference

+ @[Sequelize](https://sequelize.org/docs/v6/)
