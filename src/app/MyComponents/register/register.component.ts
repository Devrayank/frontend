import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  

//show hide div variables
  userlogin = true;
  userregister = false;
  successMessage = '';
  status = false;

  userId: any;
  errorMessage = '';

  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }

  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

    constructor(private http: HttpClient) {
        
    }

    ngOnInit() {}

    onSubmit() { 
        this.http.post<any>('https://codestaginggcw.herokuapp.com/post-user', { name: this.profileForm.value.name, email: this.profileForm.value.email, password:this.profileForm.value.password, phone:this.profileForm.value.phone, address:'102 Alex velly TX'}).subscribe({
            next: data => {
                this.status = data.status;
                this.userId = data._id;

                if( this.status==false){
                    this.errorMessage = data.message;
                    this.successMessage = '';
                }
                else {
                    this.errorMessage = '';
                    this.successMessage = data.message;
                   
                }
               
                console.log(data);
            },
            error: error => {  console.log(error);
                this.errorMessage = error.message;
            }
        })

      }

      onSubmitlogin()
      {
          console.log(this.loginForm.value.email);
        this.http.post<any>('https://codestaginggcw.herokuapp.com/login-user', {email: this.loginForm.value.email, password:this.loginForm.value.password}).subscribe({
            next: data => {
                this.status = data.status;
                this.userId = data._id;
                if( this.status==false){
                    this.errorMessage = data.message;
                    this.successMessage = '';
                }
                else {
                    this.errorMessage = '';
                    this.successMessage = data.message;
                   
                }
            },
            error: error => {  console.log(error);
                this.errorMessage = error.message;
            }
        })
      }

   
}
