//import $ from "jquery";
import "bootstrap";
import "./scss/app.scss";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CcApp from "./components/cc-app.vue";

const routes: RouteConfig[] = [
    {
        path: "/*",
        component: CcApp
    }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
const app = new Vue({
    el: "#ccApp",
    template: "<router-view></router-view>",
    router
});


// const bank = new BankService();

// const createAccountAndPlayer = (name: string, balance: number): Player => {
//     const account = bank.OpenAccount(balance);
//     console.log(`Opened account #${account.accountNumber} with £${account.balance}`);
    
//     const player = new Player(name, account);
//     console.log(`Created player ${player.name}`);

//     return player;
// }

// $(() => {
//     const players: Player[] = [];
//     const $txtName = $("#txtName");
//     const $numBalance = $("#numBalance");
//     const $numTransfer = $("#numTransfer");
//     $("#btnCreatePlayer").click(() => {
//         const player = createAccountAndPlayer($txtName.val() as string, Number($numBalance.val()));
//         players.push(player);
//     });
//     $("#btnTransfer").click(() => {
//         const p1 = players[0];
//         const p2 = players[1];
//         const amount = Number($numTransfer.val());
//         bank.TransferFunds(p1.account.accountNumber, p2.account.accountNumber, amount);
//     });
//     console.clear();
// });
