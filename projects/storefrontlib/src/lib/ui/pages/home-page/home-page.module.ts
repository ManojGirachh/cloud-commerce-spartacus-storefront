import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CmsPageGuards } from '../../../cms/guards/cms-page.guard';
import { LandingPageLayoutModule } from '../../layout/landing-page-layout/landing-page-layout.module';
import { HomePageComponent } from './home-page.component';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [CmsPageGuards],
    component: HomePageComponent,
    data: {
      pageLabel: 'homepage',
      cxConfigurable: { path: 'homepage' }
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    LandingPageLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule {}
