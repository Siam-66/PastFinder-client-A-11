import { Fade } from "react-awesome-reveal";

const WhyChoose = () => {
    return (
<div className="mt-5 w-full overflow-hidden container mx-auto">
            <div className="py-8 sm:py-16 bg-gradient-to-r from-yellow-950 via-orange-900 to-red-950 text-white rounded-lg ">
                <div className="px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                        Why Choose Us ?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Expert Insights",
                                description: "Gain knowledge curated by archaeologists and historians.",
                                icon: "🧠",
                            },
                            {
                                title: "Immersive Experience",
                                description: "Dive into history with our interactive tools and visuals.",
                                icon: "🎨",
                            },
                            {
                                title: "Reliable Information",
                                description:
                                    "Our platform is backed by research and historical accuracy.",
                                icon: "📚",
                            },
                            {
                                title: "Global Community",
                                description: "Connect with history enthusiasts from around the world.",
                                icon: "🌍",
                            },
                        ].map((benefit, index) => (
                            <Fade key={index} triggerOnce>
                                <div className="p-6 bg-white rounded-lg shadow-md  dark:bg-gray-700 text-black dark:text-white">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-gray-200 h-12">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-700 h-16 dark:text-gray-400">{benefit.description}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
