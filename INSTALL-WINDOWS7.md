## How to install on Windows 7

#### Clone the Repo

	git clone git@github.com:projectjellyfish/ux.git

#### Install Ruby

Download the installer from this [link](http://rubyinstaller.org/).

#### Install Node.JS

Download the installer from this [link](http://nodejs.org/).

#### Install sass gem (ruby)

	cd ~
	gem install sass

#### Install bower

	npm install -g bower

#### Install gulp

	npm install -g gulp

#### Install project dependencies

	cd ux
	npm install
	gulp production

#### Start node

	node app.js

## Misc Notes

Default port/host is http://localhost:5000

#### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 5000)
* process.env.API\_BASE\_PATH -- Jellyfish API Base Path (optional, defaults to http://localhost:3000)


#### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products\_admin\_controller.js

#### Possible Issue installing sass gem

If there is a "certificate verify failed" error, try this [StackOverflow](http://stackoverflow.com/questions/27262582/i-get-certificate-verify-failed-on-installing-bundler-for-ruby-on-rails-on-wi).