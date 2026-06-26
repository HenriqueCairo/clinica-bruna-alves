import { Component } from '@angular/core';
import { LandingClinica } from './pages/landing-clinica/landing-clinica';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingClinica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}