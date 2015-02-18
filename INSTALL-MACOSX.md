## How to install on Mac OX 10.9.x


#### Install the Mac command line tools:

````
xcode-select --install
````

#### Install ThoughtBot Laptop Tools

````
curl --remote-name https://raw.githubusercontent.com/thoughtbot/laptop/master/mac
sh mac 2>&1 | tee ~/laptop.log
````

#### Install npm dependencies

```
npm install
```

#### Install bower

```
npm install -g bower
```

#### Install gulp

```
npm install -g gulp
```

#### Build application

```
gulp production
```

#### Start node

```
node app
```

Default port/host is http://localhost:5000

### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 3000)
* process.env.API_BASE_PATH -- Core API Base Path (optional, defaults to http://localhost:3000);


### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products_admin_controller.js