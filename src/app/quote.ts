export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public creationDate:Date,
    public likes:number,
    public dislikes:number){

    this.showDescription=false;
  }
}
