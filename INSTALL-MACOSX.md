## How to install on Mac OX 10.9.x


#### Install the Mac command line tools:

````
xcode-select --install
````

#### Install thoughtbot Laptop Tools

````
curl --remote-name https://raw.githubusercontent.com/thoughtbot/laptop/master/mac
sh mac 2>&1 | tee ~/laptop.log
````

#### Get thoughtbot dotFiles

````
cd ~
git clone git://github.com/thoughtbot/dotfiles.git
env RCRC=$HOME/dotfiles/rcrc rcup
````

#### Clone the Repo

````
git clone git@github.com:projectjellyfish/ux.git
````

#### Install sass gem (ruby)

```
cd ~
gem install sass
```

#### Install bower

```
npm install -g bower
```

#### Install gulp

```
npm install -g gulp
```

#### Install project dependencies

```
cd ux
npm install
gulp production
```

#### Start node

```
node app.js
```

## Misc Notes

Default port/host is http://localhost:5000

#### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 5000)
* process.env.API_BASE_PATH -- Jellyfish API Base Path (optional, defaults to http://localhost:3000);


#### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products_admin_controller.js