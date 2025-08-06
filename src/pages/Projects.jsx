export default function Projects() {
  const projects = {
    "AI-Powered Projects": [
      {
        title: "RAG Chatbot with LangChain.js",
        link: "https://github.com/ishwarij98/rag-chatbot",
        description:
          "Built a Retrieval-Augmented Generation (RAG) chatbot using LangChain.js and OpenAI APIs. Integrated with Astra DB for vector search and deployed for scalability.",
        stack: "Next.js, LangChain.js, OpenAI APIs, Astra DB",
      },
    ],
    "Backend Projects": [
      {
        title: "Session Notes",
        link: "https://github.com/ishwarij98/session-notes",
        description:
          "Backend-only secure Notes SaaS built using Node.js, Express, MongoDB. Features session-based authentication, CRUD operations, and route protection.",
        stack: "Node.js, Express.js, MongoDB",
      },
    ],
    "Full-Stack Projects": [
      {
        title: "Clinic Front-Desk System",
        link: "https://github.com/ishwarij98/front-desk-system",
        description:
          "Full-stack app for managing clinic queues and appointments. Features dynamic doctor profiles and scheduling modals.",
        stack: "Next.js, React, NestJS, TypeORM, MySQL, JWT",
      },
      {
        title: "Food Delivery Application",
        link: "https://github.com/ishwarij98/FoodDeliveryApp",
        description:
          "Responsive food delivery web app with menu display, real-time restaurant listings, and order management.",
        stack: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
      },
    ],
  };

  return (
    <section className="min-h-screen pt-20 pb-10 px-4 bg-gradient-to-br from-blue-900 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center tracking-tight font-['Inter']">
          Full-Stack & AI Projects
        </h2>

        {Object.entries(projects).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 pl-4 border-l-4 border-teal-200 font-['Inter']">
              {category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-blue-900 dark:text-teal-300 group-hover:text-teal-500 font-['Roboto'] mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-['Roboto'] mb-4">
                    {proj.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-['Roboto'] mb-2">
                    <strong>Stack:</strong> {proj.stack}
                  </p>
                  <span className="text-sm text-teal-600 dark:text-teal-400 font-medium group-hover:underline">
                    Visit →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
