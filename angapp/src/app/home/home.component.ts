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

  constructor(private router: Router,
              private elementRef: ElementRef
  ) {}

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
