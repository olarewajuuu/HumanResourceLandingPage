import HeroImage from "../assets/images/Heroimage.svg"

const Hero = () => {
  return (
      <section className="flex flex-col gap-20 md:gap-0 md:flex-row justify-center items-center bg-primary p-20 m-auto ">
        <div className="mx-auto flex flex-col gap-0 justify-center md:justify-left items-left">
          <h2 className="text-[22px] text-center md:text-left md:text-6xl font-bold ">Human Resource <br />Solutions for You</h2>
          <p className="mt-4 text-lg text-center md:text-left">Empowering businesses with top-notch HR services</p>
          <div className="flex flex-col gap-0  md:flex-row justify-center items-center">

          <a href="" className="mt-8 inline-block bg-blue-600 text-primary py-3 text-white font-bold px-8 rounded-lg hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600  transition-all">Get Started</a>
          <a href="" className="mt-8 inline-block bg-white text-primary py-3 text-blue-600 border-2 border-blue-600 font-bold px-8 rounded-lg hover:bg-blue-600  hover:text-white  transition-all m-auto">Login</a>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className="w-[700px]" />
        </div>
      </section>
  )
}

export default Hero