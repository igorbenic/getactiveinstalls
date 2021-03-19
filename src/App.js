import { ReactComponent as Logo } from './graph.svg';
import { useState, useEffect } from 'react';

function getPluginInfo( slug, save ) {
  fetch('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=' + slug)
  .then(
    function(response) {
     
      response.json().then(function(data) {
        if ( data ) {
          save(data);
          console.log(data);
           
        }
      });
      
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

 

function getPluginGrowth( slug, save ) {
  fetch('https://api.wordpress.org/stats/plugin/1.0/active-installs.php?limit=728&slug=' + slug).then(
    function(response) {
      response.json().then(function(data) {
         
          save(data);
          console.log(data);
        
      });
      
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function App() {
  const [slug, setSlug] = useState('');
  const [pluginInfo, setPluginInfo] = useState({});
  const [stats, setStats] = useState([]);
  const [date, setDate] = useState('');

  return (
    <div className="getactiveinstalls p-4">
      <header className="text-gray-50	mt-4 flex container">
        <h1 className="text-6xl font-semibold	">Get Active Installs</h1>
        <div className="w-60"><Logo /></div>
      </header>
      <input type="text" onChange={(event)=>{ setSlug(event.target.value)}}/>

      <button type="button" onClick={()=>{
          getPluginInfo(slug, setPluginInfo);
          getPluginGrowth( slug, setStats);
      }}>Find</button>
    </div>
  );
}

export default App;
