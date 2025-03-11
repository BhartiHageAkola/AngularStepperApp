import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
    imports: [
      MatCardModule,       
      MatFormFieldModule,  
      MatInputModule,      
      MatButtonModule     
    ],
})
export class Step2Component {
  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/step1']);
  }

  next() {
    this.router.navigate(['/step3']);
  }
}
