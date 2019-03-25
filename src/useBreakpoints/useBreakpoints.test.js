import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'
import { renderHook } from 'react-hooks-testing-library'

const mediaQueries = {
  isMobile: 'screen and (max-width: 500px)',
  isTablet: 'screen and (min-width: 500px) and (max-width: 1200px)',
  isDesktop: 'screen and (min-width: 1201px)',
}

const stateMediaBreakpoints = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
}

let createBreakpoints
let Provider
let useBreakpoints

beforeEach(() => {
  jest.resetModules()

  createBreakpoints = require('../createBreakpoints')
  Provider = require('../Provider')
  useBreakpoints = require('../useBreakpoints')
})

const generateDummyComponent = () => {
  return props => <div>{[...props].map(prop => <p>{prop}</p>)}</div>
}

it('should pass breakpoints state down to wrapped component', () => {
  const breakpoints = createBreakpoints(mediaQueries)
  const Component = generateDummyComponent()

  const WrappedComponent = () => {
    const breakpoints = useBreakpoints()

    return (
      <React.Fragment>
        <Component data-testid="component" breakpoints={breakpoints} />
      </React.Fragment>
    )
  }

  const rendered = renderHook(() => (
    <Provider breakpoints={breakpoints}>
      <WrappedComponent />
    </Provider>
  ))
})
