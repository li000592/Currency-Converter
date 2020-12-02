import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './InstallPwa.css'

const InstallPWA = props => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState(null)
  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = evt => {
    evt.preventDefault()
    props.SetLoinCount(count => count + 1)
    document.querySelector('.pwaInstallPrompt').style.display = 'none'
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }
  if (!supportsPWA) {
    return null
  }
  const clickLater = () => {
    document.querySelector('.pwaInstallPrompt').style.display = 'none'
    props.SetLoinCount(0)
  }
  return (
    <div className="pwaInstallPrompt" style={{display: props.display}}>
      <div className="promptCard">
        <p className="promptTxt">Installing uses almost no storage and process quick way to return to this app</p>
        <div className="promptAction">
          <button className="pwaButton" id="setup_button" aria-label="Install app" title="Install app" onClick={onClick}>
            Install
          </button>

          <NavLink to="./" onClick={clickLater} className="later">
            {' '}
            Later{' '}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default InstallPWA
