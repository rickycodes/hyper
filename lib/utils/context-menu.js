import electron from 'electron';

const {
  remote: {
    app: {contextMenuTemplate}, Menu, getCurrentWindow
  }
} = electron;

export default () => {
  const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);
  setTimeout(() => contextMenu.popup(getCurrentWindow()), 100);
};
