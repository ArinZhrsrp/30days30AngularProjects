// src/app/homepage/homepage.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, Project } from '../services/project-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Homepage implements OnInit {
  projects: Project[] = [];
  activeFilter: string = 'all';
  isLoading: boolean = false;

  // In homepage.component.ts
  projectRoutes: { [key: string]: string } = {
    'Profile Card': '/profile-card',
    Counter: '/counter',
    'Simple todo': '/simple-todo',
    Stopwatch: '/stopwatch',
    'Guess the number': '/guess-the-number',
    'Tic Tac Toe': '/tic-tac-toe',
    'Dynamic Filter List': '/dynamic-filter-list',
    'Paper Rock Scissors Game': '/rock-paper-scissors',
    'Interactive Accordian with Angular Animations': '/interactive-accordion',
    'Random Joke Generator': '/joke-generator',
    'Infinite Scroll': '/infinite-scroll',
    'Analog Clock': '/analog-clock',
    'Feedback form using FormsModule': '/feedback-form',
    'Contact Form': '/contact-form',
    'Custom Directives': '/custom-directives',
    Calculator: '/calculator',
    'Currency Converter': '/currency-converter',
    Weather: '/weather',
    'Emoji Search': '/emoji-search',
    'Crypto Charts': '/crypto-charts',
    Calendar: '/calendar',
    Checkers: '/checkers',
    'Password Security': '/password-security',
    Minesweeper: '/minesweeper',
    'Advanced Todo': '/advanced-todo',
    'User Management App': '/user-management',
    'Resume Builder': '/resume-builder',
    'Quiz App': '/quiz-app',
    'Typing Game - Keyboard Masters': '/typing-game',
    Portfolio: '/portfolio',
  };

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
    this.initAnimations();
  }

  loadProjects() {
    this.isLoading = true;
    this.projects = this.projectService.getProjects(this.activeFilter);

    // Simulate loading for smooth transition
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }

  applyFilter(filter: string) {
    this.activeFilter = filter;
    this.loadProjects();
  }

  goToProject(projectName: string) {
    const route = this.projectRoutes[projectName];
    if (route) {
      this.router.navigate([route]);
    } else {
      // Fallback to homepage if route not found
      this.router.navigate(['/']);
    }
  }

  initAnimations() {
    // Initialize floating animations
    setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card: any, index) => {
        card.style.setProperty('--i', index);
      });
    }, 100);
  }

  // Hover effects for project buttons
  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('project-btn') || target.closest('.project-btn')) {
      const btn = target.classList.contains('project-btn')
        ? target
        : target.closest('.project-btn');
      if (btn) {
        (btn as HTMLElement).style.transform = 'translateY(-2px)';
      }
    }
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('project-btn') || target.closest('.project-btn')) {
      const btn = target.classList.contains('project-btn')
        ? target
        : target.closest('.project-btn');
      if (btn) {
        (btn as HTMLElement).style.transform = 'translateY(0)';
      }
    }
  }

  // Add these methods to HomepageComponent class
  getFilteredTags(tags: string[], difficulty: string): string[] {
    return tags.filter((tag) => tag !== difficulty);
  }

  getTagClass(tag: string): string {
    if (tag === 'game') return 'game';
    if (tag === 'utility') return 'utility';
    if (tag === 'api') return 'api';
    return '';
  }
}
