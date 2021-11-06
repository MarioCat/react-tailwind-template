import tailwingLogo from './tailwindcss.svg';
import reactLogo from './logo.svg';

function App() {

  const logoSize = '250px';

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <a href="https://reactjs.org/" target="_blank">
          <img className="animate-spin-slow" style={{width: logoSize}} src={reactLogo} alt="React logo" />
        </a>
        <p className="text-4xl font-bold">+</p>
        <a href="https://tailwindcss.com/" target="_blank">
          <img className="animate-bounce" style={{width: logoSize}} src={tailwingLogo} alt="Tailwind CSS logo"/>
        </a>
        <p className="text-4xl font-bold">=</p>
        <p className="text-4xl mt-5 animate-ping">💖</p>
      </div>      
    </div>
  );
}

export default App;
