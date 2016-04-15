import  * as EventEmitter from "eventemitter3";

import {Action} from "../enums/SearchAction";

export abstract class BaseStore extends EventEmitter
{
    private CHANGE_EVENT: string = "stateChanged";
    
    public addChangeListener(callback: any)
    {
        this.on(this.CHANGE_EVENT.toString(), callback);
    }
    
    public removeChangeListener(callback: any)
    {
        this.removeListener(this.CHANGE_EVENT, callback);
    }
    
    protected emitChange()
    {
        this.emit(this.CHANGE_EVENT);
    }
}