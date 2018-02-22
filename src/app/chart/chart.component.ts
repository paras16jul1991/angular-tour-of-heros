import { Component, OnInit } from '@angular/core';
import {SplitDetail} from '../expense';
import {ExpenseDetail} from '../expense';
import {Http, Response ,Headers, RequestMethod , RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  detail : Observable<SplitDetail>;

  splitDetail = new SplitDetail();

  public pieChartLabels:string[];
  public pieChartData:number[] ;
  public pieChartType:string = 'pie';

  expenseDetail : ExpenseDetail[];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  getData():Promise<SplitDetail> {
    return this.http.get<SplitDetail>('/getexpensedetail').toPromise().then(
    (response) =>  response as SplitDetail);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().then(detail => this.splitDetail = detail);
    console.log("here");
  }

}
