import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send('Welcome to the API!');
})

app.get('/products', (req, res) => {
   return res.json([
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 }
    ]);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});