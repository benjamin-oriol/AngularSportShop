import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from './model';
import { Observable } from 'rxjs';

@Component({
    selector : "paMessage",
    templateUrl : "message.component.html"
})

export class MessageComponent{
    lastMessage : Message;
    constructor(private messagesService: MessagesService){
        messagesService.messages.subscribe(m => this.lastMessage = m)
    }
}
