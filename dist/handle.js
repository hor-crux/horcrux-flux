define(["require", "exports", "horcrux-di", "./dispatcher"], function (require, exports, horcrux_di_1, dispatcher_1) {
    function handle() {
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i - 0] = arguments[_i];
        }
        return function (target, propertyKey, descriptor) {
            //target is an Store Prototype
            if (typeof target.handle === "function") {
                types.forEach(function (type) {
                    target.handlerMap = target.handlerMap || {};
                    target.handlerMap[type] = target.handlerMap[type] || [];
                    target.handlerMap[type].push(target[propertyKey]);
                });
            }
            else {
                var dispatcher = horcrux_di_1.get(dispatcher_1.Dispatcher);
                target.onCreated = target.onCreated || [];
                types.forEach(function (type) {
                    target.onCreated.push(function (self) {
                        (function (self) {
                            dispatcher.register(function (action) {
                                if (action.type === type && typeof self[propertyKey] === "function")
                                    self[propertyKey].call(self, action);
                            });
                        })(self);
                    });
                });
            }
        };
    }
    exports.handle = handle;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZS50cyJdLCJuYW1lcyI6WyJoYW5kbGUiXSwibWFwcGluZ3MiOiI7SUFHQTtRQUFnQkEsZUFBNkJBO2FBQTdCQSxXQUE2QkEsQ0FBN0JBLHNCQUE2QkEsQ0FBN0JBLElBQTZCQTtZQUE3QkEsOEJBQTZCQTs7UUFDNUNBLE1BQU1BLENBQUNBLFVBQUNBLE1BQVdBLEVBQUVBLFdBQTRCQSxFQUFFQSxVQUFlQTtZQUNqRUEsOEJBQThCQTtZQUM5QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsT0FBT0EsTUFBTUEsQ0FBQ0EsTUFBTUEsS0FBS0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxJQUFJQTtvQkFDakJBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLENBQUNBO29CQUM1Q0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQ3hEQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkRBLENBQUNBLENBQUNBLENBQUNBO1lBQ0pBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLENBQUNBO2dCQUNMQSxJQUFJQSxVQUFVQSxHQUFHQSxnQkFBR0EsQ0FBQ0EsdUJBQVVBLENBQUNBLENBQUNBO2dCQUNqQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7Z0JBRTFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxJQUFJQTtvQkFDakJBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLElBQUlBO3dCQUN6QkEsQ0FBQ0EsVUFBU0EsSUFBSUE7NEJBQ2IsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFBLE1BQU07Z0NBQ3pCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFVBQVUsQ0FBQztvQ0FDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7NEJBQ3ZDLENBQUMsQ0FBQyxDQUFBO3dCQUNILENBQUMsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7b0JBQ1RBLENBQUNBLENBQUNBLENBQUFBO2dCQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNKQSxDQUFDQTtRQUNGQSxDQUFDQSxDQUFBQTtJQUNGQSxDQUFDQTtJQUVPLGNBQU0sVUFGYjtJQUVjIiwiZmlsZSI6ImhhbmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gXCJob3JjcnV4LWRpXCJcclxuaW1wb3J0IHsgRGlzcGF0Y2hlciB9IGZyb20gXCIuL2Rpc3BhdGNoZXJcIlxyXG5cclxuZnVuY3Rpb24gaGFuZGxlKC4uLnR5cGVzOkFycmF5PHN0cmluZ3xudW1iZXI+KTogTWV0aG9kRGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBhbnkpID0+IHtcclxuXHRcdC8vdGFyZ2V0IGlzIGFuIFN0b3JlIFByb3RvdHlwZVxyXG5cdFx0aWYodHlwZW9mIHRhcmdldC5oYW5kbGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHR0eXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xyXG5cdFx0XHRcdHRhcmdldC5oYW5kbGVyTWFwID0gdGFyZ2V0LmhhbmRsZXJNYXAgfHwge307XHJcblx0XHRcdFx0dGFyZ2V0LmhhbmRsZXJNYXBbdHlwZV0gPSB0YXJnZXQuaGFuZGxlck1hcFt0eXBlXSB8fCBbXTtcclxuXHRcdFx0XHR0YXJnZXQuaGFuZGxlck1hcFt0eXBlXS5wdXNoKHRhcmdldFtwcm9wZXJ0eUtleV0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdC8vZXhwZWN0IHRhcmdldCB0byBiZSBhbiBDdXN0b21FbGVtZW50IFByb3RvdHlwZVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxldCBkaXNwYXRjaGVyID0gZ2V0KERpc3BhdGNoZXIpO1xyXG5cdFx0XHR0YXJnZXQub25DcmVhdGVkID0gdGFyZ2V0Lm9uQ3JlYXRlZCB8fCBbXTtcclxuXHRcdFx0XHJcblx0XHRcdHR5cGVzLmZvckVhY2godHlwZSA9PiB7XHJcblx0XHRcdFx0dGFyZ2V0Lm9uQ3JlYXRlZC5wdXNoKHNlbGY9PntcclxuXHRcdFx0XHRcdChmdW5jdGlvbihzZWxmKXtcclxuXHRcdFx0XHRcdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcihhY3Rpb24gPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmKGFjdGlvbi50eXBlID09PSB0eXBlICYmIHR5cGVvZiBzZWxmW3Byb3BlcnR5S2V5XSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZltwcm9wZXJ0eUtleV0uY2FsbChzZWxmLCBhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSkoc2VsZilcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7aGFuZGxlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==