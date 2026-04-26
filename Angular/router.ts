const routes:Routes=[
{
path:'home',
component:AppComponent
},
{
path:'user',
component:UserComponent,
canActive:[AuthGuard],
},
{
path:'admin',
loadComponent:()=> import('./admin/AdminComponent.ts').then(c=>c.AdminComponent)
},
{
path:'product',
loadChildren:()=> import('./product/ProductModule.ts').then(m=>m.ProductModule)
},
{
path:'**',
component:NotfoundComponent
}
];


<router-outlet><router-outlet>

<a routerLink="/home" routerLinkActive="active"></a>