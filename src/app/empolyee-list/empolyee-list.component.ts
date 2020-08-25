import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';

@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {

public empolyees = [];


  constructor(private _empolyeeService: EmpolyeeService) { }

  ngOnInit() 
  {
  this._empolyeeService.getempolyees().subscribe(data => this.empolyees =data);
  }

}
