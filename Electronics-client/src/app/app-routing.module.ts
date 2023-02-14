import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/Cart/Cart.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterComponent } from './components/filter/filter.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './pages/Admin/Add-Product/Add-Product.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditAccountComponent } from './pages/EditAccount/EditAccount.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/User/Auth/AuthGuard.service';


const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      
      { path: "Details/:id", component: DetailsComponent },
      { path: "Add", component: AddProductComponent },
      { path: "EditAccount/:id", component: EditAccountComponent },
      { path: "Cart", component: CartComponent },
      { path: "", component: MainComponent },
      { path: "Category/:id", component: CategoryComponent ,children:[
        { path: "", component: ProductComponent },
        { path: "", component: FilterComponent, outlet:"Filter" },
       
      ]},


    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
