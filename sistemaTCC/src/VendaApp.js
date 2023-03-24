   
 
  


  
import axios from "axios";

import React from "react";



class Livro extends React.Component{

state = {
                 
                 livro: {

                                               

 
                                               titulo : "",

                                              isbn : "",
                                               
                                              preco : "",

                  },
                cliente:{
                 nome :"",      
                  cpf:"",


              },

               item : {

                livro : "", 





             quantidade : 0,
           subtotal : 0 ,




              },


             venda: {

                         listadeitens: [],


                            total :0 ,
 
                             cliente : "",
 
         } ,




             pesquisar : "",

             lista:  [],

            botao: "primeira"
};

inputChange(entidade,campo ,novotexto){



console.log(novotexto)

const novostate ={...this.state};

novostate[entidade][campo] = novotexto;

this.setState(novostate);
}


alteracaoquantidade(entidade,campo,novotexto){

this.inputChange(entidade,campo ,novotexto);


this.state.item.subtotal = this.state.item.quantidade * this.state.livro.preco;
}



RegistrarVenda(){

this.state.venda.cliente = this.state.cliente; 


console.log(this.state.venda);
      const apiURL = 'http://192.168.18.6:8080/Venda/adicionar';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.venda)}).then(
                     (response)=>{

                       console.log(response);
                      

}
              );
alert("Cliente foi cadastrado");

document.getElementById('textcpf').value='';

document.getElementById('textisbn').value='';


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






                                                        <h2>Venda de Livro</h2><br/><br/>
                                                      <h3> Informações Cadastrais</h3>
                                                      <label>CPF:</label>
                                            <input type="text"  className="form-control"  id="textcpf" value={this.state.cliente.cpf} placeholder="digite o cpf do cliente" onChange={(novotexto) => {this.inputChange("cliente","cpf",novotexto.target.value)}}/>   <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.pesquisarcliente()}/ ><br/>


                                                      <label>Nome do cliente:</label> <label id="nomedocliente"></label>
                      <br/>
                                <label>ISBN:</label>
 
                              
                                            <input type="text"  className="form-control"  id="textisbn" value={this.state.livro.isbn} placeholder="digite o isbn" onChange={(novotexto) => {this.inputChange("livro","isbn",novotexto.target.value)}}/><br/>
                              <input type="button" className="btn btn-primary" value="adicionar livro  " onClick={() =>this.pesquisarlivro()}/ ><br/><br/>

                      <label>Titulo {' '}{' '}:</label><label id="titulodolivro"></label><br/>
                      <label>Preço:            </label><label id="precodolivro"></label><br/>
                                                <label>quantidade:</label>
                                            <input type="text"  className="form-control" type="number" id="textquantidade" value={this.state.item.quantidade} placeholde  
r="digite o preço" onChange={(novotexto) => {this.alteracaoquantidade("item","quantidade",novotexto.target.value)}}/><br/>
                              <label>Subtotal:            </label><label id  ="precodoitem">{this.state.item.subtotal}</label><br/>
                                          
    <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.Adicionaritem()}/ >


                               <div>{this.listadeitens()}</div>
              
                                   <label>total :  {this.state.venda.total}</label>
                                      
                                     <br/><br/>
                                 <label>Forma de Pagamento</label><select name="select">


                                                            <option value="value1">cartão de crédito</option>
                                                             <option value="value2">cartão de  débito</option>
                                                            <option value="value3">dinheiro</option>

                                                  </select>





                                          <br/> <br/>
                                             {this.BotaoPesquisar()}





                                       
                                                  </div>
                                       </form>
</div>)  ;
}
  
Adicionaritem(){

const ir = {...this.state.item};




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
     
       return(<input type='button'   className="btn btn-primary"  value='Registrar Venda
' id='boraopesquisar' onClick={ () =>{this.RegistrarVenda()}}/>);


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

            for(let i=0;i <this.state.venda.listadeitens.length
;i++)
{
  let de =  i + "editar";


this.state.venda.total = this.state.venda.total +  this.state.venda.listadeitens[i].subtotal;

let textobotao = "editar";

 let botaoid =  i + "botaoe" ;

let botaoidr = i + "botaor";

let botaoidx = i + "botaox";

 const status = {...this.state};

let primeira = true;

console.log(this.state.venda.listadeitens.length);



                 listalivro.push (<tr key={i}>

                                     

                                  
                      

                                         <td>{this.state.venda.listadeitens[i].livro.isbn}</td>   <td>{this.state.venda.listadeitens[i].livro.titulo}</td>   <td>{this.state.venda.listadeitens[i].livro.preco}</td>   <td>{this.state.venda.listadeitens[i].quantidade}</td>   <td>{this.state.venda.listadeitens[i].subtotal}</td>   <td>{this.state.venda.listadeitens[i].livro.titulo}</td>    





                                                        </tr> );
 

}

  return(<div>
                           <table className="table table-stripped">
                             <thead>
                                          <th>ISBN</th> <th>Titulo</th> <th>Preço            </th><th>quantidade </th><th>subtotal</th>
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


adicionaritemnalista(){




}





pesquisarlivro(){
                                  

                




               const url = "http://192.168.18.6:8080/Livro/pesquisarporisbn/" + document.getElementById('textisbn').value ; 







           axios.get(url,{responseType : '"text',}).then(

              (response)=> {  
 
                document.getElementById('titulodolivro').innerHTML = "&nbsp;&nbsp;&nbsp" +response.data.titulo;

                document.getElementById('precodolivro').innerHTML = "&nbsp;&nbsp;&nbsp" +response.data.preco;

               this.state.livro.preco = response.data.preco;

               this.state.item.livro = response.data;

   


                           console.log(response); 



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