import '../components/pages/shop.css'

import renderFooter from './components/renderFooter'
import renderHeader from './components/renderHeader'

import renderPage from "./components/shopComponents/renderPage";
import search from "./components/shopComponents/search"
import catalog from './components/shopComponents/catalog'
import filter from './components/shopComponents/filter'
import cart from './components/shopComponents/cart'

//render header and footer
renderFooter()
renderHeader()

renderPage();
search();
catalog();
filter();
cart();