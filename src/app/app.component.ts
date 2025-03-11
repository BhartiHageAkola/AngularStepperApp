import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,    
    MatStepperModule,   
    MatCardModule,      
    MatButtonModule,     
    MatFormFieldModule,  
    MatInputModule       
  ],
})
export class AppComponent {
  stepIndex = 0;
  steps = ['step1', 'step2', 'step3'];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/')[1]; // Get route after '/'
        this.stepIndex = this.steps.indexOf(currentRoute);
      }
    });
  }

  goToStep(index: number) {
    this.router.navigate(['/' + this.steps[index]]);
  }
}
