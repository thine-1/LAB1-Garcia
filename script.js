document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate Skills Dynamically
  const softSkills = [
    "Effective Leader",
    "Team Player",
    "Meticulous Work Ethic",
    "Competitive & Goal-Driven",
    "Cool Temper & Adaptable",
  ];

  const techSkills = [
    "HTML, CSS & JavaScript",
    "PHP & Laravel Framework",
    "MySQL Database Administration",
    "Cisco Networking & Command Line",
    "Git & GitHub Version Control",
  ];

  const renderList = (elementId, items) => {
    const list = document.getElementById(elementId);
    if (list) {
      list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    }
  };

  renderList("soft-skills", softSkills);
  renderList("tech-skills", techSkills);

  // 2. Populate Projects Dynamically
  const projects = [
    {
      title: "Full-Stack Web Application",
      tech: "Laravel / PHP / MySQL",
      desc: "Web platform designed with Blade views, relational migrations, custom seeders, and controller architectures.",
    },
    {
      title: "Cisco Network Topology",
      tech: "Cisco Packet Tracer / CLI",
      desc: "Router interface IP addressing, subnet configuration, and end-to-end connectivity testing.",
    },
    {
      title: "File Manipulation Script",
      tech: "Perl / Automation",
      desc: "Automated text parser enforcing strict byte counts and formatting rules for files.",
    },
  ];

  const projectContainer = document.getElementById("project-container");
  if (projectContainer) {
    projectContainer.innerHTML = projects
      .map(
        (p) => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="tech-tag">${p.tech}</span>
      </div>
    `,
      )
      .join("");
  }

  // 3. ScrollSpy: Highlight Active Navigation Links on Scroll
  const sections = document.querySelectorAll(".page-section");
  const navItems = document.querySelectorAll(".nav-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navItems.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    { threshold: 0.3 },
  );

  sections.forEach((section) => observer.observe(section));

  // 4. Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out! Your message has been received.");
      contactForm.reset();
    });
  }
});
