import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'', component: HomeComponent
},{
  path:'app2', loadChildren: () => import('../../../app2/src/app/app.module').then(m => m.AppModule)
},
{ path: 'app1', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
