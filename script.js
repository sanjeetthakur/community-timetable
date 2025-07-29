/**
 * Timetable Application Data Structure
 * 
 * This object contains all the data needed to render the timetable interface,
 * including group information, progress tracking, and detailed schedules.
 * Each group (yellow, blue, orange, red) follows the same data structure.
 */
const scheduleData = {
    // Yellow Coders Group Data
    yellow: {
        name: "Yellow Coders",
        // Progress tracking information
        progress: {
            completedWeeks: 2,     // Number of weeks fully completed
            totalWeeks: 6,         // Total duration of the course
            currentWeek: 3,        // Current active week
            percentComplete: 45     // Overall completion percentage
        },
        schedule: {
            Monday: [
                {
                    time: "7:00 PM – 8:30 PM IST ",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                 },
                {
                   time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                },
                {
                   time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ],
            Tuesday: [
                {
                   time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                },
                {
                    time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ],
            Wednesday: [
                {
                    time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                },
                {
                    time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ]
        }
    },
    // Add similar data structure for other groups
    blue: {
        name: "Blue Coders",
        progress: {
            completedWeeks: 3,
            totalWeeks: 6,
            currentWeek: 4,
            percentComplete: 55
        },
        schedule: {
            Monday: [
                {
                   time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ]
        }
    },
    orange: {
        name: "Orange Coders",
        progress: {
            completedWeeks: 4,
            totalWeeks: 6,
            currentWeek: 5,
            percentComplete: 70
        },
        schedule: {
            Monday: [
                {
                    time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ]
        }
    },
    red: {
        name: "Red Coders",
        progress: {
            completedWeeks: 1,
            totalWeeks: 6,
            currentWeek: 2,
            percentComplete: 25
        },
        schedule: {
            Monday: [
                {
                   time: "7:00 PM – 8:30 PM IST",
                    title: "Introduction to DOM",
                    type: "core",
                    status: "completed",
                    instructor: "John Doe",
                    location: "Online",
                    resources: {
                        slides: "link-to-slides",
                        recording: "link-to-recording",
                        github: "link-to-code"
                    },
                    topics: [
                        { title: "DOM Structure", points: ["nodes", "elements", "traversal"] },
                        { title: "Selectors", points: ["getElementById", "querySelector", "querySelectorAll"] },
                        { title: "Manipulation", points: ["innerHTML", "textContent", "attributes"] }
                    ],
                    prerequisite: "JS Basics",
                    core: true,
                    notes: "link-to-view-notes"

                }
            ]
}
   }
};

// Current state
let currentGroup = 'yellow';
let currentView = 'week';
let currentFilters = {
    week: 'all',
    classType: 'all',
    status: 'all'
};

// Utility Functions
function updateProgressBar(group) {
    const progressFill = document.querySelector('.progress-fill');
    const progress = scheduleData[group].progress.percentComplete;
    
    // First remove any existing color classes
    progressFill.classList.remove('yellow-fill', 'blue-fill', 'orange-fill', 'red-fill');
    
    // Add the new color class
    progressFill.classList.add(`${group}-fill`);
    
    // Update progress width with animation
    progressFill.style.width = `${progress}%`;
    
    // Update progress color based on group
    switch(group) {
        case 'yellow':
            progressFill.style.background = 'var(--yellow-color)';
            break;
        case 'blue':
            progressFill.style.background = 'var(--blue-color)';
            break;
        case 'orange':
            progressFill.style.background = 'var(--orange-color)';
            break;
        case 'red':
            progressFill.style.background = 'var(--red-color)';
            break;
    }
}

function updateWeekIndicators(group) {
    const { completedWeeks, currentWeek, totalWeeks } = scheduleData[group].progress;
    document.querySelectorAll('.week-dot').forEach((dot, index) => {
        const weekNum = index + 1;
        dot.classList.remove('completed', 'in-progress', 'upcoming');
        if (weekNum <= completedWeeks) {
            dot.classList.add('completed');
        } else if (weekNum === currentWeek) {
            dot.classList.add('in-progress');
        } else {
            dot.classList.add('upcoming');
        }
    });
}

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const weekDots = document.querySelectorAll('.week-dot');
    const weekContents = document.querySelectorAll('.week-content');
    const progressFill = document.querySelector('.progress-fill');
    
    // Update progress bar based on completed weeks
    const updateProgress = () => {
        const totalWeeks = weekDots.length;
        const completedWeeks = document.querySelectorAll('.week-dot.completed').length;
        const progress = (completedWeeks / totalWeeks) * 100;
        progressFill.style.width = `${progress}%`;
    };

    weekDots.forEach(dot => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            weekDots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Get week number and update timetable
            const weekNumber = dot.getAttribute('data-week');
            showTimetable(currentGroup, weekNumber);
            
            // Update progress bar if needed
            updateProgress();
        });
    });

    // Initialize progress bar
    updateProgress();

    // Set current date
    updateCurrentDate();
    
    // Initialize timetable and progress
    showTimetable(currentGroup);
    updateProgressBar(currentGroup);
    updateWeekIndicators(currentGroup);
    
    // Add event listeners to groups
    document.querySelectorAll('.group').forEach(group => {
        group.addEventListener('click', () => {
            // Update active state
            document.querySelector('.group.active')?.classList.remove('active');
            group.classList.add('active');
            
            // Update timetable and group
            currentGroup = group.dataset.group;
            showTimetable(currentGroup);
            
            // Update progress bar color and progress
            updateProgressBar(currentGroup);
            updateWeekIndicators(currentGroup);
        });
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.view-btn.active')?.classList.remove('active');
            btn.classList.add('active');
            currentView = btn.dataset.view;
            showTimetable(currentGroup);
        });
    });

    // Create and add overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Add filter button functionality
    document.getElementById('filterBtn').addEventListener('click', () => {
        const filtersPanel = document.getElementById('filtersPanel');
        filtersPanel.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Add close functionality
    document.querySelector('.close-filters').addEventListener('click', () => {
        const filtersPanel = document.getElementById('filtersPanel');
        filtersPanel.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close filters when clicking overlay
    overlay.addEventListener('click', () => {
        const filtersPanel = document.getElementById('filtersPanel');
        filtersPanel.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Add event listeners to filters
    document.getElementById('weekFilter').addEventListener('change', (e) => {
        currentFilters.week = e.target.value;
    });

    document.getElementById('classTypeFilter').addEventListener('change', (e) => {
        currentFilters.classType = e.target.value;
    });

    document.getElementById('statusFilter').addEventListener('change', (e) => {
        currentFilters.status = e.target.value;
    });

    document.getElementById('applyFilters').addEventListener('click', () => {
        const filtersPanel = document.getElementById('filtersPanel');
        const overlay = document.querySelector('.overlay');
        filtersPanel.style.display = 'none';
        overlay.style.display = 'none';
        showTimetable(currentGroup);
    });

    // Initialize export functionality
    initializeExportMenu();
    
    // Add event listeners for sync actions
    document.querySelector('.sync-btn.google').addEventListener('click', syncToGoogle);
    document.querySelector('.sync-btn.download').addEventListener('click', downloadAsPDF);
    document.querySelector('.sync-btn.share').addEventListener('click', shareWithGroup);
});

function updateCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = date.toLocaleDateString('en-US', options);
}

function filterSessions(sessions) {
    return sessions.filter(session => {
        const weekMatch = currentFilters.week === 'all' || session.week === parseInt(currentFilters.week);
        const typeMatch = currentFilters.classType === 'all' || session.type === currentFilters.classType;
        const statusMatch = currentFilters.status === 'all' || session.status === currentFilters.status;
        return weekMatch && typeMatch && statusMatch;
    });
}

function showTimetable(group, weekNumber = null) {
    const timetableContent = document.querySelector('.timetable-content');
    const selectedGroupHeader = document.querySelector('.selected-group');
    const groupData = scheduleData[group];
    
    // Update header
    const weekText = weekNumber ? ` - Week ${weekNumber}` : '';
    selectedGroupHeader.textContent = `${groupData.name} Schedule${weekText}`;
    
    // Clear previous content
    timetableContent.innerHTML = '';
    
    // Filter sessions based on week if specified
    const filterSessionsByWeek = (sessions) => {
        if (!weekNumber) return sessions;
        return sessions.filter(session => session.week === parseInt(weekNumber));
    };
    
    if (currentView === 'week') {
        // Show schedule for selected week or full schedule
        Object.entries(groupData.schedule).forEach(([day, sessions]) => {
            const filteredSessions = filterSessionsByWeek(sessions);
            if (filteredSessions.length > 0) {
                const dayElement = createDaySchedule(day, filteredSessions);
                timetableContent.appendChild(dayElement);
            }
        });
    } else {
        // Show only current day for selected week
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const todaySessions = filterSessionsByWeek(groupData.schedule[today] || []);
        if (todaySessions.length > 0) {
            const dayElement = createDaySchedule(today, todaySessions);
            timetableContent.appendChild(dayElement);
        }
    }
}

function createDaySchedule(day, sessions) {
    const dayElement = document.createElement('div');
    dayElement.className = 'day-schedule';
    
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.textContent = day;
    dayElement.appendChild(dayHeader);
    
    sessions.forEach(session => {
        const sessionElement = document.createElement('div');
        sessionElement.className = 'schedule-item';
        
        sessionElement.innerHTML = `
            <div class="time">${session.time}</div>
             <div class="session-info">
             <div class="session-title">
                ${session.title}
                <span class="session-type ${session.type}">${session.type}</span>
                <span class="session-status ${session.status}">${session.status}</span>
             </div>

            <div class="session-details">👩‍🏫 ${session.instructor}</div>
            <div class="location">🏫 ${session.location}</div>

            <div class="session-resources">
            ${session.resources?.slides ? `
                <a href="${session.resources.slides}" class="resource-link">
                <i class="icon-slides"></i> Slides
                </a>` : ''}
            ${session.resources?.recording ? `
                <a href="${session.resources.recording}" class="resource-link">
                <i class="icon-video"></i> Recording
                </a>` : ''}
            ${session.resources?.github ? `
                <a href="${session.resources.github}" class="resource-link">
                <i class="icon-github"></i> Code
                </a>` : ''}
            </div>
        </div>

             ${session.topics ? `
            <div class="black-card">
            <h4>Topics Covered:</h4>
            <ul>
                ${session.topics.map(topic => `
                <li><strong>${topic.title}</strong> – ${topic.points.join(', ')}</li>
                `).join('')}
            </ul>

            <div class="tags">
                ${session.prerequisite ? '<span class="tag prereq">📘 Prerequisites: ${session.prerequisite}</span> ' : ''}
                ${session.core ? '<span class="tag core">🔥 Core Topic</span>' : ''}
            </div>

            ${session.notes ? `
                <p><a href="${session.notes}" class="view-notes">📄 View Notes</a></p>
            ` : ''}
            </div>
        ` : ''}
                        </div>
                    </div>
                `;
        
        dayElement.appendChild(sessionElement);
    });
    
    return dayElement;
}

// Export and Sync Functions
function initializeExportMenu() {
    const exportBtn = document.getElementById('exportBtn');
    const exportMenu = document.getElementById('exportMenu');
    const exportDropdown = document.querySelector('.export-dropdown');
    const exportOptions = document.querySelectorAll('.export-option');

    // Toggle export menu
    exportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = exportMenu.style.display === 'block';
        exportMenu.style.display = isVisible ? 'none' : 'block';
        exportDropdown.classList.toggle('active');
    });

    // Handle export options
    exportOptions.forEach(option => {
        option.addEventListener('click', async (e) => {
            e.stopPropagation();
            const action = option.dataset.action;
            
            // Add loading state
            option.classList.add('loading');
            
            try {
                switch(action) {
                    case 'calendar':
                        await exportToCalendar();
                        showToast('Schedule exported to calendar successfully');
                        break;
                    case 'pdf':
                        await exportToPDF();
                        showToast('PDF downloaded successfully');
                        break;
                    case 'csv':
                        await exportToCSV();
                        showToast('CSV downloaded successfully');
                        break;
                    case 'share':
                        await shareSchedule();
                        showToast('Share link copied to clipboard');
                        break;
                }
            } catch (error) {
                showToast('Export failed: ' + error.message, 'error');
            } finally {
                option.classList.remove('loading');
                exportMenu.style.display = 'none';
                exportDropdown.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        exportMenu.style.display = 'none';
        exportDropdown.classList.remove('active');
    });
}

function exportToCalendar() {
    const sessions = getAllSessions(currentGroup);
    const calendarEvents = sessions.map(session => ({
        title: session.title,
        start: session.time.split(' - ')[0],
        end: session.time.split(' - ')[1],
        description: session.details,
        location: session.location
    }));
    
    // Create ICS file content
    const icsContent = generateICSFile(calendarEvents);
    downloadFile('schedule.ics', icsContent);
}

async function exportToPDF() {
    // Create a clean version of the timetable for PDF export
    const content = document.createElement('div');
    content.className = 'pdf-export';
    
    // Add header
    const header = document.createElement('div');
    header.className = 'pdf-header';
    header.innerHTML = `
        <h1>${scheduleData[currentGroup].name} Schedule</h1>
        <p>Generated on ${new Date().toLocaleDateString()}</p>
    `;
    content.appendChild(header);

    // Add timetable content
    const timetable = document.querySelector('.timetable-content').cloneNode(true);
    content.appendChild(timetable);

    // PDF export options
    const opt = {
        margin: 10,
        filename: `${scheduleData[currentGroup].name.toLowerCase()}-schedule.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        // Temporarily add the content to the document for PDF generation
        document.body.appendChild(content);
        await html2pdf().set(opt).from(content).save();
        document.body.removeChild(content);
    } catch (error) {
        console.error('PDF generation failed:', error);
        throw new Error('Failed to generate PDF');
    }
}

function exportToCSV() {
    const sessions = getAllSessions(currentGroup);
    const csvContent = generateCSV(sessions);
    downloadFile('schedule.csv', csvContent);
}

function syncToGoogle() {
    // Google Calendar integration would go here
    alert('Syncing to Google Calendar...');
}

function downloadAsPDF() {
    exportToPDF();
}

function shareWithGroup() {
    const shareUrl = generateShareURL();
    navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Share link copied to clipboard!'));
}

// Utility functions for export features
function getAllSessions(group) {
    const groupData = scheduleData[group];
    const allSessions = [];
    Object.entries(groupData.schedule).forEach(([day, sessions]) => {
        sessions.forEach(session => {
            allSessions.push({...session, day});
        });
    });
    return allSessions;
}

function generateICSFile(events) {
    // Implementation for generating ICS file content
    return 'BEGIN:VCALENDAR\nVERSION:2.0\n' + events.map(event => 
        `BEGIN:VEVENT\nSUMMARY:${event.title}\nLOCATION:${event.location}\nEND:VEVENT`
    ).join('\n') + '\nEND:VCALENDAR';
}

function generateCSV(sessions) {
    const headers = ['Day', 'Time', 'Title', 'Instructor', 'Location', 'Type', 'Status'];
    const rows = sessions.map(session => 
        [session.day, session.time, session.title, session.instructor, session.location, session.type, session.status]
    );
    return [headers, ...rows].map(row => row.join(',')).join('\n');
}

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

async function shareSchedule() {
    try {
        const shareData = {
            title: `${scheduleData[currentGroup].name} Schedule`,
            text: `Check out the schedule for ${scheduleData[currentGroup].name}`,
            url: generateShareURL()
        };

        // Try to use the Web Share API if available
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }

        // Fallback to clipboard copy
        await navigator.clipboard.writeText(shareData.url);
        showToast('Share link copied to clipboard!');

    } catch (error) {
        console.error('Share failed:', error);
        throw new Error('Failed to share schedule');
    }
}

function generateShareURL() {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        group: currentGroup,
        view: currentView,
        ...currentFilters
    });
    return `${baseUrl}?${params.toString()}`;
}

function showToast(message, type = 'success') {
    // Remove existing toast if any
    document.querySelector('.toast')?.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="toast-icon">${type === 'success' ? '✓' : '⚠'}</i>
            <span class="toast-message">${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
