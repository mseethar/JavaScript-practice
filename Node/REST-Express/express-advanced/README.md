1. Middleware
> Every route handler function is a middleware function
2. Configuration
3. Debugging
4. Templating engines

> Middlewares to be learnt
1. Helmet
2. Morgan
3. config
4. debug
# Secure headers
> Module: helmet

# Request logging
> Module: morgan

# Configuration
> Module: config

# Debugging
> Module: debug

Setting environment variable

    > $Env:DEBUG = "app:startup,db"    // Windows PowerShell syntax.
    $ export DEBUG=app:startup,db
    $ export DEBUG=app:*,db            // Wildcard matching for debug namespace.
    $ $Env:app_password = "*****"
    $ $Env:NODE_ENV = "production"

# Templating engines
> Modules: PUG, Mustache and EJS

npm i pug

Windows Powershell
    > $Env:PATH += ";C:\Users\mseet\mount\mongodb-win32-x86_64-windows-4.4.5\bin"