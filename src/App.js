import { useState, useEffect } from 'react';
import Header from './components/Header';
import InfoForm from './components/InfoForm';
import PluginInfo from './components/PluginInfo';
import PluginGrowth from './components/PluginGrowth';

function App() {
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState('');
  const [pluginInfo, setPluginInfo] = useState('');
  const [stats, setStats] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <div className="getactiveinstalls p-8">
      <Header />
      <InfoForm 
        slug={slug} 
        setLoading={setLoading} 
        loading={loading} 
        setPluginInfo={setPluginInfo}
        setSlug={setSlug} />
      
      
      {pluginInfo && <PluginInfo info={pluginInfo} date={date} setDate={setDate} setStats={setStats} />}
      {stats && <PluginGrowth date={date} info={pluginInfo} stats={stats}/>}
     
      <div className="md:grid md:grid-cols-3 md:gap-4 container mx-auto mt-8">
       <a href="https://ibenic.com/" target="_blank"  className="mb-4 md:mb-0 block p-8 bg-gray-100 rounded text-center hover:bg-gray-300">
          <h4 className="text-yellow-500 mb-4">Built By</h4>
          <div className="text-gray-900 inline-block">
            <img className="w-8 inline-block mr-2" src="https://www.ibenic.com/wp-content/uploads/2017/11/logo-small.png" />
            Igor Benić
          </div>
        </a>
        <a href="https://pluginrank.com/" target="_blank"  className="mb-4 md:mb-0 block p-8 bg-gray-700 rounded text-center hover:bg-gray-900">
          <h4 className="text-yellow-500 mb-4">Active Installs, Ranking</h4>
          <div className="text-white inline-block">
            <img className="w-8 inline-block mr-2" src="https://pluginrank.com/content/themes/pluginrank/assets/img/custom/logo.svg" />
            Plugin Rank
          </div>
        </a>
        <div className="block p-8 bg-gray-700 rounded text-center hover:bg-gray-900">
          <h4 className="text-yellow-500 mb-4">Other Products</h4>
          <a href="https://www.wpsimplegiveaways.com/" target="_blank" className="text-white" >
          <img className="w-8 inline-block mr-2" src="https://www.wpsimplegiveaways.com/wp-content/uploads/2018/12/cropped-Simple-Giveaways-Logo-1.png" />
            Simple Giveaways
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
