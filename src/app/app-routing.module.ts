import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './subs/portfolio/portfolio.component';
import { WorksComponent } from './subs/works/works.component';
import { GalleryComponent } from './subs/gallery/gallery.component';
import { GarageComponent } from './subs/garage/garage.component';
import { BlogsComponent } from './subs/blog/blogs/blogs.component';
import { PostComponent } from './subs/blog/post/post.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', children: [
          { path: 'portfolio', component: PortfolioComponent },
          { path: 'works', component: WorksComponent },
          { path: 'gallery', component: GalleryComponent },
          { path: 'garage', component: GarageComponent },
          {
            path: 'blog', component: BlogsComponent, children: [
              {
                path: '', children: [
                  { path: 'posts', component: PostComponent }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
