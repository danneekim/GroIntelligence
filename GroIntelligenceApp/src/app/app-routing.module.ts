import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLinkComponent } from './product-link/product-link.component';
import { IndustryLinkComponent } from './industry-link/industry-link.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch:'full'}, 
  {path: 'products', component: ProductLinkComponent, data:{shouldDetach: true}},
  {path: 'industries', component: IndustryLinkComponent, data:{shouldDetach: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
