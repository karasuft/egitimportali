import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { BasvurularComponent } from './basvurular/basvurular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = 
[
  { path:"Başvuru", component: BasvurularComponent},
  { path:"Anasayfa", component: AnasayfaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
