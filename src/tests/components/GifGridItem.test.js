import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
   
   const title = 'un titulo';
   const url = 'https://localhost/algo.png';
   const wrapper = shallow ( <GifGridItem title={title} url={url} /> );
   
   test('Debe mostrar el componente correctamente', () => {
       
      expect(wrapper).toMatchSnapshot();
   }) ;  
   
   test('debe tener un parrafo con el title ', () => {
      const p =wrapper.find('p');
      expect(p.text().trim()).toBe( title );
   });

   test('debe de tener la imagen igual al url y alt de los props ', () => {
      const img= wrapper.find('img');
      expect(img.prop('src')).toBe(url)
      expect(img.prop('alt')).toBe(title)
   })
   
   
})
