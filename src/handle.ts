import { get } from "horcrux-di"
import { Dispatcher } from "./dispatcher"

function handle(...types:Array<string|number>): MethodDecorator {
	return (target: any, propertyKey: string | symbol, descriptor: any) => {
		//target is an Store Prototype
		if(typeof target.handle === "function") {
			types.forEach(type => {
				target.handlerMap = target.handlerMap || {};
				target.handlerMap[type] = target.handlerMap[type] || [];
				target.handlerMap[type].push(target[propertyKey]);
			});
		}
		//expect target to be an CustomElement Prototype
		else {
			let dispatcher = get(Dispatcher);
			target.onCreated = target.onCreated || [];
			
			types.forEach(type => {
				target.onCreated.push(self=>{
					(function(self){
						dispatcher.register(action => {
							if(action.type === type && typeof self[propertyKey] === "function")
								self[propertyKey].call(self, action);
						})
					})(self)
				})
			});
		}
	}
}

export {handle}