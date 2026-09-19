import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiEye,
  FiCamera,
  FiPhone,
  FiCalendar,
  FiTrash2,
  FiPlus,
  FiFileText,
  FiDownload,
  FiUpload,
} from "react-icons/fi";

import "../../css/profile.css";

function Profile() {
  const [skills, setSkills] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
  ]);

  const [skillInput, setSkillInput] = useState("");

  const [profile, setProfile] = useState({
    dateOfBirth: "",
    contactNumber: "",
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Diploma",
      institution: "Govt. Polytechnic",
      fieldOfStudy: "Computer Engineering",
      startYear: 2020,
      endYear: 2023,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "XYZ Tech",
      position: "Frontend Intern",
      startDate: "Jan 2024",
      endDate: "Apr 2024",
      description:
        "Worked on React components and responsive user interfaces.",
    },
  ]);

  const [avatar, setAvatar] = useState(null);
  const [resume, setResume] = useState(null);

  // =========================
  // BASIC INFORMATION
  // =========================

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SKILLS
  // =========================

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();

      const skill = skillInput.trim();

      if (!skills.includes(skill)) {
        setSkills((prev) => [...prev, skill]);
      }

      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills((prev) =>
      prev.filter((item) => item !== skill)
    );
  };

  // =========================
  // EDUCATION
  // =========================

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        id: Date.now(),
        degree: "",
        institution: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducation((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleEducationChange = (id, field, value) => {
    setEducation((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  // =========================
  // EXPERIENCE
  // =========================

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      {
        id: Date.now(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (id) => {
    setExperience((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleExperienceChange = (id, field, value) => {
    setExperience((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  // =========================
  // AVATAR
  // =========================

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // =========================
  // RESUME
  // =========================

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume(file);
    }
  };

  // =========================
  // SAVE
  // =========================

  const handleSave = () => {
    const profileData = {
      ...profile,
      skills,
      education,
      experience,
      avatar,
      resume,
    };

    console.log(profileData);

    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-body">

      {/* ================= SIDEBAR ================= */}

      <aside className="profile-sidebar">

        <div className="sidebar-profile">

          <div className="sidebar-avatar">
            <img
              src={
                avatar ||
                "https://i.pravatar.cc/150?img=47"
              }
              alt="Profile"
            />
          </div>

          <h3>Musrat Khan</h3>

          <p>Frontend Developer</p>

        </div>

        <nav className="sidebar-nav">

          <a href="#">
            <FiHome />
            <span>Dashboard</span>
          </a>

          <a href="#" className="active">
            <FiUser />
            <span>My Profile</span>
          </a>

          <a href="#">
            <FiBriefcase />
            <span>Applied Jobs</span>
          </a>

          <a href="#">
            <FiHeart />
            <span>Saved Jobs</span>
          </a>

          <a href="#">
            <FiSettings />
            <span>Settings</span>
          </a>

        </nav>

        <div className="sidebar-divider"></div>

        <button className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>

      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="profile-content">

        {/* PAGE HEADING */}

        <div className="profile-heading">

          <div>
            <h1>My Profile</h1>

            <p>
              Keep your profile updated to get better
              job opportunities.
            </p>
          </div>

          <button className="view-profile-btn">
            <FiEye />
            View Profile
          </button>

        </div>

        {/* ================= PROFILE PHOTO ================= */}

        <section className="profile-card">

          <div className="card-title">
            <FiUser />
            <h2>Profile Photo</h2>
          </div>

          <div className="photo-section">

            <div className="large-avatar">

              <img
                src={
                  avatar ||
                  "https://i.pravatar.cc/150?img=47"
                }
                alt="Profile"
              />

              <label className="camera-btn">

                <FiCamera />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  hidden
                />

              </label>

            </div>

            <div className="photo-info">

              <label className="upload-photo-btn">

                Change Photo

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  hidden
                />

              </label>

              <p>
                JPG, PNG or GIF. Maximum size 5MB.
              </p>

            </div>

          </div>

        </section>

        {/* ================= BASIC INFORMATION ================= */}

        <section className="profile-card">

          <div className="card-title">
            <FiUser />
            <h2>Basic Information</h2>
          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Date of Birth</label>

              <div className="input-icon">

                <FiCalendar />

                <input
                  type="date"
                  name="dateOfBirth"
                  value={profile.dateOfBirth}
                  onChange={handleProfileChange}
                />

              </div>

            </div>

            <div className="form-group">

              <label>Contact Number</label>

              <div className="input-icon">

                <FiPhone />

                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="+91 98765 43210"
                  value={profile.contactNumber}
                  onChange={handleProfileChange}
                />

              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section className="profile-card">

          <div className="card-title">
            <FiSettings />
            <h2>Skills</h2>
          </div>

          <div className="skills-container">

            {skills.map((skill) => (
              <div className="skill-tag" key={skill}>

                <span>{skill}</span>

                <button
                  onClick={() => removeSkill(skill)}
                >
                  ×
                </button>

              </div>
            ))}

            <input
              type="text"
              placeholder="Add a skill and press Enter"
              value={skillInput}
              onChange={(e) =>
                setSkillInput(e.target.value)
              }
              onKeyDown={addSkill}
            />

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section className="profile-card">

          <div className="card-title">
            <FiBriefcase />
            <h2>Education</h2>
          </div>

          <div className="education-list">

            {education.map((item) => (
              <div
                className="education-item"
                key={item.id}
              >

                <div className="education-grid">

                  <div className="form-group">
                    <label>Degree</label>

                    <input
                      type="text"
                      value={item.degree}
                      onChange={(e) =>
                        handleEducationChange(
                          item.id,
                          "degree",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Institution</label>

                    <input
                      type="text"
                      value={item.institution}
                      onChange={(e) =>
                        handleEducationChange(
                          item.id,
                          "institution",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Field of Study</label>

                    <input
                      type="text"
                      value={item.fieldOfStudy}
                      onChange={(e) =>
                        handleEducationChange(
                          item.id,
                          "fieldOfStudy",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Start Year</label>

                    <input
                      type="number"
                      value={item.startYear}
                      onChange={(e) =>
                        handleEducationChange(
                          item.id,
                          "startYear",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>End Year</label>

                    <input
                      type="number"
                      value={item.endYear}
                      onChange={(e) =>
                        handleEducationChange(
                          item.id,
                          "endYear",
                          e.target.value
                        )
                      }
                    />
                  </div>

                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    removeEducation(item.id)
                  }
                >
                  <FiTrash2 />
                </button>

              </div>
            ))}

          </div>

          <button
            className="add-btn"
            onClick={addEducation}
          >
            <FiPlus />
            Add Education
          </button>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section className="profile-card">

          <div className="card-title">
            <FiBriefcase />
            <h2>Experience</h2>
          </div>

          <div className="experience-list">

            {experience.map((item) => (
              <div
                className="experience-item"
                key={item.id}
              >

                <div className="experience-grid">

                  <div className="form-group">
                    <label>Company</label>

                    <input
                      type="text"
                      value={item.company}
                      onChange={(e) =>
                        handleExperienceChange(
                          item.id,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Position</label>

                    <input
                      type="text"
                      value={item.position}
                      onChange={(e) =>
                        handleExperienceChange(
                          item.id,
                          "position",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Start Date</label>

                    <input
                      type="text"
                      placeholder="Jan 2024"
                      value={item.startDate}
                      onChange={(e) =>
                        handleExperienceChange(
                          item.id,
                          "startDate",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>End Date</label>

                    <input
                      type="date"
                      value={item.endDate}
                      onChange={(e) =>
                        handleExperienceChange(
                          item.id,
                          "endDate",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="form-group full-width">

                    <label>Description</label>

                    <textarea
                      rows="3"
                      value={item.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          item.id,
                          "description",
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    removeExperience(item.id)
                  }
                >
                  <FiTrash2 />
                </button>

              </div>
            ))}

          </div>

          <button
            className="add-btn"
            onClick={addExperience}
          >
            <FiPlus />
            Add Experience
          </button>

        </section>

        {/* ================= BOTTOM SECTION ================= */}

        <div className="bottom-grid">

          {/* RESUME */}

          <section className="profile-card">

            <div className="card-title">
              <FiFileText />
              <h2>Resume</h2>
            </div>

            {resume ? (
              <div className="resume-file">

                <FiFileText />

                <div>
                  <strong>{resume.name}</strong>

                  <span>
                    {(resume.size / 1024 / 1024).toFixed(2)}
                    {" "}MB
                  </span>
                </div>

                <button>
                  <FiDownload />
                </button>

              </div>
            ) : (
              <div className="resume-empty">

                <FiFileText />

                <p>No resume uploaded</p>

              </div>
            )}

            <label className="resume-upload-btn">

              <FiUpload />
              Upload Resume

              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeChange}
                hidden
              />

            </label>

            <small>
              PDF only. Maximum size 5MB.
            </small>

          </section>

          {/* ACTIONS */}

          <section className="profile-card actions-card">

            <div className="card-title">
              <FiSettings />
              <h2>Profile Actions</h2>
            </div>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

            <button className="cancel-btn">
              Cancel
            </button>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Profile;