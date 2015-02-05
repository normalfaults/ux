##jellyfish-ux
============

[![Build Status](https://magnum.travis-ci.com/booz-allen-hamilton/jellyfish-ux.svg?token=hzrJLxrVn5bNaxiZp1bx&branch=master)](https://magnum.travis-ci.com/booz-allen-hamilton/jellyfish-ux)

Jellyfish-UX is the UI layer of Jellyfish.

####Overview

Project Jellyfish is an IT broker system.  It allows admins to create a product catalog of any type of service (IaaS,
TaaS, PaaS, or even Staff) and allows them to be assigned a cost, and then users can create projects and add those
services to a project.  Jellyfish current supports IaaS via ManageIQ and Chef.

Project Jellyfish has 3 main components: Jellyfish-Core, Jellyfish-UX, and ManageIQ.  Jellyfish-UX is the HTML5 User
Interface for Project Jellyfish.  It provides an HTML5 front-end to Jellyfish-Core for users to purchase services, and
for admins to add new products and services.

####Installation

Jellyfish-UX is a Node/ExpressJS application.  Please see the appropriate installation guide for specifics for
how to install.

INSTALL-REHL.md - RedHat Linux installation
INSTALL-MACOSX.md - Mac OS X installation

####Adding product icons

To add new product icons, put the 60x60px images in images/assets/images/products/ then update
/assets/js/app/admin/products/products_admin_controller.js

####License

See LICENSE

Copyright 2015 Booz Allen Hamilton
