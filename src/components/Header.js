import { ReactComponent as Logo } from '../graph.svg';

function header() {
    return <header className="text-gray-50	mt-4 container flex items-center	 mx-auto">
    <div className="w-3/5 2xl:w-2/5 text-center">
      <h1 className="text-6xl 2xl:text-8xl font-semibold	">Get Active Installs</h1>
      <h2 className="text-3xl ">Get much more specific active installs!</h2>
    </div>
   
    <div className="w-2/5 2xl:w-3/5">
      <Logo />
    </div>
  </header>
}

export default header;