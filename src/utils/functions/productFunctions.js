
export default function removeDiactrics(str)
{
    return str.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}

    // console.log(props.products)
    // props.products && props.products.forEach( (product)=>{

    //   axios.post('http://localhost:3000/product', {
  
    //     name: product.name,
    //     weight: product.weight,
    //     price: product.price, 
    //     photo: product.photo, 
    //     category: product.category,  
  
    //     nutritional_table: "200g węgli",
    //     url_name: removeDiactrics( product.name.replace(/ /g, "-") ), 
    //     vat_percentage: 23
  
    //   })

    // })