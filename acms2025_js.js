// Global variable to store workshop data
let workshopData = null;

// Tab switching functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tab buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the selected tab content and add active class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Load workshop data from JSON
async function loadWorkshopData() {
    try {
        const response = await fetch('data.json');
        workshopData = await response.json();
        populateContent();
    } catch (error) {
        console.error('Error loading workshop data:', error);
        // Fallback: use inline data if JSON file is not available
        workshopData = getInlineData();
        populateContent();
    }
}

// Fallback inline data (same structure as JSON)
function getInlineData() {
    return {
        "speakers": [
            { "name": "Prof. Phani Motamarri", "affiliation": "IISc, Bangalore" },
            { "name": "Prof. Abhik N. Choudhury", "affiliation": "IISc, Bangalore" },
            { "name": "Prof. K. Ganapathy Ayappa", "affiliation": "IISc, Bangalore" },
            { "name": "Prof. Debashree Ghosh", "affiliation": "IACS, Kolkata" },
            { "name": "Prof. Abhijit Chatterjee", "affiliation": "IIT Bombay" },
            { "name": "Prof. Shyamprasad Karagadde", "affiliation": "IIT Bombay" },
            { "name": "Prof. Nisanth Nair", "affiliation": "IIT Kanpur" },
            { "name": "Prof. Rajdip Mukherjee", "affiliation": "IIT Kanpur" },
            { "name": "Dr. Nityananda Sahu", "affiliation": "IIT Jammu" }
        ],
        "schedule": [
            {
                "sno": "1",
                "session": "Opening remarks and Invited talks",
                "topics": [
                    { "topic": "Welcome address by organizers", "speaker": "-" },
                    { "topic": "Large Scale Simulation", "speaker": "Prof. Phani Motamarri, IISc, Bangalore" },
                    { "topic": "Soft Matter Simulations", "speaker": "Prof. K. Ganapathy Ayappa, IISc, Bangalore" },
                    { "topic": "Materials Engineering", "speaker": "Prof. Shyamprasad Karagadde, IIT Bombay" }
                ]
            },
            {
                "sno": "2",
                "session": "Technical Session: MSCC Software Showcase",
                "topics": [{ "topic": "Various software presentations", "speaker": "Multiple speakers" }]
            },
            {
                "sno": "3",
                "session": "Conclusion",
                "topics": [{ "topic": "-", "speaker": "-" }]
            },
            {
                "sno": "4",
                "session": "Poster Session by Participants",
                "topics": [{ "topic": "In the foyer", "speaker": "Participants" }]
            }
        ],
        "software": [
            { "name": "AMDKIIT", "description": "Linear scaling hybrid-DFT code for ab initio molecular dynamics", "speaker": "Prof. Nisanth Nair, IIT Kanpur" },
            { "name": "ANN-CI", "description": "Computational chemistry code augmented by machine learning for studying complex biological systems", "speaker": "Prof. Debashree Ghosh, IACS, Kolkata" },
            { "name": "LITESOPH", "description": "Layer Integrated Toolkit and Engine for Simulations of Photo-induced phenomena, a toolkit for simulations of photo-induced phenomena", "speaker": "Prof. Varadharajan Srinivasan, IISER Bhopal" },
            { "name": "MTASpec", "description": "Quantum chemistry code based on the fragmentation-based molecular tailoring approach", "speaker": "Dr. Nityananda Sahu, IIT Jammu" },
            { "name": "μ2mech", "description": "A multiscale modeling approach combining atomistic and phase-field simulations for microstructure modeling during solid-state phase transformations", "speaker": "Prof. Rajdip Mukherjee, IIT Kanpur" },
            { "name": "DFT-FE", "description": "Density Functional Theory With Finite-Elements", "speaker": "Prof. Phani Motamarri, IISc, Bangalore" },
            { "name": "MicroSim", "description": "Phase-field solvers for microstructure simulations during solidification and phase transformation of metals and alloys", "speaker": "Prof. Abhik N. Choudhury, IISc, Bangalore" },
            { "name": "ρ-CP", "description": "Open-source dislocation density-based crystal plasticity framework for simulating temperature- and strain rate-dependent deformation", "speaker": "Prof. Anirban Patra, IIT Bombay" }
        ],
        "organizers": {
            "workshopChair": [{ "name": "Nisha Agrawal", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" }],
            "coChair": [{ "name": "Dr. V Venkatesh Shenoi", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" }],
            "publicityChair": [
                { "name": "Ashish Nayak", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" },
                { "name": "Dr. Paramita Ghosh", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" },
                { "name": "Rahul Dethe", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" },
                { "name": "Subhojeet Das", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" }
            ],
            "publicationChair": [{ "name": "Rahul Dethe", "affiliation": "Centre for Development of Advanced Computing (C-DAC), India" }],
            "technicalProgramCommittee": [
                { "name": "Dr. V Venkatesh Shenoi", "affiliation": "C-DAC" },
                { "name": "Nisha Agrawal", "affiliation": "C-DAC" },
                { "name": "Prof. Nisanth Nair", "affiliation": "IIT Kanpur" },
                { "name": "Prof. Rajdip Mukherjee", "affiliation": "IIT Kanpur" },
                { "name": "Prof. Varadharajan Srinivasan", "affiliation": "IISER Bhopal" },
                { "name": "Prof. Debashree Ghosh", "affiliation": "IACS, Kolkata" }
            ]
        },
        "topics": [
            "Molecular Quantum Chemistry",
            "Density Functional Theory for Materials",
            "Materials modelling at the Mesoscale, Microstructure, and Kinetics",
            "Soft Matter simulations",
            "Strongly Correlated Electron Systems",
            "Artificial Intelligence/Machine Learning for Chemistry and Materials Science discovery"
        ],
        "importantDates": [
            { "label": "Submission site open (latest by)", "date": "September 1, 2025" },
            { "label": "Poster submissions (latest by)", "date": "October 10, 2025" },
            { "label": "Author notifications (latest by)", "date": "November 6, 2025" },
            { "label": "Camera-ready version (firm deadline)", "date": "November 14, 2025" },
            { "label": "Workshop Date", "date": "December 17, 2025" }
        ]
    };
}

// Populate content from data
function populateContent() {
    if (!workshopData) return;

    // Populate speakers
    populateSpeakers();
    
    // Populate schedule
    populateSchedule();
    
    // Populate software
    populateSoftware();
    
    // Populate organizers
    populateOrganizers();
    
    // Populate topics
    populateTopics();
    
    // Populate important dates
    populateImportantDates();
}

// Populate speakers section
function populateSpeakers() {
    const speakersContainer = document.getElementById('speakers-container');
    if (!speakersContainer) return;

    speakersContainer.innerHTML = '';
    
    workshopData.speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        speakerCard.innerHTML = `
            <div class="speaker-name">${speaker.name}</div>
            <div class="speaker-affiliation">${speaker.affiliation}</div>
        `;
        speakersContainer.appendChild(speakerCard);
    });
}

// Populate schedule section
function populateSchedule() {
    const scheduleContainer = document.getElementById('schedule-container');
    if (!scheduleContainer) return;

    scheduleContainer.innerHTML = '';
    
    workshopData.schedule.forEach(session => {
        session.topics.forEach((topic, index) => {
            const row = document.createElement('tr');
            
            if (index === 0) {
                row.innerHTML = `
                    <td rowspan="${session.topics.length}">${session.sno}</td>
                    <td rowspan="${session.topics.length}">${session.session}</td>
                    <td>${topic.topic}</td>
                    <td>${topic.speaker}</td>
                `;
            } else {
                row.innerHTML = `
                    <td>${topic.topic}</td>
                    <td>${topic.speaker}</td>
                `;
            }
            
            scheduleContainer.appendChild(row);
        });
    });
}

// Populate software section
function populateSoftware() {
    const softwareContainer = document.getElementById('software-container');
    if (!softwareContainer) return;

    softwareContainer.innerHTML = '';
    
    workshopData.software.forEach(software => {
        const softwareItem = document.createElement('div');
        softwareItem.className = 'software-item';
        softwareItem.innerHTML = `
            <div class="software-name">${software.name}</div>
            <div class="software-description">${software.description}</div>
            <div class="software-speaker">${software.speaker}</div>
        `;
        softwareContainer.appendChild(softwareItem);
    });
}

// Populate organizers section
function populateOrganizers() {
    const organizersContainer = document.getElementById('organizers-container');
    if (!organizersContainer) return;

    organizersContainer.innerHTML = '';
    
    const organizerSections = [
        { title: 'Workshop Chair', data: workshopData.organizers.workshopChair },
        { title: 'Co-Chair', data: workshopData.organizers.coChair },
        { title: 'Publicity Chair', data: workshopData.organizers.publicityChair },
        { title: 'Publication Chair', data: workshopData.organizers.publicationChair },
        { title: 'Technical Program Committee', data: workshopData.organizers.technicalProgramCommittee }
    ];

    organizerSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'organizer-section';
        
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);
        
        const organizerList = document.createElement('ul');
        organizerList.className = 'organizer-list';
        
        section.data.forEach(organizer => {
            const listItem = document.createElement('li');
            listItem.textContent = `${organizer.name}, ${organizer.affiliation}`;
            organizerList.appendChild(listItem);
        });
        
        sectionDiv.appendChild(organizerList);
        organizersContainer.appendChild(sectionDiv);
    });
}

// Populate topics section
function populateTopics() {
    const topicsContainer = document.getElementById('topics-container');
    if (!topicsContainer) return;

    topicsContainer.innerHTML = '';
    
    workshopData.topics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        topicItem.textContent = topic;
        topicsContainer.appendChild(topicItem);
    });
}

// Populate important dates section
function populateImportantDates() {
    const datesContainer = document.getElementById('dates-container');
    if (!datesContainer) return;

    datesContainer.innerHTML = '';
    
    workshopData.importantDates.forEach(dateItem => {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date-item';
        dateDiv.innerHTML = `
            <span class="date-label">${dateItem.label}:</span>
            <span class="date-value">${dateItem.date}</span>
        `;
        datesContainer.appendChild(dateDiv);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load workshop data
    loadWorkshopData();
    
    // Add smooth scrolling animation for tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a small delay to allow the tab content to show before scrolling
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        });
    });
    
    // Add keyboard navigation for tabs
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && index > 0) {
                tabButtons[index - 1].focus();
                tabButtons[index - 1].click();
            } else if (e.key === 'ArrowRight' && index < tabButtons.length - 1) {
                tabButtons[index + 1].focus();
                tabButtons[index + 1].click();
            }
        });
    });
});