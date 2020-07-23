import { YashComponent } from './yash/yash.component';
import { AniketComponent } from './aniket/aniket.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'Home' , children : [
      {
        path :'Aniket' , component : AniketComponent
      },
      {
        path :'Yash' , component : YashComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
