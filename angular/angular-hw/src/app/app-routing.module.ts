import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecentlyAddedComponent} from "./pages/recently-added/recently-added.component";
import {GoLearnComponent} from "./pages/go-learn/go-learn.component";
import {SettingsComponent} from "./pages/settings/settings.component";


const routes: Routes = [
  { path: '', component: RecentlyAddedComponent },
  { path: 'go', component: GoLearnComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
