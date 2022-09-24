import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service : ServicesService) { }
  public data : any = [];

  ngOnInit(): void {
    this.service.getData()
    .subscribe((respuesta : any) => {
      this.data = respuesta;
    });
  }

}
