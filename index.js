/**
 * Created by nick_wen on 2015/10/19.

var Server = require("./server");
var Router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


Server.start(Router.route, handle);*/

var bitcoin = require('bitcoinjs-lib')

var keyPair = bitcoin.ECPair.makeRandom()
// Print your private key (in WIF format)
console.log(keyPair.toWIF())
// => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct

// Print your public key address
console.log(keyPair.getAddress())
// => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvR

