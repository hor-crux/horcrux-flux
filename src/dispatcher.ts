import {register} from "horcrux-di"
import {CallbackHolder} from "./callbackholder"

/**
 * Main Dispatcher Class.
 * Used to Dispatch actions across all registered listeners.
 */
@register
class Dispatcher extends CallbackHolder<(action:DispatcherAction)=>any> {

	private isPending: {[key:string]:boolean} = {};
	private isHandled: {[key:string]:boolean} = {};
	private isDispatching: boolean = false;
	private pendingPayload: DispatcherAction = null;

	/**
	 * Waits for all listeners with specified ids to handle the current action.
	 * @param ids ids of the listeners to wait for
	 */
	public waitFor(...ids: Array<string>): void {
		if(!this.isDispatching)
			throw 'Dispatcher.waitFor(...): Must be invoked while dispatching.';

		for (let ii = 0; ii < ids.length; ii++) {
			let id = ids[ii];

			if (this.isPending[id]) {
				if(!this.isHandled[id])
					throw `waitFor(...): Circular dependency detected while wating for ${id}`;
				continue;
			}

			if(!this.callbacks[id])
				throw `waitFor(...): ${id} does not map to a registered callback.`;

			this.invokeCallback(id);
		}
	};

	/**
	 * Dispatches an action to all registered listeners.
	 * @param action the action to dispatch
	 */
	public dispatch(action: DispatcherAction) {
		if(this.isDispatching)
			throw 'Cannot dispatch in the middle of a dispatch.';

		this.startDispatching(action);

		try {
			for (let id in this.callbacks) {
				if (this.isPending[id]) {
					continue;
				}
				this.invokeCallback(id);
			}
		} finally {
			this.stopDispatching();
		}
	};

	private invokeCallback(id: string): void {
		this.isPending[id] = true;
		this.callbacks[id](this.pendingPayload);
		this.isHandled[id] = true;
	}

	private startDispatching(payload: DispatcherAction): void {
		for (let id in this.callbacks) {
			this.isPending[id] = false;
			this.isHandled[id] = false;
		}
		this.pendingPayload = payload;
		this.isDispatching = true;
	}

	private stopDispatching(): void {
		this.pendingPayload = null;
		this.isDispatching = false;
	}
}

export {Dispatcher}