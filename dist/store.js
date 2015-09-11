var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", "./callbackholder", "./dispatcher", "horcrux-di"], function (require, exports, callbackholder_1, dispatcher_1, horcrux_di_1) {
    var Store = (function (_super) {
        __extends(Store, _super);
        function Store() {
            _super.call(this);
            this.id = this.dispatcher.register(this.handle.bind(this));
        }
        Store.prototype.register = function (callback, self) {
            return _super.prototype.register.call(this, callback, self);
        };
        Store.prototype.handle = function (action) {
            var _this = this;
            var handlerMap = this.constructor.prototype.handlerMap;
            var handlers = handlerMap[action.type] || [];
            handlers.forEach(function (handler) {
                handler.call(_this, action.data);
            });
        };
        ;
        Store.prototype.changed = function () {
            for (var id in this.callbacks) {
                var cb = this.callbacks[id];
                if (cb)
                    cb(this.data);
            }
        };
        Store.handlerMap = {};
        __decorate([
            horcrux_di_1.inject(dispatcher_1.default)
        ], Store.prototype, "dispatcher");
        return Store;
    })(callbackholder_1.default);
    exports.Store = Store;
    function handle(type) {
        return function (target, propertyKey, descriptor) {
            target.handlerMap = target.handlerMap || {};
            target.handlerMap[type] = target.handlerMap[type] || [];
            target.handlerMap[type].push(target[propertyKey]);
        };
    }
    exports.handle = handle;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBdUJBLHlCQUFjQTtRQVVwQ0E7WUFDQ0MsaUJBQU9BLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtRQUVNRCx3QkFBUUEsR0FBZkEsVUFBZ0JBLFFBQXdCQSxFQUFFQSxJQUFTQTtZQUNsREUsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLFlBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUVTRixzQkFBTUEsR0FBaEJBLFVBQWlCQSxNQUF3QkE7WUFBekNHLGlCQU9DQTtZQU5BQSxJQUFJQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFBQTtZQUN0REEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFN0NBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BO2dCQUN2QkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBOztRQUdTSCx1QkFBT0EsR0FBakJBO1lBQ0NJLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBOUJNSixnQkFBVUEsR0FBUUEsRUFBRUEsQ0FBQ0E7UUFINUJBO1lBQUNBLG1CQUFNQSxDQUFDQSxvQkFBVUEsQ0FBQ0E7V0FDVEEsNkJBQVVBLEVBQVlBO1FBaUNqQ0EsWUFBQ0E7SUFBREEsQ0FwQ0EsQUFvQ0NBLEVBcENzQix3QkFBYyxFQW9DcEM7SUFVTyxhQUFLLFNBVlo7SUFFRCxnQkFBZ0IsSUFBVztRQUMxQkssTUFBTUEsQ0FBQ0EsVUFBQ0EsTUFBb0JBLEVBQUVBLFdBQTRCQSxFQUFFQSxVQUFlQTtZQUMxRUEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFYyxjQUFNLFVBRnBCO0lBRXFCIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGxiYWNrSG9sZGVyIGZyb20gXCIuL2NhbGxiYWNraG9sZGVyXCJcclxuaW1wb3J0IERpc3BhdGNoZXIgZnJvbSBcIi4vZGlzcGF0Y2hlclwiXHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiaG9yY3J1eC1kaVwiXHJcblxyXG5jbGFzcyBTdG9yZTxUPiBleHRlbmRzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0QGluamVjdChEaXNwYXRjaGVyKVxyXG5cdHByb3RlY3RlZCBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyXHJcblxyXG5cdHN0YXRpYyBoYW5kbGVyTWFwOiBhbnkgPSB7fTtcclxuXHRcclxuXHRwdWJsaWMgaWQ6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgZGF0YTogVDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlkID0gdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKHRoaXMuaGFuZGxlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVnaXN0ZXIoY2FsbGJhY2s6IChkYXRhOlQpPT52b2lkLCBzZWxmPzphbnkpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHN1cGVyLnJlZ2lzdGVyKGNhbGxiYWNrLCBzZWxmKTtcclxuXHR9XHJcblx0XHRcclxuXHRwcm90ZWN0ZWQgaGFuZGxlKGFjdGlvbjogRGlzcGF0Y2hlckFjdGlvbik6IHZvaWQge1xyXG5cdFx0bGV0IGhhbmRsZXJNYXAgPSB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5oYW5kbGVyTWFwXHJcblx0XHRsZXQgaGFuZGxlcnMgPSBoYW5kbGVyTWFwW2FjdGlvbi50eXBlXSB8fCBbXTtcclxuXHRcdFxyXG5cdFx0aGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcclxuXHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGFjdGlvbi5kYXRhKTtcclxuXHRcdH0pXHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcclxuXHRcdGZvciAobGV0IGlkIGluIHRoaXMuY2FsbGJhY2tzKSB7XHJcblx0XHRcdGxldCBjYiA9IHRoaXMuY2FsbGJhY2tzW2lkXTtcclxuXHRcdFx0aWYoY2IpXHJcblx0XHRcdFx0Y2IodGhpcy5kYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZSh0eXBlOnN0cmluZyk6IE1ldGhvZERlY29yYXRvciB7XHJcblx0cmV0dXJuICh0YXJnZXQ6IHR5cGVvZiBTdG9yZSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcjogYW55KSA9PiB7XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcCA9IHRhcmdldC5oYW5kbGVyTWFwIHx8IHt9O1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gPSB0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSB8fCBbXTtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdLnB1c2godGFyZ2V0W3Byb3BlcnR5S2V5XSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1N0b3JlLCBoYW5kbGV9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9