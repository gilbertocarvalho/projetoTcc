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
public class VendaController{


 @Autowired
 VendaRepository vendaRepository;


 


@CrossOrigin
@RequestMapping(value="/Venda/adicionar",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
 public String Adicionar(@RequestBody Venda venda){


System.out.println(venda.getListadeitens().get(0).getSubtotal());

venda.setData(java.time.LocalDate.now());


for(Item item : venda.getListadeitens()){

 item.setVenda(venda);

}

   


 vendaRepository.save(venda);





return "venda "   + " foi cadastrado";
        
}


}