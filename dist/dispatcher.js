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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNoZXIudHMiXSwibmFtZXMiOlsiRGlzcGF0Y2hlciIsIkRpc3BhdGNoZXIuY29uc3RydWN0b3IiLCJEaXNwYXRjaGVyLndhaXRGb3IiLCJEaXNwYXRjaGVyLmRpc3BhdGNoIiwiRGlzcGF0Y2hlci5pbnZva2VDYWxsYmFjayIsIkRpc3BhdGNoZXIuc3RhcnREaXNwYXRjaGluZyIsIkRpc3BhdGNoZXIuc3RvcERpc3BhdGNoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUdBOzs7T0FHRztJQUNIO1FBQ3lCQSw4QkFBOENBO1FBRHZFQTtZQUN5QkMsOEJBQThDQTtZQUU5REEsY0FBU0EsR0FBMkJBLEVBQUVBLENBQUNBO1lBQ3ZDQSxjQUFTQSxHQUEyQkEsRUFBRUEsQ0FBQ0E7WUFDdkNBLGtCQUFhQSxHQUFZQSxLQUFLQSxDQUFDQTtZQUMvQkEsbUJBQWNBLEdBQXFCQSxJQUFJQSxDQUFDQTtRQW1FakRBLENBQUNBO1FBakVBRDs7O1dBR0dBO1FBQ0lBLDRCQUFPQSxHQUFkQTtZQUFlRSxhQUFxQkE7aUJBQXJCQSxXQUFxQkEsQ0FBckJBLHNCQUFxQkEsQ0FBckJBLElBQXFCQTtnQkFBckJBLDRCQUFxQkE7O1lBQ25DQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDdEJBLE1BQU1BLDZEQUE2REEsQ0FBQ0E7WUFFckVBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUN4Q0EsSUFBSUEsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBRWpCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO3dCQUN0QkEsTUFBTUEsaUVBQStEQSxFQUFJQSxDQUFDQTtvQkFDM0VBLFFBQVFBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkFFREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3RCQSxNQUFNQSxtQkFBaUJBLEVBQUVBLDRDQUF5Q0EsQ0FBQ0E7Z0JBRXBFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUN6QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7O1FBRURGOzs7V0FHR0E7UUFDSUEsNkJBQVFBLEdBQWZBLFVBQWdCQSxNQUF3QkE7WUFDdkNHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBO2dCQUNyQkEsTUFBTUEsOENBQThDQSxDQUFDQTtZQUV0REEsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUU5QkEsSUFBSUEsQ0FBQ0E7Z0JBQ0pBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO29CQUMvQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hCQSxRQUFRQSxDQUFDQTtvQkFDVkEsQ0FBQ0E7b0JBQ0RBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7WUFDRkEsQ0FBQ0E7b0JBQVNBLENBQUNBO2dCQUNWQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtZQUN4QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7O1FBRU9ILG1DQUFjQSxHQUF0QkEsVUFBdUJBLEVBQVVBO1lBQ2hDSSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUMxQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7WUFDeENBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVPSixxQ0FBZ0JBLEdBQXhCQSxVQUF5QkEsT0FBeUJBO1lBQ2pESyxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUMzQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDNUJBLENBQUNBO1lBQ0RBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLE9BQU9BLENBQUNBO1lBQzlCQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFT0wsb0NBQWVBLEdBQXZCQTtZQUNDTSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLENBQUNBO1FBeEVGTjtZQUFDQSxxQkFBUUE7dUJBeUVSQTtRQUFEQSxpQkFBQ0E7SUFBREEsQ0F6RUEsQUF5RUNBLEVBeEV3QiwrQkFBYyxFQXdFdEM7SUFFTyxrQkFBVSxjQUZqQjtJQUVrQiIsImZpbGUiOiJkaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZWdpc3Rlcn0gZnJvbSBcImhvcmNydXgtZGlcIlxyXG5pbXBvcnQge0NhbGxiYWNrSG9sZGVyfSBmcm9tIFwiLi9jYWxsYmFja2hvbGRlclwiXHJcblxyXG4vKipcclxuICogTWFpbiBEaXNwYXRjaGVyIENsYXNzLlxyXG4gKiBVc2VkIHRvIERpc3BhdGNoIGFjdGlvbnMgYWNyb3NzIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycy5cclxuICovXHJcbkByZWdpc3RlclxyXG5jbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgQ2FsbGJhY2tIb2xkZXI8KGFjdGlvbjpEaXNwYXRjaGVyQWN0aW9uKT0+YW55PiB7XHJcblxyXG5cdHByaXZhdGUgaXNQZW5kaW5nOiB7W2tleTpzdHJpbmddOmJvb2xlYW59ID0ge307XHJcblx0cHJpdmF0ZSBpc0hhbmRsZWQ6IHtba2V5OnN0cmluZ106Ym9vbGVhbn0gPSB7fTtcclxuXHRwcml2YXRlIGlzRGlzcGF0Y2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIHBlbmRpbmdQYXlsb2FkOiBEaXNwYXRjaGVyQWN0aW9uID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogV2FpdHMgZm9yIGFsbCBsaXN0ZW5lcnMgd2l0aCBzcGVjaWZpZWQgaWRzIHRvIGhhbmRsZSB0aGUgY3VycmVudCBhY3Rpb24uXHJcblx0ICogQHBhcmFtIGlkcyBpZHMgb2YgdGhlIGxpc3RlbmVycyB0byB3YWl0IGZvclxyXG5cdCAqL1xyXG5cdHB1YmxpYyB3YWl0Rm9yKC4uLmlkczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG5cdFx0aWYoIXRoaXMuaXNEaXNwYXRjaGluZylcclxuXHRcdFx0dGhyb3cgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJztcclxuXHJcblx0XHRmb3IgKGxldCBpaSA9IDA7IGlpIDwgaWRzLmxlbmd0aDsgaWkrKykge1xyXG5cdFx0XHRsZXQgaWQgPSBpZHNbaWldO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuaXNQZW5kaW5nW2lkXSkge1xyXG5cdFx0XHRcdGlmKCF0aGlzLmlzSGFuZGxlZFtpZF0pXHJcblx0XHRcdFx0XHR0aHJvdyBgd2FpdEZvciguLi4pOiBDaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkIHdoaWxlIHdhdGluZyBmb3IgJHtpZH1gO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZighdGhpcy5jYWxsYmFja3NbaWRdKVxyXG5cdFx0XHRcdHRocm93IGB3YWl0Rm9yKC4uLik6ICR7aWR9IGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suYDtcclxuXHJcblx0XHRcdHRoaXMuaW52b2tlQ2FsbGJhY2soaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycy5cclxuXHQgKiBAcGFyYW0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZGlzcGF0Y2hcclxuXHQgKi9cclxuXHRwdWJsaWMgZGlzcGF0Y2goYWN0aW9uOiBEaXNwYXRjaGVyQWN0aW9uKSB7XHJcblx0XHRpZih0aGlzLmlzRGlzcGF0Y2hpbmcpXHJcblx0XHRcdHRocm93ICdDYW5ub3QgZGlzcGF0Y2ggaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLic7XHJcblxyXG5cdFx0dGhpcy5zdGFydERpc3BhdGNoaW5nKGFjdGlvbik7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pc1BlbmRpbmdbaWRdKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5pbnZva2VDYWxsYmFjayhpZCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHRoaXMuc3RvcERpc3BhdGNoaW5nKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBpbnZva2VDYWxsYmFjayhpZDogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLmlzUGVuZGluZ1tpZF0gPSB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFja3NbaWRdKHRoaXMucGVuZGluZ1BheWxvYWQpO1xyXG5cdFx0dGhpcy5pc0hhbmRsZWRbaWRdID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkOiBEaXNwYXRjaGVyQWN0aW9uKTogdm9pZCB7XHJcblx0XHRmb3IgKGxldCBpZCBpbiB0aGlzLmNhbGxiYWNrcykge1xyXG5cdFx0XHR0aGlzLmlzUGVuZGluZ1tpZF0gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc0hhbmRsZWRbaWRdID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBlbmRpbmdQYXlsb2FkID0gcGF5bG9hZDtcclxuXHRcdHRoaXMuaXNEaXNwYXRjaGluZyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0b3BEaXNwYXRjaGluZygpOiB2b2lkIHtcclxuXHRcdHRoaXMucGVuZGluZ1BheWxvYWQgPSBudWxsO1xyXG5cdFx0dGhpcy5pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge0Rpc3BhdGNoZXJ9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9