import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  socials = [
  
    { name: 'LinkedIn', icon: 'images/linke.webp', url: 'https://www.linkedin.com/in/beni-diyavanga-ba6b9b2b1' }
  ];
}