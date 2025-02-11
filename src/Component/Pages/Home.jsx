import { Helmet } from "react-helmet-async";
import ArtifactCarousel from "./Home/ArtifactCarousel";
import TimelineSection from "./Home/TimelineSection ";
import TopLikedArtifacts from "./Home/TopLikedArtifacts";
import WhyChoose from "./Home/WhyChoose";
import StatsSection from "./Home/StatsSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home / Celestora</title>
            </Helmet>
            
            <ArtifactCarousel></ArtifactCarousel>
            <TopLikedArtifacts></TopLikedArtifacts>
            <StatsSection></StatsSection>
            <TimelineSection></TimelineSection>
            <WhyChoose></WhyChoose>
        </div>
    );
};
export default Home;