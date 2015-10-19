/**
 * Created by nick_wen on 2015/10/19.
 */

function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 not find"
    }
}

exports.route =route;