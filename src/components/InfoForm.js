function getPluginInfo( slug, save, setLoading ) {
    fetch('https://ibenic.com/wp-json/ibenic/v1/plugin-info/' + slug)
    .then(
      function(response) {
       
        response.json().then(function(data) {
          if ( data ) {
            save(data); 
          }
          setLoading('');
        });
        
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  
  function InfoForm({ slug, setPluginInfo, setLoading, setSlug, loading }) {
    
    let findButton = 'Find';

    if ( loading ) {
      findButton = 'Finding...';
    }

    return <div className="container mt-4 rounded bg-white p-4 md:p-8  mx-auto">
    <div className="w-full md:flex  items-center	">
      <div className="md:text-xl mr-1">https://wordpress.org/plugins/</div>
      
      <input
        placeholder="Slug | exp. woocommerce, wordpress-seo"
        className="w-full mr-4 text-xl	rounded bg-gray-100 p-3 border-gray-300 border" 
        type="text" 
        onChange={ (event)=>{ setSlug(event.target.value)}}/>
      
      <button 
        className="w-full mt-2 md:mt-0 md:w-auto bg-yellow-500 text-white py-3 px-8 rounded text-xl" 
        type="button" 
        onClick={()=>{
            setLoading(1);
            getPluginInfo(slug, setPluginInfo, setLoading);
        }}>
        {findButton}
      </button>
    </div>
  </div>
}

export default InfoForm;