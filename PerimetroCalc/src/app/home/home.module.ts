import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    SharedModule,

    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
