import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  txtUserName!:string;
  txtPassword!:string;
  constructor(private router: Router,
    private accountService:AccountService){
}
ngOnInit(): void {
}
  signin(){
    this.accountService.LoginAccount(this.txtUserName, this.txtPassword).toPromise().then((result)=>{
      if(result!=undefined){
        localStorage.setItem("Token", JSON.stringify(result));
        this.router.navigate(['/home']);
      } (err:HttpErrorResponse) => {
        if(err.status==401)
        this.router.navigate(['/login']);
      }
    });
  }
}
