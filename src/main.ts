import {app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev'; // New Import
import path from 'path';

function createWindow(): void {
    const windowOptions = {
        width: 1200,
        height: 800,
        darkTheme: true,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'dist/preload.js')
        }
    };
    let win = new BrowserWindow(windowOptions);
    if (isDev)
        console.log("We are now in development environment.\n")
    win.loadURL(
        isDev
            ? 'http://localhost:9000'
            : `file://${app.getAppPath()}/dist/index.html`,
    );
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
});
