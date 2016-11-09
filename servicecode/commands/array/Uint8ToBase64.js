"use strict";
var Helper_1 = require("../../../helpers/Helper");
var VarAddress_1 = require("../../VarAddress");
var Uint8ToBase64 = (function () {
    function Uint8ToBase64() {
    }
    Uint8ToBase64.prototype.getIdentifier = function () {
        return "array.uint8ToBase64";
    };
    Uint8ToBase64.prototype.execute = function (environment, parameters) {
        Helper_1.Helper.assert(parameters.length >= 2 && parameters[0] instanceof VarAddress_1.VarAddress && parameters[1] instanceof VarAddress_1.VarAddress);
        var resultVar = parameters[0];
        var sourceArray = Helper_1.Helper.resolve(environment, parameters[1]);
        var urlSafe = false;
        if (parameters.length > 2)
            urlSafe = !!Helper_1.Helper.resolve(environment, parameters[2]);
        Helper_1.Helper.assert(Helper_1.Helper.isArray(sourceArray));
        var str = Helper_1.Helper.makeBuffer(sourceArray).toString("base64");
        if (urlSafe) {
            str = str.replace(/\+/g, "-");
            str = str.replace(/\//g, "_");
        }
        environment.setVariable(resultVar, str);
    };
    return Uint8ToBase64;
}());
exports.Uint8ToBase64 = Uint8ToBase64;
