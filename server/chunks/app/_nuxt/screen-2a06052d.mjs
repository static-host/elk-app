import { aX as useBreakpoints, aY as breakpointsTailwind } from '../server.mjs';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMediumOrLargeScreen = breakpoints.between("sm", "xl");
breakpoints.smallerOrEqual("xl");

export { isMediumOrLargeScreen as i };
