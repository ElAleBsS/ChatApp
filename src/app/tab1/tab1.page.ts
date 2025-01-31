import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  chats: any[] = [
    {
      username: "Alex BS",
      message: "Hola",
      date: "1:23",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Joss",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Sandra Malandra",
      message: "Extraño a mi ex",
      date: "12:23",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Brenda",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Oscar",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Yael",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Abril",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "María",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Alejandro",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Joss",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Sandra Malandra",
      message: "Extraño a mi ex",
      date: "12:23",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Brenda",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Oscar",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Yael",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Abril",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "María",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "Alejandro",
      message: "Saca el roblox",
      date: "5:00",
      avatarUrl:"https://ionicframework.com/docs/img/demos/avatar.svg"
    },
  ];
  
  constructor() {}

  ngOnInit(){

  }
}
