import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  imports: [
    MatCardModule,       
    MatFormFieldModule,  
    MatInputModule,      
    MatButtonModule     
  ],
})
export class Step1Component {
  title = 'app-step1';
  constructor(private router: Router) {}

  next() {
    this.router.navigate(['/step2']);
  }
}
