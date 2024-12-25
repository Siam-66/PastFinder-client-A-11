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
            background: "https://i.ibb.co.com/2v7xBcd/1rosetta-stone.jpg",
        },
        {
            title: "The Antikythera Mechanism",
            description: "Learn about the ancient Greek device considered the first analog computer.",
            background: "https://i.ibb.co.com/FYL8zKM/2-The-Antikythera-Mysteries.jpg",
        },
        {
            title: "The Dead Sea Scrolls",
            description: "Dive into the ancient manuscripts that shed light on early religious texts.",
            background: "https://i.ibb.co.com/kKMT0y1/3-The-Not-So-Dead-Sea-Scrolls.jpg",
        },
        {
            title: "Terracotta Army",
            description: "Discover the life-sized sculptures guarding China’s first emperor’s tomb.",
            background: "https://i.ibb.co.com/KX5XmnF/4terracotta-army.jpg",
        },
        {
            title: "The Codex Gigas",
            description: "Uncover the world's largest medieval manuscript, shrouded in mystery.",
            background: "https://i.ibb.co.com/KrpVdPz/5-The-Codex-Gigas.jpg",
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
                        {/* Background Img */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
                            <Slide direction="down" triggerOnce>
                                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                                <p className="mt-4 text-lg md:text-xl max-w-3xl">{slide.description}</p>
                                <Link
                                    to="/allArtifacts"
                                    className="mt-6 px-6 py-2 btn bg-gradient-to-r from-yellow-950 via-orange-900 to-red-950 text-lg text-white font-bold rounded-lg border-yellow-950"
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
