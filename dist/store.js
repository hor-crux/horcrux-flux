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
            this.copyData = true;
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
        Store.prototype.getData = function () {
            if (!!this.copyData) {
                return JSON.parse(JSON.stringify(this.data));
            }
            else {
                return this.data;
            }
        };
        __decorate([
            horcrux_di_1.inject(dispatcher_1.Dispatcher)
        ], Store.prototype, "dispatcher");
        return Store;
    })(callbackholder_1.CallbackHolder);
    exports.Store = Store;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiLCJTdG9yZS5nZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlBO1FBQXVCQSx5QkFBNkJBO1FBU25EQTtZQUNDQyxpQkFBT0EsQ0FBQ0E7WUFIQ0EsYUFBUUEsR0FBWUEsSUFBSUEsQ0FBQ0E7WUFJbENBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtRQUVNRCx3QkFBUUEsR0FBZkEsVUFBZ0JBLFFBQXdCQSxFQUFFQSxJQUFTQSxFQUFFQSxPQUFZQTtZQUFaRSx1QkFBWUEsR0FBWkEsY0FBWUE7WUFDaEVBLElBQUlBLEVBQUVBLEdBQUdBLGdCQUFLQSxDQUFDQSxRQUFRQSxZQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUV4Q0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0JBQ1pBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBRS9CQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVTRixzQkFBTUEsR0FBaEJBLFVBQWlCQSxNQUF3QkE7WUFBekNHLGlCQU9DQTtZQU5BQSxJQUFJQSxVQUFVQSxHQUFTQSxJQUFLQSxDQUFDQSxVQUFVQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM5Q0EsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFN0NBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BO2dCQUN2QkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBOztRQUdTSCx1QkFBT0EsR0FBakJBO1lBQ0NJLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRVNKLHVCQUFPQSxHQUFqQkE7WUFDQ0ssRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5Q0EsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1lBQ2xCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQTlDREw7WUFBQ0EsbUJBQU1BLENBQUNBLHVCQUFVQSxDQUFDQTtXQUNUQSw2QkFBVUEsRUFBYUE7UUE4Q2xDQSxZQUFDQTtJQUFEQSxDQWpEQSxBQWlEQ0EsRUFqRHNCLCtCQUFjLEVBaURwQztJQUdPLGFBQUssU0FIWjtJQUdhIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYWxsYmFja0hvbGRlcn0gZnJvbSBcIi4vY2FsbGJhY2tob2xkZXJcIlxyXG5pbXBvcnQge0Rpc3BhdGNoZXJ9IGZyb20gXCIuL2Rpc3BhdGNoZXJcIlxyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImhvcmNydXgtZGlcIlxyXG5cclxuY2xhc3MgU3RvcmU8VD4gZXh0ZW5kcyBDYWxsYmFja0hvbGRlcjwoZGF0YTpUKT0+YW55PiB7XHJcblxyXG5cdEBpbmplY3QoRGlzcGF0Y2hlcilcclxuXHRwcm90ZWN0ZWQgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlcjtcclxuXHJcblx0cHVibGljIGlkOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIGRhdGE6IFQ7XHJcblx0cHJvdGVjdGVkIGNvcHlEYXRhOiBCb29sZWFuID0gdHJ1ZTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlkID0gdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKHRoaXMuaGFuZGxlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVnaXN0ZXIoY2FsbGJhY2s6IChkYXRhOlQpPT52b2lkLCBzZWxmPzphbnksIGNhbGxOb3c9dHJ1ZSk6IHN0cmluZyB7XHJcblx0XHRsZXQgaWQgPSBzdXBlci5yZWdpc3RlcihjYWxsYmFjaywgc2VsZik7XHJcblx0XHRcclxuXHRcdGlmKCEhY2FsbE5vdylcclxuXHRcdFx0dGhpcy5jYWxsYmFja3NbaWRdKHRoaXMuZGF0YSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBpZDtcclxuXHR9XHJcblx0XHRcclxuXHRwcm90ZWN0ZWQgaGFuZGxlKGFjdGlvbjogRGlzcGF0Y2hlckFjdGlvbik6IHZvaWQge1xyXG5cdFx0bGV0IGhhbmRsZXJNYXAgPSAoPGFueT50aGlzKS5oYW5kbGVyTWFwIHx8IHt9O1xyXG5cdFx0bGV0IGhhbmRsZXJzID0gaGFuZGxlck1hcFthY3Rpb24udHlwZV0gfHwgW107XHJcblx0XHRcclxuXHRcdGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XHJcblx0XHRcdGhhbmRsZXIuY2FsbCh0aGlzLCBhY3Rpb24uZGF0YSk7XHJcblx0XHR9KVxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0cHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRmb3IgKGxldCBpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xyXG5cdFx0XHRsZXQgY2IgPSB0aGlzLmNhbGxiYWNrc1tpZF07XHJcblx0XHRcdGlmKGNiKVxyXG5cdFx0XHRcdGNiKHRoaXMuZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHByb3RlY3RlZCBnZXREYXRhKCk6IFQge1xyXG5cdFx0aWYoISF0aGlzLmNvcHlEYXRhKSB7XHJcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtTdG9yZX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=