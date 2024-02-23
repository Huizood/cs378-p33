import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import ramen_image from './images/ramen.png';
import gyoza_image from './images/gyoza.png';
import logos from './images/IMG_8711.jpg';
import katsu_image from './images/katsu-curry.png';
import sushi from './images/sushi.png';
import matcha from './images/matcha-cake.png';
import mochii from './images/mochi.png';
import yakitori from './images/yakitori.png';
import t from './images/takoyaki.png';
import s from './images/sashimi.png';
import o from './images/okonomiyaki.png';
import { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: gyoza_image,
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: sushi,
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: ramen_image,
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: matcha,
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: mochii,
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: yakitori,
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: t,
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: s,
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: o,
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: katsu_image,
    price: 9.99,
  }
];



function App() {

  const [itemCounts, setItemCounts] = useState(new Array(menuItems.length).fill(0));
  const [total, setTotal] = useState(0);

  const track = (price, cart) => {
    if (cart === 'add') {
      const adds = (total + price).toFixed(2);
      setTotal(parseFloat(adds));
    } else if (cart === 'sub') {
      if (total > 0) {
        const subtract = (total - price).toFixed(2);
        setTotal(parseFloat(subtract));
      }
    }
  };

  const clearAll = () => {
    setItemCounts(new Array(menuItems.length).fill(0));
    setTotal(0);
  };


  const Order = () => {
    const itemsInCart = itemCounts.reduce((acc, count, index) => {
      if (count > 0) {
        const menuItem = menuItems.find(item => item.id - 1 === index);
        acc.push({ ...menuItem, quantity: count });
      }
      return acc;
    }, []);

    if (itemsInCart.length === 0) {
      alert("No items in cart");
    } else {
      const orderSummary = itemsInCart
        .map(item => `${item.title} - ${item.quantity}`)
        .join("\n");
      alert(`Order Placed:\n\n${orderSummary}`);
    }
  };



  return (
    <div>

      <h1>
        <img className="a" src={logos} style={{ width: '50px', height: '50px' }} alt="logo" />
        Japan Vibe Cafe
      </h1>
      <p id="slogan1">Delicious Authentic Japanese Food</p>
      <p id="slogan2">Top1 Choice of Japanese Food at Austin!!!!</p>
      <h1>Menu</h1>
      <div className="menu">
        {menuItems.map((i, index) => (
          <MenuItem title={i.title} description={i.description} price={i.price} imageName={i.imageName}
            setItemCount={setItemCounts} track={track} index={i.id - 1} itemCounts={itemCounts[i.id - 1] || 0} />
        ))}
      </div>


      <div className="container">
        <div className="row">
          <div className="col-4 subtotal">
            <p className="subtotal">Subtotal ${total}</p>
          </div>
          <div className="col-6 test">
          <div className="button-container two">
            <button onClick={Order} className="order">
              <span className="orders">Order</span>
            </button>
            <button onClick={clearAll} className="clear">
              <span className="clears">Clear all</span>
            </button>
          </div>
        </div>
        </div>
       



      </div>
    </div >
  );
}

export default App;
