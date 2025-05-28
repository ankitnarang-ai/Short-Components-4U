// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { DemoComponent } from './pages/demo/demo.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Public routes (no auth required)
  { path: '', component: HomeComponent }, // Remove auth guard from home
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
  
  // Protected routes (auth required)
  { path: 'dashboard', component: DocumentationComponent, canActivate: [authGuard] }, // Rename to dashboard
  { path: 'documentation', component: DocumentationComponent, canActivate: [authGuard] },
  { path: 'demo', component: DemoComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];