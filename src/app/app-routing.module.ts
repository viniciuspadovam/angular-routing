import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { PageComponent } from './pages/url-param-ex/page/page.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  { path: 'portfolio', component: CardComponent },
  {
    path: 'params', component: PageComponent, children: [
      { path: ':id', component: PageComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
