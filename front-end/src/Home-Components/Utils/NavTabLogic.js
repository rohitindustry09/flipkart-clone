// NavTabLogic.js
import { useState, useEffect, useRef } from 'react';

export function useNavTabLogic() {
    const [showAccountNav, setShowAccountNav] = useState(false);
    const [showDotsNav, setShowDotsNav] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSponsorSlide, setCurrentSponsorSlide] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);
    const [sponsorSlidesCount, setSponsorSlidesCount] = useState(0);

    const slidesRef = useRef(null);
    const sponsorRef = useRef(null);

    const changeSlide = (direction, setSlide, count) => {
        setSlide((prevSlide) => {
            const newSlide = prevSlide + direction;
            return newSlide >= count ? 0 : newSlide < 0 ? count - 1 : newSlide;
        });
    };

    const doAnimation = (container, childWidth, slide) => {
        if (container && childWidth > 0) {
            container.style.transition = "transform 0.5s ease-in-out";
            container.style.transform = `translateX(-${slide * childWidth}px)`;
        }
    };

    useEffect(() => {
        const slideContainer = slidesRef.current;
        const sponsorSlideContainer = sponsorRef.current;
        const slideWidth = slideContainer?.firstElementChild?.clientWidth || 0;
        const sponsorSlideWidth = sponsorSlideContainer?.firstElementChild?.clientWidth || 0;

        if (slideContainer) {
            setSlidesCount(slideContainer.children.length);
        }
        if (sponsorSlideContainer) {
            setSponsorSlidesCount(sponsorSlideContainer.children.length);
        }

        doAnimation(slideContainer, slideWidth, currentSlide);
        doAnimation(sponsorSlideContainer, sponsorSlideWidth, currentSponsorSlide);
    }, [currentSlide, currentSponsorSlide]);

    useEffect(() => {
        const handleTouchMove = () => {
            setShowAccountNav(false);
            setShowDotsNav(false);
        };
        const intervals = [];
        intervals.push(setInterval(() => {
            changeSlide(1, setCurrentSlide, slidesCount);
        }, 3000));
        intervals.push(setInterval(() => {
            changeSlide(1, setCurrentSponsorSlide, sponsorSlidesCount);
        }, 1000));

        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            intervals.forEach(clearInterval);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [slidesCount, sponsorSlidesCount]);

    const toggleAccountNav = () => {
        setShowAccountNav((prev) => !prev);
        if (showDotsNav) setShowDotsNav(false);
    };

    const toggleDotsNav = () => {
        setShowDotsNav((prev) => !prev);
        if (showAccountNav) setShowAccountNav(false);
    };

    return {
        showAccountNav,
        showDotsNav,
        currentSlide,
        currentSponsorSlide,
        slidesCount,
        sponsorSlidesCount,
        slidesRef,
        sponsorRef,
        changeSlide,
        toggleAccountNav,
        toggleDotsNav,
    };
}
