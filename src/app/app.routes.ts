import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { Footer } from './components/footer/footer';
import { Studio } from './sections/studio/studio';
import { Cours } from './sections/cours/cours';
import { Dashboard } from './sections/dashboard/dashboard';
import { Contact } from './components/footer/contact';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'hero', component: Hero },
    { path: 'features', component: Features },
    { path: 'footer', component: Footer },
    //{ path: 'cours', component: Home  },
    { path: 'studio', component: Studio},
    { path: 'cours', component: Cours},
    { path: 'dashboard', component: Dashboard},
    { path: 'contact', component: Contact},
    { path: '**', redirectTo: '' }
];
