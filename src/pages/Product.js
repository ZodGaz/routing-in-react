import React from 'react';

import { Link } from 'react-router-dom';


const Product = () => {
  return (
    <section>
      <h1>The product page</h1>
      <ul>
        <li><Link to="a-book/">A Book</Link></li>
        <li><Link to="a-carpet/">A Carpet</Link></li>
        <li><Link to="An-online-course/">An Online Course</Link></li>
      </ul>
    </section>
  );
};

export default Product;
