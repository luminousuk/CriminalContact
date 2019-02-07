import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'cc-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.scss']
})
export class SelectRoleComponent implements OnInit {

  @Output() roleSelected = new EventEmitter<string>();

  constructor(
    private _roleService: RoleService
  ) { }

  ngOnInit() {
  }

  public get roles(): string[] {
    return this._roleService.roles.map(role => role.name).sort((a, b) => a.localeCompare(b));
  }

  public setRole(role: string) {
    this.roleSelected.emit(role);
  }
}
