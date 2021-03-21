
function PluginGrowth({ date, info, stats }) {
   
    const lastKnown = Date.parse(date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate());
    let installs = info.active_installs;
    let firstDate = null;
    for(var datetime in stats ) {
       

        if ( Date.parse(datetime) < lastKnown ) {
            
            continue;
        }

        if ( ! firstDate ) {
            firstDate = datetime;
        }
        
        installs = Math.round(( installs * stats[datetime] / 100 ) + installs, 1 );
    }

    let note = '';
    const weekMiliseconds = 60*60*24*7*1000;
    if ( Date.parse(firstDate) - lastKnown > weekMiliseconds ) {
        note = <div className="text-md  p-2 mt-4  text-red-800 rounded">First Date found {firstDate} is more than a week apart from the provided date. Real active installs could be different.</div>
    }
    return <div
    className="container mx-auto bg-white mt-4 rounded p-8 text-center" 
    >
        <div className="italic">Calculating from {firstDate}</div>

        <div className="text-9xl mt-4 inline-block text-white bg-yellow-500 rounded px-8 py-4 border border-yellow-700	">{installs}</div>
        {note}
    </div>
}

export default PluginGrowth;