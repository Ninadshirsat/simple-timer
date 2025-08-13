# ⏱ Simple Timer App

A simple, minimal timer application built with React, designed to demonstrate the practical use of the useRef hook and localStorage for state management and persistence.

The timer supports start, pause, resume, and reset operations, and retains its state even after the browser is refreshed or closed.

## 🚀 Features

Start / Pause / Resume Timer – Control the timer easily.

Reset Timer – Set the timer back to zero.

- **Persistent State** – Saves the timer’s value in localStorage, ensuring data survives browser refreshes and restarts.

- **useRef Hook Demonstration** – Efficiently stores mutable values (like interval IDs) without causing re-renders.

## 🛠 Technologies Used

- **Framework:** React
- **State Management:** useRef, useState, useEffect
- **Persistence:** localStorage
- **Build Tool:** Vite
- **Language:** JavaScript

## 📦 Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/Ninadshirsat/simple-timer.git
```

2. **Navigate to the project folder:**

```bash
   cd simple-timer
```

3. **Install dependencies:**

```bash
   npm install
```

4. **▶️ Usage**
   Start the development server:

```bash
   npm run dev
```

Then open your browser at:
[http://localhost:5173]

Controls:

Start – Begin the timer.

Pause – Stop the timer without resetting.

Resume – Continue the paused timer.

Reset – Set the timer back to 00:00:00.

You can close the browser and return later — your timer value will still be there.

**📚 Learning Points**
useRef Hook: Perfect for storing values that persist across renders but don’t cause re-renders when changed (like an interval ID).

localStorage: Saves simple key-value data directly in the browser for persistence between sessions.

🤝 Contributing
Contributions are welcome!
**To contribute:**

1. **Fork the project.**

2. **Create your feature branch:**

```bash
   git checkout -b feature/AmazingFeature
```

3. **Commit your changes:**

```bash
   git commit -m 'Add some AmazingFeature'
```

4. **Push to the branch:**

```bash
   git push origin feature/AmazingFeature
```

5. **Open a Pull Request**
   For issues or feature requests, open an issue in the repo.

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.
