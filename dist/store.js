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
        Store.prototype.register = function (callback, self, callNow) {
            if (callNow === void 0) { callNow = true; }
            var id = _super.prototype.register.call(this, callback, self);
            if (!!callNow)
                this.callbacks[id](this.data);
            return id;
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
            horcrux_di_1.inject(dispatcher_1.Dispatcher)
        ], Store.prototype, "dispatcher");
        return Store;
    })(callbackholder_1.CallbackHolder);
    exports.Store = Store;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBdUJBLHlCQUE2QkE7UUFRbkRBO1lBQ0NDLGlCQUFPQSxDQUFDQTtZQUNSQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM1REEsQ0FBQ0E7UUFFTUQsd0JBQVFBLEdBQWZBLFVBQWdCQSxRQUF3QkEsRUFBRUEsSUFBU0EsRUFBRUEsT0FBWUE7WUFBWkUsdUJBQVlBLEdBQVpBLGNBQVlBO1lBQ2hFQSxJQUFJQSxFQUFFQSxHQUFHQSxnQkFBS0EsQ0FBQ0EsUUFBUUEsWUFBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFeENBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBO2dCQUNaQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUUvQkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUFFU0Ysc0JBQU1BLEdBQWhCQSxVQUFpQkEsTUFBd0JBO1lBQXpDRyxpQkFPQ0E7WUFOQUEsSUFBSUEsVUFBVUEsR0FBU0EsSUFBS0EsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDOUNBLElBQUlBLFFBQVFBLEdBQUdBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBRTdDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxPQUFPQTtnQkFDdkJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUlBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2pDQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNIQSxDQUFDQTs7UUFHU0gsdUJBQU9BLEdBQWpCQTtZQUNDSSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUM1QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQ0xBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQXBDREo7WUFBQ0EsbUJBQU1BLENBQUNBLHVCQUFVQSxDQUFDQTtXQUNUQSw2QkFBVUEsRUFBYUE7UUFvQ2xDQSxZQUFDQTtJQUFEQSxDQXZDQSxBQXVDQ0EsRUF2Q3NCLCtCQUFjLEVBdUNwQztJQUdPLGFBQUssU0FIWjtJQUdhIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYWxsYmFja0hvbGRlcn0gZnJvbSBcIi4vY2FsbGJhY2tob2xkZXJcIlxyXG5pbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuL2Rpc3BhdGNoZXJcIlxyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImhvcmNydXgtZGlcIlxyXG5cclxuY2xhc3MgU3RvcmU8VD4gZXh0ZW5kcyBDYWxsYmFja0hvbGRlcjwoZGF0YTpUKT0+YW55PiB7XHJcblxyXG5cdEBpbmplY3QoRGlzcGF0Y2hlcilcclxuXHRwcm90ZWN0ZWQgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlcjtcclxuXHJcblx0cHVibGljIGlkOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pZCA9IHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlcih0aGlzLmhhbmRsZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHJlZ2lzdGVyKGNhbGxiYWNrOiAoZGF0YTpUKT0+dm9pZCwgc2VsZj86YW55LCBjYWxsTm93PXRydWUpOiBzdHJpbmcge1xyXG5cdFx0bGV0IGlkID0gc3VwZXIucmVnaXN0ZXIoY2FsbGJhY2ssIHNlbGYpO1xyXG5cdFx0XHJcblx0XHRpZighIWNhbGxOb3cpXHJcblx0XHRcdHRoaXMuY2FsbGJhY2tzW2lkXSh0aGlzLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gaWQ7XHJcblx0fVxyXG5cdFx0XHJcblx0cHJvdGVjdGVkIGhhbmRsZShhY3Rpb246IERpc3BhdGNoZXJBY3Rpb24pOiB2b2lkIHtcclxuXHRcdGxldCBoYW5kbGVyTWFwID0gKDxhbnk+dGhpcykuaGFuZGxlck1hcCB8fCB7fTtcclxuXHRcdGxldCBoYW5kbGVycyA9IGhhbmRsZXJNYXBbYWN0aW9uLnR5cGVdIHx8IFtdO1xyXG5cdFx0XHJcblx0XHRoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG5cdFx0XHRoYW5kbGVyLmNhbGwodGhpcywgYWN0aW9uLmRhdGEpO1xyXG5cdFx0fSlcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0bGV0IGNiID0gdGhpcy5jYWxsYmFja3NbaWRdO1xyXG5cdFx0XHRpZihjYilcclxuXHRcdFx0XHRjYih0aGlzLmRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7U3RvcmV9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9