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
public class LivroController{


 @Autowired
 LivroRepository livroRepository;


         @CrossOrigin
         @RequestMapping(value="/Livro/editar/{preco},{isbn}",method=RequestMethod.GET
            		   )  
             @ResponseBody
               public String Alterarpreco(
HttpServletResponse respostadoservidor, @PathVariable("isbn") Optional<String>  isbn,@PathVariable("preco") Optional<Double>  preco){


                                         System.out.println("livro foi pesquisado" + isbn.get() + " preco :" + preco.get());


                                 livroRepository.alterarpreco(preco.get(),isbn.get()); 


                                     


             return "ok";

}
             




          @CrossOrigin
         @RequestMapping(value="/Livro/pesquisar/{titulo}",method=RequestMethod.GET
            		   ,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<Livro>> Pesquisar(
HttpServletResponse respostadoservidor, @PathVariable("titulo") Optional<String>  titulo){

                          respostadoservidor.addHeader("Content-Type","application/json");


                             List<Livro> listadelivro = new ArrayList<Livro>(); 


                          if(titulo.isPresent()){

                        	listadelivro = livroRepository.findByTituloContaining(titulo.get());  
 
                        	  
                                            
                        

                       
               
                       
                       
                       
                        }

                           System.out.println("livro foi pesquisado" + titulo.get());
                          




 



 










                              return ResponseEntity.ok(listadelivro);
                            		  

	}

    @CrossOrigin
         @RequestMapping(value="/Livro/pesquisarporisbn/{isbn}",method=RequestMethod.GET
            		   ,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <Livro> PesquisarporIsbn(
HttpServletResponse respostadoservidor, @PathVariable("isbn") Optional<String>  isbn){

                          respostadoservidor.addHeader("Content-Type","application/json");


                             Livro listadelivro =  new Livro(); 


                          if(isbn.isPresent()){

                        	listadelivro = livroRepository.findByIsbn(isbn.get());  
 
                        	  
                                            
                        

                       
               
                       
                       
                       
                        }

                           System.out.println("livro foi pesquisado" + isbn.get());
                          




 



 










                              return ResponseEntity.ok(listadelivro);
                            		  

	}



         @CrossOrigin
         @RequestMapping(value="/Livro/excluir/{isbn}",method=RequestMethod.GET
            		   ,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public boolean Excluir(@PathVariable("isbn") Optional<String>  isbn){

                



                       livroRepository.deleteByIsbn(isbn.get());
                

                           System.out.println("livro foi pesquisado");
                          



                    return true;
 



 










                      //        return ResponseEntity.ok(listadelivro);
                            		  

	}
         @CrossOrigin
         @RequestMapping(value="/Livro/listar",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)  


               @ResponseBody
               public ResponseEntity <List<Livro>> Listar(){

                          


                             List<Livro> listadelivro = new ArrayList<Livro>(); 


                       

                        	listadelivro = livroRepository.findAll ();  
 
                        	  
                                            
                        

                       
                       
                       
                       
                       
                  

                           System.out.println("livro foi pesquisado");
                          
                              return ResponseEntity.ok(listadelivro);
                            		  

	}





@CrossOrigin
@RequestMapping(value="/Livro/adicionar",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody Livro livro){




 livroRepository.save(livro);





return "livro"   +    livro.getTitulo()   + " foi cadastrado";
        
}


}