export default class CallbackHolder {

	protected prefix: string = 'ID_';
	protected lastID: number = 1;
	protected callbacks: {[key:string]:Function} = {};

	/**
	 * Registeres an callback to the CallbackHolder.
	 * @param callback the callback function
	 * @param self if given, self will be bound as 'this' to the callback function
	 * @return unique id that can be used to unregister the callback
	 */
	public register(callback: Function, self?: any): string {
		let id = this.prefix + this.lastID++;
		this.callbacks[id] = self ? callback.bind(self) : callback;
		return id;
	}

	/**
	 * Unregisteres an callback from the CallbackHolder.
	 * @param id unique id of the callback to unregister
	 */
	public unregister(id) {
		if(!this.callbacks[id])
			throw 'Could not unregister callback for id ' + id;
		delete this.callbacks[id];
	};
}