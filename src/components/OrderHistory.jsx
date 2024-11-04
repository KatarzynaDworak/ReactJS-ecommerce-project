import { useEffect, useState } from 'react';
import { getUserOrders } from '../plugins/firebase';

function OrderHistory({ userId }) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersList = await getUserOrders(userId);
        setOrders(ordersList);
      } catch (err) {
        console.error("Error fetching orders: ", err);
        setError("Could not load orders.");
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div>
      <h2>Your Order History</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id}, Total: {order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
