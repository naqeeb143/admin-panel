import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../admin-login/admin-login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email="";
  public password="";
  
  constructor(private adminLoginService: AdminLoginService ){

  }

  onSubmit(login:any){
    const value='';
    let adminObj={
      email:this.email,
      password:this.password
    }
    console.log(adminObj)

    this.adminLoginService.Admin(adminObj).subscribe((response:any)=>{
      console.log(response)
      if(response.token){
      const token = response.token;
        localStorage.setItem("token",token)
        localStorage.getItem(token)
    }
    })
  }
  ngOnInit(){
    
  }

}
