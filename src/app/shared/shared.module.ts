import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BannerComponent } from "./banner/banner.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
