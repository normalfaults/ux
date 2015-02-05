## Local Setup Procedures (for Mac OS X Mavericks)

####Step 1: Install the Mac command line tools:

````
xcode-select --install
````

####Step 2: Install homebrew

````
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
````

####Step 3: Run brew doctor
This will make sure that all is good

````
brew doctor
````

####Step 4: Install Node Package Manager.

```
brew install npm
```

####Step 5: Install npm dependencies

```
sudo npm install`
```

####Step 6: Install gulp

```
sudo npm install -g gulp
```

####Step 7: Build application

```
gulp production
```

####Step 8: Start node

```
node app
```

Default port/host is http://localhost:5000

### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 300)
* process.env.API_BASE_PATH -- Core API Base Path (optional, defaults to http://localhost:3000);


### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products_admin_controller.js