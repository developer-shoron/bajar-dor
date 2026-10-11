# 🛒 বাজার দর | BazarDor

**বাজার দর (BazarDor)** is a responsive web application that helps users explore and compare essential daily product prices in Bangladesh. Browse products, track price changes, explore categories, and view detailed market price information in one place.

## 🌐 Live Demo

- **Live Website:** https://bajar-dor-five.vercel.app/
- **GitHub Repository:** https://github.com/developer-shoron/bajar-dor

## ✨ Key Features

- 📊 **Product Price Tracking:** Explore daily prices of essential products.
- 📈 **Price Trends:** Discover products with increasing and decreasing prices.
- 🛍️ **Product Catalog:** Browse products through a responsive card-based layout.
- 🏷️ **Category Filtering:** Filter products by category.
- ↕️ **Price Sorting:** Sort products from low to high or high to low.
- 🔎 **Product Details:** View product descriptions and market-wise price information.
- 🔐 **Authentication:** Sign up and sign in using email and password, Google, or GitHub.
- 👤 **Profile Management:** View and update your profile information.
- 🔔 **Toast Notifications:** Receive feedback for authentication, validation, and profile updates.
- 📱 **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- ⏳ **Loading & Error States:** User-friendly loading skeletons and error pages.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js App Router | Application structure and routing |
| React | Interactive user interfaces |
| TypeScript | Type safety |
| Tailwind CSS | Responsive styling |
| Better Auth | Authentication and session management |
| MongoDB | Database for authentication data |
| Lucide React | Icons |
| React Toastify | Toast notifications |
| Programming Hero BazarDor API | Product and category data |
| Vercel | Deployment and hosting |

## 📡 API Endpoints

**Main API:**  
https://openapi.programming-hero.com/api/bazardor

| Endpoint | Description |
|---|---|
| `/products` | Get all products |
| `/products?category=chal` | Filter products by category |
| `/products/1` | Get a single product |
| `/categories` | Get all categories |
| `/categories/chal` | Get a single category |

**Alternative APIs:**

- https://api.api-store.workers.dev/api/bazardor
- https://api.abcz.workers.dev/api/bazardor

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB database
- Google and GitHub OAuth credentials for social login

### 1. Clone the Repository

```bash
git clone https://github.com/developer-shoron/bajar-dor.git
cd bajar-dor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Configure the required environment variables locally before running the application. Do not commit credentials or secret values to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## 🔑 Authentication

BazarDor uses Better Auth to provide:

- Email and password registration
- Email and password login
- Google OAuth authentication
- GitHub OAuth authentication
- Session management
- Protected product detail pages
- Profile information updates

Social authentication requires valid provider credentials and correctly configured callback URLs.

## 📱 Responsive Design

BazarDor provides a responsive interface across different devices:

- **Mobile:** Compact navigation and responsive product cards.
- **Tablet:** Flexible layouts and product grids.
- **Desktop:** Multi-column product layouts and expanded content sections.

## 🚢 Deployment

The application is deployed on **Vercel**.

**Live Website:** https://bajar-dor-five.vercel.app/

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel.
4. Set the production application URL.
5. Configure Google and GitHub OAuth callback URLs.
6. Deploy and test the application.

## 📌 Important Notes

- Product prices may change depending on market conditions.
- Product availability depends on the API response.
- Product detail pages require authentication.
- Never commit environment files or expose database and OAuth secrets.
- Test the application across mobile, tablet, and desktop screen sizes.

## 👨‍💻 Project Information

- **Project Name:** বাজার দর | BazarDor
- **Assignment:** B14-A7
- **Category:** Daily Market Price Tracking
- **Live Website:** https://bajar-dor-five.vercel.app/
- **Repository:** https://github.com/developer-shoron/bajar-dor

---

*“প্রয়োজনীয় পণ্যের দাম এক নজরে।”* 🛒