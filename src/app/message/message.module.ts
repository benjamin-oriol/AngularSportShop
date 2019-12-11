import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesService } from '../messages.service';
import { MessageComponent } from './message.component';

 

@NgModule({
  declarations: [MessageComponent],
  imports: [
    BrowserModule
  ],
  exports: [ 
    MessageComponent
  ],
  providers: [
    MessagesService
  ],
})
export class MessageModule { }
