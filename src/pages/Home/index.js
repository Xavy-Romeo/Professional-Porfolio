import { useEffect } from 'react';
import gsap, { Power2 } from 'gsap';

import useStyles from './styles';
import Loader from '../../components/Loader'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Top from '../../components/Top';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
// import Resume from '../../components/Resume';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        let tl = gsap.timeline();

        tl
            .to('.left-loader',
                {x: '100%', yoyo: true, repeat: 1, delay: 1, duration: 1, ease: Power2.easeOut}
            )
            .to('.right-loader',
                {x: '-100%', yoyo: true, repeat: 1, delay: 1, duration: 1, ease: Power2.easeOut},
                '-=3'
            )
    }, []);

    return (
        <>
            <Box className={`${classes.leftLoader_Home} left-loader`} />
            <Box className={`${classes.rightLoader_Home} right-loader`} />

            <Loader />
            <Header />
            <main >
                <Container maxWidth='xl'>
                    <Top />
                    <About />
                    <Portfolio />
                    {/* <Resume /> */}
                    <Testimonials />
                    <Contact />
                </Container>
            </main>
            <Footer />

            <Box className={classes.rightEffects_Home} />
            <Box className={classes.leftEffects_Home} />
        </>
    );
};

export default Home;