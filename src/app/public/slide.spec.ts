import { skyAnimationSlide, skyAnimationSlideNoTrim } from './slide';

describe('Animation slide', () => {
  it('should define an animation trigger', () => {
    const definitions: any = skyAnimationSlide.definitions;

    expect(skyAnimationSlide.name).toEqual('skyAnimationSlide');
    expect(definitions[0].name).toEqual('down');
    expect(definitions[1].name).toEqual('up');
    expect(definitions[2].expr).toEqual('up <=> down');
    expect(definitions[2].animation.timings).toEqual('150ms ease-in');
  });

  it('should define an animation trigger for the no trim animation', () => {
    const definitions: any = skyAnimationSlideNoTrim.definitions;

    expect(skyAnimationSlideNoTrim.name).toEqual('skyAnimationSlideNoTrim');
    expect(definitions[0].name).toEqual('down');
    expect(definitions[1].name).toEqual('up');
    expect(definitions[2].expr).toEqual('up <=> down');
    expect(definitions[2].animation.timings).toEqual('150ms ease-in');
  });
});
