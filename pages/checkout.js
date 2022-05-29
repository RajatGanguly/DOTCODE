import Link from "next/link";
import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlinePlusCircle , AiOutlineMinusCircle } from "react-icons/ai";
import Head from "next/head";

function Checkout({cart, subTotal, addToCart, removeFromCart}) {
  return (
    <div className="container m-auto">
      <Head>
        <title>CHECKOUT | .CODE</title>
      </Head>
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="text"
            id="address"
            cols="30"
            rows="2"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Pin Code
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl">2. Review Cart Items</h2>
      <div className="w-full slidebar bg-pink-100 p-10 " style={{zIndex: "999"}}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length==0 &&   //Object.keys(cart).length==0
            <div className="my-4 text-base">No items in the cart</div>
          }
          {Object.keys(cart).map((item)=>{
            return (
              <li key={item}>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">{cart[item].name}</div>
              <div className="w-1/3 flex font-semibold items-center justify-center"><AiOutlineMinusCircle onClick={()=>{removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)}} className="mx-2 cursor-pointer" />{cart[item].qty}<AiOutlinePlusCircle onClick={()=>{addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)}} className="mx-2 cursor-pointer" /></div>
            </div>
          </li>
            )
          })}
          <Link href={"/order"}><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsFillBagCheckFill className="mt-1 mx-2" />Place Order</button></Link>
          <h2>Total: {subTotal}</h2>
        </ol>
      </div>
    </div>
  );
}

export default Checkout;
