import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent,
    FAQComponent,
    TermsAndConditionComponent
  ],
  imports: [
    CommonModule,
    MoreRoutingModule
  ]
})
export class MoreModule { }
