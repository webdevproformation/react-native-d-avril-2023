export const a = 2;
export const b = 2;
export const c = 2;
export const d = 8;
export const e = 2;
export const f = 2;
export const g = 2;
export const h = 20;
export const i = 2;

export function division(){}
// export default function soustraction(){}
// Uncaught SyntaxError: duplicate export name 'default'

export default { 
        division : division , 
        soustraction : soustraction 
    }