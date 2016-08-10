import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
	{
		path: 'heroes',	// no need for prefix slash
		component: HeroesComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent	
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}	
];

export const routing = RouterModule.forRoot(appRoutes);