import { trigger, state, style, transition, animate } from '@angular/animations';

const animation = animate('400ms ease-in-out');

export const RollerAnimation = [

  trigger('roller', [

    state('void', style({ height: '0' })),

    state('*', style({ height: '*' })),

    transition('* => void', [ animation ]),

    transition('void => *', [ animation ])

  ]

)];
