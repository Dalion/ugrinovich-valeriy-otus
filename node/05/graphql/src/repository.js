const Customer = require('./types/Customer');
const History = require('./types/History');
const Order = require('./types/Order');
const Product = require('./types/Product');

const generateId = () => require('crypto').randomBytes(10).toString('hex');

const repo = () => {
  const storage = Object.create({
    customers: Object.create(null),
    history: Object.create(null),
    orders: Object.create(null),
    products: Object.create(null)
  });

  const customer = {
    create: ({input}) => {
      const id = generateId();
      storage.customers[id] = input;
      return new Customer(id, input);
    },
    get: ({id}) => {
      if (!storage.customers[id]) {
        throw new Error('no customers exists with id ' + id);
      }
      return new Customer(id, storage.customers[id]);
    },
    getAll: () => {
      return Object.keys(storage.customers).map(customerID =>
          new Customer(customerID, storage.customers[customerID]));
    },
    update: ({id, input}) => {
      if (!storage.customers[id]) {
        throw new Error('no customers exists with id ' + id);
      }
      storage.customers[id] = {
        input,
        ...storage.customers[id]
      };
      return new Customer(id, storage.customers[id]);
    }
  };
  const history = {
    create: ({input}) => {
      const id = generateId();
      storage.history[id] = {
        createdAt: Date.now(),
        ...input
      };
      return new History(id, input);
    },
    get: ({id}) => {
      if (!storage.history[id]) {
        throw new Error('no history exists with id ' + id);
      }
      return new History(id, storage.history[id]);
    },
    getAll: () => {
      return Object.keys(storage.history).map(historyID =>
          new History(historyID, storage.history[historyID]));
    },
    update: ({id, input}) => {
      if (!storage.history[id]) {
        throw new Error('no history exists with id ' + id);
      }
      storage.history[id] = {
        input,
        ...storage.history[id]
      };
      return new History(id, storage.history[id]);
    }
  };
  const order = {
    create: ({input}) => {
      const id = generateId();
      storage.orders[id] = input;
      return new Order(id, input);
    },
    get: ({id}) => {
      if (!storage.orders[id]) {
        throw new Error('no orders exists with id ' + id);
      }
      return new Order(id, storage.orders[id]);
    },
    getAll: () => {
      return Object.keys(storage.orders).map(orderID =>
          new Order(orderID, storage.orders[orderID]));
    },
    update: ({id, input}) => {
      if (!storage.orders[id]) {
        throw new Error('no orders exists with id ' + id);
      }
      storage.orders[id] = {
        input,
        ...storage.orders[id]
      };
      return new Order(id, storage.orders[id]);
    }
  };
  const product = {
    create: ({input}) => {
      const id = generateId();
      if (!input.stock) {
        input.stock = 1;
      }
      storage.products[id] = input;
      return new Product(id, input);
    },
    get: ({id}) => {
      if (!storage.products[id]) {
        throw new Error('no products exists with id ' + id);
      }
      return new Product(id, storage.products[id]);
    },
    getAll: () => {
      return Object.keys(storage.products).map(productID =>
          new Product(productID, storage.products[productID]));
    },
    update: ({id, input}) => {
      if (!storage.products[id]) {
        throw new Error('no products exists with id ' + id);
      }
      storage.products[id] = {
        input,
        ...storage.products[id]
      };
      return new Product(id, storage.products[id]);
    }
  };

  return {
    customer,
    history,
    order,
    product
  }
};


module.exports = repo;
