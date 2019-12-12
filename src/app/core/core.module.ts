//Le core manage l'ensemble de mes composants

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';
import { SharedState, SHARED_STATE } from './sharedState.model';
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';
import { MessageModule } from '../message/message.module';
import { MessagesService } from '../messages.service';
import { Message } from '../message/model';
import { Model } from '../model/repository.model';
import { MODES } from './sharedState.model';
import { routing } from '../app.routing';



@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    StatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    routing
  ],
  exports: [ModelModule, TableComponent, FormComponent],
  providers : [{provide : SHARED_STATE,
     deps:[MessagesService, Model],
      useFactory: (messageService, model) => {let subject = new Subject<SharedState>();
      subject.subscribe(m=> messageService.reportMessage(
        new Message(MODES[m.mode] + (m.id != undefined 
          ? ` ${model.getProduct(m.id).name}` : "")))
      );
      return subject;
      }
  }]
})
export class CoreModule { }
