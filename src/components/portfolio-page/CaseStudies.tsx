import CaseStudy from "@/components/portfolio-page/CaseStudy";

const caseStudies = [
  {
    logo: "/portfolio-page/bw-clients/1.png",
    client: "Burger King",
    service: "Web Development",
    date: "2021-01-01",
    href: "/",
    title: "Burger King",
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    ],
    testimonial: {
      author: {
        name: "John Doe",
        role: "CEO of Burger King",
      },
      content:
        "Logfdgdfg tetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/2.png",
    client: "Burger King",
    service: "Web Development",
    date: "2021-01-01",
    href: "/",
    title: "Burger King",
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    ],
    testimonial: {
      author: {
        name: "John Doe",
        role: "CEO of Burger King",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/3.png",
    client: "Burger King",
    service: "Web Development",
    date: "2021-01-01",
    href: "/",
    title: "Burger King",
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    ],
    testimonial: {
      author: {
        name: "John Doe",
        role: "CEO of Burger King",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/4.png",
    client: "Burger King",
    service: "Web Development",
    date: "2021-01-01",
    href: "/",
    title: "Burger King",
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    ],
    testimonial: {
      author: {
        name: "John Doe",
        role: "CEO of Burger King",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam sit amet dictum aliquam, massa diam aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    },
  },
];

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-screen-xl px-8 mt-10">
      <h2 className="font-display text-2xl font-semibold text-neutral-950">
        Case studies
      </h2>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <CaseStudy caseStudy={caseStudy} key={caseStudy.title} />
        ))}
      </div>
    </div>
  );
}
