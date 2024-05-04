import { makeObservable } from "mobx";


class ToolState {
    constructor() {
         makeObservable(this)
     }
}