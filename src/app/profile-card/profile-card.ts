import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  name: string = 'Shirin Zahra';
  age: number = 25;
  description: string = 'A passionate junior developer learning Angular';
}
