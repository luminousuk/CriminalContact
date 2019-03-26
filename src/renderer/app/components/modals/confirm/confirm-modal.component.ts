import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

import { BaseModalComponent } from "../base-modal.component";

@Component({
  templateUrl: "./confirm-modal.component.html"
})
export class ConfirmModalComponent extends BaseModalComponent<boolean> implements OnInit {

  public title: string;
  public text: string;

  constructor(
    protected readonly _bsModalRef: BsModalRef
  ) {
    super(_bsModalRef);
  }

  ngOnInit() {
  }

  public Yes(): void {
    this.result.emit(true);
    this.Close();
  }

  public No(): void {
    this.result.emit(false);
    this.Close();
  }

}
