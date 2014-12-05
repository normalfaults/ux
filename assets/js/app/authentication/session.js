'use strict';

function Session() {
  this.create = function (email, role) {
    this.email = email;
    this.role = role;
  };
  this.destroy = function () {
    this.email = null;
    this.role = null;
  };
  return this;
}

module.exports = Session;
