import { contextBridge, ipcRenderer } from 'electron/renderer';
import { SpinInfo, Symbol } from './types';

contextBridge.exposeInMainWorld('electronAPI', {
  onSpinInfo: (callback: (upd: SpinInfo) => void) => ipcRenderer.on('spin-info', (_event, value) => callback(value)),
  onInit: (callback: (info: Symbol[]) => void) => ipcRenderer.on('init', (_event, value) => callback(value)),
  sendReady: () => ipcRenderer.send('ready')
})