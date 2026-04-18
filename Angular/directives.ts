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