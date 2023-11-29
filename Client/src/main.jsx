import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WishListProvider from './Context/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishListProvider>
      <App />
    </WishListProvider>
  </React.StrictMode>,
)
