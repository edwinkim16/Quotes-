export class Quotes {
   
    showDescription: boolean;
  constructor(public name:string ,public description: string,public author:string,public completeDate: Date
    , public upVote=0,public downVote=0
     ){
        this.showDescription=false;
  }
}
