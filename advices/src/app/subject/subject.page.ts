import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../advice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  results =  []
  subject: string

  constructor(public service: AdviceService) { }

  ngOnInit() {
  }

  

  getAdvicesAbout() {
    this.service.getAdvicesAbout(this.subject)
      .subscribe(
        (response) => {
          this.results = response.slips;
          console.log("advices =" + JSON.stringify(response.slips))
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
