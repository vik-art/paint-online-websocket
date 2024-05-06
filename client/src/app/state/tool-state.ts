import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";

@Injectable({
    providedIn: "root",
})
export class ToolService {
    tool = null;
    constructor() {
         makeObservable(this)
    }
    
    setTool(tool: any) {
        this.tool = tool;
    }
}
