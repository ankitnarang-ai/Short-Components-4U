// terms.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatExpansionModule, CommonModule],
  template: `
    <div class="terms-container">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <mat-icon class="hero-icon">gavel</mat-icon>
            Terms & Conditions
          </h1>
          <p class="hero-subtitle">
            Please read these terms carefully before using our Angular Kanban component
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
            <div class="terms-intro">
              <div class="intro-card">
                <mat-icon>info_outline</mat-icon>
                <div class="intro-content">
                  <h3>Agreement to Terms</h3>
                  <p>By accessing and using our Angular Kanban component, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>
              </div>
            </div>

            <div class="terms-sections">
              <div class="section-card" *ngFor="let section of termsSections; let i = index">
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
                  <ul class="term-list" *ngIf="section.list">
                    <li *ngFor="let item of section.list">{{ item }}</li>
                  </ul>
                </div>
                <div class="section-glow"></div>
              </div>
            </div>

            <div class="acceptance-section">
              <div class="acceptance-card">
                <div class="acceptance-header">
                  <mat-icon>verified</mat-icon>
                  <h3>Acceptance of Terms</h3>
                </div>
                <p>By using our Angular Kanban component, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                <div class="acceptance-actions">
                  <button mat-raised-button class="accept-btn">
                    <mat-icon>check_circle</mat-icon>
                    I Accept These Terms
                  </button>
                  <button mat-stroked-button class="contact-btn">
                    <mat-icon>email</mat-icon>
                    Have Questions?
                  </button>
                </div>
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

    .terms-container {
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

    /* Terms Intro */
    .terms-intro {
      margin-bottom: 32px;
    }

    .intro-card {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, rgba(64, 224, 208, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%);
      border: 1px solid rgba(64, 224, 208, 0.3);
      border-radius: 12px;
      padding: 24px;
    }

    .intro-card mat-icon {
      color: #40e0d0;
      font-size: 32px !important;
      flex-shrink: 0;
    }

    .intro-content h3 {
      margin: 0 0 8px 0;
      color: #e0e0e0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .intro-content p {
      margin: 0;
      color: #ccc;
      opacity: 0.9;
      line-height: 1.6;
    }

    /* Terms Sections */
    .terms-sections {
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

    .term-list {
      list-style: none;
      padding: 0;
      margin: 12px 0;
    }

    .term-list li {
      color: #ccc;
      padding: 8px 0;
      padding-left: 24px;
      position: relative;
      opacity: 0.9;
    }

    .term-list li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #40e0d0;
      font-weight: bold;
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

    /* Acceptance Section */
    .acceptance-section {
      border-top: 1px solid rgba(64, 224, 208, 0.3);
      padding-top: 32px;
    }

    .acceptance-card {
      background: linear-gradient(135deg, rgba(64, 224, 208, 0.1) 0%, rgba(157, 78, 221, 0.1) 100%);
      border: 1px solid rgba(64, 224, 208, 0.3);
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .acceptance-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .acceptance-header mat-icon {
      color: #40e0d0;
      font-size: 32px !important;
    }

    .acceptance-header h3 {
      margin: 0;
      color: #e0e0e0;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .acceptance-card p {
      color: #ccc;
      margin: 0 0 24px 0;
      opacity: 0.9;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .acceptance-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .accept-btn {
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

    .accept-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(64, 224, 208, 0.3) !important;
    }

    .contact-btn {
      border: 1px solid rgba(64, 224, 208, 0.5) !important;
      color: #40e0d0 !important;
      background: transparent !important;
      padding: 12px 24px !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      transition: all 0.3s ease !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
    }

    .contact-btn:hover {
      background: rgba(64, 224, 208, 0.1) !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(64, 224, 208, 0.2) !important;
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
      
      .intro-card {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .section-header {
        flex-direction: column;
        text-align: center;
        gap: 12px;
      }
      
      .section-title {
        justify-content: center;
      }
      
      .acceptance-header {
        flex-direction: column;
        gap: 8px;
      }
      
      .acceptance-actions {
        flex-direction: column;
        align-items: center;
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
export class TermsComponent {
  today = new Date();

  termsSections = [
    {
      title: 'License & Usage',
      icon: 'license',
      content: [
        'The Angular Kanban component is provided under our standard license agreement. You may use this component in your projects subject to the terms outlined below.',
        'This license grants you the right to integrate, customize, and deploy the component within your Angular applications for both personal and commercial use.'
      ],
      subsections: [
        {
          title: 'Permitted Uses',
          content: 'Integration into Angular projects, customization of styling and functionality, deployment in production applications, and modification for specific business requirements.'
        },
        {
          title: 'Restrictions',
          content: 'Redistribution as a standalone product, reverse engineering for competitive purposes, or removal of attribution notices is prohibited.'
        }
      ]
    },
    {
      title: 'Component Functionality',
      icon: 'widgets',
      content: [
        'Our Kanban component provides drag-and-drop functionality, customizable columns, task management, and responsive design out of the box.',
        'Features include real-time updates, local storage persistence, custom styling options, and accessibility compliance.'
      ],
      list: [
        'Drag and drop cards between columns',
        'Customizable board layouts and themes',
        'Task editing and management capabilities',
        'Export and import functionality',
        'Mobile-responsive design',
        'Keyboard navigation support'
      ]
    },
    {
      title: 'Support & Updates',
      icon: 'support',
      content: [
        'Technical support is provided through our documentation portal and community forums. Regular updates include bug fixes, performance improvements, and new features.',
        'Major version updates may introduce breaking changes, which will be clearly documented in our migration guides.'
      ],
      subsections: [
        {
          title: 'Support Channels',
          content: 'Access support through GitHub issues, community Discord, documentation site, and email support for licensed users.'
        },
        {
          title: 'Update Policy',
          content: 'Minor updates are released monthly, major versions annually. All updates maintain backward compatibility within major versions.'
        }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: 'privacy_tip',
      content: [
        'The component processes your board data locally within your application. No data is transmitted to external servers unless explicitly configured by you.',
        'Local storage is used for persistence, and you maintain full control over your data at all times.'
      ]
    },
    {
      title: 'Liability & Warranties',
      icon: 'security',
      content: [
        'The component is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of this component.',
        'Users are responsible for testing the component thoroughly in their specific environment before production deployment.'
      ]
    },
    {
      title: 'Termination',
      icon: 'block',
      content: [
        'This agreement remains in effect until terminated. You may terminate by discontinuing use and removing the component from your projects.',
        'We may terminate this agreement if you violate any terms, with immediate effect and without prior notice.'
      ]
    }
  ];
}