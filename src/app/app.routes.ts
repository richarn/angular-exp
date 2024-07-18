import { Routes } from '@angular/router';
import path from 'path';
import { title } from 'process';

export const routes: Routes = [

    {
        path: "dashboard",
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {            
                path: "change-detection",
                title: "Change Detection",
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {            
                path: "control-flow",
                title: "Control flow",
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {            
                path: "defer-options",
                title: "Defer options",
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },
            {            
                path: "defer-vies",
                title: "Defer views",
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            },
            {            
                path: "user/:id",
                title: "User view",
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {            
                path: "user-list",
                title: "User List",
                loadComponent: () => import('./dashboard/pages/users/users.component')
            },
            {
                path: '', redirectTo: 'control-flow', pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo:  '/dashboard',
        pathMatch: 'full'
    }
];
