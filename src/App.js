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
     
      
    </div>
  );
}

export default App;
