import React, { Component, useState, useContext } from 'react'
import { withBreakpoints, Context } from 'react-match-breakpoints'

//import { withBreakpoints, useBreakpoints } from 'react-match-breakpoints'

import './Page.css'

const useBreakpoints = () => {
  return useContext(Context)
}

const Page = () => {
  const breakpoints = useBreakpoints()

  const getCurrentBreakpointName = () => Object.keys(breakpoints).find(key => breakpoints[key])

  const getCurrentBreakpointEmoji = breakpointName => {
    switch (breakpointName) {
      case 'mobile':
        return '📱'
      case 'tablet':
        return '📱📱 📱📱'
      case 'desktop':
        return '💻'
      case 'bigDesktop':
        return '🖥️'
    }
  }

  const breakpointName = getCurrentBreakpointName()
  return (
    <div className="container">
      <h3>{`Current breakpoint name is ${breakpointName} ${getCurrentBreakpointEmoji(
        breakpointName
      )}`}</h3>
    </div>
  )
}

export default Page
