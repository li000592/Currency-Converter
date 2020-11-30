import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import './InstallPwa.css'


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    }
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, [])

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  }
  if (!supportsPWA) {
    return null;
  }
  return (
    <div className='pwaInstallPrompt'>
      <div className='promptCard'>
        <p className ='promptTxt'>Installing uses almost no storage and process quick way to return to this app</p>
      <div className ='promptAction'>
      <button
      className="pwaButton"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>

    <NavLink to='./' className='later'> Later </NavLink>
      </div>
      
      </div>


    </div>


  )
}

export default InstallPWA