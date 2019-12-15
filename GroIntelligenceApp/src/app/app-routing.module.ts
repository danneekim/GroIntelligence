import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLinkComponent } from './product-link/product-link.component';


const routes: Routes = [
  {path: 'products', component: ProductLinkComponent, data:{shouldDetach: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
