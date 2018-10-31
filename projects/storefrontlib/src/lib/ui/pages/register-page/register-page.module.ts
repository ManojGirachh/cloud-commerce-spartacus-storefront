import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page.component';
import { RegisterLayoutModule } from '../../layout/register-layout/register-layout.module';
import { NotAuthGuard } from './../../../auth/guards/not-auth.guard';
import { CmsPageGuards } from '../../../cms/guards/cms-page.guard';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [NotAuthGuard, CmsPageGuards],
    component: RegisterPageComponent,
    data: {
      pageLabel: 'login',
      cxConfigurable: { path: 'register' }
    }
  }
];

@NgModule({
  imports: [CommonModule, RegisterLayoutModule, RouterModule.forChild(routes)],
  declarations: [RegisterPageComponent],
  exports: [RegisterPageComponent]
})
export class RegisterPageModule {}
