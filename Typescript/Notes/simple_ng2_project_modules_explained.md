## Typescript
#### Models 
Angular does not prescribe a particular model library.  
Demo of a simple model definition:  
```
    // inside project folder, app.ts
    class Product{
        constructor(
            public sku: string;
            public name: string,
            public imageUrl: string,
            public department: string[],
            public price: number
            ){ }
    }
```
### Components:  
Each component is made up of three parts:
1. Component Decorator  
2. A view  
3. A controller  

A Simple demo:  
```
// configures how the outside world will interact with your component
@Component({
    // indicates how your component will be recognized when rendering
    selector: 'inventory-app',
    // this is the visual part of the component, declares html template
    template: `
    <div class="inventory-app">
        // products come here
    </div>
    `
})
class inventoryApp{
    // logic goes here
}
// module boot here

```

Alternatively, with the selector, we can also use a regular div and specify the component as an attribute.  
i.e. ``` <div inventory-app></div> ```  


### Creating products  
The constructor for products takes 5 arguments. We can create a new Product by using the new keyword.
Another option would be to configure the Product class to take an object in the constructor, then the order would not be necessary.

In order to make properties accessible to our template, *** we add them as instance variables to the Component ***

``` 
class inventoryApp{
    product: Product;

    constructor(){
        this.product = new Product(
            'niceShoe', 'A nice Black pair',
            '/resources/images/products/black-pair.jpg',
            ['Men', 'Accessories', 'Hats'],
            29.99
        );
    }
}

```

Three processes have happened here:  
1. We've added a constructor -- when Angular creates a new instance of the Component, it calls a constructor function. This is where we can put setup for this Component.  
2. We described an instance variable -- On inventoryApp, when we write; ``` product: Product; ```, we're specifying theat the inventoryApp instances have a product property which is a Product object.  
3. We assigned a Product to product -- In the constructor, we create an instance of Product and assign it to the instance variable: ``` this.product = new Product() ```  

### Viewing the Product with Template Binding  
Using the demo product defined in the constructor, let's change our template to display the product.  
```
@Component({
    selector: 'inventory-app',
    template: `
<div class="inventory-app">
    <h1> {{ product.name }} </h1>
    <span> {{ products.sku }} </span>
</div>
    `
})
```
Using the {{...}} syntax is called __template binding__.  
What's neat about binding is that the code in the brackets is an expression, this means one can do things like this: ```{{ count + 1 }} or {{ function(arguments) }} ```  

#### Adding more products:  
Let's change our inventoryApp to store an array of products rather than a single Product:  
```
class inventoryApp{
    products: Product[];

    constructor(){
        this.products = [];
    }
}
```
Now our inventoryApp holds an array of Products. Let's add some more products in the constructor:  
```
constructor(){
    this.products = [
        new Product(
            “MYSHOES',
        'Black Running Shoes',
         '/resources/images/products/black-shoes.jpg',    
    ['Men', 'Shoes', 'Running Shoes'],”
    109.99
),
new Product(
            “MYSHOES2',
        'Black Running Shoes',
         '/resources/images/products/black-shoes.jpg',    
    ['Men', 'Shoes', 'Running Shoes'],”
    209.99
),
new Product(
            “MYSHOES3',
        'Black Running Shoes',
         '/resources/images/products/black-shoes.jpg',    
    ['Men', 'Shoes', 'Running Shoes'],”
    29.99
),
    ];
}

```
