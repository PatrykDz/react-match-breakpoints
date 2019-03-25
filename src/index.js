import Provider from './Provider'
import withBreakpoints from './withBreakpoints'
import useBreakpoints from './useBreakpoints'
import { proxiedBreakpointsStoreInstance, breakpointsStoreInstance } from './Breakpoints'
import createBreakpoints from './createBreakpoints'
import Context from './Context'

const Breakpoints = (window.Proxy && proxiedBreakpointsStoreInstance) || breakpointsStoreInstance

export { Provider, withBreakpoints, useBreakpoints, Breakpoints, createBreakpoints, Context }
