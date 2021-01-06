import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';


import { appRoutes } from './routes';

import { AuthGuard } from './_guard/auth-guard';
import { ErrorInterceptor } from './_services/error.interceptor';

import { MyAccountResolver } from './_resolver/myacount.resolver';

import { UserDetailResolver } from './_resolver/user-detail.resolver';

import { CategoryUpdateResolver } from './_resolver/category-update.resolver';

import { SubCategoryResolver } from './_resolver/subcategory.resolver';



import { MessageResolver } from './_resolver/message.resolver';


import { PostCategoryResolver } from './_resolver/post-category.resolver';
import { PostCommentResolver } from './_resolver/post-comment.resolver';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { PostUpdateResolver } from './_resolver/post-update.resolver';
import { LastPostResolver } from './_resolver/last-post.resolve';
import { GetPostResolver } from './_resolver/get-post.resolver';

import { LastPostCategoriesResolver } from './_resolver/last-post-categories.resolver';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

import { PostSubCategoryResolver } from './_resolver/post-subcategory.resolver';
import { GetAllPostResolver } from './_resolver/get-all-post.resolver';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { FooterComponent } from './common-components/footer/footer.component';

registerLocaleData(localeTr);

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularEditorModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://localhost:44386/'],
        disallowedRoutes: ['https://localhost:44386/api/auth'],
      },
    }),
    NgbModule,
  ],
  providers: [
    AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },

    MyAccountResolver,
    UserDetailResolver,
    CategoryUpdateResolver,
    SubCategoryResolver,
    MessageResolver,
    PostCategoryResolver,
    PostCommentResolver,
    PostUpdateResolver,
    LastPostResolver,
    GetPostResolver,
    LastPostCategoriesResolver,
    PostSubCategoryResolver,
    GetAllPostResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
