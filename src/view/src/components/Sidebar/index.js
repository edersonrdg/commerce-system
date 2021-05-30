import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Sidebar() {
  return (
    <aside>
      <div id="title">
        <h1>Commerce system</h1>
      </div>
      <nav>
      <Link to="/" className="nav-button">
        <span id="product-card" className="selected">Produtos</span>
      </Link>
      <Link to="/vendedores" className="nav-button">
        <span id="seller-card">Vendedores</span>
      </Link>
      <Link to="/compras" className="nav-button">
        <span id="purchase-card">Compras</span>
      </Link>
      <Link to="/vendas" className="nav-button">
        <span id="sales-card">Vendas</span>
      </Link>
      </nav>
    </aside>
  )
}
