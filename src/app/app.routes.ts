import { Routes, RouterModule } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';
import { NgModule } from '@angular/core';
import { Homepage } from './homepage/homepage';
import { Counter } from './counter/counter';
import { SimpleTodo } from './simple-todo/simple-todo';
import { Stopwatch } from './stopwatch/stopwatch';
import { GuessTheNumber } from './guess-the-number/guess-the-number';
import { TicTacToe } from './tic-tac-toe/tic-tac-toe';
import { DynamicFilterList } from './dynamic-filter-list/dynamic-filter-list';
import { RockPaperScissors } from './rock-paper-scissors/rock-paper-scissors';
import { InteractiveAccordion } from './interactive-accordion/interactive-accordion';

// In app.routes.ts
export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'profile-card', component: ProfileCard },
  { path: 'counter', component: Counter },
  { path: 'simple-todo', component: SimpleTodo },
  { path: 'stopwatch', component: Stopwatch },
  { path: 'guess-the-number', component: GuessTheNumber },
  { path: 'tic-tac-toe', component: TicTacToe },
  { path: 'dynamic-filter-list', component: DynamicFilterList },
  { path: 'rock-paper-scissors', component: RockPaperScissors },
  { path: 'interactive-accordion', component: InteractiveAccordion },
  // { path: 'joke-generator', component: JokeGenerator },
  // { path: 'infinite-scroll', component: InfiniteScroll },
  // { path: 'analog-clock', component: AnalogClock },
  // { path: 'feedback-form', component: FeedbackFormt },
  // { path: 'contact-form', component: ContactForm },
  // { path: 'custom-directives', component: CustomDirectives },
  // { path: 'calculator', component: Calculator },
  // { path: 'currency-converter', component: CurrencyConverter },
  // { path: 'weather', component: Weather },
  // { path: 'emoji-search', component: EmojiSearch },
  // { path: 'crypto-charts', component: CryptoCharts },
  // { path: 'calendar', component: Calendar },
  // { path: 'checkers', component: Checkers },
  // { path: 'password-security', component: PasswordSecurityt },
  // { path: 'minesweeper', component: Minesweeper },
  // { path: 'advanced-todo', component: AdvancedTodo },
  // { path: 'user-management', component: UserManagement },
  // { path: 'resume-builder', component: ResumeBuilder },
  // { path: 'quiz-app', component: QuizApp },
  // { path: 'typing-game', component: TypingGame },
  // { path: 'portfolio', component: Portfolio },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
