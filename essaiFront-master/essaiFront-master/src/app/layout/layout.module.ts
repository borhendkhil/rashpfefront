import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path:'', redirectTo:'user', pathMatch:'full'},
      { path: 'user', loadChildren: () => import('../components/user/user.module').then(m => m.UserModule) },
      { path: 'roles', loadChildren: () => import('../components/roles/roles.module').then(m => m.RolesModule) },
      { path: 'marque', loadChildren: () => import('../components/marque/marque.module').then(m => m.MarqueModule) },
      { path: 'categorie', loadChildren: () => import('../components/categorie/categories.module').then(m => m.CategoriesModule) },
      { path: 'commandes', loadChildren: () => import('../components/commandes/commandes.module').then(m => m.CommandesModule) },
      { path: 'client', loadChildren: () => import('../components/client/client.module').then(m => m.ClientModule) },
      { path: 'produit', loadChildren: () => import('../components/produit/produit.module').then(m => m.ProduitModule) },


      { path: '**', redirectTo: '/notfound' },
    ]
  }
];

@NgModule({
  declarations: [
    MainSidebarComponent,
    MainNavbarComponent,
    MainFooterComponent,
    MainContentComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }
