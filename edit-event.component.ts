import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public event: any,
    private dialogRef: MatDialogRef<EditEventComponent>,
    private http: HttpClient
  ) {}

  updateEvent(): void {
    this.http.post('https://wag7.bowlab.net/angular-webpro/updateEvent15', this.event)
      .subscribe({
        next: (response) => {
          alert('Event updated successfully!');
          this.dialogRef.close(true); // ปิด dialog พร้อมกับส่งค่ากลับ
        },
        error: (err) => {
          alert('Error updating event: ' + err.message);
        }
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
