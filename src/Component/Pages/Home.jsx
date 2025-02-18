import { Helmet } from "react-helmet-async";
import ArtifactCarousel from "./Home/ArtifactCarousel";
import TimelineSection from "./Home/TimelineSection ";
import TopLikedArtifacts from "./Home/TopLikedArtifacts";
import WhyChoose from "./Home/WhyChoose";
import StatsSection from "./Home/StatsSection";
import ContributorSpotlight from "./Home/ContributorSpotlight";
import VlogPreview from "./Home/VlogPreview";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Celestora</title>
            </Helmet>
            
            <ArtifactCarousel></ArtifactCarousel>
            <TopLikedArtifacts></TopLikedArtifacts>
            <TimelineSection></TimelineSection>
            <VlogPreview></VlogPreview>
            <StatsSection></StatsSection>
            <ContributorSpotlight></ContributorSpotlight>

            
            <WhyChoose></WhyChoose>
        </div>
    );
};
export default Home;