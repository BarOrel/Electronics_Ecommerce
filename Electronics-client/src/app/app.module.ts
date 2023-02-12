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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './services/ProductService/product.service';
import { AddMobilePhoneComponent } from './components/Add-Folder/Add-MobilePhone/Add-MobilePhone.component';
import { AddTabletComponent } from './components/Add-Folder/Add-Tablet/Add-Tablet.component';
import { AddSmartWatchComponent } from './components/Add-Folder/Add-SmartWatch/Add-SmartWatch.component';
import { AddTelevsionComponent } from './components/Add-Folder/Add-Televsion/Add-Televsion.component';
import { AddProcesorComponent } from './components/Add-Folder/Add-Procesor/Add-Procesor.component';
import { AddGraphicsCardComponent } from './components/Add-Folder/Add-GraphicsCard/Add-GraphicsCard.component';
import { AddMonitorComponent } from './components/Add-Folder/Add-Monitor/Add-Monitor.component';
import { TokenInterseptorService } from './services/User/Auth/TokenInterseptor/TokenInterseptor.service';
import { CartComponent } from './components/Cart/Cart.component';
import { DetailsComponent } from './pages/details/details.component';



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
    AddLaptopComponent,
    AddMobilePhoneComponent,
    AddTabletComponent,
    AddSmartWatchComponent,
    AddTelevsionComponent,
    AddProcesorComponent,
    AddGraphicsCardComponent,
    AddMonitorComponent,
    CartComponent,
    DetailsComponent


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterseptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
