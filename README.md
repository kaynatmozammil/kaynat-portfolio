# 🌐 Kaynat Mozammil – Developer Portfolio

Welcome to my personal portfolio project built with **React.js** and **Tailwind CSS**. This project showcases my skills, achievements, projects, and contact details with a modern, responsive design.

---

## 📌 Live Preview

> **🔗 Visit**: [kaynatmozammil.vercel.app](https://kaynatmozammil.vercel.app)  
> Hosted on **Vercel**

---

## 🚀 Features

- 📷 **Password-Protected Gallery** – Access secure media section with expiry
- 📬 **Formspree Contact Form** – With real-time feedback via toast notifications
- 🌐 **Social Links** – Integrated GitHub, LinkedIn, X (Twitter), WhatsApp, Instagram
- 📱 **Responsive Layout** – Looks great on all screen sizes
- 💌 **Email & Phone** – Accessible and interactive contact options

---

## 🛠️ Tech Stack

| Category     | Tech Used                                 |
|--------------|-------------------------------------------|
| Frontend     | React.js, Vite, Tailwind CSS              |
| Icons        | Lucide React, React Icons                 |
| Form Handling| Formspree API                             |
| Toasts       | Custom `useToast()` hook                  |
| Hosting      | Vercel                                     |

---

## 📁 Project Structure

\`\`\`
src/
├── assets/              # Static files and images
├── components/          # ContactSection, GallerySection, etc.
├── hooks/               # useToast custom hook
├── lib/                 # Utility functions (e.g., cn)
├── App.jsx              # App root
└── main.jsx             # Entry point
\`\`\`

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/kaynatmozammil/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Environment Variable

Create a `.env` file at the root:

```env
VITE_GALLERY_PASSWORD=5678
```

---

## 🧪 Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Gallery Section

- Protected by a password set via `.env`
- Expires after **5 minutes** using `localStorage` & `Date.now()`
- Auto-detects file type from `/public/images/`  
  ✅ Supports: `.jpg`, `.png`, `.webp`, `.mp4`

---

## 📬 Contact Form (Formspree)

```js
const response = await fetch("https://formspree.io/f/mldnlrvw", {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json",
  },
});
```

- Sends direct message to my inbox via [Formspree](https://formspree.io/)
- Displays **toast messages**:
  - ✅ Success: “Message sent!”
  - ❌ Error: “Something went wrong.”
  - 📡 Network issue: “Please check your internet connection.”

---

## 🌐 Social Media Icons (Lucide + React Icons)

```tsx
import {
  Instagram, Linkedin, Mail, MapPin, Phone, Send,
} from "lucide-react";

import { RiTwitterXLine } from "react-icons/ri";   // X (Twitter)
import { BsWhatsapp } from "react-icons/bs";       // WhatsApp
import { FaGithub } from "react-icons/fa";         // GitHub
```

### ⚡ Connect With Me

| Platform  | Link |
|-----------|------|
| LinkedIn  | [linkedin.com/in/kaynatmozammil](https://www.linkedin.com/in/kaynatmozammil/) |
| X (Twitter) | [x.com/kaynatXmozammil](https://x.com/kaynatXmozammil) |
| Instagram | [@kaynat_mozammil](https://www.instagram.com/kaynat_mozammil/) |
| GitHub    | [github.com/kaynatmozammil](https://github.com/kaynatmozammil) |
| WhatsApp  | [wa.me/919341231811](https://wa.me/919341231811) |

---

## 🎨 Customize Title & Favicon

In `index.html`:

```html
<title>Kaynat Mozammil | Developer Portfolio</title>
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

Replace `/favicon.ico` with your custom icon if needed.

---

## 📦 Build for Production

```bash
npm run build
```

Deploy `/dist` to Vercel, Netlify, or your preferred static hosting service.

---

## 🙋‍♀️ Author

**Kaynat Mozammil**  
📧 kaynatmozammil@gmail.com  
📱 +91 9341231811  
📍 New Delhi, India