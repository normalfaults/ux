##How to install on a RHEL based OS

This guide will walk you through how to install and run Jellyfish-Core on Red Hat Enterprise Linux (or similar, like CentOS).

####Create jellyfish user

````
sudo useradd jellyfish
````

####Change to the jellyfish user

````
su - jellyfish
````

####Install Pre-Requisites

Get the Nginx Package for your RHEL Version (http://nginx.org/en/linux_packages.htm), and install.

````
sudo yum install git
sudo yum install -y gcc-c++ make
sudo yum install ruby rubygems sass
curl -sL https://rpm.nodesource.com/setup | sudo bash -
sudo yum install -y nodejs
sudo rpm -i rpm -i <url to repo file from above page>
sudo yum install nginx
````


####Check out the latest code

````
git clone https://github.com/booz-allen-hamilton/jellyfish-ux.git
````

####Install dependencies

````
cd jellyfish-ux
sudo npm install
sudo npm install gulp -g
sudo npm install forever -g
````

####Run gulp

````
cd jellyfish-ux
gulp production
````

####Set ENV settings

Set API_BASE_PATH to the server:port of your Jellyfish-Core installation

````
cd jellyfish-ux
vi process.env
process.env['API_BASE_PATH'] = 'localhost:3000';
````

####Start UX
````
cd jellyfish-ux
forever start app.js
````

Delete the default site config
````
sudo rm /etc/nginx/conf.d/default.conf
````

Create jellyfish.conf (with the file contents below)
````
sudo vi /etc/nginx/conf.d/jellyfish.conf
````

##### File (update the my_app_url.com)

````
upstream jellyfish_ux {
  server localhost:5000;
}

server {
  listen  80;
  root /home/jellyfish/jellyfish-ux/public;

  location / {
        proxy_pass http://jellyfish_ux;
        proxy_redirect     off;

        proxy_set_header   Host             $host:$proxy_port;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;

        client_max_body_size       10m;
        client_body_buffer_size    128k;

        proxy_connect_timeout      90;
        proxy_send_timeout         90;
        proxy_read_timeout         90;

        proxy_buffer_size          4k;
        proxy_buffers              4 32k;
        proxy_busy_buffers_size    64k;
        proxy_temp_file_write_size 64k;
  }
}
````

Restart Nginx
````
sudo /etc/init.d/nginx restart
````


Copyright 2015 Booz Allen Hamilton
