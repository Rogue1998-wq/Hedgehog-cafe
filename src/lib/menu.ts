export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  veg?: boolean;
  tag?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "breakfast",
    title: "All-Day Breakfast",
    blurb: "Because the best chapters begin at brunch.",
    items: [
      { name: "The Hedgehog Big Breakfast", desc: "Two eggs your way, house sausage, streaky bacon, sautéed mushrooms, grilled tomato, baked beans, sourdough toast.", price: "₹525" },
      { name: "Shakshuka in a Skillet", desc: "Poached eggs in spiced tomato & pepper sugo, feta, coriander, warm pita.", price: "₹425", veg: true },
      { name: "Belgian Waffle Stack", desc: "Buttermilk waffles, maple butter, seasonal berries, vanilla bean cream.", price: "₹395", veg: true },
      { name: "Truffle Mushroom Omelette", desc: "Three-egg omelette, wild mushrooms, truffle oil, aged cheddar, chives.", price: "₹445", veg: true },
      { name: "Avocado & Feta on Sourdough", desc: "Smashed avocado, chilli-lime feta, poached egg, pickled onion.", price: "₹465", veg: true },
      { name: "Masala Baked Eggs", desc: "Slow-baked eggs in curried tomato, paneer, cheese pull, mini kulcha.", price: "₹385", veg: true },
    ],
  },
  {
    id: "small-plates",
    title: "To Begin — Small Plates",
    blurb: "Little dishes for lingering conversations.",
    items: [
      { name: "Bruschetta Misto", desc: "Classic tomato, olive tapenade and wild mushroom, on sourdough crostini.", price: "Veg ₹525 · Chicken ₹615" },
      { name: "Arancini Ragu", desc: "Crispy risotto balls, aged parmesan, house cheese sauce.", price: "Veg ₹525 · Chicken ₹615" },
      { name: "Focaccia della Casa", desc: "Rosemary garlic focaccia, mozzarella crown, tomato-basil dip.", price: "₹395", veg: true },
      { name: "Chilli Garlic Edamame", desc: "Steamed pods tossed in sesame chilli oil, sea salt.", price: "₹345", veg: true },
      { name: "Prawn Peri-Peri", desc: "Butterflied tiger prawns, peri-peri butter, lemon, grilled bread.", price: "₹685" },
    ],
  },
  {
    id: "pizza",
    title: "From the Wood-Fired Oven",
    blurb: "Slow-fermented sourdough bases. Charred, blistered, honest.",
    items: [
      { name: "Margherita", desc: "Buffalo mozzarella, San Marzano tomato, torn basil, extra-virgin olive oil.", price: "₹625", veg: true },
      { name: "Chicken 65", desc: "Peppercorn chicken, curry leaves, green chilli, mozzarella, kasundi drizzle.", price: "₹685" },
      { name: "La Capricciosa", desc: "Artichoke, ham, mushroom, black olives, fior di latte.", price: "₹675" },
      { name: "Truffle & Wild Mushroom", desc: "Cremini, shiitake, taleggio, truffle oil, thyme.", price: "₹725", veg: true },
      { name: "Diavola", desc: "Spicy pepperoni, calabrian chilli, mozzarella, honey.", price: "₹695" },
      { name: "Paneer Tikka Bianca", desc: "White base, tandoori paneer, red onion, mint yogurt swirl.", price: "₹635", veg: true },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Between Bread",
    blurb: "Griddled patties, brioche buns, twice-cooked fries.",
    items: [
      { name: "The Hedgehog Classic", desc: "180g grass-fed beef, aged cheddar, house pickle, burnt onion jam.", price: "₹545" },
      { name: "Mushroom & Swiss Melt", desc: "Portobello, sautéed onion, Swiss, garlic aioli, brioche.", price: "₹465", veg: true },
      { name: "Buttermilk Fried Chicken", desc: "24-hr brined, honey-hot glaze, slaw, dill pickle.", price: "₹525" },
      { name: "Beetroot & Halloumi", desc: "Roast beet patty, grilled halloumi, rocket, harissa mayo.", price: "₹495", veg: true },
      { name: "The Reading Room Club", desc: "Roast chicken, bacon, egg, avocado, triple-stacked on toast.", price: "₹485" },
    ],
  },
  {
    id: "mains",
    title: "Mains & Bowls",
    blurb: "Something a little more substantial.",
    items: [
      { name: "Slow-Roast Chicken", desc: "Half chicken, lemon-thyme jus, buttered mash, greens.", price: "₹745" },
      { name: "Beef Lasagna", desc: "Slow-cooked ragù, layers of pasta, béchamel, three cheeses.", price: "₹625" },
      { name: "Pumpkin & Lentil Stew", desc: "Roasted pumpkin, black lentils, goat cheese, garlic croutons.", price: "₹495", veg: true },
      { name: "Penne alla Vodka", desc: "Blushed tomato-cream, chilli flakes, parmesan.", price: "₹465", veg: true },
      { name: "Grilled Prawn Aglio", desc: "Linguine, garlic, chilli, prawns, lemon oil.", price: "₹745" },
    ],
  },
  {
    id: "desserts",
    title: "Sweet Endings",
    blurb: "Save room. Trust us.",
    items: [
      { name: "Warm Fudgy Brownie", desc: "Dark chocolate brownie, vanilla bean ice cream, salted caramel.", price: "₹325", veg: true },
      { name: "Tiramisu al Vetro", desc: "Espresso-soaked savoiardi, mascarpone, cocoa, in a glass.", price: "₹345", veg: true },
      { name: "Basque Cheesecake", desc: "Burnt-top cheesecake, honeycomb, sea salt.", price: "₹365", veg: true },
      { name: "Sticky Toffee Pudding", desc: "Date sponge, toffee sauce, clotted cream.", price: "₹335", veg: true },
    ],
  },
  {
    id: "coffee",
    title: "The Coffee Bar",
    blurb: "Single-origin beans, roasted for us in the Nilgiris.",
    items: [
      { name: "Espresso", price: "₹145", veg: true },
      { name: "Cortado", price: "₹185", veg: true },
      { name: "Flat White", price: "₹215", veg: true },
      { name: "Cappuccino / Latte", price: "₹225", veg: true },
      { name: "Iced Filter", price: "₹245", veg: true },
      { name: "Mocha Bianca", desc: "White chocolate, espresso, steamed milk.", price: "₹275", veg: true },
    ],
  },
  {
    id: "tea",
    title: "The Tea Library",
    blurb: "Loose leaf, brewed by the pot.",
    items: [
      { name: "Darjeeling First Flush", price: "₹195", veg: true },
      { name: "Assam Second Flush", price: "₹185", veg: true },
      { name: "Kashmiri Kahwa", price: "₹215", veg: true },
      { name: "Moroccan Mint", price: "₹195", veg: true },
      { name: "Masala Chai", desc: "House blend, brewed with whole spices.", price: "₹165", veg: true },
      { name: "Iced Peach Oolong", price: "₹235", veg: true },
    ],
  },
  {
    id: "bar",
    title: "From the Bar",
    blurb: "Cocktails, cordials & a short wine list.",
    items: [
      { name: "Old Fashioned", desc: "Bourbon, demerara, angostura, orange peel.", price: "₹525" },
      { name: "Espresso Martini", desc: "Vodka, cold-brew, coffee liqueur, crema.", price: "₹495" },
      { name: "Negroni", desc: "Gin, Campari, sweet vermouth, orange twist.", price: "₹495" },
      { name: "Elderflower Spritz", desc: "Prosecco, elderflower, soda, mint.", price: "₹525" },
      { name: "House Sangria (glass)", price: "₹395" },
      { name: "House Red / White (glass)", price: "₹445" },
    ],
  },
];