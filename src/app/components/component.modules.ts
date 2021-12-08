import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './header/login-register/login-register.component';

import { ViewNewsCardComponent } from './home/card/view-news-card/view-news-card.component';
import { NewNewsCardComponent } from './home/card/new-news-card/new-news-card.component';
import { CategoriesCard1Component } from './home/card/categories-card1/categories-card1.component';
import { NameCatagoriesComponent } from './home/card/name-catagories.component';
import { CategoriesCard2Component } from './home/card/categories-card2/categories-card2.component';
import { PagereadComponent } from './pageread/pageread.component';

import { TopNewsComponent } from './own-categories/card/top-news/top-news.component';
import { HotNewsComponent } from './own-categories/card/hot-news/hot-news.component';
import { NewestNewsComponent } from './own-categories/card/newest-news/newest-news.component';
import { MostViewNewsComponent } from './own-categories/card/most-view-news/most-view-news.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './own-categories/news/news.component';
import { WorldComponent } from './own-categories/world/world.component';
import { LawComponent } from './own-categories/law/law.component';
import { BusinessComponent } from './own-categories/business/business.component';
import { TechnologyComponent } from './own-categories/technology/technology.component';
import { CarComponent } from './own-categories/car/car.component';
import { TravelComponent } from './own-categories/travel/travel.component';
import { LifeStyleYoungComponent } from './own-categories/life-style-young/life-style-young.component';
import { CulturalComponent } from './own-categories/cultural/cultural.component';
import { EducationComponent } from './own-categories/education/education.component';
import { EntertainmentComponent } from './own-categories/entertainment/entertainment.component';
import { HealthComponent } from './own-categories/health/health.component';
import { RealFakeComponent } from './own-categories/real-fake/real-fake.component';
import { ScienceComponent } from './own-categories/science/science.component';
import { SportComponent } from './own-categories/sport/sport.component';
import { YouReadComponent } from './own-categories/you-read/you-read.component';


import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card' ;
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NewsComponent,
    WorldComponent,
    LawComponent,
    BusinessComponent,
    TechnologyComponent,
    CarComponent,
    TravelComponent,
    LifeStyleYoungComponent,
    CulturalComponent,
    EducationComponent,
    EntertainmentComponent,
    HealthComponent,
    RealFakeComponent,
    ScienceComponent,
    SportComponent,
    YouReadComponent,
   



    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginRegisterComponent,

    //categories page

    TopNewsComponent,
    HotNewsComponent,
    NewestNewsComponent,
    MostViewNewsComponent,


    //home page
    ViewNewsCardComponent,
    NewNewsCardComponent,
    CategoriesCard1Component,
    NameCatagoriesComponent,
    CategoriesCard2Component,

    //page read
    PagereadComponent,
    
  ],
  imports: [
  BrowserModule,
  RouterModule,
  FormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    NgbModule
 
],
  exports: [

  NewsComponent,
  WorldComponent,
  LawComponent,
  BusinessComponent,
  TechnologyComponent,
  CarComponent,
  TravelComponent,
  LifeStyleYoungComponent,
  CulturalComponent,
  EducationComponent,
  EntertainmentComponent,
  HealthComponent,
  RealFakeComponent,
  ScienceComponent,
  SportComponent,
  YouReadComponent,

  HeaderComponent,
  HomeComponent,
  FooterComponent,

    //home page
    ViewNewsCardComponent,
    NewNewsCardComponent,
    CategoriesCard1Component,
    NameCatagoriesComponent,
    CategoriesCard2Component,

    //categories page
    TopNewsComponent,
    HotNewsComponent,
    NewestNewsComponent,
    MostViewNewsComponent,

    //page read
    PagereadComponent,
    


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
