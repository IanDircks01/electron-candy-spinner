export interface SpinInfo {
    combo: Symbol[];
    reward: number;
};

export interface Config {
    reels: number;
}

export interface Symbol {
    name: string;
    value: number;
}

export interface SlotConfig {
    cfg: Config;
    symbols: Symbol[];
}