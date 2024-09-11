import React from 'react';

export default function Skill({ skillsData }) {

    return (
        <div className="competenceL container1024">
            {skillsData.map((skill, index) => (
                <article key={index} className="card">
                    <i className={skill.iconClass}></i>
                    <h3>{skill.name}</h3>
                </article>
            ))}
        </div>
    );
}
