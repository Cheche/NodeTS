# BASIC

- Basic Server using NodeJS, TypeScript and MySql.

- Docker has config for creating a container with MySql and NodeJs server.

# Instructions

You have an npm script for Build the TS files to JS files and prepare public folders.

- **build**: Transpile TypeScript and copy Public folder
- **copyfiles**: copy Public folder
- **dev**: execute nodemon (installed on docker), prepare debugger and restart automatic server when the files changes.
- **start**: execute node server 


## RUN 

You need to run ```npm install```. Then you need run ```npm run build```.

## Note

This docker is for the developer's propose. Don't use them for Production environments.

This project no populate the database, you need to create and populate the database.


## Docker Notes

- exec a shell on this docker: ```docker exec -it nodeTS-app sh --color=auto```

- Install new dependencies from inside the container.
- Build the project from inside the container.
- If you erase the *dist* folder, you need to rebuild it.
- If you erase the *node_modules*  folder, this deletes the reference on the container. You need reinstall dependencies with ```npm install`` inside of the container.
  

## Routes

On run this project you have two **routes** for visit. 

- [GET] localhost:3000/heroes
- [GET] localhost:3000/heroes/:id

## Response

If the database exists and the database has the table *heroes* populated with data.When you run a *GET request* you will have an response like the following:

```javascript
{
    ok: true,
    heroes: [ ... Array of heroes ... ]
}
```

Otherwise, you will have an error like the following.

```javascript
{
    ok: false,
    error: {
        code: "ER_NO_SUCH_TABLE",
        errno: 1146,
        sqlMessage: "Table 'database.heroes' doesn't exist",
        sqlState: "42S02",
        index: 0,
        sql: " SELECT * FROM heroes "
    }
}
```