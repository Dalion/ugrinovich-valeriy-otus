const repo = require('./repository')();

const root = {
  createCustomer: repo.customer.create,
  updateCustomer: repo.customer.update,
  getCustomer: repo.customer.get,
  getAllCustomers: repo.customer.getAll,
  getAllWaitingCustomers: () => {
    const customers = repo.customer.getAll();
    const orders = repo.order.getAll();
    return customers.filter(customer => {
      return orders.some(order =>
          customer.id === order.userID && "WAITING" === order.status )
    })
  },

  createHistory: repo.history.create,
  updateHistory: repo.history.update,
  getHistory: repo.history.get,
  getHistoryByUser: ({userID, order}) => {
    const history = repo.history.getAll();
    const res = history
      .filter(item => userID === item.userID)
      .sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    switch (order) {
      case ('ASC'): {
        return res
      }
      case ('DESC'): {
        return res.reverse;
      }
      default: {
        return history
      }
    }
  },

  createOrder: repo.order.create,
  updateOrder: repo.order.update,
  getOrder: repo.order.get,
  getOrdersByUser: ({userID}) => {
    const orders = repo.order.getAll();
    return orders.filter(order => userID === order.userID)
  },

  createProduct: repo.product.create,
  updateProduct: repo.product.update,
  getProduct: repo.product.get,
  getAllProducts: repo.product.getAll,
  getProductsInStock: () => {
    return repo.product.getAll().filter(product => product.stock > 0)
  },
  getProductsWithPriceInRange: ({start, end}) => {
    return repo.product.getAll().filter(product => product.price >= start && product.price <= end)
  },

  putInBucket: ({userID, productID}) => {
    const userOrders = this.getOrdersByUser({userID}).filter(order => "ACTIVE" === order.status);
    if (userOrders.length > 0) {
      const order = userOrders[0];
      return this.updateOrder({
        id: order.id,
        input: {
          ...order,
          productIDs: [
            ...order.productIDs,
            productID
          ]
        }
      })
    }
  },
  removeFromBucket: ({userID, productID}) => {
    const userOrders = this.getOrdersByUser({userID}).filter(order => "ACTIVE" === order.status);
    if (userOrders.length > 0) {
      const order = userOrders[0];
      return this.updateOrder({
        id: order.id,
        input: {
          ...order,
          productIDs: [
            ...order.productIDs.filter(id => productID === id)
          ]
        }
      })
    }
  }
};

module.exports = root;