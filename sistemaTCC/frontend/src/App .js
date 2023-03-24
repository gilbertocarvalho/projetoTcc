

import axios from "axios";

import React from "react";











class Listagemdemedico extends React.Component{

state = {
                 
                  medico : {
                                               crm : "",
                                               
                                               nome : "",

                                               especialidade : ""

                  },

                 nomedomedico : "Jao",

             lista:  []
};

inputChange(campo ,novotexto){

console.log(novotexto)

const novostate ={...this.state};

novostate.medico[campo] = novotexto;

this.setState(novostate);
}

Adicionar(){
 const novostate ={...this.state};
 
  const novomedico = {...novostate.medico};

novostate.lista.push(novomedico);

this.setState(novostate);
}

Adicionar1(){

      const apiURL = 'http://192.168.15.7:8080/p/medico';

         fetch(apiURL, { 
                     method : 'POST' ,
                     headers : {
                                   Accept : 'text/plain',
                                  'Content-Type' :'application/json'
                   },
                   body : JSON.stringify(this.state.medico)
        }).then(
                     (response)=>{
                       console.log(response);
                      this.Medicos();
}
              );


}




  render(){




   return  (<div>
                                         <form>
                                                     <div className="form-group">
                                                      <label>CRM:</label>
                                            <input type="text"  className="form-control" value={this.state.medico.crm} placeholder="digite o crm do medico" onChange={(novotexto) => {this.inputChange("crm",novotexto.target.value)}}/><br/>
                                                       <label>Nome:</label>
                                          <input type="text" className="form-control"  value={this.state.medico.nome} placeholder="digite o nome do medico" onChange={(novotexto) => {this.inputChange("nome",novotexto.target.value)}}/><br/>
                                                     <label>Especialidade :</label>
                                          <input type="text" className="form-control"  value={this.state.medico.especialidade} placeholder="digite a especialidade do medico" onChange={(novotexto) => {this.inputChange("especialidade",novotexto.target.value)}}/><br/>
                                          <input type="button" className="btn btn-primary" value="adicionar" onClick={() =>this.Adicionar1()}/ >
                                              <div>{this.listademedicos()}</div>
                                          <p>{this.BotaoAlterar()}</p>
                                                  </div>
                                       </form>
</div>)  ;
}
  



AlterarMedicos(){

             const novostate = {...this.state};

           novostate.lista[0].nome = "paulo";
           this.setState(novostate);

}

BotaoAlterar(){
     
       return(<input type='button'   className="btn btn-primary"  value='carregar Medicos' id='borao' onClick={ () =>{this.Medicos()}}/>);


}

listademedicos(){


              const listamedico = [];

            for(let i=0;i < this.state.lista.length;i++)
{

                 listamedico.push (<tr key={i}>
                                     

                                             <td>{this.state.lista[i].crm}</td>            <td>{this.state.lista[i].nome }</td>  <td>{this.state.lista[i].especialidade}</td>


                                                        </tr> );
     

}

  return(<div><p>Lista de medicos</p>
                           <table className="table table-stripped">
                             <thead>
                                           <th>CRM</th> <th>Nome</th><th>Especialidade</th>
                             </thead>

                          <tbody>
                      {listamedico}
                            </tbody>
                             </table>
  </div>);



}

Medicos(){

           axios.get('http://192.168.15.7:8080/p/medico',{responseType : 'json',}).then(

              (response)=> {

                  const novostate = {...this.state};
                  
                 novostate.lista = response.data;

                this.setState(novostate);                   
                console.log(response.data)
              }
           );

            console.log("Medico Adicionados"); 

}



}






function Cabecalho(){

      return (<p>Bem vindo ao sistema</p>);

}




function RetornaValor(){

          return (
           <div className="container">
              {Cabecalho()} 
            <Listagemdemedico/>
        
            


 

            </div>
          );
          

        }
        
        export default RetornaValor;     