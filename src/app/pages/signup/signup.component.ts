// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  features = [
    { icon: 'drag_indicator', text: 'Drag & Drop Cards' },
    { icon: 'dashboard', text: 'Custom Boards' },
    { icon: 'sync', text: 'Real-time Updates' },
    { icon: 'mobile_friendly', text: 'Mobile Ready' }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // signup.component.ts
onSubmit() {
  if (this.signupForm.valid) {
    this.isLoading = true;
    
    const { firstName, lastName, email, password } = this.signupForm.value;
    
    this.authService.signup({ firstName, lastName, email, password })
      .subscribe({
        next: () => {
          this.isLoading = false;
          // Navigation is handled by AuthService
        },
        error: (error) => {
          this.isLoading = false;
          // Show error message to user
          console.error('Signup failed:', error);
          // You might want to show this error to the user
        }
      });
  } else {
    // Mark all fields as touched to show validation errors
    Object.keys(this.signupForm.controls).forEach(key => {
      this.signupForm.get(key)?.markAsTouched();
    });
  }
}
}