import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChannelComponent} from "./channel.component";


const routes: Routes = [
  {
    path: '', component: ChannelComponent, children: [
      {path: '', loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)},
      {path: 'videos', loadChildren: () => import('./modules/videos/videos.module').then(m => m.VideosModule)},
      {path: 'playlists', loadChildren: () => import('./modules/playlists/playlists.module').then(m => m.PlaylistsModule)},
      {path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule {
}
