import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { BankService } from '../../services/bank.service';

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
    private readonly _bankService: BankService
  ) { }

  ngOnInit() {
  }

  public setDepositPlayer(player: Player) {
    this.depositPlayer = player;
  }

  public setWithdrawPlayer(player: Player) {
    this.withdrawPlayer = player;
  }

  public setTransferPayor(player: Player) {
    this.transferPayor = player;
  }

  public setTransferPayee(player: Player) {
    this.transferPayee = player;
  }

  public deposit(): void {
    this._bankService.Deposit(this.depositPlayer.account.accountNumber, this.depositAmount);
  }

  public withdraw(): void {
    this._bankService.Withdraw(this.withdrawPlayer.account.accountNumber, this.withdrawAmount);
  }

  public transfer(): void {
    const from = this.transferPayor.account.accountNumber;
    const to = this.transferPayee.account.accountNumber;
    this._bankService.TransferFunds(from, to, this.transferAmount);
    this.transferPayor = null;
    this.transferPayee = null;
    this.transferAmount = null;
  }

}
