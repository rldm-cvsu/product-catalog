# CvSU Mini Store (Product Catalog)

A mini product catalog built with React and Vite for DCIT26 Laboratory Exercise 3: React Props and Component Communication.

## Features

- Reusable `ProductCard` component using props and destructuring
- Default `category` value of "General"
- Conditional rendering and styling for in-stock and out-of-stock items
- Callback prop (`onAddToCart`) that sends the product title to the parent
- Running cart message in `App` (uses `useState`)
- `children` prop used for "New" and "Sale" badges
- Product list rendered with `.map()` and unique keys
- Responsive CSS grid layout

## Project Structure

```
src/
  components/
    ProductCard.jsx
    ProductCard.css
  data/
    products.js
  App.jsx
  App.css
  main.jsx
```

## How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Guide Questions

**1. What is the difference between props and state?**
Props are read-only data passed from a parent to a child. State is data a component owns and can change, and changing it re-renders the component.

**2. Why can a child component not modify the props it receives?**
Props belong to the parent. React uses one-way data flow so that data changes stay predictable, and only the owner of the data can change it.

**3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?**
The parent passes a function down as a prop. When the button is clicked, the child calls that function and passes the product title. The function runs in the parent, so the parent receives the data and updates its own state.

**4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?**
React uses keys to track which items changed, were added, or were removed. If a key is missing or duplicated, React may update the wrong items, mix up component state, show console warnings, and render inefficiently.

**5. What does the children prop allow you to do that a normal prop does not?**
It lets a parent place content (JSX, elements, or components) between a component's opening and closing tags, so the parent can customize what appears inside the child. A normal prop usually passes a single value such as a string or number.

## Author

Your Name
DCIT26 - Cavite State University