
---

# Laboratory Exercise 4: Live Search and Filter

Extension of the Mini Product Catalog using `useState` and `useEffect`. This work is on the `lab4-livesearch` branch.

## New Features

- Controlled `SearchBar` component (text input, category dropdown, sort dropdown, Clear Filters button)
- Live search with a 300ms debounce using `useEffect`, `setTimeout`, and a cleanup function
- Combined keyword, category, and price sorting without modifying the original `products` array
- Result count display ("Showing X of Y products")
- Friendly empty-state message when nothing matches
- Browser tab title that updates with the number of results
- Lab 3 cart message still works

## State Used in App.jsx

| State | Purpose |
| --- | --- |
| `searchText` | What the user is typing right now |
| `debouncedSearch` | The delayed value actually used for filtering |
| `category` | Selected category (default "All") |
| `sortOrder` | Selected sort option (default "default") |
| `cartCount`, `lastAdded` | Cart message from Lab 3 |

## Updated Project Structure

```
src/
  components/
    ProductCard.jsx
    ProductCard.css
    SearchBar.jsx
  data/
    products.js
  App.jsx
  App.css
  main.jsx
```

## Guide Questions

**1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?**
`searchText` updates on every keystroke so the input always shows what the user typed. `debouncedSearch` only updates after the user pauses typing, and it is the value used for filtering. With only one state, the list would re-filter on every keystroke.

**2. What would happen if the debounce effect did not return a cleanup function?**
Every keystroke would leave its own timer running, and each timer would eventually update `debouncedSearch`. The list would update many times with outdated values instead of once after the final pause, so the debounce would not work.

**3. What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?**
The dependency array tells React when to re-run an effect: only when one of the listed values changes. If it is empty, the effect runs only once, after the first render. If it is left out completely, the effect runs after every render, which can cause unnecessary work or infinite loops if the effect updates state.

**4. Why should we avoid sorting the original products array directly?**
`.sort()` changes the array it is called on. Sorting the original would permanently change the shared data, so the "Default" order would be lost, and mutating data can cause unpredictable bugs in React. Sorting a copy keeps the original safe.

**5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**
It is better to calculate it during rendering. The filtered list can be derived entirely from existing state (`debouncedSearch`, `category`, and `sortOrder`), so storing it separately would duplicate data and risk it getting out of sync. Calculating it keeps the code simpler and the list always correct.