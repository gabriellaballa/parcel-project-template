!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){var i={position:e,delay:n};r?t(i):o(i)}),n)}))}var u=document.querySelector(".form");u.addEventListener("submit",(function(n){n.preventDefault();for(var t=new FormData(u),o=parseInt(t.get("delay")),r=parseInt(t.get("step")),c=parseInt(t.get("amount")),f=1;f<=c;f++){a(f,o+(f-1)*r).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.3d283eb3.js.map
