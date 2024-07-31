import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  images = [
    'assets/img/image0.jpeg',
    'assets/img/image1.jpeg',
    'assets/img/image3.jpeg',
    'assets/img/image4.jpeg',
    'assets/img/image5.jpeg',
    'assets/img/image6.jpeg',
    'assets/img/image7.jpeg',
  ]
  currentImage = 0;
  
    constructor(private router: Router) {}
  
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
