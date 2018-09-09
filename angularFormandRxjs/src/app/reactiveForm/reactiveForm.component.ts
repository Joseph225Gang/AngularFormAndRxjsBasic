import { Component } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-root',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveFormComponent {
  form: FormArray;

  data = [
    {acc:"aaa", tel:"12345678"},
    {acc:"bbb", tel:"12345678"},
    {acc:"ccc", tel:"12345678"},
    {acc:"ddd", tel:"12345678"},
    {acc:"eee", tel:"12345678"},
  ];

  constructor(private fb: FormBuilder){
    this.form = this.fb.array([]);

    this.data.forEach(element => {
      this.form.push(
        this.fb.group({
          acc:[element.acc, [Validators.required]],
          tel:[element.tel, [Validators.required, Validators.minLength(7), Validators.pattern("[0-9]*")]]
        })
      )
    })
  }

  see(f:any){
    console.log(this.form);
  }
}
