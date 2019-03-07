import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { BankService } from '../../services/bank.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'cc-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  public depositPlayer: Player;
  public depositAmount: number;

  public withdrawPlayer: Player;
  public withdrawAmount: number;
  
  public transferPayor: Player;
  public transferPayee: Player;
  public transferAmount: number;

  constructor(
    private readonly _bankService: BankService,
    private readonly _playerService: PlayerService
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public deposit(): void {
    this._bankService.Deposit(this.depositPlayer.accountNumber, this.depositAmount);
    this.depositPlayer = null;
    this.depositAmount = null;
  }

  public withdraw(): void {
    this._bankService.Withdraw(this.withdrawPlayer.accountNumber, this.withdrawAmount);
    this.withdrawPlayer = null;
    this.withdrawAmount = null;
  }

  public transfer(): void {
    const from = this.transferPayor.accountNumber;
    const to = this.transferPayee.accountNumber;
    this._bankService.TransferFunds(from, to, this.transferAmount);
    this.transferPayor = null;
    this.transferPayee = null;
    this.transferAmount = null;
  }
}
