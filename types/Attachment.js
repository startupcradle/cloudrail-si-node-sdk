"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SandboxObject_1 = require("./SandboxObject");
var Attachment = (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        _super.apply(this, arguments);
    }
    return Attachment;
}(SandboxObject_1.SandboxObject));
exports.Attachment = Attachment;
