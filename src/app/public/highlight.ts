// #region imports
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
// #endregion

export const skyAnimationHighlight = trigger('skyAnimationHighlight', [
    state('highlight', style({
        backgroundColor: 'yellow',
        opacity: 0.9,
        border: '2px solid #007ca6'
    })),
    transition('highlight => void',
        animate('0.5s')
    ),
    transition('void => highlight',
        animate('0.5s')
    )
]) as any;
