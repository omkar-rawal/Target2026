//Background color using directive

import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
    selector:'[backgroundColorHover]',
    standalone:true
})

export class ChangeBackgroundColor{

    @Input setColor='black';
    constructor(private el:ElementRef){}
    @HostListener('mouseenter')
    mouseEnter(){
        this.el.nativeElement.style.backgroundColor=this.setColor;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.el.nativeElement.style.backgroungColor='black';

    }

}


<span [backgroundColorHover]='red'>Test</span>


//Disabled button using directive

import {Directive,ElementRef,Input,onChanges} from '@angular/core';

@Directive({
    selecroe:'disabledButton',
    standalone:true
})


export class DisabledSubmitButton implements onChanges {

    @Input appDisabled:boolean=false;

    constructor(private el:ElementRef){}
    ngOnChanges(){
    this.el.nativeElement.disabled=this.appDisabled;
    }
   

}


<div>
<button [disabledButton]="appDisabled">Submit</button>
</div>

///Click outSide Direcive

<div (appClickOutside)="closeDropdown()">
<option>ABC</option>
<option>AAA</option>
</div>


import {Directive,Output,HostListener} from '@angular/core';

@Directive({
    selector:'[appClickOutSide]',
    standalone:true
})

export class ClickOutside{
    @Output appClickOutside = new EventEmitter<void>();
    constructor(private el:ElementRef){}

    @HostListener('document.click',['$event'])
    appClickOut(event:Event){
        if(this.el.nativeElement.contains(event?.target)){
            this.appClickOutside.emit();
        }
    }
}