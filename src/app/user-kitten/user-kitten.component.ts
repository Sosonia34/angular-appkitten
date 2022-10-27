/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../Models/kitten';
/*import { ListKitten } from '../list-kitten';*/

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {
  @Input()
  chosenKitten!: Kitten;
  public userKittenList: Kitten[] = [
    {
      name: 'cherry',
      race: 'greycat',
      birthday: null,
      pic: 'http://placekitten.com/200/200',
    },
  ];
  displayInfo: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}