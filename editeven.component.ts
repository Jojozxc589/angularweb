import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // นำเข้า Router
import { MatDialog } from '@angular/material/dialog';
import { EditEventComponent } from 'src/app/dialog/edit-event/edit-event.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editeven',
  templateUrl: './editeven.component.html',
  styleUrls: ['./editeven.component.scss']
})
export class EditevenComponent implements OnInit {
  events: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog,private location: Location) { }


  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.http.get<any[]>('https://wag7.bowlab.net/angular-webpro/showevent1')
      .subscribe({
        next: (data) => {
          this.events = data;
        },
        error: (err) => {
          this.errorMessage = 'Error fetching events: ' + err.message;
          console.error(err);
        }
      });
  }

  editEvent(event: any): void {
    const dialogRef = this.dialog.open(EditEventComponent, {
      data: event // ส่งข้อมูลเหตุการณ์ไปยัง dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getEvents(); // โหลดเหตุการณ์ใหม่เมื่อ dialog ปิด
      }
      
    });
  }
  
  goBack(): void {
    this.location.back();
  }
}
