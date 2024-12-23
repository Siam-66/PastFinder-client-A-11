import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const ArtifactCarousel = () => {
    const slides = [
        {
            title: "Discover the Rosetta Stone",
            description: "Explore the artifact that unlocked the secrets of ancient Egyptian hieroglyphs.",
            background: "https://i.ibb.co/xYFHPrm/1jp-card.jpg",
        },
        {
            title: "The Antikythera Mechanism",
            description: "Learn about the ancient Greek device considered the first analog computer.",
            background: "https://i.ibb.co/1Q1rnW4/africa1.jpg",
        },
        {
            title: "The Dead Sea Scrolls",
            description: "Dive into the ancient manuscripts that shed light on early religious texts.",
            background: "https://i.ibb.co/wCP91BZ/bangladesh1.jpg",
        },
        {
            title: "Terracotta Army",
            description: "Discover the life-sized sculptures guarding China’s first emperor’s tomb.",
            background: "https://i.ibb.co/c6xqM85/2jp-card-jpg.jpg",
        },
        {
            title: "The Codex Gigas",
            description: "Uncover the world's largest medieval manuscript, shrouded in mystery.",
            background: "https://i.ibb.co/6FhBdgq/switzerland1.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[400px] md:h-[600px]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.7)",
                            }}
                        ></div>
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
                            <Slide direction="down" triggerOnce>
                                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                                <p className="mt-4 text-lg md:text-xl max-w-3xl">{slide.description}</p>
                                <Link
                                    to="/artifactDetails"
                                    className="mt-6 px-6 py-2 btn bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-lg text-black font-bold rounded-lg border-yellow-500"
                                >
                                    Explore Artifacts
                                </Link>
                            </Slide>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ArtifactCarousel;
