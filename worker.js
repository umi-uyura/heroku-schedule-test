#!/usr/bin/env node

'use strict';

console.log('*** Worker start ***');

setInterval(function() {
  console.log('*** Worker processing ... ***');
}, 60000);
