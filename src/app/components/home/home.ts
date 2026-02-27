import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Hero } from "../hero/hero";
import { Features } from "../features/features";
import { About } from "../about/about";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Features, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
