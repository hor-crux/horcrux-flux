define(["require", "exports", 'horcrux-di'], function (require, exports, horcrux_di_1) {
    function onChange(clazz) {
        return function (target, propertyKey, descriptor) {
            var store = horcrux_di_1.get(clazz);
            target.onCreated.push(function (component) {
                store.register(component[propertyKey], component);
            });
        };
    }
    exports.onChange = onChange;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uY2hhbmdlLnRzIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiO0lBR0Esa0JBQWtCLEtBQWtCO1FBQ25DQSxNQUFNQSxDQUFDQSxVQUFDQSxNQUFXQSxFQUFFQSxXQUE0QkEsRUFBRUEsVUFBZUE7WUFDakVBLElBQUlBLEtBQUtBLEdBQUdBLGdCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN2QkEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsU0FBU0E7Z0JBQzlCQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxDQUFDQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNuREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0EsQ0FBQUE7SUFDRkEsQ0FBQ0E7SUFFTyxnQkFBUSxZQUZmO0lBRWdCIiwiZmlsZSI6Im9uY2hhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnaG9yY3J1eC1kaSc7XHJcblxyXG5mdW5jdGlvbiBvbkNoYW5nZShjbGF6ejp0eXBlb2YgU3RvcmUpOiBNZXRob2REZWNvcmF0b3Ige1xyXG5cdHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wsIGRlc2NyaXB0b3I6IGFueSkgPT4ge1xyXG5cdFx0bGV0IHN0b3JlID0gZ2V0KGNsYXp6KTtcclxuXHRcdHRhcmdldC5vbkNyZWF0ZWQucHVzaChjb21wb25lbnQgPT4ge1xyXG5cdFx0XHRzdG9yZS5yZWdpc3Rlcihjb21wb25lbnRbcHJvcGVydHlLZXldLCBjb21wb25lbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQge29uQ2hhbmdlfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==