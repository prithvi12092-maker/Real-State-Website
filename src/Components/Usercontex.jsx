import React, { createContext,useState } from 'react'
import {property1,propirty2} from "../Data/Propirtydata"

export const DataContext = createContext();


 export const Usercontex = ({children}) => {
    const Properties1 = property1;
    const Properties2 = propirty2;
    const [cart, setCart] = useState([]);
    const [search, setsearch] = useState("")
    const [selectedCategory, setselectedCategory] = useState("All")

    const availavleCategory = [
      "All", ...new Set(property1.map(p => p.category))
    ]

    const filteredProducts = property1.filter((i) => {
      const searchmatch = i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());

      const categorymatch = selectedCategory === "All" || i.category === selectedCategory;
      return searchmatch && categorymatch
    })

     function addtocart(product) {
      setCart((prevcart) => {
        const existingproduct = prevcart.find((i) => i.id === product.id);
        if(existingproduct){
         return prevcart.map((i)=> i.id === product.id ? {...i,quantuty: i.quantuty + 1} :i);
        }
        return [...prevcart,{...product,quantuty:1}

        ];
      });
     }
  return (
    <DataContext.Provider value={{Properties1,Properties2,addtocart,cart,
    setCart,search,setsearch,filteredProducts,availavleCategory,
    selectedCategory,setselectedCategory}}>
      {children}
    </DataContext.Provider>
  )
}

export default Usercontex

