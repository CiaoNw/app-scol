import { ISpecialite } from "../models/ispecialite";

export class Specialite implements ISpecialite{
    constructor(
        public _libelle:string,
        public _idSpec: number
    ) {}
}
