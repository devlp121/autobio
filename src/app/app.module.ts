import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PortfolioComponent } from './subs/portfolio/portfolio.component';
import { WorksComponent } from './subs/works/works.component';
import { GalleryComponent } from './subs/gallery/gallery.component';
import { PostComponent } from './subs/blog/post/post.component';
import { BlogsComponent } from './subs/blog/blogs/blogs.component';
import { GarageComponent } from './subs/garage/garage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    WorksComponent,
    GalleryComponent,
    PostComponent,
    BlogsComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
