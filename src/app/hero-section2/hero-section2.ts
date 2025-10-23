import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero-section2',
  imports: [FontAwesomeModule],
  templateUrl: './hero-section2.html',
  styleUrl: './hero-section2.scss',
})
export class HeroSection2 {
  faSquareGithub = faGithub;
  faSquareLinkedin = faLinkedinIn;
  faAt = faAt;
}
