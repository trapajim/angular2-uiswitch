import {Component} from 'angular2/core';
import {UISwitch} from './uiswitch.component';

@Component({
    selector: 'my-app',
    directives: [UISwitch],
    template:`
      <uiswitch [disabled]=false [checked]=true [click]="onSwitchClick"></uiswitch>
    `
     
})
export class AppComponent {
  crossfade = true;
  onSwitchClick(){
    console.log("CLICK");
  }
 }