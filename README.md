##jellyfish-ux
============

[![Code Climate](https://codeclimate.com/repos/54d4fa726956803255002db9/badges/38731195832f7b398c44/gpa.svg)](https://codeclimate.com/repos/54d4fa726956803255002db9/feed)
[![Test Coverage](https://codeclimate.com/repos/54d4fa726956803255002db9/badges/38731195832f7b398c44/coverage.svg)](https://codeclimate.com/repos/54d4fa726956803255002db9/feed)
[![Build Status](https://magnum.travis-ci.com/projectjellyfish/ux.svg?token=hzrJLxrVn5bNaxiZp1bx)](https://magnum.travis-ci.com/projectjellyfish/ux)

Jellyfish-UX is the UI layer of Project Jellyfish.

####Overview

Project Jellyfish is an IT broker system.  It allows admins to create a product catalog of any type of service (IaaS,
TaaS, PaaS, or even Staff) and allows them to be assigned a cost, and then users can create projects and add those
services to a project.  Jellyfish current supports IaaS via ManageIQ and Chef.

Project Jellyfish has 2 main components: API and UX.  UX is the HTML5 User Interface for Project Jellyfish.  It is an
AngularJS / NodeJS application that provides an HTML5 front-end to Jellyfish-Core for users to purchase services, and
for admins to add new products and services; and for end-users to sign-up for services.

####Installation

Jellyfish-UX is a Node/ExpressJS application.

Please use the OS specific install guide from below.

- INSTALL-REHL.md - RedHat Linux installation
- INSTALL-MACOSX.md - Mac OS X installation

####Adding product icons

To add new product icons, put the 60x60px images in images/assets/images/products/ then update
/assets/js/app/admin/products/products_admin_controller.js

####License

See LICENSE

Copyright 2015 Booz Allen Hamilton
