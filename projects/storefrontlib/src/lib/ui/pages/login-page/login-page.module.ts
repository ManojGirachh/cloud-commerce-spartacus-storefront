import { RouterModule } from '@angular/router';
import { CmsPageGuards } from './../../../cms/guards/cms-page.guard';
import { NotAuthGuard } from './../../../auth/guards/not-auth.guard';
import { NgModule } from '@angular/core';
import { LoginPageLayoutModule } from './../../layout/login-page-layout/login-page-layout.module';
import { LoginPageComponent } from './login-page.component';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [NotAuthGuard, CmsPageGuards],
    component: LoginPageComponent,
    data: {
      pageLabel: 'login',
      cxConfigurable: { path: 'login' }
    }
  }
];
@NgModule({
  imports: [LoginPageLayoutModule, RouterModule.forChild(routes)],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class LoginPageModule {}
