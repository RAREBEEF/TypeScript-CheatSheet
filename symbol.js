"use strict";
var _a;
var symbol1 = Symbol();
var obj = (_a = {
        symbol1: "Hi"
    },
    _a[symbol1] = "Hello",
    _a);
console.log(typeof symbol1);
