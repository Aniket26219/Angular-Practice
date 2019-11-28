import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDemoComponent } from '../first-demo/first-demo.component';



@NgModule({
  declarations: [FirstDemoComponent],
  imports: [CommonModule],
  exports:[FirstDemoComponent]
})
export class FirstModule { }
 