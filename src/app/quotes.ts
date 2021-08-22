export class Quotes {
   
    showDescription: boolean;
  constructor(public name:string ,public description: string,public author:string
     ){
        this.showDescription=false;
  }
}
