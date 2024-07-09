import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
listProductos:Producto[]=[];

   constructor(private _productoService: ProductoService, private toasr: ToastrService){}
  ngOnInit(): void {
    this.obtenerProducto();
  }

   

   obtenerProducto(){
    this._productoService.getProductos().subscribe(data=>{
      this.listProductos= data
      console.log(data);
   },error =>{
    console.log(error);

   });
    
   }

eliminarProducto(id: any){
  this._productoService.eliminarProducto(id).subscribe(data=>{
    this.toasr.error('El producto fue eliminado con exito',' Producto eliminado')
    this.obtenerProducto();
 },error =>{
  console.log(error);

 });
  
 }
}

