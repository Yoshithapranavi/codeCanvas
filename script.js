const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const pattern = params.get("pattern");



/* ---------- ROADMAP PAGE ---------- */

const topicCards = document.getElementById("topicCards");

if (topicCards) {

    for (let key in topics) {

        let topicData = topics[key];

        let patterns = Object.keys(topicData.patterns).length;

        let completed = 0;
        const prefix = getProgressPrefix();
        for (let i = 0; i < localStorage.length; i++) {
            let p = localStorage.key(i);
            if (p.startsWith(prefix) && topics[key] && topics[key].patterns[p.replace(prefix, '')]) {
                let data = JSON.parse(localStorage.getItem(p));
                if (data && data.status === "completed") {
                    completed++;
                }
            }
        }

        let percent = (completed / patterns) * 100;

        let card = document.createElement("div");

        card.className = "topicCard";

        card.innerHTML = `
<h3>${topicData.title}</h3>
<p>Patterns: ${patterns}</p>
<p>Progress: ${completed} / ${patterns}</p>

<div class="progressBar">
<div class="progressFill" style="width:${percent}%"></div>
</div>

<button onclick="location.href='topic.html?topic=${key}'">
Start Learning
</button>
`;

        topicCards.appendChild(card);

    }

}



/* ---------- TOPIC PAGE ---------- */

function populateTopic() {
    console.log("populateTopic called, topic:", topic, "topics object:", !!topics);

    if (topic && topics && topics[topic]) {
        console.log("Found topic data, populating...");
        let topicData = topics[topic];

        let title = document.getElementById("topicTitle");
        let concept = document.getElementById("conceptText");
        let patternsContainer = document.getElementById("patternCards");

        if (title) {
            title.innerText = topicData.title;
            console.log("Set title to:", topicData.title);
        }

        if (concept) {
            concept.innerText = topicData.concept;
            console.log("Set concept to:", topicData.concept.substring(0, 50) + "...");
        } else {
            console.log("Concept element not found!");
        }

        if (patternsContainer) {
            patternsContainer.innerHTML = "";

            for (let key in topicData.patterns) {
                let p = topicData.patterns[key];
                let card = document.createElement("div");
                card.className = "patternCard";

                let completed = localStorage.getItem(key) ? "Completed" : "";

                card.innerHTML = `
<h3>${p.title}</h3>
<p>${completed}</p>
<button onclick="location.href='pattern.html?topic=${topic}&pattern=${key}'">
Practice
</button>
`;

                patternsContainer.appendChild(card);
            }
        }

    } else {
        console.log("Topic not found or topics object missing");
    }
}

// Run immediately and on DOM ready
setTimeout(() => populateTopic(), 100);
document.addEventListener("DOMContentLoaded", populateTopic);



//* ---------- PATTERN PAGE ---------- */

let currentProblems = [];

function populatePattern() {
    if (topic && pattern && topics && topics[topic]) {

        let patternData = topics[topic].patterns[pattern];

        let title = document.getElementById("patternTitle");
        let explanation = document.getElementById("patternExplanation");
        let code = document.getElementById("codeTemplate");

        if (title) title.innerText = patternData.title;
        if (explanation) explanation.innerText = patternData.explanation;
        if (code) code.textContent = patternData.code;

        /* store problems globally */

        currentProblems = patternData.problems;

        /* load all problems first */

        if (typeof renderProblems === 'function') {
            renderProblems("all");
        }

    }
}

// Run immediately and on DOM ready
setTimeout(() => populatePattern(), 100);
document.addEventListener("DOMContentLoaded", populatePattern);



/* ---------- RENDER PROBLEMS ---------- */

/* ========== DASHBOARD FUNCTIONS ========== */
// User-specific progress prefix from auth.js
function getProgressPrefix() {
    if (typeof window !== 'undefined' && typeof isLoggedIn === 'function' && isLoggedIn()) {
        return `user_${currentUser}_`;
    }
    return '';
}

function getPatternKey(pattern) {
    return getProgressPrefix() + pattern;
}

const topicTotals = {
    'arrays': 4,
    'strings': 3,
    'binarysearch': 3,
    'linked list': 4,
    'stack': 2,
    'recursion': 2,
    'trees': 3,
    'graphs': 2,
    'heaps': 1,
    'dp': 2,
    'greedy': 1,
    'backtracking': 1
};

function calculateProgress() {
    const prefix = getProgressPrefix();
    let completed = 0;
    let topicsProgress = [];
    for (let topic in topicTotals) {
        let topicCompleted = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key && key.startsWith(prefix + topic + '.')) {
                let data = JSON.parse(localStorage.getItem(key));
                if (data && data.status === 'completed') {
                    topicCompleted++;
                    completed++;
                }
            }
        }
        let percent = Math.round((topicCompleted / topicTotals[topic]) * 100);
        topicsProgress.push({
            name: topic.replace(/^\w/, c => c.toUpperCase()),
            completed: topicCompleted,
            total: topicTotals[topic],
            percent,
            key: topic
        });
    }
    const totalPatterns = Object.values(topicTotals).reduce((a, b) => a + b, 0);
    return { overallPercent: Math.round((completed / totalPatterns) * 100), topicsProgress };
}

function getRevisions() {
    const prefix = getProgressPrefix();
    let today = new Date().toDateString();
    let revisions = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== 'streak' && key.startsWith(prefix)) {
            let data = JSON.parse(localStorage.getItem(key));
            if (data && data.revisionDate === today) {
                revisions.push(key.replace(prefix, ''));
            }
        }
    }
    return revisions;
}

function getRecommendations() {
    let recs = [];
    for (let topic in topics) {
        for (let pattern in topics[topic].patterns) {
            let key = pattern;
            if (!localStorage.getItem(key)) {
                recs.push({ topic: topics[topic].title, pattern: topics[topic].patterns[pattern].title, key });
                if (recs.length >= 3) return recs; // Top 3
            }
        }
    }
    return recs;
}

function renderStreak() {
    const streakBox = document.getElementById('streakBox');
    if (!streakBox) return;
    let streakData = JSON.parse(localStorage.getItem("streak"));
    if (streakData && streakData.count > 0) {
        streakBox.innerHTML = `🔥 ${streakData.count} Day Streak!`;
    } else {
        streakBox.innerHTML = 'Start your streak today!';
    }
}

function renderTopicProgress() {
    const grid = document.getElementById('topicProgressGrid');
    if (!grid) return;
    const progressData = calculateProgress();
    grid.innerHTML = '';
    progressData.topicsProgress.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'progressCard topic-progress-card';
        card.innerHTML = `
            <h3>${topic.name}</h3>
            <p>${topic.completed}/${topic.total} patterns</p>
            <div class="progressBar">
                <div class="progressFill" style="width: ${topic.percent}%"></div>
            </div>
            <p>${topic.percent}% complete</p>
            <a href="structured-roadmap.html">Continue</a>
        `;
        grid.appendChild(card);
    });
}

function renderRecommendations() {
    const box = document.getElementById('recommendBox');
    if (!box) return;
    const recs = getRecommendations();
    if (recs.length === 0) {
        box.innerHTML = '<p>All caught up! 🎉</p>';
        return;
    }
    box.innerHTML = recs.map(rec =>
        `<div class="recommend-item"><strong>${rec.pattern}</strong> (${rec.topic}) <a href="pattern.html?topic=${rec.key.split('.')[0]}&pattern=${rec.key}">Practice</a></div>`
    ).join('');
}

function renderProgressList() {
    const list = document.getElementById('progressList');
    if (!list) return;
    list.innerHTML = '';
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== 'streak') {
            let data = JSON.parse(localStorage.getItem(key));
            if (data && data.status === 'completed') {
                const li = document.createElement('li');
                li.className = 'dashboard-li';
                li.textContent = key.replace(/\./g, ' > ');
                list.appendChild(li);
                count++;
            }
        }
    }
    if (count === 0) list.innerHTML = '<li>No completed patterns yet</li>';
}

function renderRevisionList() {
    const list = document.getElementById('revisionList');
    if (!list) return;
    list.innerHTML = '';
    const revisions = getRevisions();
    if (revisions.length === 0) {
        list.innerHTML = '<li>No revisions due today</li>';
        return;
    }
    revisions.forEach(key => {
        const li = document.createElement('li');
        li.className = 'dashboard-li revision-item';
        li.innerHTML = `${key.replace(/\./g, ' > ')} <button onclick="markReviewed('${key}')">Mark Reviewed</button>`;
        list.appendChild(li);
    });
}

function markReviewed(patternKey) {
    let data = JSON.parse(localStorage.getItem(patternKey));
    if (data) {
        let revDate = new Date();
        revDate.setDate(revDate.getDate() + 2);
        data.revisionDate = revDate.toDateString();
        localStorage.setItem(patternKey, JSON.stringify(data));
        renderRevisionList();
    }
}

function initDashboard() {
    renderStreak();
    renderTopicProgress();
    renderRecommendations();
    renderProgressList();
    renderRevisionList();
}

// Remove duplicate/broken functions below - old incomplete code
function renderProblems(level) {

    let list = document.getElementById("problemList");

    if (!list) return;

    list.innerHTML = "";

    currentProblems.forEach(problem => {

        if (level !== "all" && problem.difficulty.toLowerCase() !== level) {
            return;
        }

        let li = document.createElement("li");

        let tags = "";

        if (problem.difficulty) {
            tags += `<span class="tag ${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>`;
        }

        if (problem.companies) {
            problem.companies.forEach(company => {
                tags += `<a class="tag company" target="_blank" href="https://leetcode.com/problemset/all/?company=${company}">${company}</a>`;
            });
        }

        let platformButtons = '';
        if (problem.platforms && problem.platforms.length > 0) {
            platformButtons = problem.platforms.map(p =>
                `<a class="platform-btn ${p.name.toLowerCase().replace(/ /g, '')}" href="${p.url}" target="_blank">${p.name}</a>`
            ).join('');
        } else if (problem.link) {
            platformButtons = `<a class="platform-btn leetcode" href="${problem.link}" target="_blank">LeetCode</a>`;
        }

        li.innerHTML = `
<div class="problemCard">
<div class="problemLeft">
<div class="problemTitle">${problem.name}</div>
<div class="problemTags">${tags}</div>
</div>
<div class="problemRight">
<div class="platforms">${platformButtons}</div>
</div>
</div>
`;
        list.appendChild(li);
    });
}

function markSolved() {
    const patternKey = getPatternKey(params.get("pattern"));
    let data = JSON.parse(localStorage.getItem(patternKey) || '{}');

    const today = new Date().toDateString();
    data.practice_count = (data.practice_count || 0) + 1;

    if (!data.status || data.status !== 'completed') {
        let revision = new Date();
        revision.setDate(new Date().getDate() + 2);
        data.status = 'completed';
        data.completedDate = today;
        data.revisionDate = revision.toDateString();
        alert("Pattern completed! Practice anytime.");
    } else {
        let revDate = new Date(data.revisionDate);
        revDate.setDate(revDate.getDate() + 2);
        data.revisionDate = revDate.toDateString();
        alert(`Practice #${data.practice_count} - Next revision: ${data.revisionDate}`);
    }

    localStorage.setItem(patternKey, JSON.stringify(data));
    location.reload();
}

function resetUserProgress() {
    if (!isLoggedIn()) {
        alert('Please login first.');
        return;
    }

    const prefix = getProgressPrefix();
    let count = 0;
    for (let i = localStorage.length - 1; i >= 0; i--) {
        let key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key);
            count++;
        }
    }
    alert(`Reset ${count} progress items for ${currentUser}`);
    if (typeof initDashboard === 'function') initDashboard();
    updateAuthUIDashboard && updateAuthUIDashboard();
}


function renderProblems(level) {

    let list = document.getElementById("problemList");

    if (!list) return;

    list.innerHTML = "";

    currentProblems.forEach(problem => {

        /* filter difficulty */

        if (level !== "all" && problem.difficulty.toLowerCase() !== level) {
            return;
        }

        let li = document.createElement("li");

        let tags = "";
        if (problem.difficulty) {
            tags += `<span class="tag ${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>`;
        }
        if (problem.frequency) {
            tags += `<span class="tag">${problem.frequency}</span>`;
        }
        if (problem.companies) {
            problem.companies.forEach(company => {
                tags += `<a class="tag company" href="https://leetcode.com/problemset/all/?company=${company}" target="_blank">${company}</a>`;
            });
        }

        // Platform buttons

        let platformButtons = '';

        if (problem.platforms && problem.platforms.length > 0) {

            platformButtons = problem.platforms.map(p =>

                `<a class="platform-btn ${p.name.toLowerCase().replace(/ /g, '')}" href="${p.url}" target="_blank">${p.name}</a>`

            ).join('');

        } else if (problem.link) {

            platformButtons = `<a class="platform-btn leetcode" href="${problem.link}" target="_blank">LeetCode</a>`;

        }

        li.innerHTML = `

<div class="problemCard">

<div class="problemLeft">

<div class="problemTitle">${problem.name}</div>

<div class="problemTags">

${tags}

</div>

</div>

<div class="problemRight">

<div class="platforms">

${platformButtons}

</div>

</div>

</div>

`;

        list.appendChild(li);

    });

}

/* ---------- MARK COMPLETED ---------- */

function markSolved() {

    let pattern = params.get("pattern");

    let today = new Date().toDateString();

    let revision = new Date();
    revision.setDate(new Date().getDate() + 2);

    let data = {
        status: "completed",
        completedDate: today,
        revisionDate: revision.toDateString()
    };

    localStorage.setItem(pattern, JSON.stringify(data));

    alert("Pattern completed!");

    location.reload();

}