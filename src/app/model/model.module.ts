import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { Model } from './repository.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [Model, StaticDataSource]
})
export class ModelModule { }
