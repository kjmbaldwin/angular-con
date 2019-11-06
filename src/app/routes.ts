import { EventListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

export const appRoute = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent }

]