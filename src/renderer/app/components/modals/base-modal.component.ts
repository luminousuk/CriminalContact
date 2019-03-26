import { Component, Output, EventEmitter } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

@Component({
    template: ""
})
export class BaseModalComponent<T> {
    constructor(
        protected readonly _bsModalRef: BsModalRef
    ) { }

    public title: string;

    @Output()
    public result: EventEmitter<T> = new EventEmitter<T>();

    public Close(): void {
        this._bsModalRef.hide();
    }
}
