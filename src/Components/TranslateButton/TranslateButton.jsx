import React from 'react';
import './styles.css';
//https://medium.com/rd-shipit/internacionalizando-um-projeto-react-com-a-biblioteca-react-i18next-e9c24f3754f9
const TranslateButton = () => (
 <div className="app">
   <p className="select-language"></p>
   <button><p style={{paddingTop:"8px"}}>PT</p></button>
   <button><p style={{paddingTop:"8px"}}>EN</p></button>
 </div>
);
 
export default TranslateButton;