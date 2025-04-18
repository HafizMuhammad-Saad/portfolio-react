import React from 'react'

import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
            <div>
                <div className="flex items-center gap-3">
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHlF_wCtiwtOA8mNE0Gj4d6FAfxQ_EuoCKQ&s" width={40} height={40} alt="porttrait" className='img-cover' />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="relative inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                        Available for work
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                    />

                    <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className='w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png" width={656} height={800} alt="" className='w-full'/>
                </figure>
            </div>
        </div>

    </section>
  )
}

export default Hero
