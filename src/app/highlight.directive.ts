import { Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem : ElementRef) { 

    this.setBackGround("orange");
  
  }

  setBackGround(color : string){
    this.elem.nativeElement.style.backgroundColor = color;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround('orange');
  }


}
