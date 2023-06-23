import Link from "next/link"

export const Hero = () => (
  <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
      <h1 className="text-white font-bold text-4xl xl:text-5xl">
        Todos os seguros em um só lugar!
      </h1>
      <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
        Estamos aqui para lutar por você e não por nós mesmos
      </p>
      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
      <Link href="/simular-online" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
        Simular online
      </Link>
      <Link href="#" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
        Agendar telefonema
      </Link>
    </div>
    </div>
    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
      <img src="/banner.png" className="w-full h-96 mx-auto sm:w-10/12  lg:w-full" />
    </div>
  </section>
)