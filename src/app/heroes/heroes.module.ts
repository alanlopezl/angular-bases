import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { HeroesComponent } from './heroes.component';



@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    HeroesComponent

  ],
  imports:[
      CommonModule
    ]


})

export class HeroesModule{}
