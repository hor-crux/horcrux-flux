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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sIm5hbWVzIjpbIlN0b3JlIiwiU3RvcmUuY29uc3RydWN0b3IiLCJTdG9yZS5yZWdpc3RlciIsIlN0b3JlLmhhbmRsZSIsIlN0b3JlLmNoYW5nZWQiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBdUJBLHlCQUFjQTtRQVVwQ0E7WUFDQ0MsaUJBQU9BLENBQUNBO1lBQ1JBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtRQUVNRCx3QkFBUUEsR0FBZkEsVUFBZ0JBLFFBQXdCQSxFQUFFQSxJQUFTQTtZQUNsREUsTUFBTUEsQ0FBQ0EsZ0JBQUtBLENBQUNBLFFBQVFBLFlBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3ZDQSxDQUFDQTtRQUVTRixzQkFBTUEsR0FBaEJBLFVBQWlCQSxNQUF3QkE7WUFBekNHLGlCQU9DQTtZQU5BQSxJQUFJQSxVQUFVQSxHQUFTQSxJQUFJQSxDQUFDQSxXQUFZQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUNwREEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFN0NBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLE9BQU9BO2dCQUN2QkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUFBO1FBQ0hBLENBQUNBOztRQUdTSCx1QkFBT0EsR0FBakJBO1lBQ0NJLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDTEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0ZBLENBQUNBO1FBOUJNSixnQkFBVUEsR0FBUUEsRUFBRUEsQ0FBQ0E7UUFINUJBO1lBQUNBLG1CQUFNQSxDQUFDQSxvQkFBVUEsQ0FBQ0E7V0FDVEEsNkJBQVVBLEVBQVlBO1FBaUNqQ0EsWUFBQ0E7SUFBREEsQ0FwQ0EsQUFvQ0NBLEVBcENzQix3QkFBYyxFQW9DcEM7SUFVTyxhQUFLLFNBVlo7SUFFRCxnQkFBZ0IsSUFBVztRQUMxQkssTUFBTUEsQ0FBQ0EsVUFBQ0EsTUFBb0JBLEVBQUVBLFdBQTRCQSxFQUFFQSxVQUFlQTtZQUMxRUEsTUFBTUEsQ0FBQ0EsVUFBVUEsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ3hEQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFYyxjQUFNLFVBRnBCO0lBRXFCIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGxiYWNrSG9sZGVyIGZyb20gXCIuL2NhbGxiYWNraG9sZGVyXCJcclxuaW1wb3J0IERpc3BhdGNoZXIgZnJvbSBcIi4vZGlzcGF0Y2hlclwiXHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiaG9yY3J1eC1kaVwiXHJcblxyXG5jbGFzcyBTdG9yZTxUPiBleHRlbmRzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0QGluamVjdChEaXNwYXRjaGVyKVxyXG5cdHByb3RlY3RlZCBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyXHJcblxyXG5cdHN0YXRpYyBoYW5kbGVyTWFwOiBhbnkgPSB7fTtcclxuXHRcclxuXHRwdWJsaWMgaWQ6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgZGF0YTogVDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmlkID0gdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKHRoaXMuaGFuZGxlLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVnaXN0ZXIoY2FsbGJhY2s6IChkYXRhOlQpPT52b2lkLCBzZWxmPzphbnkpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHN1cGVyLnJlZ2lzdGVyKGNhbGxiYWNrLCBzZWxmKTtcclxuXHR9XHJcblx0XHRcclxuXHRwcm90ZWN0ZWQgaGFuZGxlKGFjdGlvbjogRGlzcGF0Y2hlckFjdGlvbik6IHZvaWQge1xyXG5cdFx0bGV0IGhhbmRsZXJNYXAgPSAoPGFueT50aGlzLmNvbnN0cnVjdG9yKS5oYW5kbGVyTWFwO1xyXG5cdFx0bGV0IGhhbmRsZXJzID0gaGFuZGxlck1hcFthY3Rpb24udHlwZV0gfHwgW107XHJcblx0XHRcclxuXHRcdGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XHJcblx0XHRcdGhhbmRsZXIuY2FsbCh0aGlzLCBhY3Rpb24uZGF0YSk7XHJcblx0XHR9KVxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0cHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRmb3IgKGxldCBpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xyXG5cdFx0XHRsZXQgY2IgPSB0aGlzLmNhbGxiYWNrc1tpZF07XHJcblx0XHRcdGlmKGNiKVxyXG5cdFx0XHRcdGNiKHRoaXMuZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGUodHlwZTpzdHJpbmcpOiBNZXRob2REZWNvcmF0b3Ige1xyXG5cdHJldHVybiAodGFyZ2V0OiB0eXBlb2YgU3RvcmUsIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I6IGFueSkgPT4ge1xyXG5cdFx0dGFyZ2V0LmhhbmRsZXJNYXAgPSB0YXJnZXQuaGFuZGxlck1hcCB8fCB7fTtcclxuXHRcdHRhcmdldC5oYW5kbGVyTWFwW3R5cGVdID0gdGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gfHwgW107XHJcblx0XHR0YXJnZXQuaGFuZGxlck1hcFt0eXBlXS5wdXNoKHRhcmdldFtwcm9wZXJ0eUtleV0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtTdG9yZSwgaGFuZGxlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==