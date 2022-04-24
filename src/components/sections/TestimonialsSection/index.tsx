/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function TestimonialsSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const styles = props.styles || {};
    const sectionHeight = styles.self?.height || 'auto';
    const testimonials = props.testimonials || [];
    const title = props.titleText || "";
    const [slider, setslider] = React.useState(undefined);
    const [slideIndex, setSlideIndex] = React.useState(0);
    const [cuurentSlide, setCurrentSlide] = React.useState(0);
    const nextSlide = () => {
        slider.slickNext();
        if (slideIndex !== (testimonials.length - 1)) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === (testimonials.length - 1)) {
            setSlideIndex(0);
        }
    }
    const prevSlide = () => {
        slider.slickPrev();
        if (slideIndex === 0) {
            const i = testimonials.length - 1;
            setSlideIndex(i);
        } else
            if (slideIndex !== 1) {
                setSlideIndex(slideIndex - 1)
            }
            else if (slideIndex === 1) {
                setSlideIndex(slideIndex - 1)
            }
    }
    function PrevArrow(props) {
        return (
            <div className={classNames(
                'w-[20px] hidden 2xl:block z-20 h-[34px] absolute',
                'bg-leftArrow cursor-pointer top-[50%] left-[0px]',
            )} onClick={() => {
                prevSlide();
            }} />
        );
    }
    function NextArrow(props) {
        return (
            <div className={classNames(
                'w-[20px] hidden 2xl:block z-20 h-[34px] absolute',
                'bg-rightArrow cursor-pointer top-[50%] right-[0px]',
            )} onClick={() => {
                nextSlide();
            }} />
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        onSwipe: (e) => {
            if (e === 'Left') {
                prevSlide();
            } else {
                nextSlide();
            }
        },
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-testimonials-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                mapMinHeightStyles(sectionHeight),
                'pt-[60px] md:pt-[200px] pb-[60px] md:pb-[197px] px-[41px] md:px-[140px]',
                'sliderbg',
                'bg-[#e1e6ea] '
            )}
            style={{
                borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
            }}
        >
            <div className={classNames(
                'text-center',
                'font-[Poppins]',
                'font-semibold',
                'text-[25px] md:text-[60px]',
                'leading-[38px] md:leading-[90px]',
                'text-[#173450]'
            )}>
                {title}
            </div>
            <Slider
                {...settings}
                ref={c => setslider(c)}
            >
                {testimonials && testimonials.map((testimonial, index) => (
                    <div key={index} className={classNames(
                    )}>{testimonialSection(testimonial, index)}</div>))}
            </Slider>
            {testimonials && (
                <div className='flex justify-center mt-[60px] md:mt-[30px]'>
                    {testimonials.map((testim, index) => {
                        return <div key={index}
                            className={classNames(
                                'mx-[5px] hover:cursor-pointer md:mx-[10px] h-[15px] w-[15px] rounded-lg',
                                slideIndex === index ? 'bg-[#173450] animate-fade' : 'bg-[#17345066] animate-fade'
                            )} onClick={() => {
                                setSlideIndex(index);
                                slider.slickGoTo(index);
                            }} />
                    })}
                </div>
            )}
        </div>
    );
}

function testimonialSection(testimonial, index) {
    return (
        <div className={classNames(
            'flex flex-col justify-start mt-[60px] md:mt-[99px] ',
            'max-w-[1258px] w-auto mx-auto md:min-h-[972px]',
        )} key={index}>
            <div className={classNames(
                'overflow-hidden rounded-[50%]',
                'max-w-[169px] md:max-w-[250px] w-full mx-auto',
                'max-h-[169px] md:max-h-[250px] h-full',
                'border-[15px] border-[#a6bf36]'
            )}>
                <img className={classNames(
                    'h-auto'
                )} src={testimonial.clientImage.url} alt={testimonial.clientImage.altText} />
            </div>
            <h2 className={classNames(
                'mt-[60px] md:mt-[50px]',
                'font-[Poppins]',
                'leading-[27px] md:leading-[60px]',
                'text-[18px] md:text-[40px]',
                'text-center',
                'font-semibold',
                'text-[#173450]',
            )}>{testimonial.reviewTitle}</h2>
            <h4 className={classNames(
                'mt-[35px] md:mt-[50px]',
                'font-normal',
                'text-[18px] md:text-[40px]',
                'leading-[27px] md:leading-[60px]',
                'text-center',
                'text-[#173450]',
            )}>{testimonial.reviewDescription}</h4>
            <h1 className={classNames(
                'mt-[35px] md:mt-[50px]',
                'text-[18px] md:text-[30px]',
                'text-center',
                'leading-[27px] md:leading-[46px]',
                'font-semibold',
                'text-[#173450]'
            )}>{testimonial.clientName}</h1>
            <h1 className={classNames(
                'mt-[10px] md:mt-0 leading-[27px] md:leading-[46px]',
                'text-[18px] md:text-[30px]',
                'text-center',
                'text-[#173450]',
                'font-normal'
            )}>{testimonial.clientDesignation}</h1>
        </div>
    )
}


function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}
