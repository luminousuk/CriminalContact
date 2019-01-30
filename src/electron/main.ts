import { BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

export default class Main {
    public static mainWindow: Electron.BrowserWindow|null;
    public static application: Electron.App;
    public static process: NodeJS.Process;
    public static BrowserWindow: typeof Electron.BrowserWindow;

    public static main(
        process: NodeJS.Process,
        app: Electron.App,
        browserWindow: typeof BrowserWindow
    ) {
        Main.process = process;
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowsAllClosed);
        Main.application.on("activate", Main.onActivate);
        Main.application.on("ready", Main.onReady);
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
                pathname: path.join(__dirname, "../../dist/CriminalContact/index.html"),
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
}
