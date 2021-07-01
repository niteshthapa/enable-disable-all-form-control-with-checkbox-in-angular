import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formerror',
  templateUrl: './formerror.component.html',
  styleUrls: ['./formerror.component.css']
})
export class FormerrorComponent implements OnInit {
@Input() formcontrol!:any;
errors:any;
  constructor() { }
  ngOnInit(): void {
    //console.log(this.formcontrol.errors)
  }

ngDoCheck(){
  this.errors ={
    required:"This field is required",
    min:"Field must be at least " + this.formcontrol.errors?.minlength?.requiredLength + " characters  long .",
    max:"Only "+ this.formcontrol.errors?.maxlength?.requiredLength + " are characters allowed.",
  }
}
}
