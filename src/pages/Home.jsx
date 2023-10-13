import { Articles, Companies, Footer, Hero, Services } from "../components"

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <div className="mt-[5rem] md:mt-[20rem]">
        <div className="hidden md:block">
          <Companies />
        </div>
        <Services />
        <Articles />
      </div>
      <div className="mt-[8rem] md:mt-[20rem]">
        <Footer />
      </div>
    </div>
  )
}

export default Home