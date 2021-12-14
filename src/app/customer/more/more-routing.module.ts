import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  { path: '', redirectTo: 'AboutUs', pathMatch: 'full' }, 
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'TeamsAndCondition', component: TermsAndConditionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
