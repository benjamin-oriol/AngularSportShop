import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './message/message.module';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { MessageComponent } from './message/message.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
