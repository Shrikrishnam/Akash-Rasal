import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  appointmentdata: [];
  
  constructor(private userService: UserService, private router: Router){}

  ngOnInit() {
    this.getfitness();  
  }
  
  getfitness() {
    this.userService.getfitnessdata().subscribe(
        (data)=>{
            this.appointmentdata = data;
    })
  }

  editUser(user) {
    this.userService.userData = user;
      this.router.navigateByUrl("place-fitness-trainer-appointment");
  }

  deleteUser(id) {
    if (confirm("Do you really want to DELETE appointment number "+id+" ?")) {
      this.userService.deletefitnessdata(id).subscribe((data) => {
        this.getfitness()
      });
    }
  }
}
