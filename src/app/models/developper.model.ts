import { Skill } from "./skill.model";

export class Developper {
    constructor(
        public lastname:string= '',
        public firstname:string = '',
        public age:number= 0,
        public gender:string= '',
        public bio:string= '',
        public skills:Skill[]= [] ){};
}