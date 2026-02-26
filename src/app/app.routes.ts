import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'hero', component: Hero },
    { path: 'features', component: Features },
    { path: 'footer', component: Footer },
    { path: '**', redirectTo: '' }
];
