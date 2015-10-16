define(["require", "exports"], function (require, exports) {
    var CallbackHolder = (function () {
        function CallbackHolder() {
            this.prefix = 'ID_';
            this.lastID = 1;
            this.callbacks = {};
        }
        /**
         * Registeres an callback to the CallbackHolder.
         * @param callback the callback function
         * @param self if given, self will be bound as 'this' to the callback function
         * @return unique id that can be used to unregister the callback
         */
        CallbackHolder.prototype.register = function (callback, self) {
            var id = this.prefix + this.lastID++;
            this.callbacks[id] = self ? callback.bind(self) : callback;
            return id;
        };
        /**
         * Unregisteres an callback from the CallbackHolder.
         * @param id unique id of the callback to unregister
         */
        CallbackHolder.prototype.unregister = function (id) {
            if (!this.callbacks[id])
                throw 'Could not unregister callback for id ' + id;
            delete this.callbacks[id];
        };
        ;
        return CallbackHolder;
    })();
    exports.CallbackHolder = CallbackHolder;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNraG9sZGVyLnRzIl0sIm5hbWVzIjpbIkNhbGxiYWNrSG9sZGVyIiwiQ2FsbGJhY2tIb2xkZXIuY29uc3RydWN0b3IiLCJDYWxsYmFja0hvbGRlci5yZWdpc3RlciIsIkNhbGxiYWNrSG9sZGVyLnVucmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7SUFBQTtRQUFBQTtZQUVXQyxXQUFNQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUN2QkEsV0FBTUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLGNBQVNBLEdBQXFCQSxFQUFFQSxDQUFDQTtRQXVCNUNBLENBQUNBO1FBckJBRDs7Ozs7V0FLR0E7UUFDSUEsaUNBQVFBLEdBQWZBLFVBQWdCQSxRQUFXQSxFQUFFQSxJQUFVQTtZQUN0Q0UsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDckNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBO1lBQzNEQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVERjs7O1dBR0dBO1FBQ0lBLG1DQUFVQSxHQUFqQkEsVUFBa0JBLEVBQUVBO1lBQ25CRyxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdEJBLE1BQU1BLHVDQUF1Q0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDcERBLE9BQU9BLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTs7UUFDRkgscUJBQUNBO0lBQURBLENBM0JBLEFBMkJDQSxJQUFBO0lBRU8sc0JBQWMsa0JBRnJCO0lBRXNCIiwiZmlsZSI6ImNhbGxiYWNraG9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsbGJhY2tIb2xkZXI8VCBleHRlbmRzIEZ1bmN0aW9uPiB7XHJcblxyXG5cdHByb3RlY3RlZCBwcmVmaXg6IHN0cmluZyA9ICdJRF8nO1xyXG5cdHByb3RlY3RlZCBsYXN0SUQ6IG51bWJlciA9IDE7XHJcblx0cHJvdGVjdGVkIGNhbGxiYWNrczoge1trZXk6c3RyaW5nXTpUfSA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcmVzIGFuIGNhbGxiYWNrIHRvIHRoZSBDYWxsYmFja0hvbGRlci5cclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHNlbGYgaWYgZ2l2ZW4sIHNlbGYgd2lsbCBiZSBib3VuZCBhcyAndGhpcycgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0ICogQHJldHVybiB1bmlxdWUgaWQgdGhhdCBjYW4gYmUgdXNlZCB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogVCwgc2VsZj86IGFueSk6IHN0cmluZyB7XHJcblx0XHRsZXQgaWQgPSB0aGlzLnByZWZpeCArIHRoaXMubGFzdElEKys7XHJcblx0XHR0aGlzLmNhbGxiYWNrc1tpZF0gPSBzZWxmID8gY2FsbGJhY2suYmluZChzZWxmKSA6IGNhbGxiYWNrO1xyXG5cdFx0cmV0dXJuIGlkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVW5yZWdpc3RlcmVzIGFuIGNhbGxiYWNrIGZyb20gdGhlIENhbGxiYWNrSG9sZGVyLlxyXG5cdCAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgb2YgdGhlIGNhbGxiYWNrIHRvIHVucmVnaXN0ZXJcclxuXHQgKi9cclxuXHRwdWJsaWMgdW5yZWdpc3RlcihpZCkge1xyXG5cdFx0aWYoIXRoaXMuY2FsbGJhY2tzW2lkXSlcclxuXHRcdFx0dGhyb3cgJ0NvdWxkIG5vdCB1bnJlZ2lzdGVyIGNhbGxiYWNrIGZvciBpZCAnICsgaWQ7XHJcblx0XHRkZWxldGUgdGhpcy5jYWxsYmFja3NbaWRdO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7Q2FsbGJhY2tIb2xkZXJ9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9