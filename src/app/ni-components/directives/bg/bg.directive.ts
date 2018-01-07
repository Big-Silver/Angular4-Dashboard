import { Directive, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bg]'
})
export class BgDirective implements OnInit {
  @Input() bg: string | string[];
  @Input() outline: boolean = false;
  private currentBg: string;
  private defaultBg: string;
  private hoveredBg: string;
  private outlineColor: string;

  constructor(){}

  ngOnInit() {
    this.defaultBg = (typeof this.bg === 'string') ? this.bg : this.bg[0];
    this.hoveredBg = (typeof this.bg === 'string') ? this.bg : this.bg[1];
    this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
    this.outlineColor = this.defaultBg;
  }

  @HostBinding('style.background') get getBg(){
    return this.currentBg;
  }

  @HostBinding('style.borderColor') get getOutline(){
    return this.outlineColor;
  }

  @HostBinding('class.custom-bg') get getClass(){
    return true;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.currentBg = this.hoveredBg;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
  }
}
