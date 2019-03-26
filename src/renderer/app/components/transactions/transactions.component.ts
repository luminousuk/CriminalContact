import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BankService } from "../../services/bank.service";
import { PlayerService } from "../../services/player.service";
import { Player } from "../../models/player.model";
import { Account } from "../../models/account.model";

@Component({
  selector: "cc-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {

  private _player: Player;
  private _account: Account;

  constructor(
    private _route: ActivatedRoute,
    private readonly _playerService: PlayerService,
    private readonly _bankService: BankService
  ) { }

  ngOnInit() {
    const playerId = this._route.snapshot.paramMap.get("playerId");
    if (!playerId) {
      return;
    }

    this._player = this._playerService.players.find(p => p.id.toString() === playerId);
    if (!this._player) {
      return;
    }

    this._account = this._bankService.GetAccount(this._player.accountNumber);
  }

  public get player(): Player {
    return this._player;
  }

  public get account(): Account {
    return this._account;
  }
}
