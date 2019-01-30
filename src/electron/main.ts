import { BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from "url";
import * as fs from "fs";

export default class Main {
    public static mainWindow: Electron.BrowserWindow|null;
    public static application: Electron.App;
    public static process: NodeJS.Process;
    public static ipcMain: Electron.IpcMain;
    public static BrowserWindow: typeof Electron.BrowserWindow;

    public static main(
        _process: NodeJS.Process,
        _app: Electron.App,
        _ipcMain: Electron.IpcMain,
        _browserWindow: typeof BrowserWindow
    ) {
        Main.process = _process;
        Main.application = _app;
        Main.ipcMain = _ipcMain;
        Main.BrowserWindow = _browserWindow;
        Main.attachListeners();
    }

    private static attachListeners(): void {
        Main.application.on("window-all-closed", Main.onWindowsAllClosed);
        Main.application.on("activate", Main.onActivate);
        Main.application.on("ready", Main.onReady);

        Main.ipcMain.on("getFiles", Main.getFiles);
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static onReady() {
        Main.mainWindow = new Main.BrowserWindow({
            height: 600,
            width: 800,
            // webPreferences: {
            //     nodeIntegration: false
            // }
        });

        Main.mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "../dist/CriminalContact/index.html"),
                protocol: "file:",
                slashes: true
            })
        );

        Main.mainWindow.webContents.openDevTools();

        Main.mainWindow.on("closed", Main.onClose);
    }

    private static onWindowsAllClosed() {
        if (Main.process.platform !== "darwin") {
            Main.application.quit();
        }
    }

    private static onActivate() {
        if (Main.mainWindow === null) {
            Main.onReady();
        }
    }

    private static getFiles(event: any, ...args: any[]): void {
        const files = fs.readdirSync(__dirname);
        Main.mainWindow.webContents.send("getFilesResponse", files);
    }
}
