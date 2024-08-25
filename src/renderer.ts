import { SlotInit, SpinInfo, Symbol } from './types';

let symbols: Symbol[] = [];
let reelCount: number = 0;

const resultText = document.getElementById('result');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');

const showPopup = (text: string): void => {
    popupText.innerText = text;
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
};

// @ts-ignore
window.electronAPI.onSpinInfo((info: SpinInfo) => {
    console.log(info);

    if (info.reward == 0) {
        showPopup('You lose!');
    } else {
        let res = '';

        info.combo.forEach((c) => {
            res += ` ${c.name}`;
        });

        resultText.innerText = res;
        showPopup(`Reward, You have been rewarded ${info.reward} candy`);
    }
});

// @ts-ignore
window.electronAPI.onInit((info: SlotInit) => {
    symbols = info.symbols;
    reelCount = info.reelCount;
});

window.onload = (event) => {
    console.log('Renderer loaded!');

    //@ts-ignore
    window.electronAPI.sendReady();
};