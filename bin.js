#!/usr/bin/env node

var proc = require('child_process')

proc.exec('node-gyp-build-test', function (err) {
  if (err) process.exit(1)
  process.exit(0)
})

