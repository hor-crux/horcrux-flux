/**
 * An dispatchable action
 */
interface DispatcherAction {
	/**
	 * specifies the type of action. Should by unique
	 */
	type:string|number;
	
	/**
	 * Additional payload.
	 */
	data?:any;
}