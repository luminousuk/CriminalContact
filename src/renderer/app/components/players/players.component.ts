import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { RoleService } from '../../services/role.service';
import { PlayerModalComponent, PlayerModalResult } from '../modals/player/player-modal.component';
import { ConfirmModalComponent } from "../modals/confirm/confirm-modal.component";
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'cc-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  constructor(
    private readonly _playerService: PlayerService,
    private readonly _roleService: RoleService,
    private readonly _bankService: BankService,
    private readonly _modalService: BsModalService
  ) { }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public createPlayer(): void {
    this._modalService.show(PlayerModalComponent, {
      initialState: {
        title: "Create Player"
      }
    }).content.result.subscribe(
      (player: PlayerModalResult) => {
        const newPlayer = this._playerService.createPlayer(player.firstName, player.lastName, player.startingAmount);

        if (!!player.role) {
          this._roleService.assignRole(player.role.name, newPlayer);
        }
      });
  }

  public editPlayer(player: Player): void {
    this._modalService.show(PlayerModalComponent, {
      initialState: {
        showStartingAmount: false,
        title: "Edit Player",
        firstName: player.firstName,
        lastName: player.lastName,
        role: player.role
      }
    }).content.result.subscribe(
      (updatedPlayer: PlayerModalResult) => {
        player.firstName = updatedPlayer.firstName;
        player.lastName = updatedPlayer.lastName;

        if (!updatedPlayer.role) {
          this._roleService.unassignPlayer(player);
        }
        else if (player.role !== updatedPlayer.role) {
          this._roleService.assignRole(updatedPlayer.role.name, player);
        }
      });
  }

  public deletePlayer(player: Player) {
    this._modalService.show(ConfirmModalComponent, {
      initialState: {
        title: "Delete Player",
        text: `Are you sure you wish to delete ${player.name}?`
      }
    }).content.result.subscribe(
      (result: boolean) => {
        if (!result) return;
        this._playerService.deletePlayer(player);
        this._roleService.unassignPlayer(player);
    });
  }

  public eliminatePlayer(player: Player) {
    this._modalService.show(ConfirmModalComponent, {
      initialState: {
        title: "Eliminate Player",
        text: `Are you sure you wish to eliminate ${player.name}?`
      }
    }).content.result.subscribe(
      (result: boolean) => {
        if (!result) return;

        this._playerService.eliminatePlayer(player);        

        this._modalService.show(PlayerModalComponent,
          {
            initialState: {
              title: `Create descendent of ${player.name}`,
              showRole: false,
              showStartingAmount: false,
              lastName: player.lastName,
              role: player.role
            }
          }
        ).content.result.subscribe(
            (result: PlayerModalResult) => {
              const descendentPlayer = this._playerService.createPlayer(result.firstName, result.lastName, 0);
              if (!!player.role) {
                this._roleService.transferRole(player, descendentPlayer);
              }
              const balance = this._bankService.GetAccount(player.accountNumber).balance;
              this._bankService.TransferFunds(player.accountNumber, descendentPlayer.accountNumber, balance, "Inheritance");
            }
          );
    });
  }

  public getPlayerRole(player: Player): string {
    const role = this._roleService.getRoleForPlayer(player);
    return !!role ? role.name : "";
  }

  public getPlayerBalance(player: Player): number {
    const account = this._bankService.GetAccount(player.accountNumber);
    return account.balance;
  }
}
