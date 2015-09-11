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
define(["require", "exports", "./callbackholder", "horcrux-di"], function (require, exports, callbackholder_1, horcrux_di_1) {
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
    })(callbackholder_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Dispatcher;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BhdGNoZXIudHMiXSwibmFtZXMiOlsiRGlzcGF0Y2hlciIsIkRpc3BhdGNoZXIuY29uc3RydWN0b3IiLCJEaXNwYXRjaGVyLndhaXRGb3IiLCJEaXNwYXRjaGVyLmRpc3BhdGNoIiwiRGlzcGF0Y2hlci5pbnZva2VDYWxsYmFjayIsIkRpc3BhdGNoZXIuc3RhcnREaXNwYXRjaGluZyIsIkRpc3BhdGNoZXIuc3RvcERpc3BhdGNoaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUdBOzs7T0FHRztJQUNIO1FBQ3dDQSw4QkFBY0E7UUFEdERBO1lBQ3dDQyw4QkFBY0E7WUFFN0NBLGNBQVNBLEdBQTJCQSxFQUFFQSxDQUFDQTtZQUN2Q0EsY0FBU0EsR0FBMkJBLEVBQUVBLENBQUNBO1lBQ3ZDQSxrQkFBYUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDL0JBLG1CQUFjQSxHQUFxQkEsSUFBSUEsQ0FBQ0E7UUFtRWpEQSxDQUFDQTtRQWpFQUQ7OztXQUdHQTtRQUNJQSw0QkFBT0EsR0FBZEE7WUFBZUUsYUFBcUJBO2lCQUFyQkEsV0FBcUJBLENBQXJCQSxzQkFBcUJBLENBQXJCQSxJQUFxQkE7Z0JBQXJCQSw0QkFBcUJBOztZQUNuQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSw2REFBNkRBLENBQUNBO1lBRXJFQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDeENBLElBQUlBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUVqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTt3QkFDdEJBLE1BQU1BLGlFQUErREEsRUFBSUEsQ0FBQ0E7b0JBQzNFQSxRQUFRQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBRURBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUN0QkEsTUFBTUEsbUJBQWlCQSxFQUFFQSw0Q0FBeUNBLENBQUNBO2dCQUVwRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDekJBLENBQUNBO1FBQ0ZBLENBQUNBOztRQUVERjs7O1dBR0dBO1FBQ0lBLDZCQUFRQSxHQUFmQSxVQUFnQkEsTUFBd0JBO1lBQ3ZDRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDckJBLE1BQU1BLDhDQUE4Q0EsQ0FBQ0E7WUFFdERBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFFOUJBLElBQUlBLENBQUNBO2dCQUNKQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4QkEsUUFBUUEsQ0FBQ0E7b0JBQ1ZBLENBQUNBO29CQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekJBLENBQUNBO1lBQ0ZBLENBQUNBO29CQUFTQSxDQUFDQTtnQkFDVkEsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFDeEJBLENBQUNBO1FBQ0ZBLENBQUNBOztRQUVPSCxtQ0FBY0EsR0FBdEJBLFVBQXVCQSxFQUFVQTtZQUNoQ0ksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDMUJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1lBQ3hDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7UUFFT0oscUNBQWdCQSxHQUF4QkEsVUFBeUJBLE9BQXlCQTtZQUNqREssR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDM0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBO1lBQzVCQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQTtZQUM5QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBRU9MLG9DQUFlQSxHQUF2QkE7WUFDQ00sSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzVCQSxDQUFDQTtRQXhFRk47WUFBQ0EscUJBQVFBO3VCQXlFUkE7UUFBREEsaUJBQUNBO0lBQURBLENBekVBLEFBeUVDQSxFQXhFdUMsd0JBQWMsRUF3RXJEO0lBekVEO2dDQXlFQyxDQUFBIiwiZmlsZSI6ImRpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsbGJhY2tIb2xkZXIgZnJvbSBcIi4vY2FsbGJhY2tob2xkZXJcIlxyXG5pbXBvcnQge3JlZ2lzdGVyfSBmcm9tIFwiaG9yY3J1eC1kaVwiXHJcblxyXG4vKipcclxuICogTWFpbiBEaXNwYXRjaGVyIENsYXNzLlxyXG4gKiBVc2VkIHRvIERpc3BhdGNoIGFjdGlvbnMgYWNyb3NzIGFsbCByZWdpc3RlcmVkIGxpc3RlbmVycy5cclxuICovXHJcbkByZWdpc3RlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgQ2FsbGJhY2tIb2xkZXIge1xyXG5cclxuXHRwcml2YXRlIGlzUGVuZGluZzoge1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cdHByaXZhdGUgaXNIYW5kbGVkOiB7W2tleTpzdHJpbmddOmJvb2xlYW59ID0ge307XHJcblx0cHJpdmF0ZSBpc0Rpc3BhdGNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBwZW5kaW5nUGF5bG9hZDogRGlzcGF0Y2hlckFjdGlvbiA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhaXRzIGZvciBhbGwgbGlzdGVuZXJzIHdpdGggc3BlY2lmaWVkIGlkcyB0byBoYW5kbGUgdGhlIGN1cnJlbnQgYWN0aW9uLlxyXG5cdCAqIEBwYXJhbSBpZHMgaWRzIG9mIHRoZSBsaXN0ZW5lcnMgdG8gd2FpdCBmb3JcclxuXHQgKi9cclxuXHRwdWJsaWMgd2FpdEZvciguLi5pZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcclxuXHRcdGlmKCF0aGlzLmlzRGlzcGF0Y2hpbmcpXHJcblx0XHRcdHRocm93ICdEaXNwYXRjaGVyLndhaXRGb3IoLi4uKTogTXVzdCBiZSBpbnZva2VkIHdoaWxlIGRpc3BhdGNoaW5nLic7XHJcblxyXG5cdFx0Zm9yIChsZXQgaWkgPSAwOyBpaSA8IGlkcy5sZW5ndGg7IGlpKyspIHtcclxuXHRcdFx0bGV0IGlkID0gaWRzW2lpXTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmlzUGVuZGluZ1tpZF0pIHtcclxuXHRcdFx0XHRpZighdGhpcy5pc0hhbmRsZWRbaWRdKVxyXG5cdFx0XHRcdFx0dGhyb3cgYHdhaXRGb3IoLi4uKTogQ2lyY3VsYXIgZGVwZW5kZW5jeSBkZXRlY3RlZCB3aGlsZSB3YXRpbmcgZm9yICR7aWR9YDtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIXRoaXMuY2FsbGJhY2tzW2lkXSlcclxuXHRcdFx0XHR0aHJvdyBgd2FpdEZvciguLi4pOiAke2lkfSBkb2VzIG5vdCBtYXAgdG8gYSByZWdpc3RlcmVkIGNhbGxiYWNrLmA7XHJcblxyXG5cdFx0XHR0aGlzLmludm9rZUNhbGxiYWNrKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbiB0byBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXHJcblx0ICogQHBhcmFtIGFjdGlvbiB0aGUgYWN0aW9uIHRvIGRpc3BhdGNoXHJcblx0ICovXHJcblx0cHVibGljIGRpc3BhdGNoKGFjdGlvbjogRGlzcGF0Y2hlckFjdGlvbikge1xyXG5cdFx0aWYodGhpcy5pc0Rpc3BhdGNoaW5nKVxyXG5cdFx0XHR0aHJvdyAnQ2Fubm90IGRpc3BhdGNoIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC4nO1xyXG5cclxuXHRcdHRoaXMuc3RhcnREaXNwYXRjaGluZyhhY3Rpb24pO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGZvciAobGV0IGlkIGluIHRoaXMuY2FsbGJhY2tzKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNQZW5kaW5nW2lkXSkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuaW52b2tlQ2FsbGJhY2soaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLnN0b3BEaXNwYXRjaGluZygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgaW52b2tlQ2FsbGJhY2soaWQ6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy5pc1BlbmRpbmdbaWRdID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2FsbGJhY2tzW2lkXSh0aGlzLnBlbmRpbmdQYXlsb2FkKTtcclxuXHRcdHRoaXMuaXNIYW5kbGVkW2lkXSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXJ0RGlzcGF0Y2hpbmcocGF5bG9hZDogRGlzcGF0Y2hlckFjdGlvbik6IHZvaWQge1xyXG5cdFx0Zm9yIChsZXQgaWQgaW4gdGhpcy5jYWxsYmFja3MpIHtcclxuXHRcdFx0dGhpcy5pc1BlbmRpbmdbaWRdID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNIYW5kbGVkW2lkXSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wZW5kaW5nUGF5bG9hZCA9IHBheWxvYWQ7XHJcblx0XHR0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdG9wRGlzcGF0Y2hpbmcoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBlbmRpbmdQYXlsb2FkID0gbnVsbDtcclxuXHRcdHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==