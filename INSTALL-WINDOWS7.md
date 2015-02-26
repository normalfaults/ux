## How to install on Windows 7

#### Install Git 

Download the most recent stable version. Try this [link](http://git-scm.com/download/win).

#### Clone the Repo (use Git Bash)

	$ git clone git@github.com:projectjellyfish/ux.git

#### Install Ruby

If the API server is not being hosted locally, then download the latest stable release. If the API server is hosted locally, then install the version required for the API server. You can find the installer at this [link](http://rubyinstaller.org/).

#### Install Node.JS

Download the latest stable version. Try downloading from this [link](http://nodejs.org/).

#### Install sass gem (use Git Bash)

	$ cd ~
	$ gem install sass

#### Install bower (use Git Bash)

	$ npm install -g bower

#### Install gulp (use Git Bash)

	$ npm install -g gulp

#### Install project dependencies (use Git Bash)

	$ cd ux
	$ npm install
	$ gulp production

#### Start node (use Git Bash)

	$ node app.js

## Misc Notes

Default port/host is http://localhost:5000

#### Configuration
* process.env.PORT -- NodeJS server port (optional, defaults to 5000)
* process.env.API_BASE_PATH -- Jellyfish API Base Path (optional, defaults to http://localhost:3000)


#### Adding product icons

Put the 60x60px images in images/assets/images/products/
Update /assets/js/app/admin/products/products_admin_controller.js

#### Possible Issue installing sass gem

If there is a "certificate verify failed" error, try this [StackOverflow](http://stackoverflow.com/questions/27262582/i-get-certificate-verify-failed-on-installing-bundler-for-ruby-on-rails-on-wi).


	-----BEGIN CERTIFICATE-----
	MIIENjCCAx6gAwIBAgIBATANBgkqhkiG9w0BAQUFADBvMQswCQYDVQQGEwJTRTEU
	MBIGA1UEChMLQWRkVHJ1c3QgQUIxJjAkBgNVBAsTHUFkZFRydXN0IEV4dGVybmFs
	IFRUUCBOZXR3b3JrMSIwIAYDVQQDExlBZGRUcnVzdCBFeHRlcm5hbCBDQSBSb290
	MB4XDTAwMDUzMDEwNDgzOFoXDTIwMDUzMDEwNDgzOFowbzELMAkGA1UEBhMCU0Ux
	FDASBgNVBAoTC0FkZFRydXN0IEFCMSYwJAYDVQQLEx1BZGRUcnVzdCBFeHRlcm5h
	bCBUVFAgTmV0d29yazEiMCAGA1UEAxMZQWRkVHJ1c3QgRXh0ZXJuYWwgQ0EgUm9v
	dDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALf3GjPm8gAELTngTlvt
	H7xsD821+iO2zt6bETOXpClMfZOfvUq8k+0DGuOPz+VtUFrWlymUWoCwSXrbLpX9
	uMq/NzgtHj6RQa1wVsfwTz/oMp50ysiQVOnGXw94nZpAPA6sYapeFI+eh6FqUNzX
	mk6vBbOmcZSccbNQYArHE504B4YCqOmoaSYYkKtMsE8jqzpPhNjfzp/haW+710LX
	a0Tkx63ubUFfclpxCDezeWWkWaCUN/cALw3CknLa0Dhy2xSoRcRdKn23tNbE7qzN
	E0S3ySvdQwAl+mG5aWpYIxG3pzOPVnVZ9c0p10a3CitlttNCbxWyuHv77+ldU9U0
	WicCAwEAAaOB3DCB2TAdBgNVHQ4EFgQUrb2YejS0Jvf6xCZU7wO94CTLVBowCwYD
	VR0PBAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wgZkGA1UdIwSBkTCBjoAUrb2YejS0
	Jvf6xCZU7wO94CTLVBqhc6RxMG8xCzAJBgNVBAYTAlNFMRQwEgYDVQQKEwtBZGRU
	cnVzdCBBQjEmMCQGA1UECxMdQWRkVHJ1c3QgRXh0ZXJuYWwgVFRQIE5ldHdvcmsx
	IjAgBgNVBAMTGUFkZFRydXN0IEV4dGVybmFsIENBIFJvb3SCAQEwDQYJKoZIhvcN
	AQEFBQADggEBALCb4IUlwtYj4g+WBpKdQZic2YR5gdkeWxQHIzZlj7DYd7usQWxH
	YINRsPkyPef89iYTx4AWpb9a/IfPeHmJIZriTAcKhjW88t5RxNKWt9x+Tu5w/Rw5
	6wwCURQtjr0W4MHfRnXnJK3s9EK0hZNwEGe6nQY1ShjTK3rMUUKhemPR5ruhxSvC
	Nr4TDea9Y355e6cJDUCrat2PisP29owaQgVR1EX1n6diIWgVIEM8med8vSTYqZEX
	c4g/VhsxOBi0cQ+azcgOno4uG+GMmIPLHzHxREzGBHNJdmAPx/i9F4BrLunMTA5a
	mnkPIAou1Z5jJh5VkpTYghdae9C8x49OhgQ=
	-----END CERTIFICATE-----

* Save this into a file called "AddTrustExternalCARoot-2048.pem".

* Then run `$ gem which rubygems` in Git Bash. This will return the path for a rubygems.rb file; change to the directory holding that file. That is, if it returns "C:\Ruby21\lib\ruby\2.1.0\rubygems.rb", then go to "C:\Ruby21\lib\ruby\2.1.0". From this folder, open the "rubygems" folder. Then open the "ssl_certs" folder. Place your "AddTrustExternalCARoot-2048.pem" file in this folder. 
