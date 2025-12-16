export function Technologies() {
  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL",
    "AWS", "Docker", "Kubernetes", "GraphQL", "MongoDB", "Redis",
    "Tailwind CSS", "Figma", "Git", "CI/CD"
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#f5f5f5]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">Technology Stack</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl tracking-tight leading-[0.95]">
            Built with cutting-edge
            <br />
            technologies
          </h2>
          
          <p className="text-xl text-black/60">
            We leverage the latest tools and frameworks to build future-proof solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-black/10 flex items-center justify-center p-6 hover:border-[#D4AF37] hover:shadow-lg transition-all group"
            >
              <span className="text-center text-sm tracking-tight group-hover:scale-110 transition-transform">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
