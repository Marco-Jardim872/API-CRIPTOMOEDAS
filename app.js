let apiKey = {key:"SUA CHAVE AQUI"};
fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apiKey.key)
    .then ((response)=>{
        if(!response.ok)throw new Error("Erro ao executar a requisição, status"+ response.status);
        return response.json();
    })
    .then((api)=>{
        
       let texto = "";
       for(let i = 0; i<10;i++){
           texto = texto + `
           <div class='media'>
               <img src='./imagens/moedas.jpg'>
               <h2>${api.data[i].name}</h2>
               <p>${api.data[i].symbol}</p>
               <h6>${api.data[i].first_historical_data}</h6>
           </div>
           ` ;
           document.getElementById("coins").innerHTML = texto;
       }
    })
    .catch((error)=>{
        console.error(error.message);
    });
