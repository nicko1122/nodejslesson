/**
 * Created by nick_wen on 2015/10/19.
 */

var exec = require("child_process").exec;

function index() {
    console.log("Request handler 'index' was called.");
    return "hello index";
}

function start() {
    var content = "empty";

    exec("dir C:\Program Files\Bitcoin\ /s", function (error, stdout, stderr) {
        content = stdout;
    });

    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "hello upload";
}

exports.index = index;
exports.start = start;
exports.upload = upload;