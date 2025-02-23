import React from "react";

const TeamMood = () => {
    const teamMembers = [
        { name: "Andrea", role: "UX Junior", mood: "😊", avatar: "https://i.pravatar.cc/40?img=1" },
        { name: "Alvaro", role: "Back-end Developer", mood: "😐", avatar: "https://i.pravatar.cc/40?img=2" },
        { name: "Juan", role: "UX Senior", mood: "😊", avatar: "https://i.pravatar.cc/40?img=3" },
        { name: "Jose", role: "Marketing", mood: "😐", avatar: "https://i.pravatar.cc/40?img=4" },
        { name: "Maria", role: "UX Junior", mood: "😞", avatar: "https://i.pravatar.cc/40?img=5" },
    ];

    return (
        <div className="card p-3">
            <h5>Team Mood</h5>
            <ul className="list-unstyled">
                {teamMembers.map((member, index) => (
                    <li key={index} className="d-flex align-items-center justify-content-between py-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={member.avatar} alt={member.name} className="rounded-circle" width="40" height="40" />
                            <span>{member.name} ({member.role})</span>
                        </div>
                        <span className="fs-4">{member.mood}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamMood;
