import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },

    // Backend
    { name: "PHP", level: 75, category: "backend" },
    { name: "MySQL", level: 80, category: "backend" },
    { name: "Flask", level: 70, category: "backend" },

    // Data Science
    { name: "Python", level: 90, category: "data-science" },
    { name: "Pandas", level: 80, category: "data-science" },
    { name: "NumPy", level: 75, category: "data-science" },
    { name: "Matplotlib", level: 75, category: "data-science" },
    { name: "Seaborn", level: 70, category: "data-science" },
    { name: "Plotly", level: 70, category: "data-science" },
    { name: "Machine Learning", level: 65, category: "data-science" },

    // Tools (including Data Science tools)
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Jupyter Notebook", level: 90, category: "tools" },
    { name: "Google Colab", level: 85, category: "tools" },
    { name: "API Integration", level: 75, category: "tools" },
    { name: "Streamlit", level: 75, category: "tools" },
    { name: "Postman", level: 70, category: "tools" },
    { name: "Excel/Google Sheets", level: 80, category: "tools" },
    { name: "Anaconda", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "data-science", "tools"];




export const SkillsSection = () => { 
    const [activeCategory,setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory==="all" || skill.category === activeCategory
    );
    return (
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30 ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold
                mb-12 text-center">My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12 ">
                    {categories.map((category,key)=>(
                        <button 
                        onClick={()=> setActiveCategory(category)}
                        key={key} 
                        className= { cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ",
                            activeCategory===category
                            ?"bg-primary text-primary-foreground"
                            :"bg-secondary/70 text-foreground hover:bg-secondary "
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filteredSkills.map((skill, key) => (
                            <div key={key}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover "
                            >
                                <div className="text-left mb-4 ">
                                    <h3 className="font-semibold text-lg">
                                        {skill.name}
                                    </h3>
                                </div> 

                                <div  className="w-full bg-secondry/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-2 rounded-full animate-grow_1.5s_ease-out"
                                    style={{width:skill.level +"%"}}  />
                                </div>

                                <div>
                                    <span>{skill.level}%</span>
                                </div>


                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}