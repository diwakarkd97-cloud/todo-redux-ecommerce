 React + Redux Toolkit E-Commerce App
A responsive, single-page e-commerce front-end application built with React and Redux Toolkit.

This project demonstrates modern, scalable state management. It was specifically designed to eliminate "prop-drilling" by utilizing a centralized Redux store to seamlessly handle product listings, shopping cart operations, and view navigation.

 Features
Global State Management: Powered by Redux Toolkit (createSlice, configureStore) for predictable state updates and a clean component architecture.

Dynamic Shopping Cart:

Add and remove products from the cart.

Real-time calculation of total cart items and subtotal prices.

Advanced Quantity Controls:

Uses a dropdown for standard quantities (1-9).

Automatically switches to a custom text input for bulk quantities (10+).

Includes inventory validation (caps purchases at 500 items per seller with inline UI error messages).

Seamless Navigation: Toggles instantly between the 'Home' product grid and the 'Cart' checkout view using Redux state instead of a heavy routing library.

 Tech Stack
Frontend Framework: React 18 (Vite)

State Management: Redux Toolkit & React-Redux

Data Source: Local JSON (productsData.json)

Styling: Custom CSS
