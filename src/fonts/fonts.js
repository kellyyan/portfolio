import { createGlobalStyle } from 'styled-components';

import NewYork from './NewYork.otf';
import AcuminProWideBook from './AcuminProWideBook.otf'

export default createGlobalStyle`
    @font-face {
      font-family: 'New York';
      src: local('New York'), local('NewYork'),
      url(${NewYork}) format('otf');
      font-weight: normal;
      font-style: normal;
     }

     @font-face {
      font-family: 'Acumin Pro Wide';
      src: local('Acumin Pro Wide'), local('AcuminProWide-Regular'),
      url(${AcuminProWideBook}) format('otf');
      font-weight: normal;
      font-style: normal;
     }
  `;

  


