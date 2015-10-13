function handle(type:string|number): MethodDecorator {
	return (target: any, propertyKey: string | symbol, descriptor: any) => {
		target.handlerMap = target.handlerMap || {};
		target.handlerMap[type] = target.handlerMap[type] || [];
		target.handlerMap[type].push(target[propertyKey]);
	}
}

export {handle}