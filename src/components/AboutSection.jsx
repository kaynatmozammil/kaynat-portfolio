// import { Section } from "lucide-react";

import { BarChart3, BookOpenCheck, Brain, BrainCircuit, LayoutDashboard, WholeWord } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Building with Code & Data | MERN + ML</h3>
            <p className="text-muted-foreground">
              I'm Kaynat Mozammil, a Computer Engineering
              student at Jamia Millia Islamia (2022–2025),
              with a strong passion for technology, development,
              and data science. I have hands-on experience in
              Python, C++, Java, and SQL, and have worked on
              diverse projects involving web development and machine learning. My academic journey and internship at Startup Times have helped me build a strong foundation in designing systems, automating processes, and solving real-world problems through code. I'm skilled in building dynamic dashboards, web-based applications, and interactive systems using tools like Flask, PHP, and MySQL.
            </p>
            <p className="text-muted-foreground">In the field of data science,
              I specialize in data analysis,
              visualization, and basic predictive
              modeling using libraries like Pandas,
              NumPy, Matplotlib, Seaborn, and Plotly.
              I enjoy turning raw data into actionable insights that support smarter decision-making. Currently, I’m also exploring full-stack development using the MERN Stack (MongoDB, Express.js, React, Node.js) to broaden my capabilities in creating robust and scalable web applications. I’m driven by curiosity, enjoy continuous learning, and aim to contribute meaningfully to the evolving world of technology.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/kaynat_mozammil.pdf"
                download="Kaynat_Mozammil_Resume.pdf"  // Explicit filename
                target="_blank"
                rel="noreferrer noopener"  // Security best pract
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Data Science</h4>
                  <p className="text-muted-foreground">Turning raw data into insights through cleaning, analysis, and basic machine learning models.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left ">
                  <h4 className="font-semibold text-lg">MERN Stack Development</h4>
                  <p className="text-muted-foreground">Building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js.
                  </p>
                </div>


              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left ">
                  <h4 className="font-semibold text-lg">Data Visualizatione</h4>
                  <p className="text-muted-foreground">Presenting data clearly with tools like Matplotlib, Seaborn, and Plotly for better decision-making.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpenCheck className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left ">
                  <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  <p className="text-muted-foreground">Exploring emerging technologies like NLP, prompt engineering, and APIs to stay ahead in tech.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}