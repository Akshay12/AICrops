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

  titles =['Locations', 'Crops', 'Trends','Compare','Predict'];
  pictures = [
    {
      id: 1,
      title: 'Corn',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Wheat',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Crops',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'history',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'sorghum',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];
  dashBoards: any = {testDashboard: '1a975f5a-faca-4d5f-a0fd-a6da4a904636', testDashboard2: '81c6c87f-6f3a-43f7-8b97-227b8db06607'};
  activeDashboard: string = 'testDashboard';
  embedURL: string = 'https://hlpu3yky42.execute-api.us-east-1.amazonaws.com/LATEST/getDashboardEmbedURL?username=TestUser&password=TestUser01!&dashboardId=';
  embeddedDashboard: any = '';
  state: string = '';
  ngOnInit() {
    //this.getDashboard('testDashboard');
  }

  getDashboard(dashboard, filterType, filterValue){
    let embedURL = '';
    this.activeDashboard = dashboard;
    embedURL = this.embedURL+this.dashBoards[dashboard];
    this.http.get(embedURL).subscribe(data=>{
      console.log(data);
      this.embeddedDashboard = this.sanitizer.bypassSecurityTrustResourceUrl(data['EmbedUrl']+'#p.'+filterType+'='+filterValue);
    });
  }
}
