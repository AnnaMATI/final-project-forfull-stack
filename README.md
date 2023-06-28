# Frontend e-commerce

## Description

This e-commerce frontend alication project is ready for most basic core tasks like,  login register, admin panel CRUD,home page, new products.

## Features

* User registration and login
* Add neq Praducts
* Design  MUI 
* React Redux/toolkit

### Installing

```
git clone https://github.com/AnnaMATI?tab=repositories
cd .. final-project-forfull-stack
cd .. frontend
npm install
```

## Getting Started

To test the application

* default request port http://localhost:5000/

```
Start the application
    npm start
```

# Backend e-commerce

## Description

This e-commerce backend alication project is ready for most basic core tasks like  CRUD.

## Features

* User registration and login
* Authentication via JWT
* CRUD
* SQLITE database

### Installing

```
git clone https://github.com/AnnaMATI?tab=repositories
cd ..final-project-forfull-stack
cd .. backend 
npm install
```

## Getting Started

To test the application

* Create Sqlite database 
* Create config.json file and add the database data as in the example
```
    {
  "development": {
    "dialect": "sqlite",
    "storage": "./database.db"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory:"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./database.db"
  }
}
```

* Create .env file and add 
    * SECRET = secret(the password with which the token will be issued)


Create the database tables
    npx sequelize-cli db:migrate
Start the application
    npm start
```

## Authors

Contributors names and contact info

ex. anna  matinyan
ex. https://github.com/AnnaMATI