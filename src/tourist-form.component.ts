import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tourist-form',
  templateUrl: './tourist-form.component.html',
  styleUrls: ['./tourist-form.component.css']
})
export class TouristFormComponent implements OnInit {
  tourist: Tourist = new Tourist();
  constructor(private touristService: TouristService) { }


  ngOnInit(): void {
  }

  savetourist() {
    this.touristService.createTourist(this.tourist).subscribe(data => {
      console.log(data);
      this.success();
    },
      error => console.log(error));
  }

  success() {
    alert("Tourist Registered Successfully");

  }

  onSubmit(register: any) {
    console.log(this.tourist, register);
    this.savetourist();
    this.success();
  }

}
