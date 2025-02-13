export default function HomePage() {
  return (
    <div className="container">
      {/* About Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🕌 আমাদের সম্পর্কে
        </h2>
        <p className="text-gray-600">
          দ্বীন ও সমাজের সকল পরিসরে জামিয়ার সন্তানরা যেন সফল ভূমিকা রাখতে পারে,
          সে জন্য রয়েছে জামিয়াতুল লতিফের নানামুখী আয়োজন। এসব আয়োজন বাস্তবায়নের
          লক্ষ্যে মেধাবী ছাত্রদের নিয়ে গঠিত হয়েছে ‘আল কাসিম ছাত্র কাফেলা’ নামক
          ছাত্র সংসদ। আল কাসিম ছাত্র কাফেলা প্রতিভা বিকাশের আতুড়ঘর। স্বপ্ন
          পূরণের কেন্দ্রস্থল। এখানে নিবিড় পরিচর্যায় প্রতিভার উন্মেষ ঘটে।
          হীনম্মন্যতা আর আড়ষ্টতা দূর করে উজ্জ্বল ভবিষ্যতের দিকে এগিয়ে দেওয়াই
          ছাত্র কাফেলার মূল লক্ষ্য। তাছাড়া পাঠ্য পুস্তকের পাশাপাশি এ ধরণের
          সহপাঠক্রমিক কার্যাবলী শিক্ষার্থীদের মাঝে ইতিবাচক প্রভাব ফেলে। যা
          তাদেরকে আগামী দিনে প্রতিভাবান আলেম ও সমাজে দায়িত্বশীল নাগরিক হিসেবে
          গড়ে তুলতে সঠিক দিকনির্দেশনা প্রদান করে।
        </p>
      </section>

      {/* Library Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📖 ছাত্র পাঠাগার
        </h2>
        <p className="text-gray-600">
          একাডেমিক পাঠ্যপুস্তকের পাশাপাশি ছাত্রদের জ্ঞানের পরিধি বিস্তৃতির জন্য
          তথ্যবহুল বই-পুস্তক সমৃদ্ধ একটি পাঠাগার রয়েছে।
        </p>
      </section>

      {/* Activities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🎤 কাফেলার কার্যক্রম
        </h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>📢 বক্তৃতা প্রশিক্ষণ</li>
          <li>📜 হিফজুল হাদীস প্রতিযোগিতা</li>
          <li>📖 ইবারত পাঠ প্রতিযোগিতা</li>
          <li>📝 দেয়ালিকা প্রকাশনা</li>
          <li>📚 আসাতেযায়ে কেরামের বিষয়ভিত্তিক মাসিক মুহাজারা</li>
        </ul>
      </section>

      {/* Admin Panel Only for Book & Finance */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🔑 অ্যাডমিন কার্যক্রম
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-blue-600 text-white p-4 rounded-lg shadow hover:bg-blue-700">
            নতুন বই যোগ করুন
          </button>
          <button className="bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700">
            হিসাব সংযোজন করুন
          </button>
        </div>
      </section>

      {/* Public Announcements */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📢 সাম্প্রতিক নোটিশ
        </h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>নতুন বই সংযোজন করা হয়েছে</li>
          <li>লাইব্রেরির নতুন নিয়মাবলী প্রকাশিত হয়েছে</li>
          <li>সদস্যদের জন্য বিশেষ অফার ঘোষণা করা হয়েছে</li>
        </ul>
      </section>
    </div>
  );
}
