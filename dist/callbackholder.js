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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNraG9sZGVyLnRzIl0sIm5hbWVzIjpbIkNhbGxiYWNrSG9sZGVyIiwiQ2FsbGJhY2tIb2xkZXIuY29uc3RydWN0b3IiLCJDYWxsYmFja0hvbGRlci5yZWdpc3RlciIsIkNhbGxiYWNrSG9sZGVyLnVucmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7SUFBQTtRQUFBQTtZQUVXQyxXQUFNQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUN2QkEsV0FBTUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLGNBQVNBLEdBQTRCQSxFQUFFQSxDQUFDQTtRQXVCbkRBLENBQUNBO1FBckJBRDs7Ozs7V0FLR0E7UUFDSUEsaUNBQVFBLEdBQWZBLFVBQWdCQSxRQUFrQkEsRUFBRUEsSUFBVUE7WUFDN0NFLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ3JDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUMzREEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDWEEsQ0FBQ0E7UUFFREY7OztXQUdHQTtRQUNJQSxtQ0FBVUEsR0FBakJBLFVBQWtCQSxFQUFFQTtZQUNuQkcsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSx1Q0FBdUNBLEdBQUdBLEVBQUVBLENBQUNBO1lBQ3BEQSxPQUFPQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMzQkEsQ0FBQ0E7O1FBQ0ZILHFCQUFDQTtJQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtJQUVPLHNCQUFjLGtCQUZyQjtJQUVzQiIsImZpbGUiOiJjYWxsYmFja2hvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGxiYWNrSG9sZGVyIHtcclxuXHJcblx0cHJvdGVjdGVkIHByZWZpeDogc3RyaW5nID0gJ0lEXyc7XHJcblx0cHJvdGVjdGVkIGxhc3RJRDogbnVtYmVyID0gMTtcclxuXHRwcm90ZWN0ZWQgY2FsbGJhY2tzOiB7W2tleTpzdHJpbmddOkZ1bmN0aW9ufSA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcmVzIGFuIGNhbGxiYWNrIHRvIHRoZSBDYWxsYmFja0hvbGRlci5cclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHNlbGYgaWYgZ2l2ZW4sIHNlbGYgd2lsbCBiZSBib3VuZCBhcyAndGhpcycgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0ICogQHJldHVybiB1bmlxdWUgaWQgdGhhdCBjYW4gYmUgdXNlZCB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogRnVuY3Rpb24sIHNlbGY/OiBhbnkpOiBzdHJpbmcge1xyXG5cdFx0bGV0IGlkID0gdGhpcy5wcmVmaXggKyB0aGlzLmxhc3RJRCsrO1xyXG5cdFx0dGhpcy5jYWxsYmFja3NbaWRdID0gc2VsZiA/IGNhbGxiYWNrLmJpbmQoc2VsZikgOiBjYWxsYmFjaztcclxuXHRcdHJldHVybiBpZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVucmVnaXN0ZXJlcyBhbiBjYWxsYmFjayBmcm9tIHRoZSBDYWxsYmFja0hvbGRlci5cclxuXHQgKiBAcGFyYW0gaWQgdW5pcXVlIGlkIG9mIHRoZSBjYWxsYmFjayB0byB1bnJlZ2lzdGVyXHJcblx0ICovXHJcblx0cHVibGljIHVucmVnaXN0ZXIoaWQpIHtcclxuXHRcdGlmKCF0aGlzLmNhbGxiYWNrc1tpZF0pXHJcblx0XHRcdHRocm93ICdDb3VsZCBub3QgdW5yZWdpc3RlciBjYWxsYmFjayBmb3IgaWQgJyArIGlkO1xyXG5cdFx0ZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2lkXTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQge0NhbGxiYWNrSG9sZGVyfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==