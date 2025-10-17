import { Component, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @ViewChild('drawer') drawer!: MatSidenav;

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

  faHome = faHome;
  faBars = faBars;
}
