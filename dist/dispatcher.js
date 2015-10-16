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
define(["require", "exports", "horcrux-di", "./callbackholder"], function (require, exports, horcrux_di_1, callbackholder_1) {
    /**
     * Main Dispatcher Class.
     * Used to Dispatch actions across all registered listeners.
     */
    var Dispatcher = (function (_super) {
        __extends(Dispatcher, _super);
        function Dispatcher() {
            _super.apply(this, arguments);
            this.isPending = {};
            this.isHandled = {};
            this.isDispatching = false;
            this.pendingPayload = null;
        }
        /**
         * Waits for all listeners with specified ids to handle the current action.
         * @param ids ids of the listeners to wait for
         */
        Dispatcher.prototype.waitFor = function () {
            var ids = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ids[_i - 0] = arguments[_i];
            }
            if (!this.isDispatching)
                throw 'Dispatcher.waitFor(...): Must be invoked while dispatching.';
            for (var ii = 0; ii < ids.length; ii++) {
                var id = ids[ii];
                if (this.isPending[id]) {
                    if (!this.isHandled[id])
                        throw "waitFor(...): Circular dependency detected while wating for " + id;
                    continue;
                }
                if (!this.callbacks[id])
                    throw "waitFor(...): " + id + " does not map to a registered callback.";
                this.invokeCallback(id);
            }
        };
        ;
        /**
         * Dispatches an action to all registered listeners.
         * @param action the action to dispatch
         */
        Dispatcher.prototype.dispatch = function (action) {
            if (this.isDispatching)
                throw 'Cannot dispatch in the middle of a dispatch.';
            this.startDispatching(action);
            try {
                for (var id in this.callbacks) {
                    if (this.isPending[id]) {
                        continue;
                    }
                    this.invokeCallback(id);
                }
            }
            finally {
                this.stopDispatching();
            }
        };
        ;
        Dispatcher.prototype.invokeCallback = function (id) {
            this.isPending[id] = true;
            this.callbacks[id](this.pendingPayload);
            this.isHandled[id] = true;
        };
        Dispatcher.prototype.startDispatching = function (payload) {
            for (var id in this.callbacks) {
                this.isPending[id] = false;
                this.isHandled[id] = false;
            }
            this.pendingPayload = payload;
            this.isDispatching = true;
        };
        Dispatcher.prototype.stopDispatching = function () {
            this.pendingPayload = null;
            this.isDispatching = false;
        };
        Dispatcher = __decorate([
            horcrux_di_1.register
        ], Dispatcher);
        return Dispatcher;
    })(callbackholder_1.CallbackHolder);
    exports.Dispatcher = Dispatcher;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNoZXIudHMiXSwibmFtZXMiOlsiRGlzcGF0Y2hlciIsIkRpc3BhdGNoZXIuY29uc3RydWN0b3IiLCJEaXNwYXRjaGVyLndhaXRGb3IiLCJEaXNwYXRjaGVyLmRpc3BhdGNoIiwiRGlzcGF0Y2hlci5pbnZva2VDYWxsYmFjayIsIkRpc3BhdGNoZXIuc3RhcnREaXNwYXRjaGluZyIsIkRpc3BhdGNoZXIuc3RvcERpc3BhdGNoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUdBOzs7T0FHRztJQUNIO1FBQ3lCQSw4QkFBY0E7UUFEdkNBO1lBQ3lCQyw4QkFBY0E7WUFFOUJBLGNBQVNBLEdBQTJCQSxFQUFFQSxDQUFDQTtZQUN2Q0EsY0FBU0EsR0FBMkJBLEVBQUVBLENBQUNBO1lBQ3ZDQSxrQkFBYUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDL0JBLG1CQUFjQSxHQUFxQkEsSUFBSUEsQ0FBQ0E7UUFtRWpEQSxDQUFDQTtRQWpFQUQ7OztXQUdHQTtRQUNJQSw0QkFBT0EsR0FBZEE7WUFBZUUsYUFBcUJBO2lCQUFyQkEsV0FBcUJBLENBQXJCQSxzQkFBcUJBLENBQXJCQSxJQUFxQkE7Z0JBQXJCQSw0QkFBcUJBOztZQUNuQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSw2REFBNkRBLENBQUNBO1lBRXJFQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDeENBLElBQUlBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDdEJBLE1BQU1BLGlFQUErREEsRUFBSUEsQ0FBQ0E7b0JBQzNFQSxRQUFRQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBRURBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUN0QkEsTUFBTUEsbUJBQWlCQSxFQUFFQSw0Q0FBeUNBLENBQUNBO2dCQUVwRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDekJBLENBQUNBO1FBQ0ZBLENBQUNBOztRQUVERjs7O1dBR0dBO1FBQ0lBLDZCQUFRQSxHQUFmQSxVQUFnQkEsTUFBd0JBO1lBQ3ZDRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDckJBLE1BQU1BLDhDQUE4Q0EsQ0FBQ0E7WUFFdERBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFOUJBLElBQUlBLENBQUNBO2dCQUNKQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4QkEsUUFBUUEsQ0FBQ0E7b0JBQ1ZBLENBQUNBO29CQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekJBLENBQUNBO1lBQ0ZBLENBQUNBO29CQUFTQSxDQUFDQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFDeEJBLENBQUNBO1FBQ0ZBLENBQUNBOztRQUVPSCxtQ0FBY0EsR0FBdEJBLFVBQXVCQSxFQUFVQTtZQUNoQ0ksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1lBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFT0oscUNBQWdCQSxHQUF4QkEsVUFBeUJBLE9BQXlCQTtZQUNqREssR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDM0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1lBQzVCQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQTtZQUM5QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBRU9MLG9DQUFlQSxHQUF2QkE7WUFDQ00sSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzVCQSxDQUFDQTtRQXhFRk47WUFBQ0EscUJBQVFBO3VCQXlFUkE7UUFBREEsaUJBQUNBO0lBQURBLENBekVBLEFBeUVDQSxFQXhFd0IsK0JBQWMsRUF3RXRDO0lBRU8sa0JBQVUsY0FGakI7SUFFa0IiLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVnaXN0ZXJ9IGZyb20gXCJob3JjcnV4LWRpXCJcclxuaW1wb3J0IHtDYWxsYmFja0hvbGRlcn0gZnJvbSBcIi4vY2FsbGJhY2tob2xkZXJcIlxyXG5cclxuLyoqXHJcbiAqIE1haW4gRGlzcGF0Y2hlciBDbGFzcy5cclxuICogVXNlZCB0byBEaXNwYXRjaCBhY3Rpb25zIGFjcm9zcyBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXHJcbiAqL1xyXG5AcmVnaXN0ZXJcclxuY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0cHJpdmF0ZSBpc1BlbmRpbmc6IHtba2V5OnN0cmluZ106Ym9vbGVhbn0gPSB7fTtcclxuXHRwcml2YXRlIGlzSGFuZGxlZDoge1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cdHByaXZhdGUgaXNEaXNwYXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgcGVuZGluZ1BheWxvYWQ6IERpc3BhdGNoZXJBY3Rpb24gPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBXYWl0cyBmb3IgYWxsIGxpc3RlbmVycyB3aXRoIHNwZWNpZmllZCBpZHMgdG8gaGFuZGxlIHRoZSBjdXJyZW50IGFjdGlvbi5cclxuXHQgKiBAcGFyYW0gaWRzIGlkcyBvZiB0aGUgbGlzdGVuZXJzIHRvIHdhaXQgZm9yXHJcblx0ICovXHJcblx0cHVibGljIHdhaXRGb3IoLi4uaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcblx0XHRpZighdGhpcy5pc0Rpc3BhdGNoaW5nKVxyXG5cdFx0XHR0aHJvdyAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nO1xyXG5cclxuXHRcdGZvciAobGV0IGlpID0gMDsgaWkgPCBpZHMubGVuZ3RoOyBpaSsrKSB7XHJcblx0XHRcdGxldCBpZCA9IGlkc1tpaV07XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc1BlbmRpbmdbaWRdKSB7XHJcblx0XHRcdFx0aWYoIXRoaXMuaXNIYW5kbGVkW2lkXSlcclxuXHRcdFx0XHRcdHRocm93IGB3YWl0Rm9yKC4uLik6IENpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgd2hpbGUgd2F0aW5nIGZvciAke2lkfWA7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCF0aGlzLmNhbGxiYWNrc1tpZF0pXHJcblx0XHRcdFx0dGhyb3cgYHdhaXRGb3IoLi4uKTogJHtpZH0gZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay5gO1xyXG5cclxuXHRcdFx0dGhpcy5pbnZva2VDYWxsYmFjayhpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24gdG8gYWxsIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxyXG5cdCAqIEBwYXJhbSBhY3Rpb24gdGhlIGFjdGlvbiB0byBkaXNwYXRjaFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkaXNwYXRjaChhY3Rpb246IERpc3BhdGNoZXJBY3Rpb24pIHtcclxuXHRcdGlmKHRoaXMuaXNEaXNwYXRjaGluZylcclxuXHRcdFx0dGhyb3cgJ0Nhbm5vdCBkaXNwYXRjaCBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guJztcclxuXHJcblx0XHR0aGlzLnN0YXJ0RGlzcGF0Y2hpbmcoYWN0aW9uKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRmb3IgKGxldCBpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzUGVuZGluZ1tpZF0pIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmludm9rZUNhbGxiYWNrKGlkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5zdG9wRGlzcGF0Y2hpbmcoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIGludm9rZUNhbGxiYWNrKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMuaXNQZW5kaW5nW2lkXSA9IHRydWU7XHJcblx0XHR0aGlzLmNhbGxiYWNrc1tpZF0odGhpcy5wZW5kaW5nUGF5bG9hZCk7XHJcblx0XHR0aGlzLmlzSGFuZGxlZFtpZF0gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGFydERpc3BhdGNoaW5nKHBheWxvYWQ6IERpc3BhdGNoZXJBY3Rpb24pOiB2b2lkIHtcclxuXHRcdGZvciAobGV0IGlkIGluIHRoaXMuY2FsbGJhY2tzKSB7XHJcblx0XHRcdHRoaXMuaXNQZW5kaW5nW2lkXSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzSGFuZGxlZFtpZF0gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGVuZGluZ1BheWxvYWQgPSBwYXlsb2FkO1xyXG5cdFx0dGhpcy5pc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RvcERpc3BhdGNoaW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wZW5kaW5nUGF5bG9hZCA9IG51bGw7XHJcblx0XHR0aGlzLmlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7RGlzcGF0Y2hlcn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=