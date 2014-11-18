! This directory is skipped by the Gulp linter process.

Stop!

Before placing vendor files here first check if the sources are available
through bower

		bower search <search_term>

Not Found: If it isn't then download the dist or build but non-minified
version and place it here.

Found: Add the package with bower

		bower install <package_name> --save

Next, update package.json to shim the javascript in.