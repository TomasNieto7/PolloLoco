/* eslint-disable import/first */
import { app as _app, BrowserWindow as _BrowserWindow } from 'electron'
const app = _app;
const BrowserWindow = _BrowserWindow;
// eslint-disable-next-line import/first
import { join } from 'path'
import isDev from 'electron-is-dev'

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`);

  if (isDev) {
    // Abre las herramientas de desarrollo
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})
