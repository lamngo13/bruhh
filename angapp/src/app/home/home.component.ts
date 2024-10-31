import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  language: string = 'en';
  gifPosition = {x: 0, y: 0};
  min_image_distance = 20;

  constructor(private router: Router,
              private elementRef: ElementRef
  ) {}

  onMouseMove(event: MouseEvent) {
    console.log("yeet")
    this.gifPosition.x = event.clientX + 10; // Offset to avoid cursor overlap
    this.gifPosition.y = event.clientY + 10;
    console.log("mousemove", this.gifPosition);
  }

  second() {
    console.log('second');
    this.router.navigate(['/second']);
  }

  shop() {
    console.log('shop');
    this.router.navigate(['/shop']);
  }

  game() {
    console.log('game');
    this.router.navigate(['/game']);
  }

  toggleLangugae() {  
    console.log('toggleLangugae');
    if (this.language === 'en') {
      this.language = 'sp';
    } else {
      this.language = 'en';
    }
  }

//   ngAfterViewInit() {
//     this.elementRef.nativeElement.ownerDocument
//         .body.style.backgroundColor = '#494b57';
// }

}
