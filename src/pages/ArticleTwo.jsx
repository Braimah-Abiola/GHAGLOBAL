import { articleTwo } from "../assets"
import { Footer } from "../components"

const ArticleTwo = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col w-full pt-0 md:pt-40 pb-20 px-5 md:px-0">
                <div className="flex flex-col mx-auto max-w-[1440px] w-full">
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between'>

                        <h1 className="hero_text_black mt-10 md:mt-0">
                            GHA GLOBAL Received <br className="hidden md:block" /> Certification
                        </h1>
                    </div>

                    <div className='flex flex-col'>
                        <p className="services_description mt-4">
                            In the fiercely competitive business landscape of today, establishing a strong and recognizable brand is crucial for long-term success.<br /> Branding goes far beyond a logo or a catchy tagline...
                        </p>
                    </div>



                    <div className=''>
                        <div className='mt-8 md:mt-28' style={{ width: '100%', position: 'relative' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    height: '2px',
                                    backgroundColor: '#B4BEC6',
                                    width: '100%'
                                }}
                            ></div>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    height: '2px',
                                    backgroundColor: 'black',
                                    width: '35%',
                                    right: 0
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex flex-row ml-0 pb-8 md:pb-20 md:ml-auto mt-8 md:mt-8 mb-2">
                        <p className="services_description">Jul 30, 2023</p>
                        <p className="services_description ml-4 md:ml-10">Branding</p>
                        <p className="services_description ml-4 md:ml-10">4 min read</p>
                    </div>

                    <div className="w-full">
                        <img className="w-full rounded-[20px]" src={articleTwo} />
                    </div>

                    <div className="w-full py-12 md:py-20">

                        <p className="services_title">Introduction</p>
                        <p className="services_description mt-2">
                            In the fiercely competitive business landscape of today, establishing a strong and recognizable brand is crucial for long-term success. Branding goes far beyond a logo or a catchy tagline; it encompasses the essence of your business and the emotional connection it forges with your audience. In this blog, we will explore the various ways branding can empower your business to thrive and expand, reaching new heights of growth and success.
                        </p>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ArticleTwo