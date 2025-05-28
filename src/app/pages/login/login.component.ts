import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService) {};

  hidePassword = true;
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

  onLogin() {
    if (this.loginForm.valid) {

      const { email, password } = this.loginForm.value;

      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
      
      const credentials = { email, password };
     
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Handle successful login, e.g., redirect to dashboard
          alert('Login successful!');
        }
        , error: (error) => { 
          console.error('Login failed', error);
          // Handle login error, e.g., show an error message
          alert('Login failed. Please check your credentials.');
        }
      })
      console.log('Login form submitted', this.loginForm.value);
      // Here you would typically send the login data to your backend
      alert('Login successful!');
    }
  }

  loginWithGoogle() {
    console.log('Login with Google');
    // Implement Google OAuth login
  }

  loginWithGithub() {
    console.log('Login with GitHub');
    // Implement GitHub OAuth login
  }
}