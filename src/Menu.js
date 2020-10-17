import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import VanillaOverworld from './DataObjects/VanillaOverworld'
import VanillaHyrule from './DataObjects/VanillaHyrule'

export default function Menu ({ showRouteFinder, overworldOnly, trackGaEvent, ...props }) {
  const [message, setMessage] = useState('')
  const [currentMenuHeight, setCurrentMenuHeight] = useState(0)
  const menuRef = useRef(null)

  useEffect(() => {
    if (message !== '') {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  })

  useLayoutEffect(() => {
    handleResize()
  })

  const handleResize = () => {
    if (menuRef.current.clientHeight !== currentMenuHeight) {
      setCurrentMenuHeight(menuRef.current.clientHeight)
      props.setMenuHeight(menuRef.current.clientHeight)
    }
  }

  const resetState = () => {
    if (!window.confirm('Are you sure you want to reset?')) {
      return
    }
    props.resetState()
    setMessage('Tracker Reset')
    trackGaEvent('menu', 'reset app state')
  }

  const setAppState = state => {
    localStorage.setItem('zootr-entrance-tracker', JSON.stringify(state))
    window.location.reload()
  }

  const setVanillaHyrule = () => {
    if (!window.confirm('Are you sure? This will remove all current settings.')) {
      return
    }
    setAppState(VanillaHyrule)
    trackGaEvent('menu', 'set vanilla hyrule')
  }

  const setVanillaOverworld = () => {
    if (!window.confirm('Are you sure? This will remove all current settings.')) {
      return
    }
    setAppState(VanillaOverworld)
    trackGaEvent('menu', 'set vanilla overworld')
  }

  return (
    <div ref={menuRef} className='navbar is-fixed-top is-dark'>
      <div style={{ width: '100%', maxWidth: '1000px', margin: 'auto' }}>
        <nav>
          <h1 className='is-size-4 navbar-item has-text-white has-text-weight-bold'>
                        ZOoTR Entrance Tracker
          </h1>
        </nav>
        {message === ''
          ? <div className='has-background-dark nav-bottom'>
            <div className='nav-bottom-left'>
              <a href='#vanilla-hyrule' className='nav-bottom-item has-text-light' onClick={setVanillaHyrule}>
                                Vanilla Hyrule
              </a>
              <a href='#vanilla-overworld' className='nav-bottom-item has-text-light' onClick={setVanillaOverworld}>
                                Vanilla Overworld
              </a>
              <a href='#reset' className='nav-bottom-item has-text-light' onClick={resetState}>
                                Reset
              </a>
              <a
                href='https://github.com/brakkum/ZOoTR-Entrance-Tracker'
                className='nav-bottom-item has-text-grey-light'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => trackGaEvent('menu', 'click github link')}
              >
                                GitHub
              </a>
            </div>
          </div>
          : <div className='nav-bottom-right nav-right'>
            <div className='nav-bottom-item nav-bottom-message is-size-6 has-text-primary has-text-weight-bold'>
              {message}
            </div>
          </div>}
      </div>
    </div>
  )
}
