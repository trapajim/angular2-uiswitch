import {Component, Input} from 'angular2/core';

@Component({
  selector: 'uiswitch',
  template: `
    <input type="checkbox" (click)="_click && onClickHandler()" class="uiswitch" [disabled]="_disabled" [checked]="_checked"/>
  `,
  styles: [
   `
    .uiswitch {
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      height: 31px;
      width: 51px;
      position: relative;
      border-radius: 16px;
      cursor: pointer;
      outline: 0;
      z-index: 0;
      margin: 0;
      padding: 0;
      border: none;
      background-color: #e5e5e5;
      transition-duration: 600ms;
      transition-timing-function: ease-in-out;
      -webkit-touch-callout: none;
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
    }
    .uiswitch::before {
      box-sizing: border-box;
      height: 27px;
      width: 47px;
      content: ' ';
      position: absolute;
      left: 2px;
      top: 2px;
      background-color: #ffffff;
      border-radius: 16px;
      z-index: 1;
      transition-duration: 300ms;
      transform: scale(1);
    }
    .uiswitch::after {
      box-sizing: border-box;
      height: 27px;
      width: 27px;
      content: ' ';
      position: absolute;
      border-radius: 27px;
      background: #ffffff;
      z-index: 2;
      top: 2px;
      left: 2px;
      box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25), 0px 4px 11px 0px rgba(0, 0, 0, 0.08), -1px 3px 3px 0px rgba(0, 0, 0, 0.14);
      transition: transform 300ms, width 280ms;
      transform: translate3d(0, 0, 0);
      transition-timing-function: cubic-bezier(0.42, 0.8, 0.58, 1.2);
    }
    .uiswitch:checked {
      background-color: #4CD964;
      background-image: linear-gradient(-180deg,#4CD964 0%, #4dd865 100%);
    }
    .uiswitch:checked::after {
      transform: translate3d(16px, 0, 0);
      right: 18px;
      left: inherit;
    }
    .uiswitch:active::after {
      width: 35px;
    }
    .uiswitch:checked::before, .uiswitch:active::before {
      transform: scale(0);
    }
    .uiswitch:disabled {
      opacity: 0.5;
      cursor: default;
      transition: none;
    }
    .uiswitch:disabled:active::before, .uiswitch:disabled:active::after, .uiswitch:disabled:checked:active::before, .uiswitch:disabled:checked::before {
      width: 27px;
      transition: none;
    }
    .uiswitch:disabled:active::before {
      height: 27px;
      width: 41px;
      transform: translate3d(6px, 0, 0);
    }
    .uiswitch:disabled:checked:active::before {
      height: 27px;
      width: 27px;
      transform: scale(0);
    }
   ` 
  ]
})

export class UISwitch{
  @Input() set disabled(disabled:boolean){
    this._disabled = disabled || false;
  }
  @Input() set checked(checked:boolean){
    this._checked = checked || false;
  }
  @Input() set click(c: Function){
    this._click = c || null;
  }
  private _disabled: boolean;
  private _checked: boolean;
  private _click: Function; 
  
  onClickHandler(){
    if(this._disabled){
      return;
    }
    this._click();
  }
}