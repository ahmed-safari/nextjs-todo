import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Cool Todo App",
  description: "Share to-do lists with your friends and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center w-screen h-screen font-medium">
          <div className="flex flex-grow items-center justify-center h-full text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
            {/* Made with love  */}

            {/* <!-- Component Start --> */}
            {children}
            {/* <!-- Component End  --> */}
          </div>
        </div>
        {/* <!-- Footer Start --> */}
        {/* <!-- Footer Start --> */}
        <div className="fixed bottom-0 flex flex-col justify-center w-full py-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-200">
            Made with <span className="text-red-500">&hearts;</span> by{" "}
            <a
              href="https://instagram.com/710x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-indigo-500">Ahmed</span>
            </a>
          </p>
          <p className="text-sm text-center text-gray-600 dark:text-gray-200">
            Take a peak at my{" "}
            <a
              href="https://github.com/ahmed-safari/nextjs-todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-indigo-500">Source Code</span>
            </a>
          </p>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Footer End --> */}
      </body>
    </html>
  );
}
