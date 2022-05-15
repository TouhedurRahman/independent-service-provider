import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img style={{ height: '350px' }}
                        className="d-block w-100"
                        src="https://mir-s3-cdn-cf.behance.net/projects/404/4fc061117567983.Y3JvcCwyMDQ4LDE2MDEsMCwyMjM.png"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '350px' }}
                        className="d-block w-100"
                        src="https://img.freepik.com/free-vector/delicious-hamburger-banner-ads-black-background_317396-763.jpg?w=2000"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '350px' }}
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0463/5987/1647/files/Banner_2_5_1500x.png?v=1644540882"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;