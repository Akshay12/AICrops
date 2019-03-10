import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
  }
  dashBoards: any = {testDashboard: '1a975f5a-faca-4d5f-a0fd-a6da4a904636'};
  activeDashboard: string = 'testDashboard';
  embedURL: string = 'https://hlpu3yky42.execute-api.us-east-1.amazonaws.com/LATEST/getDashboardEmbedURL?username=TestUser&password=TestUser01!&dashboardId=';
  embeddedDashboard: any = '';
  ngOnInit() {
    this.getDashboard('testDashboard');
  }

  getDashboard(dashboard){
    this.activeDashboard = dashboard;
    this.http.get(this.embedURL+this.dashBoards[dashboard]).subscribe(data=>{
      console.log(data);
      this.embeddedDashboard = this.sanitizer.bypassSecurityTrustResourceUrl(data['EmbedUrl']);
    });
  }
}
