import DatePicker from "react-datepicker";



function getPluginGrowth( slug, save ) {
    fetch('https://ibenic.com/wp-json/ibenic/v1/plugin-data/' + slug).then(
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

function PluginInfo({info, date, setDate, setStats}) {
    let banner = '';

    if ( info.banners ) {
        
        const src = info.banners.high || info.banners.low;
        if ( src ) {
            banner = <img className="w-full" src={ src } />
        }
    }

    return <div
            className="container mx-auto bg-white mt-4 rounded p-8" 
            >
                { banner }
                <h2 className="text-4xl mt-4" dangerouslySetInnerHTML={{__html: info.name}}></h2>
                <div className="flex justify-between mt-2 items-center">
                    <div className="w-4/5">
                        <div className="text-xl bg-gray-100 inline-block p-2 font-light rounded border">Active Installs: <span className="inline-block font-semibold">{info.active_installs}+</span></div>
                        <div className="inline-block">
                            <DatePicker className="border rounded px-4 py-2 mx-2 inline-block" selected={date} onChange={date => setDate(date)} />
                        
                        </div>
                        <button type="button" className="bg-gray-200 font-light py-2 px-4 rounded" onClick={()=>{
                            getPluginGrowth(info.slug, setStats)
                        }}>Calculate</button>
                    </div>
                    <div className="w-1/5 text-right">
                        <a href={info.download_link} className="bg-yellow-500 font-light text-white py-2 px-4 rounded text-xl	">Download</a>
                    </div>
                </div>
                <p className="mt-4 italic">Set the Date when the last change was. Nearest date you remember when your plugin has hit {info.active_installs} active installs</p>
                    
            </div>
}

export default PluginInfo;