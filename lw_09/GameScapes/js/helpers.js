
// richiama elementi statici dal DOM
export const find = (selector) => document.querySelector(selector);

// richiama elementi per classe
export const findAll = (selector) => document.querySelectorAll(selector);

// crea nuovi elementi dinamicamente
export const createEl = (selector) => document.createElement(selector);

// console.log rapido
export const log = (data) => console.log(data);