import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatCardModule,MatProgressBarModule,MatProgressSpinnerModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {

  @Input() data!:any;

  ngOnChanges(changes:any){
    console.log("cambio en forecast")
    console.log(this.data)
  }

}
