import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  breadcrumb = [{title: 'chatroom'}];
  activeUser = {
    name: 'Amanda Li',
    lastSeen: 'last seen 10 minutes ago',
    avatar: 'assets/content/avatar-4.jpg'
  };
  messages = [
    {
      'date': '8 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '7 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '2 hours ago',
      'content': `Contrary to popular belief,`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '15 minutes ago',
      'content': `Lorem ipsum dolor sit.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '14 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '12 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
