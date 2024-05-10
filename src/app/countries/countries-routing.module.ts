
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPageComponent
    },
    {
        path: 'by-country',
        component: ByRegionPageComponent
    },
    {
        path: 'by-region',
        component: ByRegionPageComponent
    },
    {
        path: 'by/:id',
        component: CountryPageComponent
    },
    {
        path: '**',
        component: ByCapitalPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [],
    
})
export class CountriesRoutingModule { }
