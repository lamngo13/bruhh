import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  language: string = 'en';

  constructor(private router: Router) {}

  second() {
    console.log('second');
    this.router.navigate(['/second']);
  }

  toggleLangugae() {  
    console.log('toggleLangugae');
    if (this.language === 'en') {
      this.language = 'sp';
    } else {
      this.language = 'en';
    }
  }

}
