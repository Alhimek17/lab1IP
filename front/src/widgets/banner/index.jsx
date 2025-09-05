import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "./styles.css";

export const Banner = ({ className }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        console.debug("banner loop");
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={className}>
            <Carousel.Item>
                <Image src="/images/banner1.png" className="d-block w-100" />
                <Carousel.Caption>
                    <h5>65 лет УлГТУ!</h5>
                    <p>Какой-то текст, который должен быть показан.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/banner2.png" className="d-block w-100" />
                <Carousel.Caption>
                    <h5>История УлГТУ</h5>
                    <p>Какой-то текст, который должен быть показан.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/images/banner3.png" className="d-block w-100" />
                <Carousel.Caption>
                    <h5>Подготовка к экзаменам</h5>
                    <p>Какой-то текст, который должен быть показан.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
