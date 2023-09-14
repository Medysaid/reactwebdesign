 
 import './componetscss/home.css';
 function Home(){
    return(

        <div className="headerNav">
        <nav className="bg-white mt-8 mx-20 text-white flex justify-between items-center py-4 px-6 ">
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
                <button className="px-4 py-2  text-black rounded hover:bg-blue-600">Sign In</button>
                <button className="px-4 py-2 bg-[#060640] text-white rounded hover:bg-green-600">Free Trial</button>
            </div>
        </nav>

        <div className="border-2 border-blue-500  hightNumber mt-8 mx-20 text-white flex justify-between items-center py-4 px-6 ">
            
        </div>
    </div>
    
    
    )
}

export default Home