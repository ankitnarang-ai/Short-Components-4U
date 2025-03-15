import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { DemoComponent } from './pages/demo/demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'live-demo', component: DemoComponent },
  { path: '**', redirectTo: '' } // Redirect to home for unknown routes
];