import React from 'react'

const aboutItems = [
    {
        label: 'Project done',
        number: 44
    },
    {
        label: 'Years of experience',
        number: 5
    },
]

const About = () => {
  return (
    <section id='about' className='section'>
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome I'm Saad, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src="/public/images/simple-elegant-letter-s-logo-design_579179-3445.avif" alt="img" className='ml-auto md:w-[40px] md:h-[40px]' width={30} height={30} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
