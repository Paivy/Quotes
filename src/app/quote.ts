export class Quote {
  public showDetails: boolean;
  public showLikes: number;
  public showDislikes: number;
  // public showTrackBy: number;

  constructor(
    public id: number,
    public name: string,
    public author: string,
    public description: string,
    public quoteDate: Date
  ) {
    this.showDetails = false;
    this.showLikes = 0;
    this.showDislikes = 0;
    // this.showTrackBy = 0;
  }
}
