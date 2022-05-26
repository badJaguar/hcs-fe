import MainBanner from "./main-banner";
import PricingOptions from "./pricing-options";
import WhoWeAre from "./who-we-are";
import WhyAreWeDoingThis from "./why-are-doing";
import WhyUs from "./why-us";

export const Home = () => {

  return (
    <>
      <MainBanner />
      <WhoWeAre />
      <PricingOptions />
      <WhyUs />
      <WhyAreWeDoingThis />
    </>
  );
};
