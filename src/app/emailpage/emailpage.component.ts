import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailpageComponent {

  formData = {
    email: ''
  };
 
  constructor(private router: Router,public http:HttpClient,
    private emailverify: UserService) {}
 
  navigate(email:string)
  {
    console.log(this.formData);
   
      this.emailverify.verify(this.formData).subscribe(
        (Response)=>{
          console.log(this.formData)
          this.router.navigate(['viewpage',email])
        },
      (error)=>{
        this.router.navigate(['details'])
      }
      )
 
 
  }  
}