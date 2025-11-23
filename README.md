# 🍽️ Full Stack Food Recipe App

A visually engaging and interactive **Full Stack Food Recipe Application** built with **React Native** for the frontend and integrated with the **[TheMealDB API](https://www.themealdb.com/api.php)** as the backend.
This app allows users to discover recipes from around the world, view detailed cooking instructions, explore meal categories, and search for specific dishes — all in one place.

---

APK: Go to the folder android > app > build > outputs > apk > release > apk-release.apk
## 🚀 Features

* 🔍 **Search Recipes:** Find meals by name or main ingredient.
* 🥗 **Browse Categories:** Explore recipes by meal type or cuisine.
* 📖 **Recipe Details:** View ingredients, step-by-step instructions, and meal images.
* ❤️ **Favorite Meals:** Save your favorite recipes for quick access.
* 📱 **Responsive UI:** Works seamlessly on all screen sizes and platforms.
* ⚡ **Live API Integration:** Real-time data powered by [TheMealDB API](https://www.themealdb.com/api.php).

---

## 🛠️ Tech Stack

**Frontend:**

* React Native
* JavaScript (ES6+)
* Axios (for API requests)
* React Navigation
* StyleSheet / Tailwind for styling

**Backend:**

* External API: **TheMealDB API**

---

## ⚙️ Installation and Setup

Follow these steps to run the app locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Akshat0403/Full-Stack-Food-Recipe-App.git

# 2️⃣ Navigate to the project folder
cd Full-Stack-Food-Recipe-App

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
```

---

## 🔑 Environment Variables

If your app uses environment variables, create a `.env` file in the root directory and add:

```
EXPO_PUBLIC_MEALDB_API_URL=https://www.themealdb.com/api/json/v1/1/
```

You can explore available endpoints at [TheMealDB API Documentation](https://www.themealdb.com/api.php).



## 📂 Folder Structure

```
Full-Stack-Food-Recipe-App/
│
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens (Home, Details, Search, Favorites, etc.)
│   ├── navigation/       # Navigation setup
│   ├── api/              # API service integration
│   ├── assets/           # Images, icons, and media
│   └── App.js
│
├── package.json
├── .env
└── README.md
```

---

## 🧩 API Reference

**Base URL:**

```
https://www.themealdb.com/api/json/v1/1/
```

**Common Endpoints Used:**

* `/search.php?s=` → Search meals by name
* `/lookup.php?i=` → Get detailed meal info by ID
* `/filter.php?c=` → Filter meals by category
* `/categories.php` → List all available meal categories

---

## 🧑‍💻 Author

**Akshat Saxena**
📧 saxena.akshat0405@gmail.com
🔗 https://www.linkedin.com/in/akshat-saxena-5b769230a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 
💻 https://github.com/Akshat0403



## ⭐ Acknowledgments

* [TheMealDB API](https://www.themealdb.com/api.php) for providing delicious meal data
* The React Native community for open-source support

> 🍴 If you enjoyed this project, consider giving it a ⭐ on GitHub!
