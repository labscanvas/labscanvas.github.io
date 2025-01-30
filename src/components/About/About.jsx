import React from "react";

const About = () => {

    const aboutUs = [
        {
            name: "01. Frontend",
            description: "We design, and develop frontend solutions with cutting-edge technological to enhance our client solutions.",
        },

        {
            name: "02. Backend",
            description: "We implement efficient and secure backend solutions keeping compliances as our priority.",
        },

        {
            name: "03. Deployment",
            description: "We provide seamless integration of solutions with little to no down time.",
        },

        {
            name: "04. Support & Maintenance",
            description: "We go above and beyond for our clients with long term support and maintenance.",
        }
    ]


    const teamMembers = [
        {
            name: "David Marsh",
            role: "Founder",
            image: "",
            description: "A visionary leader and founder of Canvas Labs, steering the company towards success.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        },
        {
            name: "Jenny",
            role: "Supervisor",
            image: "",
            description: "A seasoned Supervisor, ensuring smooth operations and team collaboration.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        },
        {
            name: "Nirav",
            role: "Lead Developer",
            image: "",
            description: "The Lead Developer, guiding the team with his expertise in building cutting-edge software.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        },
        {
            name: "Dhruv",
            role: "Designer",
            image: "",
            description: "A talented Designer, creating visually stunning and user-friendly designs.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        },
        {
            name: "Vaishakh",
            role: "Developer",
            image: "",
            description: "A skilled Developer, dedicated to crafting efficient code and innovative solutions.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        },
        {
            name: "Asish",
            role: "Developer",
            image: "",
            description: "A dynamic Developer, working on building scalable and robust web applications.",
            socialLinks: {
                linkedin: "https://www.linkedin.com",
                twitter: "https://twitter.com"
            }
        }
    ];
    

    return (
        <section id="about" className="about-team">
            {/* About Section */}
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                We are a software solution company that provides innovative and digital solutions. We help our clients seamlessly
                integrate frontend and backend development.
                </p>
            </div>

            {/* Team Section */}
            <div className="team-section">
                <h3 className="team-title">Meet Our Team</h3>
                <div className="team-container about-container">
                    {aboutUs.map((member, index) => (
                        <div key={index} className="team-member">
                            <h4 className="team-name">{member.name}</h4>
                            <p className="team-description">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Team Section */}
            <div className="team-section">
                <h3 className="team-title">Meet Our Team</h3>
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            {/* <img src={member.image} alt={member.name} className="team-photo" /> */}
                            <h4 className="team-name">{member.name}</h4>
                            <p className="team-role">{member.role}</p>
                            <p className="team-description">{member.description}</p>
                            <div className="social-links">
                                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About