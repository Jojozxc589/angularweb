import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  prefix: string = 'Mr';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  showPopup: boolean = false; 
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private location: Location) {}

  onSubmit() {

    this.authService.register(this.prefix, this.firstName, this.lastName, this.phone, this.email, this.password).subscribe(
      response => {
        console.log('Registration successful', response);
  
        this.showPopup = true;
        alert('สมัครสมาชิกสำเร็จ');
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Registration failed', error);
        this.showPopup = true;
        this.errorMessage = 'อีเมลนี้เคยสมัครสมาชิกไปแล้ว';
      }
    );
  }

  closePopup() {
    this.showPopup = false;
  }
  goBack(): void {
    this.location.back();
  }
}
