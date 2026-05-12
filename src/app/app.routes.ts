import { Routes } from '@angular/router';
import { Punto1 } from './components/pages/punto1/punto1';
import { Punto2 } from './components/pages/punto2/punto2';
import { Punto3 } from './components/pages/punto3/punto3';
import { Punto4 } from './components/pages/punto4/punto4';


export const routes: Routes = [
    { path: '', redirectTo: '/punto1', pathMatch: 'full' },
    { path: 'punto1', component : Punto1 },
    { path: 'punto2', component : Punto2 },
    { path: 'punto3', component : Punto3 },
    { path: 'punto4', component : Punto4 }
]
;
