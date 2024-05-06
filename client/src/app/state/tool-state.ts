import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";

@Injectable({
    providedIn: "root",
})
export class ToolService {
    tool: any = null;
    constructor() {
         makeObservable(this)
    }
    
    setTool(tool: any) {
        this.tool = tool;
    }

    setFillColor(color: any) {
        if(this.tool)
        this.tool.fillColor = color;
    }

    setStrokeColor(color: any) {
        if(this.tool)
        this.tool.strokeColor = color;
    }

    setLineWidth(width: any) {
        if(this.tool)
        this.tool.lineWidth = width;
    }
}
