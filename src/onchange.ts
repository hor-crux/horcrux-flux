import { get } from 'horcrux-di';
import { Store } from './store';

function onChange(clazz:typeof Store): MethodDecorator {
	return (target: any, propertyKey: string | symbol, descriptor: any) => {
		let store = get(clazz);
		target.onCreated = target.onCreated || [];
		target.onCreated.push(component => {
			store.register(component[propertyKey], component);
		});
	}
}

export {onChange}