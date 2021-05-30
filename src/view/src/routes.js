import { Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Product from './pages/Product'
import Purchase from './pages/Purchase'
import Sale from './pages/Sale'
import Seller from './pages/Seller'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={ Product }/>
            <Route path="/vendedores" component={ Seller }/>
            <Route path="/compras" component={ Purchase }/>
            <Route path="/vendas" component={ Sale }/>
            <Route component={ NotFound }/>
        </Switch>
    )
}
