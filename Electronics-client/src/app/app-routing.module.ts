import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { MobilePhoneFilterComponent } from './components/Filters/mobile-phone-filter/mobile-phone-filter.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "", component: MainComponent },
      { path: "s", component: CategoryComponent ,children:[
        { path: "", component: ProductComponent },
        { path: "", component: MobilePhoneFilterComponent,outlet:"Filter" },
       



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
