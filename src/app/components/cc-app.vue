<template>
<div class="container">
    <div class="text-center">
        <h1>Criminal Contact</h1>
    </div>
    <div class="form-row">
        <div class="col">
            <div class="form-group">
                <label for="txtName">Name</label>
                <input type="text" class="form-control" id="txtName" v-model="txtPlayerName">
            </div>
            <div class="form-group">
                <label for="numBalance">Balance</label>
                <input type="number" class="form-control" id="numBalance" v-model="numPlayerBalance">
            </div>
            <button class="btn btn-primary" @click="addPlayer">Create Player</button>
        </div>
    </div>
    <div class="form-row mt-2">
        <div class="col">
            <div class="form-group">
                <label for="numTransfer">Transfer</label>
                <input type="number" class="form-control" id="numTransfer" v-model="numTransferAmount">
            </div>
            <button class="btn btn-primary" @click="transfer">Transfer</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class CcApp extends Vue {

    public txtPlayerName: string = "Jeff";
    public numPlayerBalance: number = 500;
    public numTransferAmount: number = 100;

    public addPlayer(): void {
        const name = this.txtPlayerName.trim();
        const balance = this.numPlayerBalance;
        console.log(`${name} ${balance}`);
    }

    public transfer(): void {
        const amount = this.numTransferAmount;
        console.log(`Transferring ${amount}`);
    }
}

interface AppState {
    newPlayerName: string;
    newPlayerBalance: number;
}

</script>