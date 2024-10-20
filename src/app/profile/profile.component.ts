import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { from } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [JsonPipe,MatCardModule,MatButton,RouterLink,NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  private userService: UserService
  public active: UserModel | null = null

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {
    this.userService = UserService.getInstance()
  }
  ngOnInit(): void {
    try {
      this.active = this.userService.getCurrentUser()
  } catch(e){
    this.router.navigate(["/login"],{relativeTo: this.activeRoute,queryParams:{from: '/profile'}})
    alert(e)
  }

}
public getAvatarUrl(){
  return 'https://ui-avatars.com/api/?name='+this.active?.name
}

public doLogout() {
  this.userService.logout()
  this.router.navigate(['/'], {
    relativeTo: this.activeRoute
  })
}
public doChangePassword(){
      //@ts-ignore
      Swal.fire({
        title: "Enter your new password",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Change password",
        showLoaderOnConfirm: true,
        preConfirm: async (newPassword: string) => {
          try {
            this.userService.changePassword(newPassword)
          } catch (error) {
            //@ts-ignore
            Swal.showValidationMessage('Failed to change password');
          }
        },
        //@ts-ignore
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result: any) => {
        if (result.isConfirmed) {
          //@ts-ignore
          Swal.fire({
            title: "Success",
            text: "Your password has been changed successfully",
            icon: "info"
          });
        }
      });
}
}