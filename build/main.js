"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var url = require("url");
var fs = require("fs");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function (_process, _app, _ipcMain, _browserWindow) {
        Main.process = _process;
        Main.application = _app;
        Main.ipcMain = _ipcMain;
        Main.BrowserWindow = _browserWindow;
        Main.attachListeners();
    };
    Main.attachListeners = function () {
        Main.application.on("window-all-closed", Main.onWindowsAllClosed);
        Main.application.on("activate", Main.onActivate);
        Main.application.on("ready", Main.onReady);
        Main.ipcMain.on("getFiles", Main.getFiles);
    };
    Main.onClose = function () {
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        Main.mainWindow = new Main.BrowserWindow({
            height: 768,
            width: 1024,
            show: false
            // webPreferences: {
            //     nodeIntegration: false
            // }
        });
        Main.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "../build/CriminalContact/index.html"),
            protocol: "file:",
            slashes: true
        }));
        //Main.mainWindow.webContents.openDevTools();
        Main.mainWindow.on("closed", Main.onClose);
        Main.mainWindow.on("ready-to-show", Main.onReadyToShow);
    };
    Main.onReadyToShow = function () {
        Main.mainWindow.show();
        Main.mainWindow.focus();
    };
    Main.onWindowsAllClosed = function () {
        if (Main.process.platform !== "darwin") {
            Main.application.quit();
        }
    };
    Main.onActivate = function () {
        if (Main.mainWindow === null) {
            Main.onReady();
        }
    };
    Main.getFiles = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var files = fs.readdirSync(__dirname);
        Main.mainWindow.webContents.send("getFilesResponse", files);
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=main.js.map