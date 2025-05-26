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
  template: `
    <div class="privacy-container">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <mat-icon class="hero-icon">security</mat-icon>
            Privacy Policy
          </h1>
          <p class="hero-subtitle">
            Your privacy matters. Learn how we protect your Kanban board data.
          </p>
          <div class="last-updated">
            <mat-icon>schedule</mat-icon>
            <span>Last updated: {{ today | date:'fullDate' }}</span>
          </div>
          <div class="hero-glow"></div>
        </div>
      </div>

      <div class="content-section">
        <mat-card class="futuristic-card">
          <mat-card-content>
            <div class="policy-sections">
              <div class="section-card" *ngFor="let section of policySections; let i = index">
                <div class="section-header">
                  <div class="section-number">{{ i + 1 }}</div>
                  <div class="section-title">
                    <mat-icon>{{ section.icon }}</mat-icon>
                    <h3>{{ section.title }}</h3>
                  </div>
                </div>
                <div class="section-content">
                  <p *ngFor="let paragraph of section.content">{{ paragraph }}</p>
                  <div class="subsections" *ngIf="section.subsections">
                    <div class="subsection" *ngFor="let subsection of section.subsections">
                      <h4>{{ subsection.title }}</h4>
                      <p>{{ subsection.content }}</p>
                    </div>
                  </div>
                </div>
                <div class="section-glow"></div>
              </div>
            </div>

            <div class="contact-section">
              <div class="contact-card">
                <div class="contact-header">
                  <mat-icon>help_outline</mat-icon>
                  <h3>Questions About Privacy?</h3>
                </div>
                <p>Need clarification about how we handle your Kanban data? We're here to help.</p>
                <button mat-raised-button class="contact-btn">
                  <mat-icon>email</mat-icon>
                  Contact Privacy Team
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #0a0a0a;
      color: #e0e0e0;
      min-height: 100vh;
    }

    .privacy-container {
      background: radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0a 100%);
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, rgba(64, 224, 208, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%);
      border-bottom: 1px solid rgba(64, 224, 208, 0.3);
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 64px 24px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .hero-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 16px 0;
      background: linear-gradient(45deg, #40e0d0, #9d4edd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-icon {
      font-size: 3rem !important;
      color: #40e0d0;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #ccc;
      margin: 0 0 24px 0;
      opacity: 0.9;
    }

    .last-updated {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #40e0d0;
      font-size: 0.9rem;
      background: rgba(64, 224, 208, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid rgba(64, 224, 208, 0.3);
      display: inline-flex;
    }

    .hero-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(64, 224, 208, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 1;
    }

    /* Content Section */
    .content-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 24px;
    }

    /* Futuristic Card */
    .futuristic-card {
      background: rgba(20, 20, 30, 0.95) !important;
      border: 1px solid rgba(64, 224, 208, 0.3) !important;
      border-radius: 16px !important;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 224, 208, 0.1) !important;
      color: #e0e0e0 !important;
      overflow: hidden;
      position: relative;
    }

    .futuristic-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #40e0d0, transparent);
      opacity: 0.7;
    }

    /* Policy Sections */
    .policy-sections {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 32px;
    }

    .section-card {
      background: rgba(30, 30, 40, 0.8);
      border: 1px solid rgba(64, 224, 208, 0.2);
      border-radius: 12px;
      padding: 24px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .section-card:hover {
      border-color: rgba(64, 224, 208, 0.5);
      box-shadow: 0 4px 20px rgba(64, 224, 208, 0.1);
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }

    .section-number {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(45deg, #40e0d0, #9d4edd);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: #000;
      flex-shrink: 0;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
    }

    .section-title mat-icon {
      color: #40e0d0;
      font-size: 24px !important;
    }

    .section-title h3 {
      margin: 0;
      color: #e0e0e0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .section-content p {
      color: #ccc;
      line-height: 1.6;
      margin: 0 0 16px 0;
      opacity: 0.9;
    }

    .section-content p:last-child {
      margin-bottom: 0;
    }

    .subsections {
      margin-top: 20px;
      padding-left: 20px;
      border-left: 2px solid rgba(64, 224, 208, 0.3);
    }

    .subsection {
      margin-bottom: 16px;
    }

    .subsection h4 {
      color: #40e0d0;
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .subsection p {
      margin: 0;
      color: #ccc;
      opacity: 0.9;
    }

    .section-glow {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(64, 224, 208, 0.5), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .section-card:hover .section-glow {
      opacity: 1;
    }

    /* Contact Section */
    .contact-section {
      border-top: 1px solid rgba(64, 224, 208, 0.3);
      padding-top: 32px;
    }

    .contact-card {
      background: linear-gradient(135deg, rgba(64, 224, 208, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%);
      border: 1px solid rgba(64, 224, 208, 0.3);
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .contact-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .contact-header mat-icon {
      color: #40e0d0;
      font-size: 32px !important;
    }

    .contact-header h3 {
      margin: 0;
      color: #e0e0e0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .contact-card p {
      color: #ccc;
      margin: 0 0 24px 0;
      opacity: 0.9;
      font-size: 1.1rem;
    }

    .contact-btn {
      background: linear-gradient(45deg, #40e0d0, #9d4edd) !important;
      color: #000 !important;
      border: none !important;
      padding: 12px 24px !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      transition: all 0.3s ease !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
    }

    .contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(64, 224, 208, 0.3) !important;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 8px;
      }
      
      .hero-icon {
        font-size: 2rem !important;
      }
      
      .content-section {
        padding: 16px;
      }
      
      .section-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .section-title {
        justify-content: center;
      }
      
      .contact-header {
        flex-direction: column;
        gap: 8px;
      }
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(20, 20, 30, 0.5);
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #40e0d0, #9d4edd);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(45deg, #5ff5e5, #b865f2);
    }
  `]
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
      title: 'Your Control',
      icon: 'account_circle',
      content: [
        'You have complete control over your board data. Export, backup, or delete your Kanban configurations at any time.',
        'Disable analytics or modify storage preferences through component configuration options.'
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