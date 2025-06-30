# 🎵 Music Library App (Micro Frontend + Role-Based Auth)

A modular React-based **Music Library App** built using **Micro Frontend Architecture** with **Module Federation** (via Vite), deployed on **Vercel**.  
Includes role-based access (admin/user) and practical use of `map()`, `filter()`, and `reduce()`.

---

## 📂 Architecture Overview

| Module             | Description                                           |
|--------------------|-------------------------------------------------------|
| `Main App`         | Handles login, routing, layout, and loads the remote |
| `Music MFE`        | Exposes `<MusicLibrary />` via Module Federation     |

---

## 🧑‍💻 How to Run Locally

### ✅ 1. Clone Both Repos

```bash
# Clone Main App
git clone https://github.com/your-username/music-main-app.git
cd music-main-app
npm install

# Clone Remote (MFE)
git clone https://github.com/your-username/music-mfe.git
cd music-mfe
npm install


▶️ 2. Start Both Apps (in separate terminals)

# Remote Music MFE
cd music-mfe
npm run dev

# Main App
cd music-main-app
npm run dev

🚀 Deployment (Vercel)
🎯 Remote (Music MFE)
Repo: music-mfe

Deployed at: https://music-mfe.vercel.app

Exposes MusicLibrary at https://music-mfe.vercel.app/assets/remoteEntry.js

🎯 Main App
Repo: music-main-app

Deployed at: https://music-main-app.vercel.app

Loads remote MusicLibrary via Vite federation.

🔐 Demo Credentials
Role	Username	     Password
Admin	user@music.com   user@123
User    admin@music.com  admin@123

🧩 Micro Frontend + Auth Strategy
🧠 Micro Frontend (Vite Module Federation)
music-mfe exposes ./MusicLibrary via:

federation({
  name: 'music',
  filename: 'remoteEntry.js',
  exposes: {
    './MusicLibrary': './src/components/MusicLibrary.jsx',
  },
})

music-main-app loads the remote in vite.config.js:

federation({
  remotes: {
    music: 'https://music-mfe.vercel.app/assets/remoteEntry.js'
  },
})

index.html dynamically loads the remote at runtime:
<script type="module">
  const isLocalhost = location.hostname === 'localhost';
  const remoteUrl = isLocalhost
    ? 'http://localhost:5174/assets/remoteEntry.js'
    : 'https://music-mfe.vercel.app/assets/remoteEntry.js';

  import(remoteUrl).then(() => import('/src/main.jsx'));
</script>

🔐 Role-Based Authentication
JWT-style Base64 token is generated on login (stored in Context and localStorage)

Token structure: btoa(username:role)

On login:
const token = btoa(`${username}:${role}`);
localStorage.setItem("auth", JSON.stringify({ username, role, token }));

Role-based rendering in MusicLibrary:
if (role === 'admin') {
  // can add/delete songs
} else {
  // view-only
}

📚 Tech Stack
Frontend: React (Vite)

State Management: Context API

Federation: @originjs/vite-plugin-federation

Auth: In-memory token + role from login

Deployment: Vercel

Hooks Used: useState, useContext, useEffect, lazy, Suspense

JS Functions: map, filter, reduce for music listing

✨ Features
🎵 Music listing with sorting and filters

🔐 Role-based access (Admin/User)

⚛️ Micro frontend architecture

🌐 Deployed on Vercel (modular & scalable)

⚙️ Dynamic loading of remoteEntry.js in dev/prod

📌 Future Improvements
Shared auth/token logic via federated module

Real backend + database

Responsive mobile-first design

CI/CD integration for both apps

🙌 Author
Built with ❤️ by Parikshit Mali, Micro Frontend + Full Stack Developer.