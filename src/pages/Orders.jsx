import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorite, onAddToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://62ac2393bd0e5d29af1b6637.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="contentInput">
        <h1>Мои заказы</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(12)] : orders ).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div> 
    </div>
  );
}

export default Orders;
