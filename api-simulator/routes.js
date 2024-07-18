import express from 'express';
import fs from 'fs';

// import todos from './todos.json' assert {type: 'json'};
// import articles from './articles.json' assert {type: 'json'};

const router = express.Router();

// To return a server error, change to true.
const serverError = true;
function sendServerError(res) {
  res.status(500).send({message: 'Server error'});
}
const delay = false;
const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('One second delay.');
      resolve('Done');
    }, 1000);
  })
};
const validate = false;
const validateForm = (res, item, fields) => {
  const errors = {};
  fields.forEach((field) => {
    if (!item[field]) errors[field] = { msg: `field is required.` };
  });
  if (Object.keys(errors).length) {
    console.log('Validation Errors:', errors)
    res.status(400).send(JSON.stringify(errors));
    return true;
  } else {
    return false;
  }
}

router.post('/login', async (req, res) => {
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const { body } = req;
  if (body.email === 'me@example.com' && body.password === 'password') {
    res.status(200).send({id: 4, username: 'joey', token: 'xxxxx.yyyyy.zzzzz'});
  } else {
    if (!body.email) {
      res.status(400).send({email: 'Email is required'});
    } else if (!RegExp('@').test(body.email)) {
      res.status(400).send({email: 'Invalid email format'});
    } else if (body.password.length < 6) {
      res.status(400).send({password: 'password must be at least 6 characters'});
    } else {
      console.log(22)
      res.status(400).send({message: 'Email or Password are incorrect'});
    }
  }
});

router.get('/testme', (req, res) => {
  res.status(200).send('This route is for testing');
});

// Todos List
const initialTodos = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn JavaScript', completed: true },
  { id: 3, task: 'Learn Node.js', completed: false },
  { id: 4, task: 'Learn React', completed: false }
]
// List required fields for validation:
const todoFields = ['task', 'completed'];

function getTodos() {
  if (fs.existsSync('./data/todos.json')) {
    const jsonData = fs.readFileSync('./data/todos.json');
    return JSON.parse(jsonData);
  } else {
    fs.writeFileSync('data/todos.json', JSON.stringify(initialTodos)); 
    return initialTodos;
  } 
}

router.get('/todos', async (req,res) => {
  console.log('GET request made to api/todos');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const todos = getTodos();
  res.status(200).send(todos);
});

router.get('/todos/:id', async (req,res) => {
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const todos = getTodos();
  const todo = todos.find((todo) => todo.id == req.params.id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.sendStatus(404);
  }
});

router.post('/todos/create', async (req,res) => {
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const newTodo = req.body;
  if (validate) {
    const hasErrors = validateForm(res, newProduct, productFields);
    if (hasErrors) return;
  }
  const todos = getTodos();
  let nextId = Math.max(...todos.map(todo=>todo.id)) + 1;
  newTodo.id = nextId;
  newTodo.completed = newTodo.completed === "true" ? true : false;
  console.log('New todo:', newTodo);
  const newTodos = [...todos, newTodo];
  fs.writeFileSync('data/todos.json', JSON.stringify(newTodos));
  res.status(201).json(newTodo);
});

router.put('/todos/:id/update', async (req,res) => {
  console.log(`PUT request made to api/todos/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const todos = getTodos();
  const todoIndex = todos.findIndex((todo) => todo.id == req.params.id);
  if (todoIndex !== -1) {
    const updatedTodo = req.body;
    if (validate) {
      const hasErrors = validateForm(res, updatedTodo, todoFields);
      if (hasErrors) return;
    }
    updatedTodo.id = Number(req.params.id);
    updatedTodo.completed = updatedTodo.completed === "true" ? true : false;
    todos[todoIndex] = updatedTodo;
    fs.writeFileSync('data/todos.json', JSON.stringify(todos));
    res.status(200).json(updatedTodo);    
  } else {
    res.status(404);
  }
});

router.delete('/todos/:id/delete', async (req,res) => {
  console.log(`DELETE request made to api/todos/${req.params.id}/delete`);
  if (serverError) return sendServerError(res);
  const todos = getTodos();
  if (todos.some((todo) => todo.id == req.params.id)) {
    const newTodos = todos.filter(todo => todo.id != req.params.id);
    fs.writeFileSync('data/todos.json', JSON.stringify(newTodos));
    res.sendStatus(200);    
  } else {
    res.sendStatus(404);
  }
});

// Articles collection
const initialArticles = [
  { id: 1, title: 'Learn HTML', content: 'Lorem ipsum', published: true },
  { id: 2, title: 'Learn JavaScript', content: 'Lorem ipsum', published: true },
  { id: 3, title: 'Learn Node.js', content: 'Lorem ipsum', published: false },
  { id: 4, title: 'Learn React', content: 'Lorem ipsum', published: false }
]
// List required fields for validation:
const articleFields = ['title', 'content', 'published'];

function getArticles() {
  if (fs.existsSync('./data/articles.json')) {
    const jsonData = fs.readFileSync('./data/articles.json')
    return JSON.parse(jsonData);
  } else {
    fs.writeFileSync('data/articles.json', JSON.stringify(initialArticles)); 
    return initialArticles;
  } 
}

router.get('/articles', async (req,res) => {
  console.log('GET request made to api/articles');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  res.status(200).send(articles);
});

router.get('/articles/:id', async (req,res) => {
  console.log(`GET request made to api/articles/${req.params.id}`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  const article = articles.find((article) => article.id == req.params.id);
  if (article) {
    console.log(11, article)
    res.status(200).json(article);
  } else {
    res.sendStatus(404);
  }
});

router.post('/articles/create', async (req,res) => {
  console.log('POST request made to api/articles/create');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  let nextId = Math.max(...articles.map(article=>article.id)) + 1;
  const newArticle = req.body;
  if (validate) {
    const hasErrors = validateForm(res, newArticle, articleFields);
    if (hasErrors) return;
  }
  newArticle.id = nextId;
  const newArticles = [...articles, newArticle];
  fs.writeFileSync('data/articles.json', JSON.stringify(newArticles));
  res.status(201).json(newArticle);
});

router.get('/articles/:id/update', async (req,res) => {
  console.log(`GET request made to api/articles/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  const article = articles.find((article) => article.id == req.params.id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.sendStatus(404);
  }
});

router.put('/articles/:id/update', async (req,res) => {
  console.log(`PUT request made to api/articles/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  const articleIndex = articles.findIndex((article) => article.id == req.params.id);
  if (articleIndex !== -1) {
    const updatedArticle = req.body;
    if (validate) {
      const hasErrors = validateForm(res, updatedArticle, articleFields);
      if (hasErrors) return;
    }
    updatedArticle.id = Number(req.params.id);
    articles[articleIndex] = updatedArticle;
    fs.writeFileSync('data/articles.json', JSON.stringify(articles));
    res.status(200).json(updatedArticle);    
  } else {
    res.status(404);
  }
});

router.delete('/articles/:id/delete', async (req,res) => {
  console.log(`DELETE request made to api/articles/${req.params.id}/delete`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const articles = getArticles();
  if (articles.some((article) => article.id == req.params.id)) {
    const newArticles = articles.filter(article => article.id != req.params.id);
    fs.writeFileSync('data/articles.json', JSON.stringify(newArticles));
    res.sendStatus(200);    
  } else {
    res.sendStatus(404);
  }
});

// Products collection
const initialProducts = [
  { id: 1, name: 'Computer', description: 'Lorem ipsum', price: 1299, quantity: 32 },
  { id: 2, name: 'Printer', description: 'Lorem ipsum', price: 499, quantity: 47 },
  { id: 3, name: 'Monitor', description: 'Lorem ipsum', price: 399, quantity: 134 },
  { id: 4, name: 'Keyboard', description: 'Lorem ipsum', price: 89, quantity: 241 }
]
// List required fields for validation:
const productFields = ['name', 'description', 'price', 'quantity'];

function getProducts() {
  if (fs.existsSync('./data/products.json')) {
    const jsonData = fs.readFileSync('./data/products.json')
    return JSON.parse(jsonData);
  } else {
    fs.writeFileSync('data/products.json', JSON.stringify(initialProducts)); 
    return initialProducts;
  } 
}

router.get('/products', async (req,res) => {
  console.log('GET request made to api/products');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const products = getProducts();
  res.status(200).send(products);
});

router.get('/products/:id', async (req,res) => {
  console.log(`GET request made to api/products/${req.params.id}`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const products = getProducts();
  const product = products.find((product) => product.id == req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.sendStatus(404);
  }
});

router.post('/products/create', async (req,res) => {
  console.log('POST request made to api/products/create');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const newProduct = req.body;
  if (validate) {
    const hasErrors = validateForm(res, newProduct, productFields);
    if (hasErrors) return;
  }
  const products = getProducts();
  let nextId = Math.max(...products.map(product=>product.id)) + 1;
  newProduct.id = nextId;
  console.log('New product:', newProduct);
  const newProducts = [...products, newProduct];
  fs.writeFileSync('data/products.json', JSON.stringify(newProducts));
  res.status(201).json(newProduct);
});

router.get('/products/:id/update', async (req,res) => {
  console.log(`GET request made to api/products/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const products = getProducts();
  const product = products.find((product) => product.id == req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.sendStatus(404);
  }
});

router.put('/products/:id/update', async (req,res) => {
  console.log(`PUT request made to api/products/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const products = getProducts();
  const productIndex = products.findIndex((product) => product.id == req.params.id);
  if (productIndex !== -1) {
    const updatedProduct = req.body;
    if (validate) {
      const hasErrors = validateForm(res, updatedProduct, productFields);
      if (hasErrors) return;
    }
    updatedProduct.id = Number(req.params.id);
    console.log('Updated product:', updatedProduct);
    products[productIndex] = updatedProduct;
    fs.writeFileSync('data/products.json', JSON.stringify(products));
    res.status(200).json(updatedProduct);
  } else {
    res.status(404);
  }
});

router.delete('/products/:id/delete', async (req,res) => {
  console.log(`DELETE request made to api/products/${req.params.id}/delete`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const products = getProducts();
  if (products.some((product) => product.id == req.params.id)) {
    const newProducts = products.filter(product => product.id != req.params.id);
    fs.writeFileSync('data/products.json', JSON.stringify(newProducts));
    res.sendStatus(200);    
  } else {
    res.sendStatus(404);
  }
});

// Posts collection
const initialPosts = [
  { id: 1, title: 'Learn HTML', body: 'Lorem ipsum', published: true },
  { id: 2, title: 'Learn JavaScript', body: 'Lorem ipsum', published: true },
  { id: 3, title: 'Learn Node.js', body: 'Lorem ipsum', published: false },
  { id: 4, title: 'Learn React', body: 'Lorem ipsum', published: false }
]
function getPosts() {
  if (fs.existsSync('./data/posts.json')) {
    const jsonData = fs.readFileSync('./data/posts.json')
    return JSON.parse(jsonData);
  } else {
    fs.writeFileSync('data/posts.json', JSON.stringify(initialPosts)); 
    return initialPosts;
  } 
}

router.get('/posts', async (req,res) => {
  console.log('GET request made to api/posts');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  res.status(200).send(posts);
});

router.get('/posts/:id', async (req,res) => {
  console.log(`GET request made to api/posts/${req.params.id}`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  const post = posts.find((post) => post.id == req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.sendStatus(404);
  }
});

router.post('/posts/create', async (req,res) => {
  console.log('POST request made to api/posts/create');
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  let nextId = Math.max(...posts.map(post=>post.id)) + 1;
  const newPost = req.body;
  newPost.id = nextId;
  newPost.published = newPost.published === "true" ? true : false;
  const newPosts = [...posts, newPost];
  fs.writeFileSync('data/posts.json', JSON.stringify(newPosts));
  res.status(201).json(newPost);
});

router.get('/posts/:id/update', async (req,res) => {
  console.log(`GET request made to api/posts/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  const post = posts.find((post) => post.id == req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.sendStatus(404);
  }
});

router.put('/posts/:id/update', async (req,res) => {
  console.log(`PUT request made to api/posts/${req.params.id}/update`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  const postIndex = posts.findIndex((post) => post.id == req.params.id);
  if (postIndex !== -1) {
    const updatedPost = req.body;
    updatedPost.id = Number(req.params.id);
    updatedPost.published = updatedPost.published === "true" ? true : false;
    posts[postIndex] = updatedPost;
    fs.writeFileSync('data/posts.json', JSON.stringify(posts));
    res.status(200).json(updatedPost);    
  } else {
    res.status(404);
  }
});

router.delete('/posts/:id/delete', async (req,res) => {
  console.log(`DELETE request made to api/posts/${req.params.id}/delete`);
  if (serverError) return sendServerError(res);
  if (delay) await addDelay();
  const posts = getPosts();
  if (posts.some((post) => post.id == req.params.id)) {
    const newPosts = posts.filter(post => post.id != req.params.id);
    fs.writeFileSync('data/posts.json', JSON.stringify(newPosts));
    res.sendStatus(200);    
  } else {
    res.sendStatus(404);
  }
});

export default router;