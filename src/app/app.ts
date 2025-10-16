import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { About } from "./about/about";
import { Portfolio } from "./portfolio/portfolio";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection, About, Portfolio, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Portfolio2');
}
