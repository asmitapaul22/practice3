import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';
@Component({
  selector: 'app-empolyee-detail',
  templateUrl: './empolyee-detail.component.html',
  styleUrls: ['./empolyee-detail.component.css']
})
export class EmpolyeeDetailComponent implements OnInit {
public empolyees=[];
  constructor(private _empolyeeService: EmpolyeeService) { }

  ngOnInit() {
    this._empolyeeService.getempolyees().subscribe(data => this.empolyees =data);
  }

}
