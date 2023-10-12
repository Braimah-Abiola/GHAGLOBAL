import { Articles, Companies, Footer, Hero, Services } from "../components"

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <div className="md:mt-[20rem]">
        <Companies />
        <Services />
        <Articles/>
      </div>
      <div className="md:mt-[20rem]">
        <Footer />
      </div>
    </div>
  )
}

export default Home