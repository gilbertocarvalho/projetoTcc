
                               
  
 
  


  
import axios from "axios";

import React from "react";



class Autor extends React.Component{

state = {
                 
              
                autor:{
                 nome :"",      
                 


              },

               movimentacao: {

                livro : "", 





             quantidade : 0,
           operacao :  "",




              },


             venda: {

                         listadeitens: [],


                            total :0 ,
 
                             cliente : "",
 
         } ,




             pesquisar : "",

             lista:  [],

            botao: "primeira",


           opcaolista : 0
};

inputChange(entidade,campo ,novotexto){



console.log(novotexto)

const novostate ={...this.state};

novostate[entidade][campo] = novotexto;

this.setState(novostate);
}




RegistrarOperacao(){



      const apiURL = 'http://192.168.18.6:8080/Autor/adicionar';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.autor)}).then(
                     (response)=>{

                       console.log(response);
                      

}
              );



console.log(this.state.venda
);

alert("Cliente foi cadastrado"); 



}


alteracaopreco(i,novotexto){




console.log(novotexto)

const novostate ={...this.state};

novostate.lista[i].preco = novotexto;


novostate.botao="";
this.setState(novostate);






}




  render(){




   return  (<div>
                                         <form>
                                                     <div> 






                                                      
                                                        
                                                        <h2  style={{ color :"gray", fontFamily:"Times"}}>Cadastro de Autores </h2><br/><br/>
                                                      <h3> Informações Cadastrais</h3>
                          
                                <label>Nome :</label>


 
                              
                                            <input type="text"  className="form-control"  id="textisbn" value={this.state.autor.nome} placeholder="digite o nome do autor" onChange={(novotexto) => {this.inputChange("autor","nome",novotexto.target.value)}}/><br/>
                              <input type="button" className="btn btn-primary" value="adicionar autor " onClick={() =>this.RegistrarOperacao()}/ ><br/><br/>
                         
  




 {this.BotaoListar()}
                                      
                                     <br/><br/>
                         
                            {this.listadeitens()}

             


                                          <br/> <br/>
        
 




                                       
                                                  </div>
                                       </form>
</div>)  ;
}
  
Adicionarmovimentacao(){

const ir = {...this.state.movimentacao};




const novostate ={...this.state};

novostate.venda.listadeitens.push(ir

);
this.setState(novostate);
console.log(this.state.venda.listadeitens);

}




AlterarMedicos(){

             const novostate = {...this.state};

           novostate.lista[0].nome = "paulo";
           this.setState(novostate);

}

BotaoListar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Listar' id='borao' onClick={ () =>{this.listar()}}/>);


}


BotaoPesquisar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Registrar 
' id='boraopesquisar' onClick={ () =>{this.RegistrarOperacao()}}/>); 


}

salvaralteracao(de ,  botaoidr,botaoid,i){
document.getElementById(de).disabled=  true  ; 
 

   const url = "http://192.168.18.6:8080/Livro/editar/" +  this.state.lista[i].preco + "," +   this.state.lista[i].isbn;




           axios.get(url).then(

              (response)=> {  
 
                alert(response);
              }

           );
 



document.getElementById(botaoidr).hidden = false;

document.getElementById(botaoid).hidden = true;

}
excluir( i){

       const url = "http://192.168.18.6:8080/Livro/excluir/" +  this.state.lista[i].isbn;










           axios.get(url).then(

              (response)=> {  
 
                alert(response);
              }

           );
 


}


editar(de ,  botaoidr,botaoid,i){



document.getElementById(de).disabled=  false;

document.getElementById(botaoidr).hidden = true;

document.getElementById(botaoid).hidden = false;



        
     


}


listadeitens(){
          

              const listalivro = [];


          this.state.venda.total =0;

            for(let i=0;i <this.state.lista.length
;i++)
{
  let de =  i + "editar";



let textobotao = "editar";

 let botaoid =  i + "botaoe" ;

let botaoidr = i + "botaor";

let botaoidx = i + "botaox";

 const status = {...this.state};

let primeira = true;





                 listalivro.push (

                                     

                                  
                      
                                                   {...this.organizarlista(i)}






                                                        );
 

}

  return(<div>
                           <table className="table table-stripped">
                    {this.organizarcabecalho()}

                          <tbody>
                      {listalivro}
                            </tbody>
                                                           
                             </table>
  </div>);



}


organizarcabecalho(){

if(this.state.opcaolista==0){

return( <thead>  <th>Nome;</th></thead>);


}else{

return(<thead><th>ISBN</th> <th>Titulo</th>          <th>quantidade </th></thead>);


}


}





organizarlista(i){



return(<tr><td>{this.state.lista[i].nome}</td>  </tr>);






}





listar(){
                                  



              const url = "http://192.168.18.6:8080/Autor/listar" ;

           axios.get(url,{responseType : 'json',}).then(

              (response)=> {  


                  const novostate = {...this.state};


                  
                 novostate.lista = response.data;

                this.setState(novostate);                   
                console.log(response.data)
              }

           );
 
            console.log("vinho Adicionados pesquisar acionado");  

}
 





pesquisarcliente(){
                                  

                




               const url = "http://192.168.18.6:8080/Cliente/pesquisarporcpf/" + document.getElementById('textcpf').value ; 





           axios.get(url,{responseType : '"text',}).then(

              (response)=> {  

 
                document.getElementById('nomedocliente').innerHTML = "" +response.data;
                           console.log(response);
              }

           );
 
             
            console.log("vinho Adicionados pesquisar acionado");  

           

}


adicionarmovimentacaonalista(){




}





pesquisarlivro(){
                                  

                




               const url = "http://192.168.18.6:8080/Livro/pesquisarporisbn/" + document.getElementById('textisbn').value ; 







           axios.get(url,{responseType : '"text',}).then(

              (response)=> {  
 
                document.getElementById('titulodolivro').innerHTML = "&nbsp;&nbsp;&nbsp" +response.data.titulo;

                document.getElementById('precodolivro').innerHTML = "&nbsp;&nbsp;&nbsp" +response.data.preco;

               this.state.livro.preco = response.data.preco;

               this.state.movimentacao.livro = response.data;

   


                           console.log(response); 



              }
 
           );
 
             
            console.log("vinho Adicionados pesquisar acionado");  

           

}







}

 

function Cabecalho(){

      return (<p></p>);
 


}




function Render(){

          return (
           <div className="container">
              {Cabecalho()} 
            <Autor/>
        
            


 

            </div>
          );
          

        }
        
  export default Render
;