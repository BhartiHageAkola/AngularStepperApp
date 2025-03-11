import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ThankYouDialogComponent } from '../thank-you-dialog.component';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  imports: [
    MatCardModule,       
    MatFormFieldModule,  
    MatInputModule,      
    MatButtonModule,
    MatDialogModule,
    CommonModule,
  ],
})
export class Step3Component {
  constructor(private router: Router, private dialog: MatDialog) {}

  back() {
    this.router.navigate(['/step2']);
  }
  submit() {
    this.dialog.open(ThankYouDialogComponent);
  }
}
