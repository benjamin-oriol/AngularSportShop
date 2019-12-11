import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Message } from './model';

@Component({
    selector : "paMessage",
    templateUrl : "message.component.html"
})

export class MessageComponent{
    lastMessage : Message;
    constructor(private messagesService: MessagesService){
        messagesService.registerMessageHandler(m => this.lastMessage = m)
    }
}
