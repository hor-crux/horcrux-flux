declare module "horcrux-flux" {
export {	Dispatcher,	Store,	handle}
class CallbackHolder {
    protected prefix: string;
    protected lastID: number;
    protected callbacks: {
        [key: string]: Function;
    };
    /**
     * Registeres an callback to the CallbackHolder.
     * @param callback the callback function
     * @param self if given, self will be bound as 'this' to the callback function
     * @return unique id that can be used to unregister the callback
     */
    register(callback: Function, self?: any): string;
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
class Dispatcher extends CallbackHolder {
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
 class Store<T> extends CallbackHolder {
    protected dispatcher: Dispatcher;
    static handlerMap: any;
    id: string;
    protected data: T;
    constructor();
    register(callback: (data: T) => void, self?: any): string;
    protected handle(action: DispatcherAction): void;
    protected changed(): void;
}
 function handle(type: string): MethodDecorator;
}