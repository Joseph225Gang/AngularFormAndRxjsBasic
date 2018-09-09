import { Component } from '@angular/core';

@Component({
  selector: 'templateForm-root',
  templateUrl: './templateForm.component.html',
  styleUrls: ['./templateForm.component.css']
})
export class TemplateFormComponent {
  title = 'app';

  see(f:any){
    console.log(f);
  }
}
