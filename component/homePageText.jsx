"use client"
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
function HomePageText() {
    const containerRef = useRef(null)

  useLayoutEffect(() => {
    // Create a GSAP context to auto-cleanup when the component unmounts
    let ctx = gsap.context(() => {
      // Animate all elements with class 'first'
      gsap.to('.first', {
        scale: 1.1,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      })

      // Animate all elements with class 'second'
      gsap.to('.second', {
        scale: 1.05,
        duration: 1.2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      })
    }, containerRef)

    return () => ctx.revert() // cleanup on unmount
  }, [])
    return (
        <div
        ref={containerRef}
        className='relative top-5 w-[100vw] h-screen flex flex-col items-center justify-center text-white'>
            <div>
                <h1 className='second text-4xl'>Welcome To</h1>
                <h1 className='first text-9xl'>FRESHER'S</h1>
                <h1 className='relative bottom-5 first text-9xl'>PARTY</h1>
                <h1 className='relative bottom-7 second text-2xl'>2025-2026</h1>
            </div>
        </div>
    )
}

export default HomePageText