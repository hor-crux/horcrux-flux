/**
 * An dispatchable action
 */
interface DispatcherAction {
	/**
	 * specifies the type of action. Should by unique
	 */
	type:string;
	
	/**
	 * Additional payload.
	 */
	data?:any;
}