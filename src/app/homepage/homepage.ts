import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { About } from '../about/about';
import { Portfolio } from '../portfolio/portfolio';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { HeroSection2 } from '../hero-section2/hero-section2';
import { MorePanel } from '../more-panel/more-panel';

@Component({
  selector: 'app-homepage',
  imports: [Navbar, About, Contact, Footer, HeroSection2, MorePanel],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
