import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import Tool from "../tools/tool";

@Injectable({
    providedIn: "root",
})
export class ToolService {
    tool!: Tool;
    constructor() {
         makeObservable(this)
    }
    
    setTool(tool: Tool) {
        console.log(tool)
        if (!tool) return;
        this.tool = tool;
    }

    setFillColor(color: string | CanvasGradient | CanvasPattern) {
        if(this.tool)
        this.tool.fillColor = color;
    }

    setStrokeColor(color: string | CanvasGradient | CanvasPattern) {
        if(this.tool)
        this.tool.strokeColor = color;
    }

    setLineWidth(width: number) {
        if(this.tool)
        this.tool.lineWidth = width;
    }
}
