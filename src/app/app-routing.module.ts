import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    loadChildren: () =>
      import('./customer/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Store',
    loadChildren: () =>
      import('./customer/store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'Cart',
    loadChildren: () =>
      import('./customer/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'Wishlist',
    loadChildren: () =>
      import('./customer/wishlist/wishlist.module').then(
        (m) => m.WishlistModule
      ),
  },
  {
    path: 'More',
    loadChildren: () =>
      import('./customer/more/more.module').then((m) => m.MoreModule),
  },
  {
    path: 'Blog',
    loadChildren: () =>
      import('./customer/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'Auth',
    loadChildren: () =>
      import('./customer/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Account',
    loadChildren: () =>
      import('./customer/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./customer/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
