import Banner from "./components/Banner"
import Categories from "./components/Categories"
import FeaturedProducts from "./components/FeaturedProducts"
import Hero from "./components/Hero"
import PopularBrands from "./components/PopularBrands"
import Sletter from "./components/Sletter"
import WhyDigiBox from "./components/WhyDigiBox"

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Categories />
      <FeaturedProducts />
      <PopularBrands />
      <WhyDigiBox/>
      <Sletter/>
    </>

  )
}

export default Home