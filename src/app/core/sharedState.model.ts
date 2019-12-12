import { InjectionToken } from '@angular/core';

//Un enum permet de faire le choix parmis plusieurs propositions
export enum MODES { 
    CREATE, EDIT
}

export class SharedState { 
    constructor(public mode: MODES, public id?:number){}
}

export const SHARED_STATE = new InjectionToken('shared_share');