


  
import axios from "axios";

import React from "react";



class Livro extends React.Component{


constructor(props){


super(props);


}








state = {
                 
                 livro: {

                                               


                                               titulo : "",

                                              isbn : "",
                                               
                                              preco : "",
                                          
                                             autores : [],

                                            editora: "",
                  },

                 
             pesquisar : "",

             lista:  [],

          listadeautores: [],

         listadeeditoras:[],

            listou:0,

          listoueditora:0,

            botao: "primeira"
};

inputChange(campo ,novotexto){



console.log(novotexto)

const novostate ={...this.state};

novostate.livro[campo] = novotexto;

this.setState(novostate);
}



Adicionar1(){

  const novostate = {...this.state};
var select =document.getElementById('selecteditora');


var value = select.options[select.selectedIndex].value;



this.state.livro.editora = this.state.listadeeditoras[value];

console.log(this.state.livro);
this.state.livro.preco = this.state.livro.preco.replace(",",".");
      const apiURL = 'http://192.168.18.6:8080/Livro/adicionar';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.livro)}).then(
                     (response)=>{

                       console.log(response);
                      

}
              );
alert("Cliente foi cadastrado");

document.getElementById('texttitulo').value='';

document.getElementById('textisbn').value='';

document.getElementById('textpreco').value='';
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
                                                     <div className="form-group">
                                                        <h2>Cadastro de Livro</h2><br/><br/>
                                                      <h3> Informações Cadastrais</h3>
                                                      <label>Titulo:</label>
                                            <input type="text"  className="form-control"  id="texttitulo" value={this.state.livro.titulo} placeholder="digite o titulo" onChange={(novotexto) => {this.inputChange("titulo",novotexto.target.value)}}/><br/>
                                                      <label>ISBN:</label>
                                            <input type="text"  className="form-control"  id="textisbn" value={this.state.livro.isbn} placeholder="digite o isbn" onChange={(novotexto) => {this.inputChange("isbn",novotexto.target.value)}}/><br/>
                                                <label>preço:</label>
                                            <input type="text"  className="form-control"  id="textpreco" value={this.state.livro.preco} placeholder="digite o preço" onChange={(novotexto) => {this.inputChange("preco",novotexto.target.value)}}/><br/>
             
                                         <label>autor: </label> <br/>
                 
                                            {this.listadeautores()}
                                                {this.BotaoAdicionarAutor()}
                                         {this.listarautoreslivro()}
                                   
 {this.listadeeditoras()}
                                          <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.Adicionar1()}/ >
                                         {this.BotaoListar()}





                                          <br/> <br/><input type="text" className="form-control" id="textpesquisar" placeholder="pesquisar por titulo" />
                                             {this.BotaoPesquisar()}





                                              <div>{this.listadelivros()}</div>
                                       
                                                  </div>
                                       </form>
</div>)  ;
}
  



adicionarautorlivro(){
   const novostate = {...this.state};
var select =document.getElementById('selectautor');


var value = select.options[select.selectedIndex].value;

novostate.livro.autores.push(this.state.listadeautores[value]);
       

           
           this.setState(novostate);

}

BotaoListar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Listar' id='borao' onClick={ () =>{this.listar()}}/>);


}

BotaoAdicionarAutor(){
     
       return(<input type='button'   className="btn btn-primary"  value='Adicionar autor' id='borao' onClick={ () =>{this.adicionarautorlivro()}}/>);


}

BotaoPesquisar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Pesquisar' id='boraopesquisar' onClick={ () =>{this.pesquisar()}}/>);


}

salvaralteracao(de ,  botaoidr,botaoid,i){
document.getElementById(de).disabled=  true  ; 
 this.state.lista[i].preco = this.state.lista[i].preco.replace(",",".");

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


listarautores(){
                                  

             

              const url = "http://192.168.18.6:8080/Autor/listar" ;

           axios.get(url,{responseType : 'json',}).then(

              (response)=> {  


                  const novostate = {...this.state};


                  
                 novostate.listadeautores = response.data;

                this.setState(novostate);                   
                console.log(response.data)
              }

           );
 
            console.log("vinho Adicionados pesquisar acionado");  

}
 


listareditoras(){
                                  

             

              const url = "http://192.168.18.6:8080/Editora/listar" ;

           axios.get(url,{responseType : 'json',}).then(

              (response)=> {  


                  const novostate = {...this.state};


                  
                 novostate.listadeeditoras = response.data;

                this.setState(novostate);                   
                console.log(response.data)
              }

           );
 
            console.log("vinho Adicionados pesquisar acionado");  

}
 








listadeeditoras(){

                    
            if(this.state.listoueditora==0){

               {this.listareditoras()}
        
                      const novostate = {...this.state};


                  
                 novostate.listoueditora= 1;

                this.setState(novostate);     
            
           

}
              const listalivro = [];

            for(let i=0;i < this.state.listadeeditoras.length;i++)
{



                 listalivro.push (
                                     


                      

                                         <option value={i }  >{this.state.listadeeditoras[i].nome}</option> 





                                                         );



}

  return(
                       <select name="autor" className="form-control"  id="selecteditora">


{listalivro}
                           
                   </select>
);



}

listadeautores(){

                    
            if(this.state.listou==0){

               {this.listarautores()}
        
                      const novostate = {...this.state};


                  
                 novostate.listou= 1;

                this.setState(novostate);     
            
           

}
              const listalivro = [];

            for(let i=0;i < this.state.listadeautores.length;i++)
{



                 listalivro.push (
                                     


                      

                                         <option value={i }  >{this.state.listadeautores[i].nome}</option> 





                                                         );



}

  return(
                       <select name="autor" className="form-control"  id="selectautor">


{listalivro}
                           
                   </select>
);



}

listarautoreslivro(){
          

              const listalivro = [];


         
            for(let i=0;i <this.state.livro.autores.length
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

                                     
<tr><td>{this.state.livro.autores[i].nome}</td>  </tr>
                                  
                      
                                                  





                                                        );
 

}

  return(<div>
                           <table className="table table-stripped">
                      <thead>  <th>Nome;</th></thead>

                          <tbody>
                      {listalivro}
                            </tbody>
                                                           
                             </table>
  </div>);



}











listadelivros(){


              const listalivro = [];

            for(let i=0;i < this.state.lista.length;i++)
{
  let de =  i + "editar";

let textobotao = "editar";

 let botaoid =  i + "botaoe" ;

let botaoidr = i + "botaor";

let botaoidx = i + "botaox";

 const status = {...this.state};

let primeira = true;

             {this.listarautores()}
          {this.listar()}
let de2  =  "" + status.lista[i].preco;
                 listalivro.push (<tr key={i}>
                                     


                      

                                         <td>{this.state.lista[i].isbn}</td>    <td>{this.state.lista[i].titulo}</td>          <td><input type="text" className="form-control" id={de} value={de2} onChange={(novotexto) => {this.alteracaopreco(i,novotexto.target.value)}}
            disabled/></td>  <td><input type='button'   className="btn btn-primary"  value="salvar" id={botaoid} onClick={ () =>{this.salvaralteracao(de,botaoidr,botaoid,i)}} hidden/><input type='button'   className="btn btn-primary"  value="editar" id={botaoidr} onClick={ () =>{this.editar(de,botaoidr,botaoid,i)}} /></td><td><input type='button'   className="btn btn-primary"  value="excluir" id={botaoidx} onClick={ () =>{this.excluir(i)}} />  </td>





                                                        </tr> );
    primeira= false;


}

  return(<div>
                           <table className="table table-stripped">
                             <thead>
                                          <th>ISBN</th> <th>Titulo</th> <th>Preço            </th><th>Alterar</th>
                             </thead>

                          <tbody>
                      {listalivro}
                            </tbody>
                             </table>
  </div>);



}

listar(){
                                  

            

              const url = "http://192.168.18.6:8080/Livro/listar" ;

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






pesquisar(){
                                  

                




               const url = "http://192.168.18.6:8080/Livro/pesquisar/" + document.getElementById('textpesquisar').value ;




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



}

 

function Cabecalho(){

      return (<p></p>);
 


}




function RetornaValor(){

          return (
           <div className="container">
              {Cabecalho()} 
            <Livro/>
        
            


 

            </div>
          );
          

        }
        
        export default RetornaValor;     