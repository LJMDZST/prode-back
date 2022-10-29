import fetch from 'node-fetch';


const enviarWsp = ( nro = '' )=>{
    fetch( 'https://graph.facebook.com/v15.0/110125455220075/messages',{
        method : 'POST',
        headers : {
            'Authorization' : 'Bearer EAAJoE9PI3asBAPAZBlrvdQ9htcMG02pmMIdAlnvq2lv4rSgzUO5ZBbY93qRtrg7I38uojier7OWTkwzeBiiyKIZB6GgpZCJ4i1I7mK91BZBH2oTsXpIDJjE5EvR1ZBijAAxJWh9ZCXx0yxZBes1C1ZCIVXsaFAV0jTBTM8OIyDTtVoMmwIiPCnGESl4NlZB6WCusrq2PGoFx1l81765ZB3hPbE8',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            messaging_product : 'whatsapp',
            to : nro,
            type : 'template',
            template : {
                name : 'prueba1',
                language : {
                    code : 'es_AR'
                }
            }
        })
    })
    .then( resp => resp.json())
    .then( data => console.log(data))
}


enviarWsp('543435161777');
enviarWsp('543425900387');
enviarWsp('543425951876');