'use strict';

function Session() {
  this.create = function (email, role, id) {
    this.email = email;
    this.role = role;
    this.id = id;
  };
  this.destroy = function () {
    this.email = null;
    this.role = null;
  };
  return this;
}

module.exports = Session;
