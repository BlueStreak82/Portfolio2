import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
