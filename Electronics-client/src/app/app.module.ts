import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { FilterComponent } from './components/filter/filter.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddProductComponent } from './pages/Admin/Add-Product/Add-Product.component';
import { AddGamingConsoleComponent } from './components/Add-Folder/Add-GamingConsole/Add-GamingConsole.component';
import { AddDesktopPCComponent } from './components/Add-Folder/Add-DesktopPC/Add-DesktopPC.component';
import { AddLaptopComponent } from './components/Add-Folder/Add-Laptop/Add-Laptop.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/ProductService/product.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    CategoryComponent,
    ProductComponent,
    FilterComponent,
    MenuComponent,
    AddProductComponent,
    AddGamingConsoleComponent,
    AddDesktopPCComponent,
    AddLaptopComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
