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
            var handlerMap = this.constructor.handlerMap;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBdUJBLHlCQUFjQTtRQVVwQ0E7WUFDQ0MsaUJBQU9BLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtRQUVNRCx3QkFBUUEsR0FBZkEsVUFBZ0JBLFFBQXdCQSxFQUFFQSxJQUFTQTtZQUNsREUsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLFlBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUVTRixzQkFBTUEsR0FBaEJBLFVBQWlCQSxNQUF3QkE7WUFBekNHLGlCQU9DQTtZQU5BQSxJQUFJQSxVQUFVQSxHQUFTQSxJQUFJQSxDQUFDQSxXQUFZQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUNwREEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFN0NBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BO2dCQUN2QkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBOztRQUdTSCx1QkFBT0EsR0FBakJBO1lBQ0NJLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBOUJNSixnQkFBVUEsR0FBUUEsRUFBRUEsQ0FBQ0E7UUFINUJBO1lBQUNBLG1CQUFNQSxDQUFDQSxvQkFBVUEsQ0FBQ0E7V0FDVEEsNkJBQVVBLEVBQWFBO1FBaUNsQ0EsWUFBQ0E7SUFBREEsQ0FwQ0EsQUFvQ0NBLEVBcENzQix3QkFBYyxFQW9DcEM7SUFVTyxhQUFLLFNBVlo7SUFFRCxnQkFBZ0IsSUFBa0I7UUFDakNLLE1BQU1BLENBQUNBLFVBQUNBLE1BQW9CQSxFQUFFQSxXQUE0QkEsRUFBRUEsVUFBZUE7WUFDMUVBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO1lBQzVDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUN4REEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWMsY0FBTSxVQUZwQjtJQUVxQiIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxsYmFja0hvbGRlciBmcm9tIFwiLi9jYWxsYmFja2hvbGRlclwiXHJcbmltcG9ydCBEaXNwYXRjaGVyIGZyb20gXCIuL2Rpc3BhdGNoZXJcIlxyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImhvcmNydXgtZGlcIlxyXG5cclxuY2xhc3MgU3RvcmU8VD4gZXh0ZW5kcyBDYWxsYmFja0hvbGRlciB7XHJcblxyXG5cdEBpbmplY3QoRGlzcGF0Y2hlcilcclxuXHRwcm90ZWN0ZWQgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlcjtcclxuXHJcblx0c3RhdGljIGhhbmRsZXJNYXA6IGFueSA9IHt9O1xyXG5cdFxyXG5cdHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCBkYXRhOiBUO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaWQgPSB0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIodGhpcy5oYW5kbGUuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogKGRhdGE6VCk9PnZvaWQsIHNlbGY/OmFueSk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gc3VwZXIucmVnaXN0ZXIoY2FsbGJhY2ssIHNlbGYpO1xyXG5cdH1cclxuXHRcdFxyXG5cdHByb3RlY3RlZCBoYW5kbGUoYWN0aW9uOiBEaXNwYXRjaGVyQWN0aW9uKTogdm9pZCB7XHJcblx0XHRsZXQgaGFuZGxlck1hcCA9ICg8YW55PnRoaXMuY29uc3RydWN0b3IpLmhhbmRsZXJNYXA7XHJcblx0XHRsZXQgaGFuZGxlcnMgPSBoYW5kbGVyTWFwW2FjdGlvbi50eXBlXSB8fCBbXTtcclxuXHRcdFxyXG5cdFx0aGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcclxuXHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGFjdGlvbi5kYXRhKTtcclxuXHRcdH0pXHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcclxuXHRcdGZvciAobGV0IGlkIGluIHRoaXMuY2FsbGJhY2tzKSB7XHJcblx0XHRcdGxldCBjYiA9IHRoaXMuY2FsbGJhY2tzW2lkXTtcclxuXHRcdFx0aWYoY2IpXHJcblx0XHRcdFx0Y2IodGhpcy5kYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZSh0eXBlOnN0cmluZ3xudW1iZXIpOiBNZXRob2REZWNvcmF0b3Ige1xyXG5cdHJldHVybiAodGFyZ2V0OiB0eXBlb2YgU3RvcmUsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I6IGFueSkgPT4ge1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXAgPSB0YXJnZXQuaGFuZGxlck1hcCB8fCB7fTtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdID0gdGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gfHwgW107XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcFt0eXBlXS5wdXNoKHRhcmdldFtwcm9wZXJ0eUtleV0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtTdG9yZSwgaGFuZGxlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==