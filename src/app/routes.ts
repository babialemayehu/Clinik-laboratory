import { Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component'; 
import { UserProfileRouteComponent } from './user-profile-route/user-profile-route.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordRouteComponent } from './change-password-route/change-password-route.component';
import { QueueComponent } from './queue/queue.component'; 
import { VisitsComponent } from './visits/visits.component';
import { RouteComponent as UploadProfile } from './upload_profile_pic/route/route.component'; 
import { LabResquestsComponent } from './lab-resquests/lab-resquests.component';
import { EmptyQueueComponent } from './empty-queue/empty-queue.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'users', component: UsersComponent },
    {path: 'settings', component: SettingsComponent }, 
    //{path: ':worker_id', component: UserProfileRouteComponent}, 
    {path: 'queue', component: QueueComponent },
    {path: 'visits/:reg_id', component: VisitsComponent},
    {path: 'search/:reg_id', component: DashboardComponent}, 
    {path: 'settings/change profile picture', component: UploadProfile },
    {path: 'settings/change password', component: ChangePasswordRouteComponent },
    {path: 'lab/requests/:queue_id', component: LabResquestsComponent}, 
    {path: 'lab/request/empty', component: EmptyQueueComponent }
]; 