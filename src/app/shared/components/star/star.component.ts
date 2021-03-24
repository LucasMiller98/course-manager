import { Component, Input, OnChanges } from "@angular/core";

@Component ({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
 
export class StarComponent implements OnChanges {

  // para receber de outro component
  @Input() // A variavel fica elefivel ao component externo
  rating: number = 0

  // Tamanho da div
  starWidth: number

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5 // proporção da div. Se ela será ou não exibida
  }
  
}