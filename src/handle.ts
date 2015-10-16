import { get } from "horcrux-di"
import { Dispatcher } from "./dispatcher"

function handle(type:string|number): MethodDecorator {
	return (target: any, propertyKey: string | symbol, descriptor: any) => {
		//target is an Store Prototype
		if(typeof target.handle === "function") {
			target.handlerMap = target.handlerMap || {};
			target.handlerMap[type] = target.handlerMap[type] || [];
			target.handlerMap[type].push(target[propertyKey]);
		}
		//expect target to be an CustomElement Prototype
		else {
			let dispatcher = get(Dispatcher);
			target.onCreated = target.onCreated || [];
			target.onCreated.push(self=>{
				dispatcher.register(self[propertyKey], self)
			})
		}
	}
}

export {handle}