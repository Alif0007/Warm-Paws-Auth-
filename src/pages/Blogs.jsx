import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Keep Your Pet Happy This Winter",
    image: "https://pethealthfirst.com/wp-content/uploads/2023/12/AdobeStock_485528829-1200x800.jpeg",
    description:
      "Winter can be tough on pets, especially when the cold makes outdoor playtime shorter. Keep your furry friend warm with cozy bedding and a balanced diet rich in nutrients. Short, frequent walks can keep them active without getting too cold. Make sure to moisturize their paws if you live in a snowy area, and check for cracks or salt residue after walks. Extra cuddles, indoor games, and gentle grooming can also help your pet feel loved and comfortable during the frosty months.",
  },
  {
    id: 2,
    title: "The Secret Language of Your Pet’s Eyes",
    image: "https://pethealthfirst.com/wp-content/uploads/2024/01/AdobeStock_275121946-1200x800.jpeg",
    description:
      "Have you ever noticed how your pet’s eyes seem to speak? Those soft gazes and playful glances carry deep emotion. Dogs often use eye contact to build trust and affection, while cats show love through slow blinks. Learning to read these cues helps strengthen your bond and lets your pet feel understood. Next time you see that loving stare, remember—it’s their way of saying they trust you completely. Communication goes beyond words; it’s written in every glance and wag of the tail.",
  },
  {
    id: 3,
    title: "Healthy Homemade Treats for Cats & Dogs",
    image: "https://pethealthfirst.com/wp-content/uploads/2024/02/AdobeStock_654243150-1200x800.jpeg",
    description:
      "Why buy expensive pet treats when you can make healthy ones right at home? With simple ingredients like oats, peanut butter, and carrots, you can create tasty snacks your pets will adore. Avoid using chocolate, onions, or too much salt, as these can harm your pets. Baking treats at home also gives you control over what goes into their diet. Plus, it’s a fun way to show love and care. Watching them enjoy something you made with your own hands is truly heartwarming.",
  },
  {
    id: 4,
    title: "How to Make Bath Time Fun for Your Pet",
    image: "https://pethealthfirst.com/wp-content/uploads/2023/10/AdobeStock_492563617-768x512.jpeg",
    description:
      "If your pet runs away the moment they hear water, you’re not alone! Bath time doesn’t have to be a struggle—it can be fun. Use warm water and gentle pet shampoo. Keep toys nearby to distract them, and reward good behavior with treats afterward. Make sure to speak softly to keep them calm. Over time, your pet will associate bath time with comfort and care rather than fear. Clean, fresh-smelling fur and a happy tail are worth every splash!",
  },
  {
    id: 5,
    title: "The Importance of Daily Walks",
    image: "https://pethealthfirst.com/wp-content/uploads/2023/08/AdobeStock_176507714-768x513.jpeg",
    description:
      "Daily walks are more than just exercise—they’re an emotional connection between you and your pet. Walks give dogs a chance to explore, relieve stress, and stay physically healthy. It’s their moment to sniff, socialize, and discover the world around them. Even a short walk boosts their mood and energy. For pet parents, it’s a refreshing break from screens and routines. Regular walks strengthen your bond and remind both of you how simple moments outdoors can bring so much joy.",
  },
  {
    id: 6,
    title: "Why Cats Need Playtime Too",
    image: "https://pethealthfirst.com/wp-content/uploads/2023/08/AdobeStock_269103144-768x512.jpeg",
    description:
      "Cats might seem independent, but they need playtime just as much as dogs. Regular play helps them stay fit, sharp, and emotionally balanced. Use interactive toys, laser pointers, or even paper balls to get them moving. Play mimics hunting behavior, which keeps their instincts strong and prevents boredom. A few minutes a day can reduce stress and unwanted scratching or biting. It’s also a wonderful bonding time that strengthens your friendship with your feline companion.",
  },
  {
    id: 7,
    title: "Grooming 101: Keeping Your Pet Fresh",
    image: "https://pethealthfirst.com/wp-content/uploads/2023/11/AdobeStock_603413047-768x512.jpeg",
    description:
      "Grooming isn’t just about making your pet look pretty—it’s essential for their overall well-being. Regular brushing removes dirt, reduces shedding, and prevents mats in the fur. Cleaning their ears and trimming nails keeps infections away. For dogs, baths every few weeks are ideal, while cats usually need occasional help with long fur. Grooming is also a chance to check for skin issues or lumps early. With a little care and patience, grooming becomes a bonding ritual full of love and trust.",
  },
  {
    id: 8,
    title: "How Pets Improve Our Mental Health",
    image: "https://pethealthfirst.com/wp-content/uploads/2022/11/AdobeStock_297995004-768x512.jpeg",
    description:
      "Pets bring endless joy, but did you know they also help reduce anxiety and stress? Studies show that spending time with animals releases oxytocin—the ‘love hormone’—which boosts mood and lowers blood pressure. Their unconditional love creates a sense of peace and purpose. Coming home to wagging tails or gentle purrs reminds us we’re never alone. Whether it’s a quiet cuddle or a playful moment, pets have a beautiful way of healing hearts and making life brighter every day.",
  },
];

export default function Blog() {
  return (
    <div className="bg-linear-to-b from-orange-50 to-white py-16 px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        🐾 Our Latest Blogs
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-all">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
