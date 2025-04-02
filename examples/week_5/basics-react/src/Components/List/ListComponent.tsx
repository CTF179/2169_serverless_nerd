import React from 'react'

import "./ListComponent.css"

type Product = {
    id: number;
    name: string;
    price: number;
}

const productsList: Product[] = [
    {
        id: 1,
        name: "Apple",
        price: 1.00
    },
    {
        id: 2,
        name: "Banana",
        price: 2.00
    },
    {
        id: 3,
        name: "Orange",
        price: 3.00
    },
    {
        id: 4,
        name: "Pomegranate",
        price: 5.00
    },
    {
        id: 5,
        name: "Dragon Fruit",
        price: 6.00
    },
]

function ListComponent() {
  return (
    <>
        {
            /*
                - To displace each item in an array to the DOM, we use the mapping function to transform each item in an array to a JSX Element
            */

            productsList.map((obj: Product, index) => {
                return (
                    <div className='product-div' key={index}>
                        <div className='name-div'>{obj.name}</div>
                        <div className='price-div'>{obj.price}</div>
                    </div>
                )
            })
        }
    </>
  )
}

export default ListComponent