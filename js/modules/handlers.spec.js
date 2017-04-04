var assert = require('assert');
var h, handlers = require('./handlers');

// surpress console.log
handlers.__resetLog();

describe('handlers module', function() {

  it('should export create() function', function() {
    assert.strictEqual(handlers && typeof(handlers.create), 'function');
  });

  it('should create() handler object with 3 commands', function() {
    h = handlers.create('test');
    assert('object' === typeof(h));
    assert(1 === Object.keys(h).length);
    assert.deepEqual(['getSandboxes'], Object.keys(h).sort());
  });

});
