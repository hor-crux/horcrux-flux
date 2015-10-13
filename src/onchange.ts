import { Store } from './store';
import { get } from 'horcrux-di';

function onChange(clazz:typeof Store): MethodDecorator {
	return (target: any, propertyKey: string | symbol, descriptor: any) => {
		let store = get(clazz);
		target.onCreated.push(component => {
			store.register(component[propertyKey], component);
		});
	}
}

export {onChange}