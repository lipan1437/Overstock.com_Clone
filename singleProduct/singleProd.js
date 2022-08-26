
let kitenData = [

      {
        url:"https://ak1.ostkcdn.com/images/products/is/images/direct/573c841ae5737d28b49df8d82d5eedf9b39fdea1/222-Fifth-Adelaide-16-Piece-Porcelain-Dinnerware-Set%2C-Blue.jpg?imwidth=480&impolicy=medium",
        price:"9601",
        title:"222 Fifth Adelaide 16-Piece Porcelain Dinnerware Set, Blue"
      },
]
let main = document.getElementById('show')
let price = document.getElementById('price')
let show = (data) => {    
    data.forEach((el)=>{
        let div = document.createElement('div')
        let img  = document.createElement('img')
        img.src = el.url ;
        let h3 = document.createElement('h3')
        h3.innerText=el.title ;
        let p = document.createElement('p')
        p.innerText =`Starting at INR ${el.price}`;
        div.append(img)
        main.append(div) 
        price.append(h3,p)
    })
}
show(kitenData)