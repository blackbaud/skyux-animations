import { skyAnimationHighlight } from './highlight';

describe('Animation Highlight', () => {
    it('should define an animation trigger', () => {
        const definitions: any = skyAnimationHighlight.definitions;
        expect(skyAnimationHighlight.name).toEqual('skyAnimationHighlight');
        expect(definitions[0].name).toEqual('highlight');
        expect(definitions[1].expr).toEqual('highlight => void');
        expect(definitions[1].animation.timings).toEqual('0.5s');
        expect(definitions[2].expr).toEqual('void => highlight');
        expect(definitions[2].animation.timings).toEqual('0.5s');
    });
});
