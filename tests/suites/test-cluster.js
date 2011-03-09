var sys = require('sys'),
    Cluster = require('../../lib/cluster'),
    testCase = require('../utils').indexTestCase;

module.exports = testCase({
    'check cluster status': function(assert) {
        assert.expect(2);
        var cluster = new Cluster();
        cluster.status(function(err, status) {
            assert.ifError(err);
            assert.ok(status.ok);
            assert.done();
        });
    },
    'delete cluster indices': function(assert) {
        assert.expect(4);
        var self = this;

        var cluster = new Cluster();
        cluster.deleteIndices(function(err, status) {
            assert.ifError(err);
            assert.ok(status.success);
            assert.equal(status.indices.length, 1);
            assert.deepEqual(status.indices, [self.idx_name]);
            assert.done();
        });
    }
});
