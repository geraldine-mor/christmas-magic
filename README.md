
# 🎄Christmas Magic Memory Card Game

The Christmas Magic Memory Card Game is a festive, fully responsive web-based game designed to be enjoyed on all devices — from mobile phones and tablets to desktop computers.

<img width="1072" height="787" alt="Home page" src="https://github.com/user-attachments/assets/7f2f5476-775a-468f-896c-3085296caf57">



## 🎯 About the Game

This game is aimed at children, families, and casual players who want to have fun while improving memory and concentration skills during the holiday season. Players flip Christmas-themed cards featuring festive icons such as Santa, snowflakes, Christmas trees, and gifts, with the goal of finding matching pairs.

## 🧩 Gameplay

- Cards are displayed face down in a grid  
- Players flip cards to reveal festive images  
- The objective is to find all matching pairs  
- Visual feedback indicates matching and non-matching cards  
- A restart option allows the game to be played multiple times  

## 📱 Responsive Design

The game is fully responsive, ensuring smooth gameplay across different screen sizes and devices.

## 🎅 User Experience

The interface is simple and intuitive, allowing players to start playing immediately without instructions. The cheerful Christmas theme creates a fun and relaxing seasonal atmosphere.


## 1. User Experience

Many players want a simple and enjoyable game that is easy to understand, visually appealing, and suitable for all ages—especially during the Christmas season. Complicated rules or cluttered interfaces can make casual games frustrating rather than fun.

To address this, the Christmas Magic Memory Card Game focuses on simplicity and enjoyment:

- Players can start playing immediately without instructions  
- Festive Christmas-themed cards create a cheerful and engaging atmosphere  
- Clear visual feedback helps players recognize matching and non-matching cards  
- A restart option allows the game to be replayed multiple times  

The clean layout and intuitive interactions make the game relaxing, accessible, and enjoyable for everyone.

## 🎯 Target Audience

The Christmas Magic Memory Card Game is designed for children, families, and casual players of all ages. It is especially suitable for:

- Kids who want to improve memory and concentration skills  
- Families looking for a fun holiday activity  
- Casual players who enjoy simple, festive games  

With no complex controls or time pressure, the game offers a calm and enjoyable experience that fits perfectly into the Christmas season.



## 1.1 User Stories

### Player Goals
- View and play the Christmas Magic Memory Card Game seamlessly across all device sizes, including mobile, tablet, and desktop.
- Start the game instantly without needing instructions or prior experience.
- Enjoy a festive and visually engaging Christmas-themed design.
- Easily restart the game to play multiple rounds.
- Receive clear visual feedback when cards match or do not match.

### Parent / Educator Goals
- Provide children with a safe, simple game that helps improve memory and concentration.
- Use the game as a light, seasonal activity suitable for all ages.
- Ensure the game works smoothly on different devices used at home or in classrooms.

### Casual Player Goals
- Relax and enjoy a simple holiday-themed game without time pressure.
- Navigate the game interface easily without distractions or complex features.
- Play casually for fun during the Christmas season.

### Development & Planning
User stories were planned and tracked during development to ensure a smooth and user-focused experience. Each story included clear acceptance criteria and development tasks, helping maintain progress and ensure the game met its usability and accessibility goals.


## 2. Design

### 2.1 Colour Scheme

The colour scheme for the Christmas Magic Memory Card Game was derived from the festive background image used on the Home page. The palette reflects traditional Christmas colours while maintaining clarity, contrast, and accessibility.

The primary colours used include:

- **Dark Winter Blue** – `rgb(15, 4, 57)` / `#0F0439`  
  Used for the main background and card backs, providing strong contrast and a calm winter atmosphere.

- **Festive Red** – `rgb(220, 38, 38)` / `#DC2626`  
  Used for the game title, borders, and the “Our Team” button to draw attention and reinforce the Christmas theme.

- **Christmas Green** – `rgb(34, 139, 34)` / `#228B22`  
  Used for decorative accents and card details to balance the red elements.

- **Golden Accent** – `rgb(212, 175, 55)` / `#D4AF37`  
  Used sparingly for highlights and decorative details inspired by the ornaments in the background image.

- **Snow White** – `rgb(245, 245, 245)` / `#F5F5F5`  
  Used for background areas and text contrast to keep the layout bright and readable.

These colours were selected to ensure visual consistency, festive appeal, and sufficient contrast, supporting both usability and accessibility across different devices.


## 2.2 Typography

Google Fonts are used throughout the Christmas Magic Memory Card Game to create a festive visual style while maintaining readability.

- **Mountains of Christmas** is the primary font used for the game title and headings. Its decorative serif style strongly reflects the Christmas theme and sets a cheerful holiday tone.
- **Berkshire Swash** and **Macondo** are used for decorative text elements, adding a playful and whimsical character to the interface.
- **Inter** is used for supporting and functional text where clarity and legibility are important, ensuring a smooth user experience across all devices.

This combination of decorative Christmas fonts and a clean sans-serif font creates a balanced design that is both festive and easy to read.


## 2.3 Imagery

Images used in the Christmas Magic Memory Card Game were sourced from the internet and combined to create cohesive, festive visuals. The final images were enhanced with the help of ChatGPT to improve clarity, consistency, and overall visual appeal.

CloudConvert was used to resize and optimize the images, ensuring they are suitable for web use and aligned with WCAG accessibility standards where applicable.

The imagery focuses on clear, Christmas-themed visuals that are easy to recognize during gameplay, helping players quickly identify card pairs while maintaining a cheerful holiday atmosphere.



## 3. Features

The Christmas Magic Memory Card Game consists of two main pages designed to provide both gameplay and background information.

### Pages Overview

- **Main Page (index.html)**  
  This page contains the core functionality of the game. Players can interact with the Christmas-themed memory cards, flip them to find matching pairs, and restart the game at any time. The layout is clean, festive, and fully responsive, allowing seamless gameplay across all device sizes.


 <img width="1072" height="787" alt="Home page" src="https://github.com/user-attachments/assets/c40cc7ee-1939-4925-a8f0-cbdf4cff60a9">


- **Our Team Page (about.html)**  
  This page introduces the team behind the game. It provides brief information about the creators, helping users understand the project’s background and purpose while maintaining the same Christmas-themed design and typography.

 <img width="1070" height="762" alt="Team page" src="https://github.com/user-attachments/assets/05cfa6cf-345f-43d7-a689-fbbaf8482f69">


### Design & Technologies

- Fully responsive layout for mobile, tablet, and desktop devices  
- Festive Christmas visuals and serif typography for a cohesive seasonal style  
- Built using HTML, CSS, and JavaScript  
- Bootstrap v5.3 is used across both pages to support responsive design and reusable components  

The two-page structure keeps the project simple while offering both an engaging game experience and informative project context.


## 3.1 Home Page

The Home page (`index.html`) serves as the primary landing page of the Christmas Magic Memory Card Game. The page is intentionally minimalistic and focuses entirely on gameplay.

Unlike traditional websites, the Home page does not include a navigation bar. Instead, it features a single **“Our Team”** button at the top of the page, which links to the dedicated team information page (`about.html`).

Below this button, the main game area displays a grid of Christmas-themed cards. Players can select and flip the cards to reveal their images, with the objective of finding matching pairs. The interaction is simple and intuitive, allowing users to start playing immediately without instructions.

The clean layout and limited interface elements help keep the user’s attention on the game itself, creating a smooth and enjoyable playing experience.

## 3.2 About Page (Our Team)

The **Our Team** page (`about.html`) introduces the creators of the Christmas Magic Memory Card Game using **four Bootstrap cards**, each representing a team member.

Each card includes:
- A festive, Christmas-themed image  
- The team member’s name  
- A short description explaining their role and contribution to the project  

The cards are arranged using Bootstrap’s grid system, displaying side by side on larger screens and stacking vertically on smaller devices to maintain readability and responsiveness.

The page design is visually enriched with a winter-themed background featuring frosted pine branches, ornaments, and warm holiday colours. Festive typography is used for the **“Our Team”** heading to match the overall Christmas aesthetic of the project.

<img alt="Our team" src="https://github.com/user-attachments/assets/cd47590c-524a-491a-81c0-9fd213ca72d6" width="200">



A clearly styled **“Return Home”** button is placed at the bottom of the page, allowing users to easily navigate back to the main game page. The layout, colour scheme, and typography remain consistent with the Home page, ensuring a cohesive and immersive festive experience across the site.


<img alt="Return home" src="https://github.com/user-attachments/assets/578005c3-2f2d-4e94-8dc9-70f120fb5c95" width="200">



## 4 Frameworks, Libraries & Programs Used

The following frameworks, libraries, and tools were used in the development of the Christmas Magic Memory Card Game:

- **GitHub** – Used for version control and project repository management.
- **Bootstrap 5.3** – Used to support responsive layout, cards, buttons, and general styling across both pages. Bootstrap CSS was customised where necessary.
- **Google Fonts** – Integrated to apply the selected Christmas-themed and supporting fonts throughout the game.

- **Chrome DevTools** – Used for testing, debugging, and checking responsiveness across different screen sizes.
- **CloudConvert** – Used to convert and optimise image files into suitable formats for web use.

- **Amiresponsive** – Used to preview and demonstrate how the game appears on multiple device sizes.


These tools collectively supported efficient development, responsive design, and a polished user experience.



## 5. Deployment

### Cloning the Repository / Running the Project Locally

The Christmas Magic Memory Card Game repository was cloned and run locally using the following steps:

1. Install **GitHub Desktop** on your computer.
2. Log in to your GitHub account through the application.
3. Select **File → Clone Repository**.
4. Enter or select the project repository URL:  


### Publishing the Site

Deployment of the Christmas Magic Memory Card Game to **GitHub Pages** was completed using the following steps:

1. Open the project’s GitHub repository.
2. Navigate to **Settings**.
3. Go to the **Pages** section under **Code and automation**.
4. Configure the deployment settings as follows:
   - **Source:** Deploy from a branch  
   - **Branch:** `main`  
   - **Folder:** `/ (root)`
5. Save the changes to trigger the initial deployment.

After the initial setup, all subsequent pushes to the `main` branch are automatically published. Deployment history and active versions can be viewed in the repository under **Deployments** in the right-hand sidebar.



## 6 Fixing Bugs

Throughout the development of the Christmas Magic Memory Card Game, testing was carried out continuously. **Chrome DevTools** was used extensively to inspect elements, debug JavaScript logic, and verify layout responsiveness as features were implemented.

Several issues were identified and resolved during development:

### Inconsistent Card Sizes on Different Screen Sizes
Initially, the memory cards appeared uneven on smaller screens, which affected the layout and user experience. Custom CSS rules and media queries were applied to ensure that all cards scale proportionally and remain aligned within the grid across all device sizes.

### Image Optimisation and Loading Performance
Some image assets were larger than necessary, which impacted loading times. These images were resized and optimised to improve performance while maintaining visual quality.

### Colour Contrast and Accessibility
Contrast checks revealed that some colour combinations did not meet WCAG accessibility standards. Adjustments were made to background and text colours to improve contrast and ensure better visibility for all users.

---

## 6.1 Manual Testing

### Site Function Testing

Comprehensive manual testing was conducted to ensure correct functionality, responsiveness, and a consistent user experience.

### Devices Tested
- **Laptops:** MacBook Air 13 (2025), ASUS X515 i5 (2023)
- **Mobile Devices:** iPhone 16, iPhone 12

### Browsers Used
- Google Chrome  
- Safari  

All interactive elements, card-matching logic, buttons, and page layouts were tested across each device and browser combination.

---

## 6.2 Lighthouse

Google Lighthouse (via Chrome DevTools) was used to evaluate the project’s:
- Performance  
- Accessibility  
- Best Practices  

Tests were conducted for both mobile and desktop views to ensure the game meets modern web standards.

<img width="1853" height="882" alt="Lighthouse test" src="https://github.com/user-attachments/assets/ff48e752-3d82-4c44-b2b7-695fdf9c01ec">

---


<img width="1865" height="807" alt="Lighthouse test team page" src="https://github.com/user-attachments/assets/d6c18b99-1e1e-4dc0-b988-b0701fe1cc90">


## 6.3 Validation

### 6.3.1 W3C HTML and CSS

All HTML pages and the CSS file were validated using the official **W3C HTML Validator** and **CSS Jigsaw Validator** to ensure clean, standards-compliant code.
|   |   |
|---|---|
|<img  alt="W3C HTML validator" src="https://github.com/user-attachments/assets/7b612be8-0473-44c6-bb6e-7244b807f8a0" width="600">|<img alt="Jigsaw W3C CSS validator" src="https://github.com/user-attachments/assets/b823c0c1-589e-42a2-82ea-88cb227da87e" width="600">|



**Note:**  
Custom CSS rules were applied where necessary to achieve specific design and functionality goals while maintaining valid code.

---

## 7. Credits

### 7.1 Code Used
- **Bootstrap 5.3** – Used for layout structure, card styling, buttons, and responsive design elements.

### 7.2 Content
- **ChatGPT (OpenAI)** – Assisted with writing and refining README content and documentation text.
- **Google Fonts** – Used for typography selection.


### 7.3 Media
- **Font Awesome** – Used for icons.
- **CloudConvert** – Used for image conversion and optimisation.
- **Ezgif** – Used to generate and optimise GIF images.

### 7.4 Documentation and Testing Resources
- Markdown cheat sheets  
- README templates for guidance and structure  
- W3C validation tools  
- Web accessibility and responsiveness testing tools  

### 7.5 Authors and Acknowledgments



---

## 📌 Project Status

🚀 **Active & Complete**

The Christmas Magic Memory Card Game is fully functional and open to future enhancements and refinements.

