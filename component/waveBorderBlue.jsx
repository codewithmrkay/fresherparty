"use client"
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import FullScreenSlider from './slider'
import FullScreenSlider2 from './slider2'
import FullScreenSlider3 from './slider3'
export default function WaveBorderBlue() {
  const waveRef = useRef(null)
  const containerRef = useRef(null)
  useLayoutEffect(() => {
    const headings = containerRef.current.querySelectorAll('h1.first')
    gsap.from(headings, {
      y: 80,              // start 80px lower
      opacity: 0,         // start invisible
      stagger: 0.3,       // one after the other
      duration: 1.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%', // when top of container hits 80% viewport
        end: 'bottom 70%',// until bottom hits 20% viewport
        scrub: true,
        // markers:true,     
        // scrub = ties animation to scroll
      }
    })
  }, [])
  useLayoutEffect(() => {
    gsap.to(waveRef.current, {
      x: '-50%',
      duration: 6,
      ease: 'linear',
      repeat: -1
    })
  }, [])

  return (
    <div className="relative z-20 w-full bg-blue-400 overflow-hidden">
      {/* Wave container */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          ref={waveRef}
          className="block w-[200%] h-full bg-blue-400"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,00 L0,0 Z"
            fill="#A3E635"
          />
        </svg>
      </div>

      {/* Main content goes here */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center justify-between w-full h-full mt-10 py-10">
       <FullScreenSlider3/>
      </div>
    </div>
  )
}
