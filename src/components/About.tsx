
import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "AWS", level: 90, color: "bg-yellow-500" },
    { name: "Azure", level: 85, color: "bg-blue-500" },
    { name: "Google Cloud", level: 80, color: "bg-green-500" },
    { name: "Kubernetes", level: 85, color: "bg-blue-600" },
    { name: "Terraform", level: 75, color: "bg-purple-500" },
    { name: "Docker", level: 90, color: "bg-blue-400" },
    { name: "CI/CD", level: 80, color: "bg-red-500" },
    { name: "Python", level: 85, color: "bg-yellow-600" },
  ];

  return (
    <section id="about" className="py-20 bg-cloud-50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a certified cloud engineer with over 5 years of experience in designing, implementing, and managing cloud infrastructure for organizations of all sizes. My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines technical excellence with business understanding, ensuring that cloud solutions not only meet technical requirements but also align with organizational goals and constraints.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in cloud migration, infrastructure as code, containerization, and implementing DevOps practices that enable teams to deliver software faster and more reliably.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="badge">Cloud Architecture</span>
              <span className="badge">DevOps</span>
              <span className="badge">Serverless</span>
              <span className="badge">Microservices</span>
              <span className="badge">Infrastructure as Code</span>
              <span className="badge">Cost Optimization</span>
              <span className="badge">Security</span>
              <span className="badge">Performance Tuning</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
