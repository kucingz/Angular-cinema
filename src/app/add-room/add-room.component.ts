import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RoomModel } from '../models/Room';
import { Room } from '../Room';
import { RoomService } from '../services/room.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  roomForm!: FormGroup;
  rooms: Room[] = [];
  constructor(
    private formbuilder: FormBuilder,
    private location: Location,
    private roomService: RoomService
  ) {
    this.roomForm = this.formbuilder.group({
      room: new FormControl([], [Validators.required]),
      seats: new FormControl(
        [],
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ),
    });
  }

  ngOnInit(): void {}

  get room() {
    return this.roomForm.get('title');
  }
  get seats() {
    return this.roomForm.get('duration');
  }

  onRoomAdd() {
    let room: RoomModel = new RoomModel(
      this.roomForm.value.room,
      this.roomForm.value.seats,
      []
    );
    this.roomService.addRooms(room).subscribe((rooms) => this.rooms.push(room));
    alert('Succes! You have added a room');
    this.roomForm.reset();
    this.location.back();
  }
}
