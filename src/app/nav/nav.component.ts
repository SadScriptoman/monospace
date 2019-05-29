import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {


  constructor(private svc : TranslationService ){}

  ngOnInit() {
  }

}
