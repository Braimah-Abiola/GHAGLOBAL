import { Footer, Partners, Resources } from "../components"

const Partner = () => {
  return (
    <div>
      <Partners />
      <Resources />
      <div className="mt-[10rem] md:mt-[15rem]">
        <Footer />
      </div>
    </div>
  )
}

export default Partner