import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule
  ],
  template: `
    <div class="contact-container">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <mat-icon class="hero-icon">contact_mail</mat-icon>
            Contact Us
          </h1>
          <p class="hero-subtitle">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
        <div class="hero-glow"></div>
      </div>

      <div class="content-section">
        <mat-card class="futuristic-card">
          <mat-card-content>
            <div class="contact-methods">
              <div class="contact-form">
                <h3 class="section-title">
                  <mat-icon>send</mat-icon>
                  Send a Message
                </h3>
                
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <mat-form-field>
                    <mat-label>Your Name</mat-label>
                    <input matInput formControlName="name">
                    @if (contactForm.get('name')?.hasError('required')) {
                      <mat-error>Name is required</mat-error>
                    }
                  </mat-form-field>
                  
                  <mat-form-field>
                    <mat-label>Email</mat-label>
                    <input matInput formControlName="email" type="email">
                    @if (contactForm.get('email')?.hasError('required')) {
                      <mat-error>Email is required</mat-error>
                    }
                    @if (contactForm.get('email')?.hasError('email')) {
                      <mat-error>Please enter a valid email</mat-error>
                    }
                  </mat-form-field>
                  
                  <mat-form-field>
                    <mat-label>Message</mat-label>
                    <textarea matInput formControlName="message" rows="5"></textarea>
                    @if (contactForm.get('message')?.hasError('required')) {
                      <mat-error>Message is required</mat-error>
                    }
                  </mat-form-field>
                  
                  <button 
                    mat-raised-button 
                    color="primary" 
                    type="submit"
                    [disabled]="!contactForm.valid"
                    class="submit-btn">
                    <mat-icon>send</mat-icon>
                    Send Message
                  </button>
                </form>
              </div>
              
              <div class="contact-info">
                <h3 class="section-title">
                  <mat-icon>alternate_email</mat-icon>
                  Other Ways to Reach Us
                </h3>
                
                <div class="info-card">
                  <mat-icon aria-hidden="true">email</mat-icon>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:ankitnarangwork&#64;gmail.com">ankitnarangwork&#64;gmail.com</a>
                    </p>
                  </div>
                </div>


                
                <div class="info-card">
                  <mat-icon>forum</mat-icon>
                  <div>
                    <h4>Community</h4>
                    <p>Join our Discord server</p>
                  </div>
                </div>
                
                <div class="info-card">
                  <mat-icon>bug_report</mat-icon>
                  <div>
                    <h4>Report Issues</h4>
                    <p>GitHub Issues</p>
                  </div>
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

    .contact-container {
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

    /* Contact Methods */
    .contact-methods {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
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

    /* Contact Form */
    .contact-form {
      padding-right: 20px;
      border-right: 1px solid rgba(64, 224, 208, 0.3);
    }

    mat-form-field {
      width: 100%;
      margin-bottom: 20px;
    }

    ::ng-deep .mat-form-field-label {
      color: #888 !important;
    }

    ::ng-deep .mat-input-element {
      color: #e0e0e0 !important;
    }

    ::ng-deep .mat-form-field-underline {
      background-color: rgba(64, 224, 208, 0.3) !important;
    }

    ::ng-deep .mat-form-field-ripple {
      background-color: #40e0d0 !important;
    }

    .submit-btn {
      background: linear-gradient(45deg, #40e0d0, #9d4edd) !important;
      color: #000 !important;
      padding: 12px 24px !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      margin-top: 16px;
    }

    /* Contact Info */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: rgba(30, 30, 40, 0.8);
      border: 1px solid rgba(64, 224, 208, 0.2);
      border-radius: 12px;
      padding: 16px;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      border-color: rgba(64, 224, 208, 0.5);
      box-shadow: 0 4px 20px rgba(64, 224, 208, 0.1);
    }

    .info-card mat-icon {
      color: #40e0d0;
      font-size: 32px !important;
    }

    .info-card h4 {
      margin: 0 0 4px 0;
      color: #e0e0e0;
      font-size: 1.1rem;
    }

    .info-card p {
      margin: 0;
      color: #ccc;
      opacity: 0.9;
    }

    /* Responsive Design */
    @media (max-width: 900px) {
      .contact-methods {
        grid-template-columns: 1fr;
      }
      
      .contact-form {
        padding-right: 0;
        border-right: none;
        border-bottom: 1px solid rgba(64, 224, 208, 0.3);
        padding-bottom: 40px;
        margin-bottom: 40px;
      }
    }

    @media (max-width: 600px) {
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
    }
  `]
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted', this.contactForm.value);
      // Here you would typically send the form data to your backend
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}