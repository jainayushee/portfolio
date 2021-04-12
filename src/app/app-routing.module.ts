import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:"*", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutMeComponent},
  {path:"blogs", component:BlogComponent},
  {path:"projects", component:WorksComponent},
  {path:"blogs/blog-page", component:BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
