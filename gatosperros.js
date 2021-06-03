




function perros(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(quote => {
            console.log(quote.message)
            document.getElementById("imgperro").src=quote.message;
           
        })
    
    
    }

    function gatos(){
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(quote => {

                console.log(quote[0].url)
               document.getElementById("imgperro").src=quote[0].url;
                })
        
        
        }