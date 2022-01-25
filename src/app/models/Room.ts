export class RoomModel {
  public id;

  constructor(
    public room: string,
    public seats: number,
    public reservedSeats: number[],
    id?: number
  ) {
    if (id) this.id = id;
    else this.id = 0;
  }

  get _id(): number {
    return this.id;
  }

  get _room(): string {
    return this.room;
  }

  get _seats(): number {
    return this.seats;
  }

  get _reservedSeats(): number[] {
    return this.reservedSeats;
  }

  set _id(_id: number) {
    this.id = _id;
  }

  set _room(_room: string) {
    this.room = _room;
  }
  set _seats(_seats: number) {
    this.seats = _seats;
  }

  set _reservedSeats(_reservedSeats: number[]) {
    this.reservedSeats = _reservedSeats;
  }
}
