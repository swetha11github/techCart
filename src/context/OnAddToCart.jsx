import {createContext} from 'react';
import { MyCartPage } from '../components/MyCartPage';

const LaptopContext = createContext()
export const OnAddToCart = () => {
    MyCartPage()
    return(
        <LaptopContext.Provider value={MyCartPage}>
        </LaptopContext.Provider>
    );
}
