const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // опционально
    },
  });

  const startPage = path.join(__dirname, 'index.html');
  win.loadFile(startPage);

  const template = [
    {
      label: 'Navigation',
      submenu: [
        {
          label: '← Back',
          click: () => win.webContents.goBack()
        },
        {
          label: '→ Forward',
          click: () => win.webContents.goForward()
        },
        {
          label: '⟳ Reload',
          click: () => win.webContents.reload()
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
