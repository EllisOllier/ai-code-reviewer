const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getMessage: () => 'Hello from Electron preload!',
});
