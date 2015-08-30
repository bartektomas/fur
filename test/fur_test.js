/**
 * Test case for fur.
 * Runs with nodeunit.
 */

var Fur = require('../lib/fur.js'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Generate favicon'] = function (test) {
    var fur = new Fur({});
    var filename = tmpDir + '/testing-fur-favicon.svg';
    fur.favicon(filename, function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};

exports['Generate banner'] = function (test) {
    var fur = new Fur({});
    var filename = tmpDir + '/testing-fur-banner.svg';
    fur.banner(filename, function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};

