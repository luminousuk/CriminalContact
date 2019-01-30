import { Injectable } from '@angular/core';
import { IpcRenderer } from "electron";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer;

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require("electron").ipcRenderer;
      }
      catch (error) {
        throw error;
      }
    }
    else {
      console.warn("Could not load electron ipc");
    }
  }

  async getFiles(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      this.ipc.once("getFilesResponse", (event, arg) => {
        resolve(arg);
      });
      this.ipc.send("getFiles");
    });
  }
}
