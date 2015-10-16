define(["require", "exports", 'horcrux-di'], function (require, exports, horcrux_di_1) {
    function onChange(clazz) {
        return function (target, propertyKey, descriptor) {
            var store = horcrux_di_1.get(clazz);
            target.onCreated = target.onCreated || [];
            target.onCreated.push(function (component) {
                store.register(component[propertyKey], component);
            });
        };
    }
    exports.onChange = onChange;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uY2hhbmdlLnRzIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiO0lBR0Esa0JBQWtCLEtBQWtCO1FBQ25DQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFXQSxFQUFFQSxXQUE0QkEsRUFBRUEsVUFBZUE7WUFDakVBLElBQUlBLEtBQUtBLEdBQUdBLGdCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN2QkEsTUFBTUEsQ0FBQ0EsU0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDMUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLFNBQVNBO2dCQUM5QkEsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDbkRBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRU8sZ0JBQVEsWUFGZjtJQUVnQiIsImZpbGUiOiJvbmNoYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2hvcmNydXgtZGknO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZnVuY3Rpb24gb25DaGFuZ2UoY2xheno6dHlwZW9mIFN0b3JlKTogTWV0aG9kRGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBhbnkpID0+IHtcclxuXHRcdGxldCBzdG9yZSA9IGdldChjbGF6eik7XHJcblx0XHR0YXJnZXQub25DcmVhdGVkID0gdGFyZ2V0Lm9uQ3JlYXRlZCB8fCBbXTtcclxuXHRcdHRhcmdldC5vbkNyZWF0ZWQucHVzaChjb21wb25lbnQgPT4ge1xyXG5cdFx0XHRzdG9yZS5yZWdpc3Rlcihjb21wb25lbnRbcHJvcGVydHlLZXldLCBjb21wb25lbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge29uQ2hhbmdlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==