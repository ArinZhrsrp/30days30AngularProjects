// src/app/services/project.service.ts
import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  icon: string;
  day: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Profile Card',
      tags: ['beginner', 'component', 'ui'],
      difficulty: 'beginner',
      description: 'Interactive user profile card with social links and theme switching.',
      icon: 'fas fa-user-circle',
      day: 1,
    },
    {
      id: 2,
      name: 'Counter',
      tags: ['beginner', 'component', 'state'],
      difficulty: 'beginner',
      description: 'Simple counter application with increment, decrement, and reset functionality.',
      icon: 'fas fa-plus-minus',
      day: 2,
    },
    {
      id: 3,
      name: 'Simple todo',
      tags: ['beginner', 'crud', 'utility'],
      difficulty: 'beginner',
      description: 'Basic todo list with add, edit, delete, and mark complete features.',
      icon: 'fas fa-tasks',
      day: 3,
    },
    {
      id: 4,
      name: 'Stopwatch',
      tags: ['beginner', 'timer', 'utility'],
      difficulty: 'beginner',
      description: 'Stopwatch with start, pause, lap, and reset functionality.',
      icon: 'fas fa-stopwatch',
      day: 4,
    },
    {
      id: 5,
      name: 'Guess the number',
      tags: ['beginner', 'game', 'logic'],
      difficulty: 'beginner',
      description: 'Number guessing game with hints and score tracking.',
      icon: 'fas fa-question-circle',
      day: 5,
    },
    {
      id: 6,
      name: 'Tic Tac Toe',
      tags: ['beginner', 'game', 'logic'],
      difficulty: 'beginner',
      description: 'Classic Tic Tac Toe game with player vs player mode.',
      icon: 'fas fa-times',
      day: 6,
    },
    {
      id: 7,
      name: 'Dynamic Filter List',
      tags: ['beginner', 'filter', 'search'],
      difficulty: 'beginner',
      description: 'Searchable and filterable list with real-time updates.',
      icon: 'fas fa-filter',
      day: 7,
    },
    {
      id: 8,
      name: 'Paper Rock Scissors Game',
      tags: ['beginner', 'game', 'interactive'],
      difficulty: 'beginner',
      description: 'Rock Paper Scissors game with computer opponent and score tracking.',
      icon: 'fas fa-hand-scissors',
      day: 8,
    },
    {
      id: 9,
      name: 'Interactive Accordian with Angular Animations',
      tags: ['intermediate', 'animation', 'ui'],
      difficulty: 'intermediate',
      description: 'Collapsible accordion with smooth Angular animations.',
      icon: 'fas fa-bars',
      day: 9,
    },
    {
      id: 10,
      name: 'Random Joke Generator',
      tags: ['intermediate', 'api', 'entertainment'],
      difficulty: 'intermediate',
      description: 'Fetches and displays random jokes from a joke API.',
      icon: 'fas fa-laugh',
      day: 10,
    },
    {
      id: 11,
      name: 'Infinite Scroll',
      tags: ['intermediate', 'pagination', 'ui'],
      difficulty: 'intermediate',
      description: 'Infinite scrolling content with lazy loading.',
      icon: 'fas fa-scroll',
      day: 11,
    },
    {
      id: 12,
      name: 'Analog Clock',
      tags: ['intermediate', 'animation', 'time'],
      difficulty: 'intermediate',
      description: 'Real-time analog clock with moving hour, minute, and second hands.',
      icon: 'fas fa-clock',
      day: 12,
    },
    {
      id: 13,
      name: 'Feedback form using FormsModule',
      tags: ['intermediate', 'forms', 'validation'],
      difficulty: 'intermediate',
      description: 'Form with validation, submission, and feedback display.',
      icon: 'fas fa-comment-dots',
      day: 13,
    },
    {
      id: 14,
      name: 'Contact Form',
      tags: ['intermediate', 'forms', 'api'],
      difficulty: 'intermediate',
      description: 'Contact form with email submission and confirmation.',
      icon: 'fas fa-envelope',
      day: 14,
    },
    {
      id: 15,
      name: 'Custom Directives',
      tags: ['intermediate', 'directives', 'ui'],
      difficulty: 'intermediate',
      description: 'Collection of custom Angular directives for enhanced functionality.',
      icon: 'fas fa-code',
      day: 15,
    },
    {
      id: 16,
      name: 'Calculator',
      tags: ['intermediate', 'utility', 'math'],
      difficulty: 'intermediate',
      description: 'Scientific calculator with advanced mathematical functions.',
      icon: 'fas fa-calculator',
      day: 16,
    },
    {
      id: 17,
      name: 'Currency Converter',
      tags: ['intermediate', 'api', 'finance'],
      difficulty: 'intermediate',
      description: 'Real-time currency conversion using exchange rate API.',
      icon: 'fas fa-money-bill-wave',
      day: 17,
    },
    {
      id: 18,
      name: 'Weather',
      tags: ['intermediate', 'api', 'dashboard'],
      difficulty: 'intermediate',
      description: 'Weather dashboard with current conditions and forecast.',
      icon: 'fas fa-cloud-sun',
      day: 18,
    },
    {
      id: 19,
      name: 'Emoji Search',
      tags: ['intermediate', 'search', 'entertainment'],
      difficulty: 'intermediate',
      description: 'Searchable emoji library with copy-to-clipboard functionality.',
      icon: 'fas fa-smile',
      day: 19,
    },
    {
      id: 20,
      name: 'Crypto Charts',
      tags: ['advanced', 'api', 'charts', 'finance'],
      difficulty: 'advanced',
      description: 'Cryptocurrency price charts with real-time data and historical view.',
      icon: 'fas fa-chart-line',
      day: 20,
    },
    {
      id: 21,
      name: 'Calendar',
      tags: ['advanced', 'ui', 'productivity'],
      difficulty: 'advanced',
      description: 'Interactive calendar with event management and reminders.',
      icon: 'fas fa-calendar-alt',
      day: 21,
    },
    {
      id: 22,
      name: 'Checkers',
      tags: ['advanced', 'game', 'logic'],
      difficulty: 'advanced',
      description: 'Checkers game with AI opponent and move validation.',
      icon: 'fas fa-chess-board',
      day: 22,
    },
    {
      id: 23,
      name: 'Password Security',
      tags: ['advanced', 'security', 'utility'],
      difficulty: 'advanced',
      description: 'Password strength checker and generator with security analysis.',
      icon: 'fas fa-lock',
      day: 23,
    },
    {
      id: 24,
      name: 'Minesweeper',
      tags: ['advanced', 'game', 'logic'],
      difficulty: 'advanced',
      description: 'Classic Minesweeper game with difficulty levels and timer.',
      icon: 'fas fa-bomb',
      day: 24,
    },
    {
      id: 25,
      name: 'Advanced Todo',
      tags: ['advanced', 'crud', 'productivity'],
      difficulty: 'advanced',
      description: 'Feature-rich todo app with categories, priorities, and deadlines.',
      icon: 'fas fa-tasks',
      day: 25,
    },
    {
      id: 26,
      name: 'User Management App',
      tags: ['advanced', 'crud', 'dashboard'],
      difficulty: 'advanced',
      description: 'User management system with add, edit, delete, and search functionality.',
      icon: 'fas fa-users',
      day: 26,
    },
    {
      id: 27,
      name: 'Resume Builder',
      tags: ['advanced', 'forms', 'export'],
      difficulty: 'advanced',
      description: 'Interactive resume builder with templates and PDF export.',
      icon: 'fas fa-file-alt',
      day: 27,
    },
    {
      id: 28,
      name: 'Quiz App',
      tags: ['advanced', 'education', 'interactive'],
      difficulty: 'advanced',
      description: 'Quiz application with multiple categories, scoring, and timer.',
      icon: 'fas fa-question',
      day: 28,
    },
    {
      id: 29,
      name: 'Typing Game - Keyboard Masters',
      tags: ['advanced', 'game', 'education'],
      difficulty: 'advanced',
      description: 'Typing speed test game with accuracy tracking and difficulty levels.',
      icon: 'fas fa-keyboard',
      day: 29,
    },
    {
      id: 30,
      name: 'Portfolio',
      tags: ['advanced', 'ui', 'showcase'],
      difficulty: 'advanced',
      description: 'Professional portfolio website to showcase all 30 projects.',
      icon: 'fas fa-briefcase',
      day: 30,
    },
  ];

  getProjects(filter: string = 'all'): Project[] {
    if (filter === 'all') {
      return this.projects;
    }

    return this.projects.filter((p) => p.tags.includes(filter) || p.difficulty === filter);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
