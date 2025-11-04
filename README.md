# 🎨 Color Palette Generator

A simple, modern, and responsive **Color Palette Generator** that creates beautiful random color palettes with animations, favorite saving, and click-to-copy features.  
Built using **HTML, CSS, and JavaScript**.

---

## 🚀 Features

✅ Generate 5 beautiful random colors  
✅ Copy any color by clicking  
✅ Modern UI with gradient background  
✅ Smooth entrance animations & staggered color animations  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Save palettes as favorites (stored in localStorage)  
✅ View favorite palettes in a separate section  
✅ Delete saved palettes  
✅ Click saved palette to copy all colors  
✅ Button hover animations  
✅ Clean and professional UI design  

---

## 🖼️ Screenshots

> Replace these links with your actual images:

### 🎛️ Main UI  
<img width="1882" height="983" alt="Screenshot 2025-11-04 091242" src="https://github.com/user-attachments/assets/275409da-3211-4a13-be63-7eb9524da7a1" />


---

## 🛠️ Tech Stack

- **HTML5** — Structure  
- **CSS3** — Styling, gradients, animations, responsive grid  
- **JavaScript (ES6)** — Logic, localStorage, dynamic UI  

---

## 📂 Project Structure

📁 color-palette-generator
│── colour.html
│── col.css
│── chroma.js
└── README.md

sql
Copy code

---

## ✅ How to Use

1. Open the website  
2. Click **Generate Palette** to create 5 new colors  
3. Click any color box to **copy the HEX code**  
4. Click **Save Palette ⭐** to store the palette as a favorite  
5. Scroll down to see all **Saved Palettes**  
6. Click a saved palette to **copy all colors**  
7. Press **Delete** to remove a saved palette  

---

## 💾 Saving System (localStorage)

Palettes are saved as an array of 5 colors:

```json
[
  ["#112233", "#55aaff", "#33ddee", "#99dd44", "#ffee22"],
  ["#aa33ff", "#ff5566", "#00ccdd", "#222222", "#eeeeee"]
]
Saved in the browser until manually deleted.

📱 Responsive Design
The layout automatically adjusts using:

CSS Grid with auto-fit + minmax()

Media queries for small screens

Scalable color boxes and text

Mobile-friendly buttons

✨ Animations Used
Fade-in entrance effect

Staggered pop-in animation for color boxes

Button hover scaling

Smooth palette transitions

🔧 How to Run Locally
Download or clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/<repo-name>.git
Open the folder

Open index.html in any browser

Done ✅

🧩 Future Improvements (Optional)
Here are some features you can add next:

🔒 Lock colors so they don’t change

🌈 Generate gradients automatically

🌓 Light/Dark theme toggle

📸 Export palette as an image

🔗 Share palette by URL

📦 Download palette as JSON or text file

🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to improve.

📄 License
This project is open-source and available under the MIT License.

⭐ Show Support
If you like this project, consider giving it a star ⭐ on GitHub!
