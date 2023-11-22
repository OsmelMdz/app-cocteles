import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ingredientes',
  templateUrl: './card-ingredientes.component.html',
  styleUrls: ['./card-ingredientes.component.scss'],
})
export class CardIngredientesComponent  implements OnInit {

  @Input() cards3:any=[];
  
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
