import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  constructor(private router: Router) {}

  goHome() {
    console.log('home');
    this.router.navigate(['/home']);
  }

}
