'use client'
import {TypeAnimation} from 'react-type-animation'
export default function CallToAction(){
  return(
  <div className="relative py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 ">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="relative">
        <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Chemistry School of Growth</h1>
          <div className="text-center py-2">
		<p className="text-gray-300">want to</p>
		<div className="text-white text-2xl font-bold">
			<TypeAnimation
				sequence={[
					"Become better at studying?",
				1000,
						"Ace your Senior Cycle exams?",
					1000,
					"Get chemistry resources?",
					1000]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
			/>
		</div>
	  </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
                href="#"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark"
                  >Get Started</span>
              </a>
              <a
                href="about"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span
                  className="relative text-base font-semibold text-primary dark:text-white"
                  >Learn more</span>
            </a>
          </div>
        </div>
        </div>
      </div>
  </div>
  )
}
