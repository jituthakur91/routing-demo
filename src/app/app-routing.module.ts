import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListingComponent } from './components/listing/listing.component';
import { PageTypesComponent } from './components/page-types/page-types.component';

const routes: Routes = [
    { path: '', component: PageTypesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'listing', component: ListingComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
