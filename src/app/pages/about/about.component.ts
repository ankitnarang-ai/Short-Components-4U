import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  template: `
    <div class="about-container">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <mat-icon class="hero-icon">info</mat-icon>
            About Our Angular Kanban
          </h1>
          <p class="hero-subtitle">
            Powerful, customizable Kanban board for Angular applications
          </p>
        </div>
        <div class="hero-glow"></div>
      </div>

      <div class="content-section">
        <mat-card class="futuristic-card">
          <mat-card-content>
            <div class="about-intro">
              <div class="intro-card">
                <mat-icon>rocket_launch</mat-icon>
                <div class="intro-content">
                  <h3>Our Mission</h3>
                  <p>We simplify complex UI patterns into reusable components that work out of the box while remaining fully customizable.</p>
                </div>
              </div>
            </div>

            <div class="features-grid">
              <div class="feature-card">
                <mat-icon>code</mat-icon>
                <h4>Developer First</h4>
                <p>Built by developers for developers with clean APIs and thorough documentation.</p>
              </div>
              
              <div class="feature-card">
                <mat-icon>palette</mat-icon>
                <h4>Customizable</h4>
                <p>Easily adapt the look and feel to match your application's design system.</p>
              </div>
              
              <div class="feature-card">
                <mat-icon>bolt</mat-icon>
                <h4>High Performance</h4>
                <p>Optimized for smooth performance even with hundreds of cards.</p>
              </div>
            </div>

            <div class="team-section">
              <h3 class="section-title">
                <mat-icon>groups</mat-icon>
                The Team Behind It
              </h3>
              <p>Our team consists of Angular experts with years of experience building enterprise applications. We're passionate about creating tools that make developers' lives easier.</p>
              
              <div class="team-members">
                <div class="member-card">
                  <div class="member-avatar">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQEZBY5KZPI1Eg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696669593218?e=2147483647&v=beta&t=KL1vhJ703nfOMCWp5HpQxciUFjnDZaHXnExQTGrTfiY" alt="Team Member 1">
                  </div>
                  <h5>Ankit Narang</h5>
                  <p>Founder</p>
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

    .about-container {
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
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 24px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .hero-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 16px 0;
      background: linear-gradient(45deg, #40e0d0, #9d4edd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-icon {
      font-size: 2.5rem !important;
      color: #40e0d0;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #ccc;
      margin: 0 0 24px 0;
      opacity: 0.9;
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

    /* About Intro */
    .about-intro {
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

    /* Features Grid */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .feature-card {
      background: rgba(30, 30, 40, 0.8);
      border: 1px solid rgba(64, 224, 208, 0.2);
      border-radius: 12px;
      padding: 24px;
      transition: all 0.3s ease;
      text-align: center;
    }

    .feature-card:hover {
      border-color: rgba(64, 224, 208, 0.5);
      box-shadow: 0 4px 20px rgba(64, 224, 208, 0.1);
      transform: translateY(-5px);
    }

    .feature-card mat-icon {
      color: #40e0d0;
      font-size: 40px !important;
      margin-bottom: 16px;
    }

    .feature-card h4 {
      margin: 0 0 12px 0;
      color: #e0e0e0;
      font-size: 1.2rem;
    }

    .feature-card p {
      margin: 0;
      color: #ccc;
      opacity: 0.9;
      line-height: 1.6;
    }

    /* Team Section */
    .team-section {
      border-top: 1px solid rgba(64, 224, 208, 0.3);
      padding-top: 32px;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #e0e0e0;
      font-size: 1.4rem;
      margin: 0 0 24px 0;
    }

    .section-title mat-icon {
      color: #40e0d0;
    }

    .team-section p {
      color: #ccc;
      line-height: 1.6;
      margin: 0 0 32px 0;
      max-width: 800px;
    }

    .team-members {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .member-card {
      background: rgba(30, 30, 40, 0.8);
      border: 1px solid rgba(64, 224, 208, 0.2);
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      width: 200px;
      transition: all 0.3s ease;
    }

    .member-card:hover {
      border-color: rgba(64, 224, 208, 0.5);
      box-shadow: 0 4px 20px rgba(64, 224, 208, 0.1);
    }

    .member-avatar {

      img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
      }
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(45deg, #40e0d0, #9d4edd);
      margin: 0 auto 16px auto;
    }

    .member-card h5 {
      margin: 0 0 8px 0;
      color: #e0e0e0;
      font-size: 1.1rem;
    }

    .member-card p {
      margin: 0;
      color: #40e0d0;
      font-size: 0.9rem;
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
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .team-members {
        flex-direction: column;
        align-items: center;
      }
      
      .member-card {
        width: 100%;
        max-width: 300px;
      }
    }
  `]
})
export class AboutComponent {}