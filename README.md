# 🔐 OTP Generator

A clean, responsive **OTP (One-Time Password) Generator** built with **React.js** — generates a random 6-digit OTP with a live countdown and automatic expiration.

![React](https://img.shields.io/badge/React-61DAFB?style=flat\&logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat\&logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat\&logo=javascript\&logoColor=black)

---

## 🚀 Features

* 🔢 Generates a random 6-digit OTP
* ⏱️ 5-second OTP expiration timer with live countdown
* 🚫 Generate button is disabled while the OTP is active
* ⚠️ Displays an expiration message when the timer ends
* ⚛️ Built with React Hooks (`useState`, `useEffect`, `useRef`)
* 🎨 Clean, responsive, and minimal UI

---

## 🖼️ Screenshot

Add your project screenshot here:

![OTP Generator Screenshot](./public/demo.png)


> Make sure `otp-generator.png` exists inside the `public` folder.

---

## 🔗 Live Demo

🌐 **[Live Demo](https://otp-generator-ph-s.vercel.app/)**

💻 **[GitHub Repository](https://github.com/aminulislamdev/OTP-Generator)**

---

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React.js          | UI and component logic            |
| Vite              | Build tool and development server |
| JavaScript (ES6+) | Core application logic            |
| CSS               | Styling                           |

---

## 🧠 React Concepts Practiced

* `useState` — managing OTP and timer state
* `useEffect` — handling countdown side effects
* `useRef` — persisting interval references across renders
* `setInterval` / `clearInterval` — timer control
* Conditional rendering
* Event handling
* State management

---

## 📂 Project Structure

```text
OTP-Generator/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── OTPGenerator.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/aminulislamdev/OTP-Generator.git
```

### 2. Navigate into the project

```bash
cd OTP-Generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

---

## 🎯 How It Works

1. Click the **Generate OTP** button.
2. A random 6-digit OTP is generated instantly.
3. The OTP remains active for **5 seconds**.
4. A live countdown displays the remaining time.
5. The Generate button stays disabled while the OTP is active.
6. After 5 seconds, the OTP expires automatically.
7. Click the button again to generate a new OTP.

---

## 🧪 Test Cases

* Generate a 6-digit OTP
* Verify the OTP contains exactly 6 digits
* Verify the countdown starts from 5 seconds
* Verify the button is disabled while the timer is running
* Verify the OTP expires after 5 seconds
* Verify a new OTP can be generated after expiration

---

## 🔮 Future Improvements

* 📋 Copy-to-clipboard functionality
* 🔢 Configurable OTP length
* ⏱️ Configurable expiration time
* 🧹 Automatically clear OTP after expiration
* 🔐 OTP verification input
* 🔄 Resend OTP functionality
* 🚫 Maximum verification attempts
* 🌙 Dark mode
* 🌐 Backend/API integration
* 🔒 Cryptographically secure OTP generation
* 🛡️ Backend OTP verification with server-side expiration and validation

---

## ⚠️ Note

This project is built for **learning and UI simulation purposes**.

The current OTP generation uses `Math.random()`, which is **not cryptographically secure** and should not be used for production authentication.

For real-world authentication systems, OTP generation and validation should be handled securely on a backend using appropriate cryptographic methods.

---

## 👨‍💻 Author

**Aminul Islam**

*Future Full Stack Developer*

🔗 [GitHub](https://github.com/aminulislamdev)
