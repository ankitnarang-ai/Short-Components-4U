import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cookieService = inject(CookieService);

  constructor(private authService: AuthService) {}

  hidePassword = true;
  isLoading = false; // Add loading state
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

  onLogin() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;

      const { email, password, rememberMe } = this.loginForm.value;

      if (!email || !password) {
        alert('Please enter both email and password.');
        this.isLoading = false;
        return;
      }
      
      const credentials = { email, password };
     
      this.authService.login(credentials).subscribe({
        next: (response) => {
          
          // Store the token in cookie
          if (response.token) {
            // Set cookie expiration based on rememberMe checkbox
            const expires = rememberMe ? 30 : 1; // 30 days if remember me, 1 day otherwise
            this.cookieService.set('token', response.token, expires);
          }
          
          // Get the return URL from query params or default to dashboard
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          
          // Navigate to protected area
          this.router.navigate([returnUrl]);
          
          this.isLoading = false;
        },
        error: (error) => { 
          this.isLoading = false;
        }
      });
    }
  }
}