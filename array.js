var dataDadosGer = ['ES','MG','RJ','SP','MT'];
var dataDados = ['Mato Grosso','São Paulo','Rio de janeiro','Minas Gerais','Espírito Santo'];
var print = [];
var valor;
var index;

for(data in dataDadosGer){    
    print[dataDadosGer[data]] = dataDados[data];      
}

for(consol in print){
    if(consol == "ES"){
        index = prepareParameters(print,"Espírito Santo");        
        valor = consol +' - '+ print[index]
    }
    if(consol == "MG"){
        index = prepareParameters(print,"Minas Gerais");        
        valor = consol +' - '+ print[index]
    }
    if(consol == "RJ"){
        index = prepareParameters(print,"Rio de janeiro");        
        valor = consol +' - '+ print[index]
    }
    if(consol == "SP"){
        index = prepareParameters(print,"São Paulo");        
        valor = consol +' - '+ print[index]
    }
    if(consol == "MT"){
        index = prepareParameters(print,"Mato Grosso");        
        valor = consol +' - '+ print[index]
    }    
    console.log(valor);
}

function prepareParameters(data, estado){
    var returnParameters;    
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {        
        if (data[keys[i]] == estado)
            returnParameters = keys[i];        
    }
    return returnParameters;
}