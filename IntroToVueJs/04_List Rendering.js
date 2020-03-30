var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: './assets/vmSocks-green.jpg',
    altText: 'A pair of socks',
    url: 'www.google.com',
    inventory: 5,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  }
})