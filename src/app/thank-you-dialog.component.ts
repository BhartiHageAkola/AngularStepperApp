import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thank-you-dialog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <h2>Thank You!</h2>
      <p>Thank you for testing my application.</p>
      <p><strong>- Bharti Hage</strong></p>
      <button mat-raised-button color="primary" (click)="close()">Close</button>
    </mat-card>
  `,
  styles: [`
    mat-card {
      text-align: center;
      padding: 20px;
    }
    button {
      margin-top: 15px;
    }
  `]
})
export class ThankYouDialogComponent {
  constructor(private dialogRef: MatDialogRef<ThankYouDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
