#!/usr/bin/env node

var proc = require('child_process')

proc.exec('node-gyp-build-test', function (err) {
  if (err) exit(1)
  exit(0)
})

