//Un enum permet de faire le choix parmis plusieurs propositions
export enum MODES { 
    CREATE, EDIT
}

export class SharedState { 
    mode: MODES = MODES.EDIT    
    id:number 
}