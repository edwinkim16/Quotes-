export class Quotes {
    showDescription: boolean;
  constructor(public author:string,public name: string,public description: string,public completeDate: Date){
    this.showDescription=false;
  }
}
