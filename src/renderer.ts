import { SpinInfo, Symbol } from './types';

console.log('Renderer loaded!');

let symbols: Symbol[] = [];

// @ts-ignore
window.electronAPI.onSpinInfo((info: SpinInfo) => {
    console.log(info);
});

// @ts-ignore
window.electronAPI.onInit((info: Symbol[]) => {
    console.log(info);
    symbols = info;
});