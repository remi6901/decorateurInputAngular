import { Component, OnInit } from '@angular/core';
import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  model: Developper=new Developper('Desco', 'Remi', 32, 'Masc', '...', [new Skill('javascript' ,'...', 'javascript.com'), new Skill('html' ,'...', 'html.com'), new Skill('node.js' ,'...', 'node.js.com')]);
 
  onSubmit(): void {
  console.log(this.model)
 }

  constructor() { }

  ngOnInit(): void {
  }

}
