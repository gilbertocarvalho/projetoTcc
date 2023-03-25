
 

  
   package edu.curso.Livraria;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.CascadeType;

import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity
public class Venda  {
                 @Id
                @GeneratedValue
                   private int codigo;

                     
                      @ManyToOne
                       @JoinColumn(name="cpf")
	private Cliente cliente;


	

	private double total; 
	
         
                      private  LocalDate data;
                

                         @OneToMany(mappedBy="venda", cascade = CascadeType.ALL)
                        private List<Item> listadeitens;



                    

                         public List<Item> getListadeitens()


{

                            return listadeitens;

                            
}
       
                    
             public  void setListadeItens(List<Item> listadeitens){


                         this.listadeitens = listadeitens;


}               

                 public int getCodigo()
{
                           return codigo;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}

                  public void setCodigo(int codigo){

                            this.codigo = codigo;
}


	public Cliente  getCliente() {
		return cliente;
	}

	public void setCliente  (Cliente cliente ) {
		this.cliente = cliente;
	}

                   
                


	public  double getTotal() {
		return total	;
	}

	public void setTotal(double total) {
		this.total= total;
	}

	
	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data ;

	}
	
 }                                                                           