### install 
npm install

### .env file
## you must create .env file with the following variables:
PORT
MONGO_URI
JWT_SECRET
JWT_LIFETIME

### run app
npm start

### NOTE of backend server:

### ROUTE map:

Default: '/api/v1':
    - Authentication: '/auth':
        + '/register' : POST
        + '/login' : POST
    Example: '/api/v1/auth/register'

    - Product: '/products':
        + '/' : POST, GET
        + '/:id' : GET, DELETE, PATCH

