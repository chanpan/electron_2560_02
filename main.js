const electron = require("electron");
const {app, BrowserWindow,ipcMain} = electron;

let mainWin="";

app.on("ready", ()=>{
	mainWin = new BrowserWindow({ width:1200, height:600});
	mainWin.loadURL(`file://${__dirname}/index.html`);
	app.on('closed', function () { mainWin = null; app.exit() });
});
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})