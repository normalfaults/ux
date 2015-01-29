##jellyfish-ux
============

Jellyfish-UX is the UI layer of Jellyfish.  It provides an HTML5 front-end to
Jellyfish-Core.

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






### To install on Mac OS X

Step 1: Install homebrew.

* Install dependencies: `sudo npm install` 
* Build application: `gulp production`
* Run application: `node app`

Default port/host is http://localhost:5000

### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 300)
* process.env.API_BASE_PATH -- Core API Base Path (optional, defaults to http://localhost:3000);


### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products_admin_controller.js