'use strict';

/**@ngInject*/
function User($resource, ApiResource) {
  return $resource(ApiResource('usersById'), {}, {
    getRecentUsers: {
      method: "GET",
      isArray: true,
      url: ApiResource('recentUsers')
    },
    getCurrentMember: {
      method: 'GET',
      isArray: false,
      url: ApiResource('currentMember')
    }
  });
}

module.exports = User;
