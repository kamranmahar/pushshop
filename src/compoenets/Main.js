import React, { Fragment } from 'react';
import ButtonAppBar from './ButtonAppBar';
import MainImage from './MainImage';
import Footer from './Footer';
export default function Main() {
   
    return (
        <Fragment>
            <ButtonAppBar></ButtonAppBar>
            <MainImage></MainImage>
            <Footer></Footer>
        </Fragment>
    );
}