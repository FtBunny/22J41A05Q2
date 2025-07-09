# 🔗 React URL Shortener App

A simple URL shortener built using React that supports:

- Core URL shortening
- Optional custom short codes
- LocalStorage-based mapping
- 30-minute expiration of short URLs

> **Note:** Due to a network issue during the evaluation, I was unable to complete the token-based logging integration. However, the core functionality of the application is fully implemented.

---

## 🚀 Features

- ✅ Shorten long URLs into short codes
- ✅ Custom short code (optional)
- ✅ 30-minute default expiration for each short URL
- ✅ Redirect to original URL using the short code
- ❌ Logging middleware integration (skipped due to lost token/client ID)

---

## 🛠️ Tech Stack

- React
- React Router
- JavaScript (ES6)
- LocalStorage

---

## 📦 Installation & Running Locally

```bash
git clone https://github.com/FtBunny/22J41A05Q2.git
cd url-shortener
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---


## 📌 Notes

- URLs are stored in browser's localStorage with expiration timestamps.
- Redirects only happen if the link is still valid.
- This app does not include backend or logging due to lost registration credentials during setup.

---

