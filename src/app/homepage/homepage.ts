import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar';
import { HeroSection } from '../hero-section/hero-section';
import { About } from '../about/about';
import { Portfolio } from '../portfolio/portfolio';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { HeroSection2 } from '../hero-section2/hero-section2';

@Component({
  selector: 'app-homepage',
  imports: [Navbar, About, Contact, Footer, HeroSection2],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
