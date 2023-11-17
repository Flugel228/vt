import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from "./modules/video/video.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)},
  {path: 'video', loadChildren: () => import('./modules/video/video.module').then(m => m.VideoModule)},
  {path: 'channel', loadChildren: () => import('./modules/channel/channel.module').then(m => m.ChannelModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
