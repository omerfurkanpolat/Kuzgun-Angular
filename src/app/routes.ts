

import { Routes } from '@angular/router';


import { AuthGuard } from './_guard/auth-guard';

import { CategoryUpdateResolver } from './_resolver/category-update.resolver';
import { GetAllPostResolver } from './_resolver/get-all-post.resolver';
import { GetPostResolver } from './_resolver/get-post.resolver';
import { LastPostCategoriesResolver } from './_resolver/last-post-categories.resolver';
import { LastPostResolver } from './_resolver/last-post.resolve';

import { MessageResolver } from './_resolver/message.resolver';
import { MyAccountResolver } from './_resolver/myacount.resolver';
import { PostCategoryResolver } from './_resolver/post-category.resolver';
import { PostSubCategoryResolver } from './_resolver/post-subcategory.resolver';
import { PostUpdateResolver } from './_resolver/post-update.resolver';
import { SubCategoryResolver } from './_resolver/subcategory.resolver';
import { UserDetailResolver } from './_resolver/user-detail.resolver';

export const appRoutes: Routes = [
    
];
