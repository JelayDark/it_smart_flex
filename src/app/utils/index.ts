export const getSeconds = (ticks: number) => Math.floor(ticks / 100) % 60;
export const getMiliSeconds = (ticks: number) => ticks % 100;
export const getMinutes = (ticks: number) => (Math.floor(ticks / 100 / 60)) % 60;
