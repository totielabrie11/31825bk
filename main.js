class Producto {
    constructor(id, title, price, thumbnail) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

}

class Contenedor {

    products = [];

    save(object){
        this.products.push({
            id: object.id,
            title: object.title,
            price: object.price,
            thumbnail: object.thumbnail
        })
        
    }


    getById(Number){
        let objectById;
        for (let i = 0; i < this.object.length; i++){
        if (this.object[i].id == Number){
        objectById = this.object[i];
        }
        }
        return objectById;

    }

    getById(Number){
        let productById;
        for (let i = 0; i < this.products.length; i++){
        if (this.products[i].id == Number){
        productById = this.products[i];
        }
        }
        return productById;
    }

    getAll(){
        return this.products
    }

    deleteById(id) {
        const objs = this.getAll();
       
        const obj = objs.filter(x => x.id !== id);
        
        let objsMap = objs.map(x => x.id );
        let objMap = obj.map(x => x.id );

       if (objsMap.length != objMap.length ){return obj}else{return null}
    }
          
    
    deleteAll(){
        const objs = this.getAll();
        let objsMap = objs.map(x => x.id)

        objsMap.length = 0
        const obj = objsMap
        return obj
    }


}
        
    

const producto1 = new Producto(1, "guitarra stratocaster", 200, "strato.jpg");
const producto2 = new Producto(2, "guitarra ibanez Jem", 600, "Jem.jpg");
const producto3 = new Producto(3, "guitarra music man", 800, "mman.jpg");

const contenedor1 = new Contenedor();

contenedor1.save(producto1);
contenedor1.save(producto2);
contenedor1.save(producto3);

console.log('muestro todos los productos de mi contenedor', contenedor1.getAll());
console.log('Te estoy mostrando el producto que hace ref a su ID', contenedor1.getById(2));
console.log('productos menos el eliminado por ID', contenedor1.deleteById(4));
console.log('Elimino todos los objetos' , contenedor1.deleteAll());

