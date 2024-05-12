// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PictureInPicture } from './PictureInPicture';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <br />

      <div className="flex justify-center items-center space-x-4"> {/* Flex container to align items inline */}
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl font-bold text-center mt-4 mb-2">Picture in Picture Screen share</h1>
      <PictureInPicture />
      <div>
        <div className="container mx-auto px-4 font-sans">
          <h1 className="text-2xl font-bold text-left mt-4 mb-2">How to Use the Picture-in-Picture Feature</h1>

          <h2 className="text-xl font-semibold text-left mt-4 mb-2">Starting Picture-in-Picture</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-left">
              <strong>Locate the Share Button:</strong> Find the "SHARE" button, typically positioned below the main video player.
            </li>
            <li className="text-left">
              <strong>Click the Share Button:</strong> Press "SHARE" to begin Picture-in-Picture. You may need to choose the screen or window to share.
            </li>
            <li className="text-left">
              <strong>Grant Permission:</strong> If prompted, confirm your choice to share the selected screen or window.
            </li>
            <li className="text-left">
              <strong>Enjoy Seamless Viewing:</strong> Press the START button to render the video. The video will play in a floating window that stays on top, allowing multitasking.
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-left mt-4 mb-2">Resizing the Picture-in-Picture Window</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-left">
              <strong>Move the PiP Window:</strong> Drag the window to your preferred screen location.
            </li>
            <li className="text-left">
              <strong>Resize the Window:</strong> Hover and drag the edges or corners of the window to adjust its size.
            </li>
            <li className="text-left">
              <strong>Control Playback:</strong> Use playback controls directly from the floating window for play, pause, or stop.
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-left mt-4 mb-2">Tips for Best Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-left">
              <strong>High-Performance Browser:</strong> Use a modern browser like Chrome, Firefox, or Edge for optimal functionality.
            </li>
            <li className="text-left">
              <strong>Stable Internet Connection:</strong> Ensure a stable connection to avoid lag or buffering during video sharing.
            </li>
            <li className="text-left">
              <strong>Check Permissions:</strong> If issues arise, verify that screen sharing permissions are enabled for the website.
            </li>
          </ul>
        </div>

      </div>


    </>
  )
}

export default App
