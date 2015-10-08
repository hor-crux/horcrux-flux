import CallbackHolder from "./callbackholder"
import Dispatcher from "./dispatcher"
import {inject} from "horcrux-di"

class Store<T> extends CallbackHolder {

	@inject(Dispatcher)
	protected dispatcher: Dispatcher

	static handlerMap: any = {};
	
	public id: string;
	protected data: T;
	
	constructor() {
		super();
		this.id = this.dispatcher.register(this.handle.bind(this));
	}
	
	public register(callback: (data:T)=>void, self?:any): string {
		return super.register(callback, self);
	}
		
	protected handle(action: DispatcherAction): void {
		let handlerMap = (<any>this.constructor).handlerMap;
		let handlers = handlerMap[action.type] || [];
		
		handlers.forEach(handler => {
			handler.call(this, action.data);
		})
	};
	
	
	protected changed(): void {
		for (let id in this.callbacks) {
			let cb = this.callbacks[id];
			if(cb)
				cb(this.data);
		}
	}
}

function handle(type:string): MethodDecorator {
	return (target: typeof Store, propertyKey: string | symbol, descriptor: any) => {
		target.handlerMap = target.handlerMap || {};
		target.handlerMap[type] = target.handlerMap[type] || [];
		target.handlerMap[type].push(target[propertyKey]);
	}
}

export {Store, handle}