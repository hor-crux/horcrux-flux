define(["require", "exports"], function (require, exports) {
    function handle(type) {
        return function (target, propertyKey, descriptor) {
            target.handlerMap = target.handlerMap || {};
            target.handlerMap[type] = target.handlerMap[type] || [];
            target.handlerMap[type].push(target[propertyKey]);
        };
    }
    exports.handle = handle;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZS50cyJdLCJuYW1lcyI6WyJoYW5kbGUiXSwibWFwcGluZ3MiOiI7SUFBQSxnQkFBZ0IsSUFBa0I7UUFDakNBLE1BQU1BLENBQUNBLFVBQUNBLE1BQVdBLEVBQUVBLFdBQTRCQSxFQUFFQSxVQUFlQTtZQUNqRUEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFTyxjQUFNLFVBRmI7SUFFYyIsImZpbGUiOiJoYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoYW5kbGUodHlwZTpzdHJpbmd8bnVtYmVyKTogTWV0aG9kRGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBhbnkpID0+IHtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwID0gdGFyZ2V0LmhhbmRsZXJNYXAgfHwge307XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSA9IHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdIHx8IFtdO1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0ucHVzaCh0YXJnZXRbcHJvcGVydHlLZXldKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7aGFuZGxlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==