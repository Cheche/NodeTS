# BASIC

- Basic Server using NodeJS, TypeScript and MySql.

- Docker has config for create a container with MySql and NodeJs server.

# Instructions

You have a npm scrip for Build the TS files to JS files and prepare public folders.

- build: Transpile TypeScript and copy Public folder
- copyfiles: copy Public folder
- dev: execute nodoemon (installed on docker), prepare debugger and restart automatic server when files changes.
- start: execute node server 


## RUN 

You need run ```npm install```. Then you need run ```npm run build```

## Note

This docker are for developer propouse. Don't use them for Production enviroments.


## Docker Notes

- exec a shell on this docker: ```docker exec -it nodeTS-app sh --color=auto```

- Install new dependencies from inside the container.
- Build the project from inside the container.
- If you erase the dist folder, you need to rebuild.
- If you erase the node_modules folder, this delete reference on container. You need reinstall dependencies with ```npm install`` inside the container.
  
