import React from 'react'

function TestmonialLandingPage() {
    return (
        <div className='mx-auto max-w-7xl pl-6 pr-6 lg:pl-8 lg:pr-8 pt-4 pb-10 '>

            <div className='mx-auto max-w-xl text-center'>
                <h2 className='text-lg font-semibold leading-8 tracking-tight text-[#ae353f]/100'>Testmonial</h2>
                <p className='mt-2 text-3xl sm:text-4xl leading-9 font-bold tracking-tight text-gray-900/100'>What Our Customers Say</p>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900/100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 bg-white/100'>
                <figure className='border-[1px] border-gray-200 rounded-2xl bg-white/100 shadow-lg ring ring-gray-100 ring-offset-0 sm:col-span-2 xl:col-start-2 xl:row-end-1'>
                    <blockquote className='p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900/100 sm:p-12 sm:text-xl sm:leading-8'>
                        <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”</p>
                    </blockquote>
                    <figcaption className='flex flex-wrap items-center gap-x-4 gap-y-4 border-t-[1px] border-gray-200 px-6 py-4 sm:flex-nowrap'>
                        dsfds
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default TestmonialLandingPage