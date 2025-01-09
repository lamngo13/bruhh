import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SecondComponent {

  images = [
    'assets/img/g1.jpg',
    'assets/img/g2.jpg',
    'assets/img/g3.jpg',
    'assets/img/g4.jpg',
    'assets/img/g5.jpg',
    'assets/img/g6.jpg',
    'assets/img/g7.jpg',
  ]
  currentImage = 0;
  
    constructor(private router: Router,
      private elementRef: ElementRef
    ) {}

  //   ngAfterViewInit() {
  //     this.elementRef.nativeElement.ownerDocument
  //         .body.style.backgroundColor = '#494b57';
  // }

      ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '';
  }

  ngOnDestroy() {
    // Reset the background color when this component is destroyed
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = ''; // Reset to default or specify a default color
  }

  //navigation
  home() {
    console.log('home');
    this.router.navigate(['/home']);
  }

  shop() {
    console.log('shop');
    this.router.navigate(['/shop']);
  }

  game() {
    console.log('game');
    this.router.navigate(['/game']);
  }
  
    goHome() {
      console.log('home');
      this.router.navigate(['/home']);
    }

    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    }
  
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }

}
