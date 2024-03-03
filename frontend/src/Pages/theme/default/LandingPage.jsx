import React from 'react'

import TopBar from "../../../components/theme/default/TopBar";
import Menu from "../../../components/theme/default/Menu";
import CarouselTransition from '../../../components/theme/default/CarouselTransition';

function LandingPage() {
    return (
        <>
            <div className="flex flex-col">


                <TopBar />

                <Menu />

                <CarouselTransition />


            </div>
        </>
    )
}

export default LandingPage