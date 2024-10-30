import { MenuRootItem } from 'ontimize-web-ngx';

import { BusinessAdministratorCardComponent } from './BusinessAdministrator-card/BusinessAdministrator-card.component';

import { DogCardComponent } from './Dog-card/Dog-card.component';

import { OwnerCardComponent } from './Owner-card/Owner-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { RoleCardComponent } from './Role-card/Role-card.component';

import { SystemLogCardComponent } from './SystemLog-card/SystemLog-card.component';

import { UserRoleCardComponent } from './UserRole-card/UserRole-card.component';

import { WalkCardComponent } from './Walk-card/Walk-card.component';

import { WalkRequestCardComponent } from './WalkRequest-card/WalkRequest-card.component';

import { WalkerCardComponent } from './Walker-card/Walker-card.component';

import { WalkerAvailabilityCardComponent } from './WalkerAvailability-card/WalkerAvailability-card.component';

import { WalkerRateCardComponent } from './WalkerRate-card/WalkerRate-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'BusinessAdministrator', name: 'BUSINESSADMINISTRATOR', icon: 'view_list', route: '/main/BusinessAdministrator' }
    
        ,{ id: 'Dog', name: 'DOG', icon: 'view_list', route: '/main/Dog' }
    
        ,{ id: 'Owner', name: 'OWNER', icon: 'view_list', route: '/main/Owner' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'Role', name: 'ROLE', icon: 'view_list', route: '/main/Role' }
    
        ,{ id: 'SystemLog', name: 'SYSTEMLOG', icon: 'view_list', route: '/main/SystemLog' }
    
        ,{ id: 'UserRole', name: 'USERROLE', icon: 'view_list', route: '/main/UserRole' }
    
        ,{ id: 'Walk', name: 'WALK', icon: 'view_list', route: '/main/Walk' }
    
        ,{ id: 'WalkRequest', name: 'WALKREQUEST', icon: 'view_list', route: '/main/WalkRequest' }
    
        ,{ id: 'Walker', name: 'WALKER', icon: 'view_list', route: '/main/Walker' }
    
        ,{ id: 'WalkerAvailability', name: 'WALKERAVAILABILITY', icon: 'view_list', route: '/main/WalkerAvailability' }
    
        ,{ id: 'WalkerRate', name: 'WALKERRATE', icon: 'view_list', route: '/main/WalkerRate' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BusinessAdministratorCardComponent

    ,DogCardComponent

    ,OwnerCardComponent

    ,PaymentCardComponent

    ,ReviewCardComponent

    ,RoleCardComponent

    ,SystemLogCardComponent

    ,UserRoleCardComponent

    ,WalkCardComponent

    ,WalkRequestCardComponent

    ,WalkerCardComponent

    ,WalkerAvailabilityCardComponent

    ,WalkerRateCardComponent

];