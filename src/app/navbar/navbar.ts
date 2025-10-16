import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }

  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  faHome = faHome;
}
