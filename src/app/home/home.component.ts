import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  inputData: string = '';
  receivedValue: string = '';

  constructor(private router: Router) {
  }

  // sendDataToApp2() {
  //   console.log("data being sent to app2:", this.inputData)
  //   this.router.navigate(['/app2'], { state: { data: this.inputData } });
  // }

  sendDataToApp2() {
    const url = '/app2?data=' + encodeURIComponent(this.inputData);
    console.log("data being sent to app2:", this.inputData)
    window.open(url, '_blank');
  }

  openApp2InNewWindow() {
    window.open('/app2', '_blank');
  }
  



}
