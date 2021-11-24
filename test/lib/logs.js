var path = require('path')
require('should')
var tk = require('timekeeper')

var Logs = require('../../lib/logs.js')
var logs = new Logs({
  path: '/tmp/',
  type: 'linux'
})

describe('Logs', function () {
  beforeEach(function () {
    tk.freeze(1445455712000) // 2015-10-21 19:28:32
  })

  afterEach(function () {
    tk.reset()
  })

  describe('generateLogFileName()', function () {
    it('should generate valid file name', function () {
      Logs.generateLogFileName('prefix', 'suffix').should.eql('prefix_2015-10-21_19-28-32_suffix.rpt')
    })
  })

  describe('generateLogFilePath()', function () {
    it('should generate valid file path', function () {
      logs.generateLogFilePath('prefix', 'suffix').should.eql(path.join('/tmp', 'logs', 'prefix_2015-10-21_19-28-32_suffix.rpt'))
    })
  })
})
