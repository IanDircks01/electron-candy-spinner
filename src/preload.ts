import { contextBridge, ipcRenderer } from 'electron/renderer';
import { SpinInfo } from './types';

contextBridge.exposeInMainWorld('electronAPI', {
  onSpinInfo: (callback: (upd: SpinInfo) => void) => ipcRenderer.on('spin-info', (_event, value) => callback(value))
  //counterValue: (value: () => void) => ipcRenderer.send('counter-value', value)
})