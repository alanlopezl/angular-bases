import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = [
    'Spiderman',
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
  ];

  public deleteHero?: string

  removeLasHero(): void{
    this.deleteHero = this.heroNames.pop();

  }


}
