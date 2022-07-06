import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
  component: HomePageComponent,
  path:'Home'
},

{
 component: ProductComponent,
  path:'Product'
}
  ,
  {
  component: CartComponent,
  path:'Cart'
  }
,
{
  component: NewsComponent,
  path:'News'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
