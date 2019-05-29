import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.less']
})
export class PromoComponent implements OnInit {

  constructor(private svc : TranslationService ){}

  ngOnInit(){
  }

}
