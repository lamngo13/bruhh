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
  min_image_distance = 40;
  smoothing_value = 0.2;

  constructor(private router: Router,
              private elementRef: ElementRef
  ) {}

  onMouseMove(event: MouseEvent) {
    const cursorX = event.clientX + window.scrollX;
    const cursorY = event.clientY + window.scrollY;

    // Calculate the distance between the cursor and the GIF's current position
    const distanceX = cursorX - this.gifPosition.x;
    const distanceY = cursorY - this.gifPosition.y;
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

    // Move only if beyond the threshold distance
    if (distance > this.min_image_distance) {
      // Update the position incrementally towards the cursor
      this.gifPosition.x += distanceX * this.smoothing_value;
      this.gifPosition.y += distanceY * this.smoothing_value;
    }
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
