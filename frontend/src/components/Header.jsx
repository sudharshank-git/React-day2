import React, { useState } from 'react'
import Button from "./Button"
import Badge from "./Badge"
import InputBar from './InputBar'

function Header(props) {

  const [searchVal,setVal] = useState("")
  const [categoryVal,setCategoryVal] = useState("")

  function onChange(event){
    const value = event.target.value
    setVal(value)
    props.onclick(value);
  }
  
  function handleSearch() {
    props.onclick(searchVal);
  }
  
  function onCategoryChange(event){
    const value = event.target.value
    setCategoryVal(value)
    props.onchange(value)
  }
  return (
    <header className='header'>
        <div className='header-inner'>
            <h1 className='header-brand'>Minion</h1>
          <div className='header-filters'>
            <div className='seach-bar-container'>
              <InputBar 
                type="text"
                value={searchVal}
                name="search-bar"
                placeholder="Search Products"
                onchange={onChange}
              />
              <Button text="🔍" onclick={handleSearch} id="search-btn"/>
            </div>
              <div className='filter-category'>
                <select 
                name="category" 
                id="category-list"
                value={categoryVal}
                onChange={onCategoryChange}>
                  <option value="">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Storage">Storage</option>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                </select>
              </div>
            </div>
            <nav className='header-nav'>
                <div className='header-nav-item'><Button text="Home"/></div>
                <div className='header-nav-item'><Button text="Wishlist" badge={props.wishlistCount}/></div>
                <div className='header-nav-item'><Button text="🛒 Cart" badge= {props.cartCount}/></div>
            </nav>
        </div>
    </header>
  )
}

export default Header