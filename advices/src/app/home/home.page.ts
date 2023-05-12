import { Component } from '@angular/core';
import { AdviceService } from '../advice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: any
  constructor(public service: AdviceService) { }


  getRandomAdvice() {
    this.service.getRandomAdvice()
      .subscribe(
        (response) => {
          this.result = response.slip.advice;
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
