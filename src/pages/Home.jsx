import ConAsisSlider from "../components/ConAsisSlider"
import CctvSlider from "../components/CctvSlider"
import ActiveSlider from "../components/Slider"
import EnergizerSlider from "../components/EnergizerSlider"
import CatalogIM from "../components/CatalogIM"

const Home = () => {
  return (
    <div>
      <ActiveSlider />
      <CatalogIM />
      {/*<CctvSlider categoryId={25}/>
      <ConAsisSlider categoryId={81}/>
      <EnergizerSlider categoryId={125}/>*/}

    </div>
  )
}

export default Home
