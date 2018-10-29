// #region imports
import {
  AnimationEntryMetadata
} from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
// #endregion

export const skyAnimationSlide = trigger('skyAnimationSlide', [
  state('down', style({
    overflow: 'visible',
    height: '*'
  })),
  state('up', style({
    overflow: 'hidden',
    height: 0
  })),
  transition(
    'up <=> down',
    animate('150ms ease-in')
  )
]) as AnimationEntryMetadata;

export const skyAnimationSlideNoPaddingOrMargin = trigger('skyAnimationSlideNoPaddingOrMargin', [
  state('down', style({
    overflow: 'visible',
    height: '*',
    paddingTop: '*',
    paddingBottom: '*',
    marginTop: '*',
    marginBottom: '*'
  })),
  state('up', style({
    overflow: 'hidden',
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  })),
  transition(
    'up <=> down',
    animate('150ms ease-in')
  )
]) as AnimationEntryMetadata;
