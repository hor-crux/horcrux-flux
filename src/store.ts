import {CallbackHolder} from "./callbackholder"
import {Dispatcher} from "./dispatcher"
import {inject} from "horcrux-di"

class Store<T> extends CallbackHolder<(data:T)=>any> {

	@inject(Dispatcher)
	protected dispatcher: Dispatcher;

	public id: string;
	protected data: T;
	protected copyData: Boolean = true;
	
	constructor() {
		super();
		this.id = this.dispatcher.register(this.handle.bind(this));
	}
	
	public register(callback: (data:T)=>void, self?:any, callNow=true): string {
		let id = super.register(callback, self);
		
		if(!!callNow)
			this.callbacks[id](this.data);
		
		return id;
	}
		
	protected handle(action: DispatcherAction): void {
		let handlerMap = (<any>this).handlerMap || {};
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
	
	protected getData(): T {
		if(!!this.copyData) {
			return JSON.parse(JSON.stringify(this.data));
		}
		else {
			return this.data;
		}
	}
}


export {Store}