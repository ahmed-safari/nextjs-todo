# 📝 Todo Master


[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-blue)](https://nextjs.org/)
[![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)](https://www.postgresql.org/)
[![ORM: Prisma](https://img.shields.io/badge/ORM-Prisma-blue)](https://www.prisma.io/)
[![Styled with TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-blue)](https://tailwindcss.com/)

TodoMaster is a delightful, modern todo list web application that lets you create lists and share them with friends. Built with the power of Next.js 13, using Prisma for easy database management with PostgreSQL, and designed with TailwindCSS, it boasts an elegant UI with support for both dark and light modes. 

Inspired by a design on CodePen ([view it here](https://codepen.io/robstinson/pen/YzGLMYw)), this todo list app is simple, intuitive, and effective in helping you stay organized.

## 🚀 Future Plans

In the pipeline is a host of new features and optimizations. The most exciting one being a real-time update feature to make the app more interactive and efficient. Stay tuned!

## 🎨 Themes

Todo Master supports both dark and light modes for your comfort. Choose what suits your eyes or your mood best!

## 🔴 Live Version
Check out the live version of Todo Master here: https://todo.sp0der.me

## 🔧 Installation

To get started with Todo Master, you need to clone this repository:

```bash
git clone https://github.com/ahmed-safari/nextjs-todo.git
cd nextjs-todo
```

Next, install the dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env` file in the root of your project and input your PostgreSQL database credentials:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

Then, apply the Prisma schema:

```bash
npx prisma migrate dev
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🙌 Contributing

Your contributions are always welcome! Feel free to create issues or submit PRs. For any large changes, please create an issue first to discuss what you'd like to contribute.

## 📝 License

MIT License. See [LICENSE](LICENSE) for more information.

## 👏 Acknowledgements

Special thanks to Rob Stinson for the [original design](https://codepen.io/robstinson/pen/YzGLMYw) on CodePen which served as the inspiration for the look and feel of Todo Master.

---

Built with ❤️ by [Ahmed](https://instagram.com/710x)
