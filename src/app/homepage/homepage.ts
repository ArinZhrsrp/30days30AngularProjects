import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  constructor(private router: Router) {}

  goToProfileCardPage() {
    this.router.navigate(['/profile-card']);
  }

  goToCounterPage() {
    this.router.navigate(['/counter']);
  }

  goToSimpleTodoPage() {
    this.router.navigate(['/simple-todo']);
  }

  goToStopwatchPage() {
    this.router.navigate(['/stopwatch']);
  }

  goToGuessTheNumberPage() {
    this.router.navigate(['/guess-the-number']);
  }

  goToTicTacToePage() {
    this.router.navigate(['/tic-tac-toe']);
  }

  goToDynamicFilterListPage() {
    this.router.navigate(['/dynamic-filter-list']);
  }

  goToRockPaperScissorsPage() {
    this.router.navigate(['/rock-paper-scissors']);
  }

  goToInteractiveAccordionPage() {
    this.router.navigate(['/interactive-accordion']);
  }
}
