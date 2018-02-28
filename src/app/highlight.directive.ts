import { Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem : ElementRef) { }

@Input('appHighlight') highLightColor : string;

@Input() defaultColor : string;

  setBackGround(color : string = null){
    this.elem.nativeElement.style.backgroundColor = color;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround(this.highLightColor ? this.highLightColor: this.defaultColor );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround();
  }


}
