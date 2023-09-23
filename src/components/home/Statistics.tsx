import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, name: "Clients Worked With", value: 75, suffix: "" },
  { id: 2, name: "Project Completed", value: 150, suffix: "" },
  { id: 3, name: "Successful Ad Campaigns", value: 1000, suffix: "+" },
  { id: 4, name: "Client Satisfaction", value: 100, suffix: "%" },
];

export default function Statistics() {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInViewport(true);
        }
      },
      { threshold: 0.5 }
    );

    const statisticsElement = document.querySelector("#statistics") as Element;
    if (statisticsElement) {
      observer.observe(statisticsElement);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="statistics"
      className="bg-gray-900 py-24 sm:py-32"
      style={{ transition: "all 1s ease" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nos track records
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nous avez fait confiance à plus de 75 clients et nous avons mené à
              bien plus de 150 projets.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col bg-white/5 p-8 ${
                  inViewport ? "animate-in" : ""
                }`}
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {inViewport ? (
                    <CountUp start={0} end={stat.value} duration={2.5} />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
