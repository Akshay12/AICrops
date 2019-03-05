import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var options = {
        url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId?isauthcode=true&identityprovider=quicksight&code=authcode",
        container: document.getElementById("dashboardContainer"),
        parameters: {
            country: "United States",
            states: [
                "California",
                "Washington"
            ]
        },
        scrolling: "no",
        height: "700px",
        width: "1000px"
    };
  }

}
