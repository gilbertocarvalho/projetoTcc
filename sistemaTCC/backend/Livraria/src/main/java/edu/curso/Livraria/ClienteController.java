

  package edu.curso.Livraria;

import java.util.ArrayList;
import java.util.List;


import java.util.Optional;



import javax.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class ClienteController{


 @Autowired
 ClienteRepository clienteRepository;


          @CrossOrigin
         @RequestMapping(value="/Cliente/pesquisar/{nome}",method=RequestMethod.GET
            		   ,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<Cliente>> Pesquisar(HttpServletResponse respostadoservidor, @PathVariable("nome") Optional<String>  nome){

                          respostadoservidor.addHeader("Content-Type","application/json");


                             List<Cliente> listadecliente = new ArrayList<Cliente>(); 


                          if(nome.isPresent()){

                        	listadecliente = clienteRepository.findByNome(nome.get());
                        	  
                                            
                        

                       
                       
                       
                       
                       
                        }

                           System.out.println("cliente foi pesquisado");
                          
                              return ResponseEntity.ok(listadecliente);
                            		  

	}

          @CrossOrigin
         @RequestMapping(value="/Cliente/pesquisarporcpf/{cpf}",method=RequestMethod.GET
            		   ,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <String> PesquisarporCpf(HttpServletResponse respostadoservidor, @PathVariable("cpf") Optional<String>  cpf){

                          respostadoservidor.addHeader("Content-Type","text");
 
                            Cliente listadecliente = new Cliente();
; 


                          if(cpf.isPresent()){

                        	listadecliente = clienteRepository.findByCpf(cpf.get());
                        	  
                                            
                        

                       
                       
                       
                       
                       
                        }

                           System.out.println("cliente foi pesquisado : "+ listadecliente.getNome());
                          
                             


                              return ResponseEntity.ok(listadecliente.getNome());
                            		  

	}

@CrossOrigin
@RequestMapping(value="/Cliente/adicionar",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody Cliente Cliente){




 clienteRepository.save(Cliente);





return "cliente"   +    Cliente.getNome()   + " foi cadastrado";
        
}


}