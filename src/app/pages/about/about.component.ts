import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule, MatSliderModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name = 'nicolas';

  constructor() { }

  ngOnInit(): void {
    console.log('init');
    this.name = '';
  }

  generateError() {
    throw new Error('Error generating by user');
  }

}
