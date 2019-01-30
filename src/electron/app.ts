import { app, BrowserWindow, ipcMain } from "electron";
import Main from "./main";

Main.main(process, app, ipcMain, BrowserWindow);
