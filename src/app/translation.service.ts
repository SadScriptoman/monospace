import { Injectable } from '@angular/core';

import en from './translation.en.json';
import ru from './translation.ru.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public lang: string;

  changeLang(str){

    localStorage.setItem("lang", str);
    this.lang = localStorage.getItem('lang');

  }

  getText(arg){
    if (this.lang == "ru")
      return ru[arg];
    else if (this.lang == "en")
      return en[arg];
  }

  constructor() {

    if (localStorage.getItem('lang')){

      this.lang = localStorage.getItem('lang');

    }
    else{

      this.lang = "ru";
      localStorage.setItem("lang", "ru");

    }

  }
}
