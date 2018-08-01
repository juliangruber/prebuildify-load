#!/usr/bin/env node

var proc = require('child_process')

proc.exec('prebuildify-load-test', function (err) {
  if (err) process.exit(1)
  process.exit(0)
})

