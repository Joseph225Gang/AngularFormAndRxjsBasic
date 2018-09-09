import { ObserverService } from './observer/observer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { TemplateFormComponent } from './templateForm/templateForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { ObserverComponent } from './observer/observer.component';

const appRoutes: Routes = [
  {path:'templateForm', component: TemplateFormComponent},
  {path: 'reactiveForm', component:ReactiveFormComponent},
  {path: 'observer', component:ObserverComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ObserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
