jellyfish-ux
============

To install. 

* Install dependencies: `sudo npm install` 
* Build application: `gulp production`
* Run application: `node app`

Default port/host is http://localhost:5000

Note: Requires custom buildpack (to do both Ruby and NodeJS)

heroku config:add BUILDPACK_URL=https://github.com/bwhmather/heroku-buildpack-compose.git
