declare module "horcrux-flux" {
export {	Dispatcher,	Store,	handle,	onChange}
 class CallbackHolder<T extends Function> {
    protected prefix: string;
    protected lastID: number;
    protected callbacks: {
        [key: string]: T;
    };
    /**
     * Registeres an callback to the CallbackHolder.
     * @param callback the callback function
     * @param self if given, self will be bound as 'this' to the callback function
     * @return unique id that can be used to unregister the callback
     */
    register(callback: T, self?: any): string;
    /**
     * Unregisteres an callback from the CallbackHolder.
     * @param id unique id of the callback to unregister
     */
    unregister(id: any): void;
}
/**
 * Main Dispatcher Class.
 * Used to Dispatch actions across all registered listeners.
 */
 class Dispatcher extends CallbackHolder<(action: DispatcherAction) => any> {
    private isPending;
    private isHandled;
    private isDispatching;
    private pendingPayload;
    /**
     * Waits for all listeners with specified ids to handle the current action.
     * @param ids ids of the listeners to wait for
     */
    waitFor(...ids: Array<string>): void;
    /**
     * Dispatches an action to all registered listeners.
     * @param action the action to dispatch
     */
    dispatch(action: DispatcherAction): void;
    private invokeCallback(id);
    private startDispatching(payload);
    private stopDispatching();
}
/**
 * An dispatchable action
 */
interface DispatcherAction {
    /**
     * specifies the type of action. Should by unique
     */
    type: string | number;
    /**
     * Additional payload.
     */
    data?: any;
}
 function handle(...types: Array<string | number>): MethodDecorator;
 class Store<T> extends CallbackHolder<(data: T) => any> {
    protected dispatcher: Dispatcher;
    id: string;
    protected data: T;
    protected copyData: Boolean;
    constructor();
    register(callback: (data: T) => void, self?: any, callNow?: boolean): string;
    protected handle(action: DispatcherAction): void;
    protected changed(): void;
    protected getData(): T;
}
 function onChange(clazz: typeof Store): MethodDecorator;
}