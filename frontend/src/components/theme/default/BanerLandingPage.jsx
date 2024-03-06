import React from 'react'
import { IconOutlineMail1 } from "./icons/IconOutlineMail1";
import { IconOutlinePhone1 } from "./icons/IconOutlinePhone1";
import { SlLocationPin } from "react-icons/sl";

function BanerLandingPage() {
    return (
        <>
            <div className='flex flex-wrap justify-center bg-[#f8f8f8] w-screen h-full pb-10'>
                <div className='relative basis-1  px-[12.5rem] md:px-[15rem] lg:px-[20rem] px-f h-[35rem]'>
                    <div className='absolute left-0 bottom-0 top-0 m-10'>
                        <img
                            src="https://www.mastersgalleryfoods.com/wp-content/uploads/2023/04/Prep_660x443.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover rounded-xl"
                        />

                    </div>

                    <div className='absolute right-0 bottom-0 bg-[#4c4c4c] rounded-lg text-white'>
                        <div className='flex flex-col ml-1 px-6 py-6 '>
                            <div className='font-bold'>Come and visit us</div>
                            <div className='pt-6 inline-flex'><IconOutlinePhone1 className="mx-1" />+37498228414 </div>
                            <div className='pt-4 inline-flex'><IconOutlineMail1 className="mx-1" /> yummy.food@gmail.com </div>
                            <div className='pt-4 inline-flex'> <SlLocationPin className='mx-1' />yerevan - keivian 15 - nikol duman 10 </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1  px-[12.5rem] md:px-[15rem] lg:px-[20rem] px-f h-[35rem]'>
                    sadsadsa
                </div>
            </div>
        </>
    )
}

export default BanerLandingPage