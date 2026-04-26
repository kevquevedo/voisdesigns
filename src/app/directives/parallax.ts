import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() strength = 0.08;

  private readonly el = inject(ElementRef<HTMLElement>);
  private rafId = 0;
  private readonly onScroll = () => this.update();

  ngOnInit(): void {
    this.update();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    cancelAnimationFrame(this.rafId);
  }

  private update(): void {
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      const node = this.el.nativeElement;
      const rect = node.getBoundingClientRect();
      const y = (rect.top + rect.height / 2 - window.innerHeight / 2) * this.strength;
      node.style.transform = `translateY(${(-y).toFixed(1)}px)`;
    });
  }
}