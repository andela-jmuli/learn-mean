"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_mixin_1 = require('@alizurchik/ts-mixin');
var Hello = (function () {
    function Hello() {
        console.log('Hello Honey,');
    }
    return Hello;
}());
var Salamu = (function () {
    function Salamu() {
        console.log('Hey Stranger,');
    }
    return Salamu;
}());
var SayHi = (function (_super) {
    __extends(SayHi, _super);
    function SayHi() {
        _super.call(this);
        console.log('Hello Mummy!');
    }
    return SayHi;
}(ts_mixin_1.Mixin(Hello, Salamu)));
new SayHi();
