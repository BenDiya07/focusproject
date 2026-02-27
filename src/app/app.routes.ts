import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';
import { Studio } from './sections/studio/studio';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'hero', component: Hero },
    { path: 'features', component: Features },
    { path: 'footer', component: Footer },
    //{ path: 'cours', component: Home  },
    { path: 'studio', component: Studio},
    { path: '**', redirectTo: '' }
];
