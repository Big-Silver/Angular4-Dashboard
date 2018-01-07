import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Message } from './message';
import { User } from './user';

@Component({
  selector: 'ni-chat',
  templateUrl: './ni-chat.component.html',
  styleUrls: ['./ni-chat.component.scss'],
  host: {
    '[class.ni-chat]': 'true'
  }
})
export class NiChatComponent implements OnInit {
  @Input() contacts: any[] = [];
  @Input() messages: Message[] = [];
  message: Message;
  firstLetter: string;
  dialogMessages: any;

  constructor( private elementRef: ElementRef ) {
    this.dialogMessages = this.elementRef.nativeElement.getElementsByClassName('dialog-messages');
  }

  ngOnInit() {
    this.scrollToBottom(this.dialogMessages);
  }

  onSubmit( form: NgForm ){
    let messageContent: any = form.value.message;
    let newMessage: any = (messageContent !== '' && messageContent !== null) ? messageContent.replace(/(?:\r\n|\r|\n)/g, '') : messageContent;

    if (newMessage !== '' && newMessage !== null){
      messageContent = messageContent.replace(/(?:\r\n|\r|\n)/g, ' ');

      let date: any = new Date();
      let minutes: number = date.getMinutes();

      this.message = {
        date: date.getHours() + ' : ' + ((minutes > 9) ? minutes : '0' + minutes),
        content: messageContent,
        my: true,
        avatar: 'assets/content/avatar-4.jpg'
      };
      this.messages.push(this.message);

      form.reset();

      let chatDialogMessages: any = this.dialogMessages[0];

      chatDialogMessages.classList.add('add-message');
      setTimeout(function() {
        chatDialogMessages.classList.remove('add-message');
      }, 200);

      //Scroll to bottom
      this.scrollToBottom(this.dialogMessages);
    }
  }

  scrollToBottom(elem: any) {
    let eleArray = <Element[]>Array.prototype.slice.call(elem);

    setTimeout(function() {
      eleArray.map( val => {
        val.scrollTop = val.scrollHeight;
      });
    }, 0);
  }

  loadFile(event){
    event.stopPropagation();
  }
}
