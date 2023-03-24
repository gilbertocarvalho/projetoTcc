

import axios from "axios";

import React from "react";











class Listagemdevinho extends React.Component{

state = {
                 
                 vinho : {

                                                 id     :  "" ,
                                               nome : "",
                                               
                                                safra : "",


                                               preco : ""

                                          

                  },

                 


             lista:  []
};

inputChange(campo ,novotexto){

console.log(novotexto)

const novostate ={...this.state};

novostate.vinho[campo] = novotexto;

this.setState(novostate);
}



Adicionar1(){

      const apiURL = 'http://192.168.18.6:8080/Vinho/adicionar';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.vinho)
        }).then(
                     (response)=>{
                       console.log(response);
                      this.vinho();
}
              );




}




  render(){




   return  (<div>
                                         <form>
                                                     <div className="form-group">
                                                        <h2>Adega</h2><br/><br/>
                                                      <h3> Carta de Vinho</h3>
                                                      <label>Id:</label>
                                            <input type="text"  className="form-control"  id="textid" value={this.state.vinho.id} placeholder="digite o id do vinho" onChange={(novotexto) => {this.inputChange("id",novotexto.target.value)}}/><br/>
                                                      <label>Nome:</label>
                                            <input type="text"  className="form-control"  id="textnome" value={this.state.vinho.nome} placeholder="digite o nome do vinho" onChange={(novotexto) => {this.inputChange("nome",novotexto.target.value)}}/><br/>
                                                
                                                     <label>Safra :</label>
                                          <input type="date" className="form-control"  value={this.state.vinho.safra
} placeholder="digite a safra do vinho" onChange={(novotexto) => {this.inputChange("safra",novotexto.target.value)}}/><br/>
                                                 <label>Tipo da Uva:</label>
                                          <input type="text" className="form-control"  value={this.state.vinho.preco} placeholder="digite o preço do vinho" onChange={(novotexto) => {this.inputChange("preco",novotexto.target.value)}}/><br/>
                                          <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.Adicionar1()}/ >
                                         {this.BotaoPesquisar()}
                                              <div>{this.listadevinhos()}</div>
                                       
                                                  </div>
                                       </form>
</div>)  ;
}
  



AlterarMedicos(){

             const novostate = {...this.state};

           novostate.lista[0].nome = "paulo";
           this.setState(novostate);

}

BotaoPesquisar(){
     
       return(<input type='button'   className="btn btn-primary"  value='Pesquisar' id='borao' onClick={ () =>{this.vinho()}}/>);


}

listadevinhos(){


              const listavinho = [];

            for(let i=0;i < this.state.lista.length;i++)
{

                 listavinho.push (<tr key={i}>
                                     

                                             <td>{this.state.lista[i].id}</td><td>{this.state.lista[i].nome}</td>            <td>{this.state.lista[i].safra}</td>    <td>{this.state.lista[i].preco}</td>


                                                        </tr> );
     

}

  return(<div>
                           <table className="table table-stripped">
                             <thead>
                                          <th>Id</th> <th>Nome</th> <th>Data da Safra</th><th>Tipo da Uva</th>
                             </thead>

                          <tbody>
                      {listavinho}
                            </tbody>
                             </table>
  </div>);



}

vinho(){
                                  



              const url = "http://192.168.18.6:8080/Vinho/pesquisar/" + document.getElementById('textnome').value ;

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
            <Listagemdevinho/>
        
            


 

            </div>
          );
          

        }
        
        export default RetornaValor;     