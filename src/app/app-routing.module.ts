import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full'},
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
