import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CmsPageGuards } from '../../../cms/guards/cms-page.guard';
import { CategoryPageLayoutModule } from '../../layout/category-page-layout/category-page-layout.module';
import { ProductListPageLayoutModule } from '../../layout/product-list-page-layout/product-list-page-layout.module';

import { CategoryPageComponent } from './category-page.component';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [CmsPageGuards],
    component: CategoryPageComponent,
    data: {
      pageLabel: 'search',
      cxConfigurable: { path: 'search' }
    }
  },

  // redirect OLD links
  {
    path: 'Open-Catalogue/:categoryTitle/c/:categoryCode',
    redirectTo: null,
    data: {
      cxConfigurable: { redirectTo: 'category' }
    }
  },
  {
    path: 'Open-Catalogue/:category1/:categoryTitle/c/:categoryCode',
    redirectTo: null,
    data: {
      cxConfigurable: { redirectTo: 'category' }
    }
  },
  {
    path: 'Open-Catalogue/:category1/:category2/:categoryTitle/c/:categoryCode',
    redirectTo: null,
    data: {
      cxConfigurable: { redirectTo: 'category' }
    }
  },
  {
    path: 'OpenCatalogue/:category1/:category2/:categoryTitle/c/:categoryCode',
    redirectTo: null,
    data: {
      cxConfigurable: { redirectTo: 'category' }
    }
  },
  {
    path: null,
    canActivate: [CmsPageGuards],
    component: CategoryPageComponent,
    data: {
      cxConfigurable: { path: 'category' }
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    CategoryPageLayoutModule,
    ProductListPageLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPageComponent],
  exports: [CategoryPageComponent]
})
export class CategoryPageModule {}
