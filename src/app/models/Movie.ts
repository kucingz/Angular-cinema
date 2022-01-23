export class MovieModel {
  public id;

  constructor(
    public title: string,
    public image: string,
    public duration: number,
    public description: string,
    id?: number
  ) {
    if (id) this.id = id;
    else this.id = 0;
  }

  get _id(): number {
    return this.id;
  }
  get _title(): string {
    return this.title;
  }
  get _duration(): number {
    return this.duration;
  }
  get _image(): string {
    return this.image;
  }
  get _description(): string {
    return this.description;
  }

  set _id(_id: number) {
    this.id = _id;
  }
  set _title(_title: string) {
    this.title = _title;
  }
  set _duration(_duration: number) {
    this.duration = _duration;
  }
  set _image(_image: string) {
    this.image = _image;
  }
  set _description(_description: string) {
    this.description = _description;
  }
}
