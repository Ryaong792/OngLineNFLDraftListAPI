'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('qbs', { only: ['index', 'show'] })
.resources('rbs', { only: ['index', 'show'] })
.resources('wrs', { only: ['index', 'show'] })
.resources('tes', { only: ['index', 'show'] })
.resources('ks', { only: ['index', 'show'] })
.resources('dsts', { only: ['index', 'show'] })
.resources('drafts')
//.get('qbs', 'qbs#show')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })


// all routes created
;
