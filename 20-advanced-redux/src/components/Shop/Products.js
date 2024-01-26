import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id='prod1'
          title='Product 1'
          price={9.95}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id='prod2'
          title='Product 2'
          price={15.50}
          description='A second product to test functionality'
        />
      </ul>
    </section>
  );
};

export default Products;
