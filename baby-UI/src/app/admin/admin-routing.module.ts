import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { InfoComponent} from '../info/info.component';
import { MapComponent} from '../map/map.component';

const routes: Routes = [
  {path : 'navbar', component : NavbarComponent},
  {path : 'info', component : InfoComponent},
  {path : 'map', component : MapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
