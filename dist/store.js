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
            var handlerMap = this.handlerMap || {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBdUJBLHlCQUFjQTtRQVFwQ0E7WUFDQ0MsaUJBQU9BLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtRQUVNRCx3QkFBUUEsR0FBZkEsVUFBZ0JBLFFBQXdCQSxFQUFFQSxJQUFTQTtZQUNsREUsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLFlBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUVTRixzQkFBTUEsR0FBaEJBLFVBQWlCQSxNQUF3QkE7WUFBekNHLGlCQU9DQTtZQU5BQSxJQUFJQSxVQUFVQSxHQUFTQSxJQUFLQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM5Q0EsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFN0NBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BO2dCQUN2QkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBOztRQUdTSCx1QkFBT0EsR0FBakJBO1lBQ0NJLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBL0JESjtZQUFDQSxtQkFBTUEsQ0FBQ0Esb0JBQVVBLENBQUNBO1dBQ1RBLDZCQUFVQSxFQUFhQTtRQStCbENBLFlBQUNBO0lBQURBLENBbENBLEFBa0NDQSxFQWxDc0Isd0JBQWMsRUFrQ3BDO0lBVU8sYUFBSyxTQVZaO0lBRUQsZ0JBQWdCLElBQWtCO1FBQ2pDSyxNQUFNQSxDQUFDQSxVQUFDQSxNQUFXQSxFQUFFQSxXQUE0QkEsRUFBRUEsVUFBZUE7WUFDakVBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1lBQzVDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWMsY0FBTSxVQUZwQjtJQUVxQiIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxsYmFja0hvbGRlciBmcm9tIFwiLi9jYWxsYmFja2hvbGRlclwiXHJcbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gXCIuL2Rpc3BhdGNoZXJcIlxyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImhvcmNydXgtZGlcIlxyXG5cclxuY2xhc3MgU3RvcmU8VD4gZXh0ZW5kcyBDYWxsYmFja0hvbGRlciB7XHJcblxyXG5cdEBpbmplY3QoRGlzcGF0Y2hlcilcclxuXHRwcm90ZWN0ZWQgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlcjtcclxuXHJcblx0cHVibGljIGlkOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pZCA9IHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlcih0aGlzLmhhbmRsZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHJlZ2lzdGVyKGNhbGxiYWNrOiAoZGF0YTpUKT0+dm9pZCwgc2VsZj86YW55KTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBzdXBlci5yZWdpc3RlcihjYWxsYmFjaywgc2VsZik7XHJcblx0fVxyXG5cdFx0XHJcblx0cHJvdGVjdGVkIGhhbmRsZShhY3Rpb246IERpc3BhdGNoZXJBY3Rpb24pOiB2b2lkIHtcclxuXHRcdGxldCBoYW5kbGVyTWFwID0gKDxhbnk+dGhpcykuaGFuZGxlck1hcCB8fCB7fTtcclxuXHRcdGxldCBoYW5kbGVycyA9IGhhbmRsZXJNYXBbYWN0aW9uLnR5cGVdIHx8IFtdO1xyXG5cdFx0XHJcblx0XHRoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG5cdFx0XHRoYW5kbGVyLmNhbGwodGhpcywgYWN0aW9uLmRhdGEpO1xyXG5cdFx0fSlcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0bGV0IGNiID0gdGhpcy5jYWxsYmFja3NbaWRdO1xyXG5cdFx0XHRpZihjYilcclxuXHRcdFx0XHRjYih0aGlzLmRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlKHR5cGU6c3RyaW5nfG51bWJlcik6IE1ldGhvZERlY29yYXRvciB7XHJcblx0cmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgZGVzY3JpcHRvcjogYW55KSA9PiB7XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcCA9IHRhcmdldC5oYW5kbGVyTWFwIHx8IHt9O1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gPSB0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSB8fCBbXTtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdLnB1c2godGFyZ2V0W3Byb3BlcnR5S2V5XSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge1N0b3JlLCBoYW5kbGV9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9