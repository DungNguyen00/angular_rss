import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CarComponent } from './car/car.component';
import { CulturalComponent } from './cultural/cultural.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { LawComponent } from './law/law.component';
import { LifeStyleYoungComponent } from './life-style-young/life-style-young.component';
import { NewsComponent } from './news/news.component';
import { RealFakeComponent } from './real-fake/real-fake.component';
import { ScienceComponent } from './science/science.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';
import { TravelComponent } from './travel/travel.component';
import { WorldComponent } from './world/world.component';
import { YouReadComponent } from './you-read/you-read.component';


const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'car', component: CarComponent },
  { path: 'law', component: LawComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'world', component: WorldComponent },
  { path: 'lifetStyleYoung', component: LifeStyleYoungComponent },
  { path: 'cultural', component: CulturalComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'sport', component: SportComponent },
  { path: 'education', component: EducationComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'health', component: HealthComponent },
  { path: 'readFake', component: RealFakeComponent },
  { path: 'youRead', component: YouReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnCategoriesRoutingModule { }
