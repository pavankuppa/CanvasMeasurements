"use strict";
var Measurement = /** @class */ (function () {
    function Measurement(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
    Measurement.prototype.ellipse = function (_a) {
        var x = _a.x, y = _a.y, radiusX = _a.radiusX, radiusY = _a.radiusY, rotation = _a.rotation, startAngle = _a.startAngle, endAngle = _a.endAngle, _b = _a.anticlockwise, anticlockwise = _b === void 0 ? false : _b;
        this.context.beginPath();
        this.context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        this.context.stroke();
    };
    Measurement.prototype.circle = function (_a) {
        var x = _a.x, y = _a.y, radius = _a.radius, startAngle = _a.startAngle, endAngle = _a.endAngle, _b = _a.anticlockwise, anticlockwise = _b === void 0 ? false : _b;
        this.context.beginPath();
        this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        this.context.stroke();
    };
    Measurement.prototype.rectangle = function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.stroke();
    };
    Measurement.prototype.square = function (_a) {
        var x = _a.x, y = _a.y, side = _a.side;
        this.context.beginPath();
        this.context.rect(x, y, side, side);
        this.context.stroke();
    };
    Measurement.prototype.line = function (_a) {
        var from = _a.from, to = _a.to;
        this.context.beginPath();
        this.context.moveTo(from.x, from.y);
        this.context.lineTo(to.x, to.y);
        this.context.stroke();
    };
    return Measurement;
}());
