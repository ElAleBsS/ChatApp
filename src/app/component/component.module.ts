import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { IonicModule } from '@ionic/angular';
import { ItemStateComponent } from './item-state/item-state.component';


@NgModule({
  declarations: [
    ItemChatComponent,
    ItemStateComponent,
    ItemStateComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    ItemChatComponent,
    ItemStateComponent,
    ItemStateComponent
  ]
})
export class ComponentModule { }
