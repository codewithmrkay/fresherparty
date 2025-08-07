import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function FullScreenSlider2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = 5;
    const audioRef = useRef(null)
const containerRef = useRef(null)
const [isInView, setIsInView] = useState(false)

    // index 0 has no music, 1–4 map to each card’s loop track
    const audioSources = [
        null,
        '/audio/game1.mp3',
        '/audio/game2.mp3',
        '/audio/game3.mp3',
        '/audio/mrfresher.mp3',
        '/audio/msfresher.mp3'
    ]
useEffect(() => {
  const obs = new IntersectionObserver(
    ([entry]) => setIsInView(entry.isIntersecting),
    { threshold: 0.5 }
  )
  if (containerRef.current) obs.observe(containerRef.current)
  return () => obs.disconnect()
}, [])

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

    useEffect(() => {
  // always stop any playing audio first
  if (audioRef.current) {
    audioRef.current.pause()
    audioRef.current = null
  }

  // if we're scrolled out, don’t restart
 if (!isInView) return

  const src = audioSources[currentIndex]
  if (src) {
    const audio = new Audio(src)
    audio.loop = true
    audio.play()
    audioRef.current = audio
  }

  return () => {
    if (audioRef.current) audioRef.current.pause()
  }
}, [currentIndex, isInView])
    const goNext = () => setCurrentIndex((idx) => Math.min(idx + 1, maxIndex));
    const goPrev = () => setCurrentIndex((idx) => Math.max(idx - 1, 0));

    return (
        <div ref={containerRef}
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
                        <h2 className="first font-medium text-8xl">Play Game</h2>
                        <img className='w-[280px] aspect-square object-center object-contain' src="/game.gif" alt="" />
                    </div>
                </div>
                {/* Card 1 (Slide 1) */}
                <div className=" flex-shrink-0 w-screen h-screen flex items-center justify-center">
                    <div className="p-10 flex flex-col items-center justify-center text-black">
                        {/* <h2 className="second text-4xl">Mr Fresher</h2> */}
                        <h2 className="first font-medium text-8xl">To Get</h2>
                        <img className='w-[280px] aspect-square object-center object-contain' src="/game2.gif" alt="" />
                    </div>
                </div>
                {/* Card 1 (Slide 1) */}
                <div className=" flex-shrink-0 w-screen h-screen flex items-center justify-center">
                    <div className="p-10 flex flex-col items-center justify-center text-black">
                        {/* <h2 className="second text-4xl">Mr Fresher</h2> */}
                        <h2 className="first font-medium text-8xl">Crown</h2>
                        <img className='w-[280px] aspect-square object-center object-contain' src="/game3.gif" alt="" />
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
                className="second py-0.5 px-2 rounded-2xl absolute left-5 bottom-15 -translate-y-1/2 text-xl bg-white text-black disabled:opacity-30"
            >
                Go Back
            </button>
            <button
                onClick={goNext}
                disabled={currentIndex === maxIndex}
                className="second py-0.5 px-2 rounded-2xl absolute right-5 bottom-15 -translate-y-1/2 text-xl bg-white text-black disabled:opacity-30"
            >
                Play Music
            </button>
        </div>
    );
}
