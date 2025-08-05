import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function FullScreenSlider3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = 4;
    const audioRef = useRef(null)

    // index 0 has no music, 1–4 map to each card’s loop track
    const audioSources = [
        null,
        '/audio/soloboydance.mp3',
        '/audio/sologirldance.mp3',
        '/audio/groupdance.mp3',
        '/audio/singing.mp3',
    ]

   // whenever slide changes, stop old audio & start new loop
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
        const src = audioSources[currentIndex]
        if (src) {
            const audio = new Audio(src)
            audio.loop = true
            audio.play()
            audioRef.current = audio
        }

        // cleanup on unmount
        return () => {
            if (audioRef.current) audioRef.current.pause()
        }
    }, [currentIndex])
    const goNext = () => setCurrentIndex((idx) => Math.min(idx + 1, maxIndex));
    const goPrev = () => setCurrentIndex((idx) => Math.max(idx - 1, 0));

    return (
        <div
            className="relative w-screen h-screen overflow-hidden bg-blue-400">

            {/* Sliding Track */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {/* Hero (Slide 0) */}
                <div
                    className="flex-shrink-0 w-screen bg-blue-400 h-screen text-white flex items-center justify-center">
                    <div className="text-center px-5">
                        <h1 className="first text-9xl">SNACKS</h1>
                        <img className='w-[230px] object-contain aspect-square object-center' src="/eating.gif" alt="" />
                    </div>
                </div>

             </div>
             </div>  
        
    );

}