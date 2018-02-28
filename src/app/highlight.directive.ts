import { Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem : ElementRef) { }

@Input() highLightColor : string;

  setBackGround(color : string = null){
    this.elem.nativeElement.style.backgroundColor = color;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround(this.highLightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround();
  }


}
