import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/QayyumBook.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/QayyumBook.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "আল কাসিম ছাত্র কাফেলা",
  description: " মূখপাত্র: জামিয়াতুল লতিফ রূপগঞ্জ, নারায়ণগঞ্জ।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-r from-blue-50 to-gray-100`}
      >
        {/* Header */}
        <header className="shadow-lg p-8 mb-6 text-center text-teal-900">
          <h1 className="text-4xl font-extrabold">আল কাসিম ছাত্র কাফেলা</h1>
          <p className="mt-2 text-lg font-medium">
            মূখপাত্র: জামিয়াতুল লতিফ রূপগঞ্জ, নারায়ণগঞ্জ।
          </p>
        </header>
        {children}
        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-12">
          <div className="container">
            <h2 className="text-xl font-semibold">আল কাসিম ছাত্র কাফেলা</h2>
            <p className="text-sm mt-2">জামিয়াতুল লতিফ রূপগঞ্জ, নারায়ণগঞ্জ</p>
            <p className="text-sm">
              📞 +880 1818-498639 | 📧 altafhossain211@gmail.com
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-400">
                ফেসবুক
              </a>
              <a href="#" className="hover:text-gray-400">
                ইউটিউব
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              &copy; ২০২৫ আল কাসিম ছাত্র কাফেলা। সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
