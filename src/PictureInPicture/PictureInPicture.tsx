import React, { useEffect, useRef, useState } from 'react';
import './style.css';

/**
 * Component that displays a video element and allows the user to start
 * Picture-in-Picture mode.
 */
const PictureInPicture: React.FC = () => {
    /**
     * Reference to the video element that will be used for Picture-in-Picture
     * mode.
     */
    const videoElement = useRef<HTMLVideoElement>(null);

    /**
     * Flag to track whether the "START" button should be disabled. Disabled
     * when the video is being started or when there is an error.
     */
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    /**
     * Flag to track whether the video is ready to be used for Picture-in-Picture
     * mode. This is set to `true` when the video's `onloadedmetadata` event is
     * triggered.
     */
    const [isVideoReady, setIsVideoReady] = useState(false);

    const [isReadyToShare, setIsReadyToShare] = useState(false);

    /**
     * Effect that runs when the component is mounted. This function selects
     * the user's display media and sets the video element's `srcObject` to the
     * selected media stream.
     */
    useEffect(() => {
        async function selectMediaStream() {
            if (videoElement.current) {
                try {
                    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
                    videoElement.current.srcObject = mediaStream;
                    videoElement.current.onloadedmetadata = () => {
                        videoElement.current?.play();
                        setIsVideoReady(true); // Set the video ready flag to true
                        setIsReadyToShare(false);
                    };
                } catch (error) {
                    setIsReadyToShare(false);
                    console.error('Error accessing media devices:', error);
                }
            }
        }

        if (isReadyToShare) {
            selectMediaStream();
        }
    }, [isReadyToShare]);

    /**
     * Function that starts Picture-in-Picture mode when the "START" button is
     * clicked. This function is disabled when the video is not ready or when
     * there is an error.
     */
    const startPictureInPicture = async () => {
        if (videoElement.current && isVideoReady) { // Check if video is ready
            setIsButtonDisabled(true);
            try {
                await videoElement.current.requestPictureInPicture();
            } catch (error) {
                console.error('Error starting Picture in Picture:', error);
            }
            setIsButtonDisabled(false);
        }
    };
    const handleShareClick = () => {
        if (!isReadyToShare) {
            setIsReadyToShare(true);
        } else {
            console.log("Already requested to share, please allow or deny access.");
        }
    };

    return (
        <div>
            <video ref={videoElement} controls height="360" width="640" hidden></video>
            <div className="button-container">
                <button
                    className="px-16 py-8 font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-gray-700 to-gray-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-500 rounded-full disabled:opacity-50 dark:from-gray-600 dark:to-gray-800 dark:hover:from-green-300 dark:hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    style={{ transition: 'transform 0.1s ease-in-out' }}
                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
                    onClick={handleShareClick}>{'SHARE'}</button>
                <button
                    onClick={startPictureInPicture}
                    className="px-16 py-8 font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-gray-700 to-gray-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-500 rounded-full disabled:opacity-50 dark:from-gray-600 dark:to-gray-800 dark:hover:from-green-300 dark:hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    style={{ transition: 'transform 0.1s ease-in-out' }}
                    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
                    disabled={isButtonDisabled || !isVideoReady}>
                    {'START'}
                </button>
            </div>
        </div>
    );
};

export default PictureInPicture;
