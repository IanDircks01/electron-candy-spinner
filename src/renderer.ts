import { SpinInfo } from './types';

console.log('Renderer loaded!');

// @ts-ignore
window.electronAPI.onSpinInfo((info: SpinInfo) => {
    console.log(info);
});