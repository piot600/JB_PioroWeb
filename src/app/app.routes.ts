import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/general/home/home.component";
import {CollectionComponent} from "./pages/general/collection/collection.component";
import {AboutComponent} from "./pages/general/about/about.component";
import {ContactComponent} from "./pages/general/contact/contact.component";

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path:'collection', component:CollectionComponent },
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent }
];

