'use strict';

/**@ngInject*/
function ProductsAdminController(categories, clouds) {
  this.categories = categories;
  this.clouds = clouds;

  // TODO: Where are images stored and retrieved from?
  this.productImages = [
    'products/aws_ec2.png',
    'products/aws_rds.png',
    'products/aws_s3.png',
    'products/redhat.png',
    'products/ubuntu.png',
    'products/jira.png',
    'products/windows.png',
    'products/exchange.png',
    'products/confluence.png',
    'products/php.png',
    'products/java.png',
    'products/rails.png',
    'products/apache.png',
    'products/database.png',
    'products/postgresql.png',
    'products/dna.png',
    'products/hadoop.png',
    'products/kb.png',
    'products/teradata.png',
    'products/mssql.png',
    'products/bugzilla.png',
    'products/oracle.png',
    'products/netapp.png',
    'products/firewall.png',
    'products/f5.png',
    'products/man.png',
    'products/woman.png',
    'products/mean.png',
  ];
}

ProductsAdminController.resolve = {
  /**@ngInject*/
  categories: function(ProductTypesResource) {
    return ProductTypesResource.query({'includes[]': ["questions"]}).$promise;
  },
  /**@ngInject*/
  clouds: function(CloudsResource) {
    return CloudsResource.query().$promise;
  }

};

module.exports = ProductsAdminController;
