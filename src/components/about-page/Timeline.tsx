const timeline = [
  {
    name: "Company Inception",
    description:
      "Founded with a vision for quality services at the right price, emphasizing excellence and customer satisfaction.",
    date: "January 2018",
    dateTime: "2018-01",
  },
  {
    name: "Shifting Business Models",
    description:
      "Pivoted our business model to establish a strong outsourcing network, expanding our reach and catering to large corporations.",
    date: "January 2020",
    dateTime: "2020-01",
  },
  {
    name: "A Major Milestone",
    description:
      "Achieved a significant milestone by partnering with our first multinational brands, showcasing the industry's trust in our capabilities.",
    date: "November 2022",
    dateTime: "2022-11",
  },
];


export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-purple-600"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
