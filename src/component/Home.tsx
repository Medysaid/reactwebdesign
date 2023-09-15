
import './componetscss/home.css';
import images from '../assets/firstpic.png'
function Home() {
    return (

        <div className="headerNav bg-[#ECF9FF] h-96 pt-7 ">
            <div className="mx-36">
                <nav className="bg-white rounded-2xl  mx-20 text-white flex justify-between items-center py-4 px-6 ">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-2xl text-black">
                            <span className="text-red-500">B</span>izpro
                        </h2>
                    </div>

                    <ul className="flex space-x-4 mx-auto text-black ">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">About</a></li>
                        <li><a href="#" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>


                    <div className="flex space-x-4">
                        <button className="px-4 py-2  text-black rounded">Sign In</button>
                        <button className="px-4 py-2 bg-[#060640] text-white rounded hover:bg-green-600">Free Trial</button>
                    </div>
                </nav>

                <div className="border-2 border-blue-500  hightNumber mt-8 mx-20 text-white flex justify-between  py-4 px-6 ">

                    <div className="bg-black w-72 h-64 mt-14">

                    </div>
                    <div className="bg-black w-96 flex-0 h-64 mt-14 mx-5">

                    </div>
                    <div className="container">
                        <div className="img-data w-64 h-64  rotate-3 text-white text-center  items-center justify-center ">

                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}

export default Home