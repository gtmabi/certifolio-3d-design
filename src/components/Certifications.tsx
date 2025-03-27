
import React, { useRef, useEffect } from "react";

interface Certification {
  id: number;
  name: string;
  provider: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const Certifications: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Professional",
      provider: "Amazon Web Services",
      date: "2023",
      image: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
      credentialUrl: "#",
    },
    {
      id: 2,
      name: "Google Cloud Professional Cloud Architect",
      provider: "Google Cloud",
      date: "2022",
      image: "https://cloud.google.com/_static/cloud/images/certification/badges/professional-cloud-architect.png",
      credentialUrl: "#",
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      provider: "Microsoft",
      date: "2022",
      image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
      credentialUrl: "#",
    },
    {
      id: 4,
      name: "Certified Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      date: "2021",
      image: "https://www.cncf.io/wp-content/uploads/2021/09/kubernetes-cka-color.svg",
      credentialUrl: "#",
    },
    {
      id: 5,
      name: "HashiCorp Certified: Terraform Associate",
      provider: "HashiCorp",
      date: "2021",
      image: "https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg",
      credentialUrl: "#",
    },
  ];
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.cert-card');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (containerTop < windowHeight && containerTop > -windowHeight) {
        cards.forEach((card, index) => {
          const scrollPosition = (windowHeight - containerTop) / (windowHeight * 2);
          const offset = (index - (cards.length - 1) / 2) * 20;
          (card as HTMLElement).style.transform = `translateY(${scrollPosition * offset}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-cloud-50">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div ref={containerRef} className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-card card-glass p-6 rounded-xl flex flex-col transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 overflow-hidden flex-shrink-0 mr-4">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{cert.provider}</h3>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
                
                <h4 className="text-md font-semibold mb-4 flex-grow">{cert.name}</h4>
                
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm text-cloud-600 hover:text-cloud-700 mt-auto inline-flex items-center"
                  >
                    Verify Credential
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-cloud-200 opacity-50"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-cloud-300 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
