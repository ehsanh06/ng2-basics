import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventService,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe 
} from './events/index'

import { 
    JQ_TOKEN, 
    TOASTR_TOKEN, 
    Toastr, 
    CollapsibleWellComponent
} from './common/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from "./user/auth.service";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService, 
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        },
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        }

    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState (component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event. do you really want to cancel?')
    return true
}