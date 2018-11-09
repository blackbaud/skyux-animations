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

// This animation slides an element's veritcal height to 0 and back (but preserves margin and padding)
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

// This animation slides an element's veritcal height to 0 and back including margin and padding
export const skyAnimationSlideNoTrim = trigger('skyAnimationSlideNoTrim', [
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
