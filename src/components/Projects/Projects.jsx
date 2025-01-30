import React from "react";
 
const Project = () => {
    const projects = [
        {
            title: "AI-Powered Personal Finance Management System",
            description: "A web application that uses machine learning algorithms to analyze spending patterns and provide personalized budgeting advice, syncing with bank APIs and offering insights into how to save more effectively.",
            technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "Stripe API", "OAuth", "Chart.js"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/project-ai-finance"
        },
        {
            title: "Decentralized Social Media Platform (Blockchain-based)",
            description: "A social media platform built with blockchain technology to ensure decentralization. Users control their data, and posts are stored on the blockchain, with smart contracts enabling content monetization.",
            technologies: ["React", "Web3.js", "Solidity", "Ethereum Blockchain", "IPFS", "Node.js", "MongoDB"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/project-decentralized-social"
        },
        {
            title: "Task Manager",
            description: "A powerful web application designed to help users manage and organize their tasks efficiently. The app allows users to create, prioritize, and categorize tasks with customizable deadlines and reminders.",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Calendar API"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/task-manager"
        },
        {
            title: "Fitness & Health Tracker",
            description: "A comprehensive mobile application designed to track users' fitness and health data, including steps, calories burned, heart rate, sleep patterns, and more.",
            technologies: ["React Native", "Firebase", "Google Fit API", "HealthKit", "AWS"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/fitness-health-tracker"
        },
        {
            title: "Real-Time Collaborative Code Editor",
            description: "A cloud-based code editor that allows multiple developers to edit code simultaneously, with live chat, version control, and real-time updates using WebSockets.",
            technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Socket.io", "Redis", "GitHub API"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/collaborative-code-editor"
        },
        {
            title: "Blockchain-based Voting System",
            description: "A secure voting platform using blockchain for immutability, smart contracts for voter verification, and encryption for privacy, ensuring transparent election results.",
            technologies: ["React", "Solidity", "Ethereum", "IPFS", "Node.js", "MongoDB", "Web3.js"],
            demoLink: "https://example.com/demo",
            githubLink: "https://github.com/example/blockchain-voting-system"
        }
    ];
    
    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">Our Projects</h2>
 
            <p className="banner-subtitle bg-black">Innovating the future, one project at a time</p>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title bg-black">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="technologies">
                            <strong>Technologies:</strong> {project.technologies.join(", ")}
                        </div>
                        <div className="project-links">
                            <a href={project.demoLink} className="btn demo-btn" target="_blank" rel="noopener noreferrer">Case Study</a>
                            <a href={project.githubLink} className="btn github-btn" target="_blank" rel="noopener noreferrer">Project Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Project
 