import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function FullScreenSlider2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = 2;
    const audioRef = useRef(null)

    // index 0 has no music, 1–4 map to each card’s loop track
    const audioSources = [
        null,
        '/audio/mrfresher.mp3',
        '/audio/msfresher.mp3'
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
            className="relative w-screen h-screen overflow-hidden">

            {/* Sliding Track */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {/* Hero (Slide 0) */}
                <div

                    className="flex-shrink-0 w-screen h-screen text-white flex items-center justify-center">
                    <div className="text-center px-5">
                        <h1 className="first text-9xl">Mr & Miss</h1>
                        <h1 className="first text-9xl">Fresher</h1>
                    </div>
                </div>

                {/* Card 1 (Slide 1) */}
                <div className=" flex-shrink-0 w-screen h-screen flex items-center justify-center">
                    <div className="p-10 flex flex-col items-center justify-center text-black">
                        {/* <h2 className="second text-4xl">Mr Fresher</h2> */}
                        <h2 className="first font-medium text-8xl">Mr Fresher</h2>
                        <img className='w-[280px] aspect-square object-center object-contain' src="/mrfresher.gif" alt="" />
                    </div>
                </div>

                {/* Card 2 (Slide 2) */}
                <div className=" flex-shrink-0 w-screen h-screen flex items-center justify-center">
                    <div className="p-5 flex flex-col items-center justify-center text-black">
                        {/* <h2 className="second text-4xl">Ms Fresher</h2> */}
                        <h2 className="first font-medium text-8xl">Miss Fresher</h2>
                        <img className='h-[230px] aspect-square object-center object-contain' src="/msfresher.gif" alt="" />
                    </div>
                </div>

                {/* Card 3 (Slide 3) */}              
            </div>

            {/* Prev / Next Buttons */}
            <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="absolute left-5 bottom-15 -translate-y-1/2 text-5xl text-black disabled:opacity-30"
            >
                &lt;
            </button>
            <button
                onClick={goNext}
                disabled={currentIndex === maxIndex}
                className="absolute right-5 bottom-15 -translate-y-1/2 text-5xl text-black disabled:opacity-30"
            >
                &gt;
            </button>
        </div>
    );
}
