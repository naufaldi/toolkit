import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './ui/components/Accordion';
import Carousel from './ui/components/Carousel';

ReactDOM.render(
    <Carousel next="Next" prev="Previous" component="slideshow" animation="slide-up" debug={true} perCycle={2} loop={false} infinite={false}>
        <Carousel.Item index={0}>0</Carousel.Item>
        <Carousel.Item index={1}>1</Carousel.Item>
        <Carousel.Item index={2}>2</Carousel.Item>
        <Carousel.Item index={3}>3</Carousel.Item>
        <Carousel.Item index={4}>4</Carousel.Item>
        <Carousel.Item index={5}>5</Carousel.Item>
        <Carousel.Item index={6}>6</Carousel.Item>
        <Carousel.Item index={7}>7</Carousel.Item>
        <Carousel.Item index={8}>8</Carousel.Item>
    </Carousel>

    /*<Accordion defaultIndex={[0, 2]} component="feature-list" multiple={true} collapsible={true} debug={false}>
        <Accordion.Item header="Header #1" key="0" index={0}>
            <p>Phasellus viverra convallis ex sit amet convallis. Sed accumsan dignissim massa, eu volutpat tellus semper at. Quisque non lectus sit amet lectus consectetur tincidunt nec in sem. Fusce lobortis blandit turpis, vel vestibulum nulla egestas vitae. Vivamus quis orci vitae odio elementum facilisis. Vestibulum suscipit quam in dictum ullamcorper. Sed lectus quam, faucibus id pellentesque nec, suscipit at elit. </p>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi fermentum congue lectus, at imperdiet odio dictum sit amet.</p>
        </Accordion.Item>

        <Accordion.Item header="Header #2" key="1" index={1}>
            <p>Sed non sem tempor, feugiat risus at, dignissim ipsum. Ut efficitur lacus non sem laoreet tincidunt. Proin porttitor placerat massa, eu varius libero elementum ac. Donec a ligula ullamcorper, pulvinar leo vel, vestibulum magna. Aliquam et tempus tortor.</p>

            <ul>
                <li>Nulla leo nulla, porta in tortor in.</li>
                <li>Cras sed finibus felis.</li>
                <li>Nulla purus turpis, lobortis at viverra id.</li>
            </ul>
        </Accordion.Item>

        <Accordion.Item header="Header #3" key="2" index={2}>
            <p>Phasellus viverra convallis ex sit amet convallis. Sed accumsan dignissim massa, eu volutpat tellus semper at. Quisque non lectus sit amet lectus consectetur tincidunt nec in sem. Fusce lobortis blandit turpis, vel vestibulum nulla egestas vitae. Vivamus quis orci vitae odio elementum facilisis. Vestibulum suscipit quam in dictum ullamcorper. Sed lectus quam, faucibus id pellentesque nec, suscipit at elit. </p>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi fermentum congue lectus, at imperdiet odio dictum sit amet.</p>
        </Accordion.Item>

        <Accordion.Item header="Header #4" key="3" index={3}>
            <p>Phasellus viverra convallis ex sit amet convallis. Sed accumsan dignissim massa, eu volutpat tellus semper at. Quisque non lectus sit amet lectus consectetur tincidunt nec in sem. Fusce lobortis blandit turpis, vel vestibulum nulla egestas vitae. Vivamus quis orci vitae odio elementum facilisis. Vestibulum suscipit quam in dictum ullamcorper. Sed lectus quam, faucibus id pellentesque nec, suscipit at elit. </p>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi fermentum congue lectus, at imperdiet odio dictum sit amet.</p>
        </Accordion.Item>
    </Accordion>*/
    ,
    document.getElementById('app')
);