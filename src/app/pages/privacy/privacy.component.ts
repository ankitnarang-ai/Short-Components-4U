// privacy.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  today = new Date();

  policySections = [
    {
      title: 'Data Collection',
      icon: 'info',
      content: [
        'Our Angular Kanban component operates entirely in your browser. We collect minimal data to provide core functionality.',
        'Board configurations, task details, and workflow states are stored locally in your application environment.'
      ],
      subsections: [
        {
          title: 'Browser Storage',
          content: 'Card positions, column layouts, and user preferences are saved using browser storage APIs for seamless experience.'
        },
        {
          title: 'Usage Analytics',
          content: 'Basic component usage metrics help us improve performance and add requested features.'
        }
      ]
    },
    {
      title: 'Data Processing',
      icon: 'settings',
      content: [
        'Your Kanban board data is processed locally within your Angular application. No sensitive project information leaves your environment.',
        'Card movements, status updates, and board modifications are handled entirely client-side for maximum security.'
      ]
    },
    {
      title: 'Data Sharing',
      icon: 'share',
      content: [
        'We do not access, collect, or share your project data, task details, or board configurations with third parties.',
        'Component telemetry may include anonymous usage patterns to improve library performance and stability.'
      ]
    },
    {
      title: 'Data Security',
      icon: 'shield',
      content: [
        'Your Kanban data remains within your application\'s security boundary. We implement secure coding practices in our component.',
        'Regular security updates ensure the library remains protected against common vulnerabilities.'
      ]
    },
    {
      title: 'Policy Updates',
      icon: 'update',
      content: [
        'Privacy policy changes will be communicated through library release notes and documentation updates.',
        'Major changes affecting data handling will be highlighted in version upgrade guides.'
      ]
    }
  ];
}