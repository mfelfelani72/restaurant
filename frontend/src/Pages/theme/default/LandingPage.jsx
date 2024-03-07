import React from 'react'

import TopBar from "../../../components/theme/default/TopBar";
import Menu from "../../../components/theme/default/Menu";
import CarouselTransition from '../../../components/theme/default/CarouselTransition';
import CardLandingPage from '../../../components/theme/default/CardLandingPage';
import BanerLandingPage from '../../../components/theme/default/BanerLandingPage';
import TestmonialLandingPage from '../../../components/theme/default/TestmonialLandingPage';

function LandingPage() {
    return (
        <>
            <div className="flex flex-col overflow-x-hidden">


                <TopBar />

                <Menu />

                <CarouselTransition />

                <CardLandingPage />

                <BanerLandingPage />

                <TestmonialLandingPage />


            </div>
        </>
    )
}

export default LandingPage