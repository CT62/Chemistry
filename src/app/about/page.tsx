import Navbar from '../../components/Navbar'
export default function(){
	return(
	<>
	<Navbar />
	<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 ">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-red-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 to-indigo-600"></div>
        </div>
	</div>
	</>
	)
}

