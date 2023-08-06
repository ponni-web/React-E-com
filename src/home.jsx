import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Rate, Drawer, Modal, Select } from "antd"
import './style.css'
import CurrencyInput from 'react-currency-input-field';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./stateManager/action/getData.action";
import { BsFillBasketFill } from "react-icons/bs";
import Images from "./slider.js";




export function HomePage() {
  const dispatch = useDispatch()
  const [productDetails, setProductDetails] = useState(null)
  const [selectdata, setSelectdata] = useState("all")

  const [cartItems, setCartItems] = useState([])
  const [box, setBox] = useState({})
  useEffect(() => {

    console.log(box);
  }, [box])

  const { apiData } = useSelector((state) => state.productData)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(getData({
        type: "API_DATA",
        items: response.data
      }))

      console.log(productDetails);
    })

  }, [])

  useEffect(() => {
    console.log(apiData);
    setProductDetails(apiData)
  }, [apiData])

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = (data) => {
    setIsModalOpen(true);
    setBox(data);

  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

let totalPrice = cartItems.reduce(function (accumulator, data) {
    return accumulator + (data.price * data.quantity);
  }, 0);
  const [open, setOpen] = useState(false);

  
    const addCartList = (data) => {
      const existing = cartItems.find(item=>  item.id === data.id);
      if(existing){
         const updated = cartItems.map(item=> item.id === data.id?{...item,quantity:item.quantity+1}:item);
         setCartItems(updated);
      }
      else{
        setCartItems(item=>[...item,{...data,quantity:1}]);
      }
    
      }

 
  console.log(cartItems, "test")


  const showDrawer = () => {
    setOpen(true);

}

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>

      {/*---------------- HEADER PART ---------------------*/}
      <div class="header" style={{ position: "fixed", width: "100%" }}>
        <div><a href="#default" class="logo">Shopsy<BsFillBasketFill style={{ marginLeft: "10px" }} /></a></div>
        <div class="header-right">
          <a class="active" href="#home"> 
          <Select
          placeholder="search here to get your desired products "
            style={{
              width: "100%", border: "1px groove black", borderRadius: "5px", fontWeight: "bold", color: "black"
            }}

            onChange={(e) => setSelectdata(e)}
            options={[
              {
                value: `all`,
                label: `all`,
              },
              {
                value: `men's clothing`,
                label: `men's clothing`,
              },
              {
                value: `women's clothing`,
                label: `women's clothing`,
              },
              {
                value: `electronics`,
                label: `electronics`,
              },
              {
                value: 'jewelery',
                label: 'jewelery',
              },
            ]} /></a>
          <a href="#contact" style={{ marginTop: "10px" }}> <Button type="primary" onClick={showDrawer} value={cartItems}>
            cart <span style={{ marginLeft: "10px" }}>{cartItems.length}</span>
          </Button></a>
        </div>
      </div>

      <div style={{ display: "flex", padding: "10px" }}>

        <Drawer title="List of items" placement="right" onClose={onClose} open={open}  >

          <h2>selected items:<span style={{ background: "white", padding: "3px", textAlign: "center", width: "5px" }}>{cartItems.length}</span></h2>
          <h2>total amount:₹<span style={{ background: "white", padding: "3px", textAlign: "center", width: "5px" }}>{Math.round(totalPrice)}</span></h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {cartItems.map((data) => {
              return (

                <div style={{
                  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                  marginRight: "5px", marginTop: "20px", boxShadow: "0px 0px 5px gray", padding: "10px"
                }}>

                  <div><img height={150} width={150} src={data.image}></img></div><br />

                  <div> {data.title}</div><br />

                  <div><b>Quantity</b> : {data?.quantity}</div><br />

                  <div style={{ marginRight: "10px", padding: "5px" }}>

                    <CurrencyInput
                      id="input-example"
                      name="input-name"
                      placeholder="Please enter a number"
                      defaultValue={data.price}
                      decimalsLimit={2}
                      prefix="₹"
                    /></div><br />
                </div>

              )
            })}
          </div>
        </Drawer>
      </div>

            {/*---------------- MAIN IMAGES --------------*/}

      <div className="shop1">
        <img src="https://www.coolztricks.com/wp-content/uploads/2021/08/Untitled-21.png"
          alt="" width={500} height={700} style={{ marginTop: "7%" }} />
        <img className="shopimage" src="https://www.internationalnewsandviews.com/wp-content/uploads/2022/09/Grand-Shopsy-Mela.jpg"
          style={{ marginTop: "7%", height: "700px", width: "1000px" }} alt="" />
      </div>

{/*----------------------- SUB IMAGES -----------------*/}

      <div className="content">
        <h1 className="header1"></h1>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

          {Images.map((item) => (
            <div className="anim" key={item.id} style={{ margin: "1px" }}>
              <img src={item.src} alt={item.alt} className="img" width={250} height={350} />
            </div>
          ))}

        </div>
      </div>

{/* ----------------------------MAPPING API ------------------*/}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {
          productDetails && productDetails.map((data) => {
            console.log(data.category);
            console.log(selectdata);
            if ((data.category === selectdata) || (selectdata === "all")) {

              return (
                <div style={{
                  height: "450px", width: "450px", margin: "10px", border: "2px solid lightgrey", boxShadow: "0px 0px 5px gray",
                  display: "flex", flexDirection: "column", padding: "5px", justifyContent: "center", alignItems: "center",
                }}>


                  <div ><img onClick={() => showModal(data)} src={data.image} width={250} height={250}></img></div><br />
                  <div> {data.title}</div><br />


                  <div>
                    <CurrencyInput
                      id="input-example"
                      name="input-name"
                      placeholder="Please enter a number"
                      defaultValue={data.price}
                      decimalsLimit={2}
                      prefix="₹"
                    /></div><br />

                  <div><button style={{ backgroundColor: "#095DCD", padding: "10px", borderRadius: "5px", color: "white" }}
                    onClick={() => addCartList(data)} type="primary">Add to cart</button></div>
                </div>

              )
            }
          })} </div>
{/* ----------------------SHOWING MODAL ----------------------*/}

      <Modal title="More information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div style={{
          height: "450px", width: "450px", margin: "10px", border: "2px solid lightgrey", boxShadow: "0px 0px 5px blue",
          display: "flex", flexDirection: "column", padding: "5px", justifyContent: "center", alignItems: "center",
        }}>
          <div><b>{box?.title}</b></div><br />

          <div style={{ marginRight: "10px", padding: "5px" }}><b>Stocks available</b> : {box?.rating?.count} </div><br />

          <div style={{ padding: "5px" }}> <b>Price per quantity:</b>
            <CurrencyInput
              id="input-example"
              name="input-name"
              placeholder="Please enter a number"
              defaultValue={box.price}
              decimalsLimit={2}
              prefix="₹"
            /></div><br />


          <div style={{ overflow: "auto" }}><b>Description </b>: {box?.description}</div><br /><br />
          <div>Product Rating out of 5:<Rate value={box?.rating?.rate} allowHalf disabled={false} /></div><br />

        </div>
      </Modal>

      {/* ------------------FO0TER---------------------------- */}
      <div class="footer">
        <p>
          © 2023 Shopsy Inc. All Rights Reserved.
        </p>
      </div>

    </div>
  )

}