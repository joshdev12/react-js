import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

const products =[
  {
    productName: "Short Sleeve",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "2 In 1 Men's Short Sleeve Shorts Set - Black",
    price: "# 4500",
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  },
  {
    productName: "Complete Short ",
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/202776/1.jpg?0636",
    descriton: "Men's Short Sleeve Shorts Set - Black",
    price: "# 5000",
   
  }




]

const listProducts = products.map((value, index) =>{
  const {productName, img, descriton, price} = value;
  return(
    <div key={index} className="loop-content">
      <h3>{productName}</h3>
      <img src={img} />
      <div>{descriton}</div>
      <p>{price}</p>

    </div>
  )
} )





function App(){
  return (
   <div className="loop">
    {listProducts}

     {/* <Product productname={productName} imgsrc={img} content={descriton} price={price} />
     <Product productname={productName2} imgsrc={img2} content={descriton2} price={price2} />
     <Product />
      */}
  </div>
  )

}

const Product = ({productname, imgsrc, content, price}) =>{

  // const {productname, imgsrc, content, price} = props
  return (
    <>
    <h3>{productname}</h3>
    <img src={imgsrc} />
    <div>{content}</div>
    <div> {price} </div>
    </>
  )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
