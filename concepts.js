// Display concepts and examples from questions.js

function displayConceptCard(topicKey) {
    const topic = questionsDB[topicKey];
    if (!topic || !topic.concept) return '';

    const concept = topic.concept;
    const animation = topic.animation || { type: 'fadeInUp', duration: 600, delay: 100 };

    let html = `
        <div class="conceptCard" style="animation: ${animation.type} ${animation.duration}ms ease-out ${animation.delay}ms both;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem; display: inline-block; animation: bounce 2s infinite;">
                ${topic.icon || '💡'}
            </div>
            <h2>${topic.title}</h2>
            
            <div class="definition">
                <strong>📚 Definition:</strong><br/>
                ${concept.definition}
            </div>
            
            <div class="explanation">
                <strong>💭 What is it?</strong><br/>
                ${concept.explanation}
            </div>
            
            <div class="keyPoints">
                <strong>🎯 Key Points:</strong>
    `;

    concept.keyPoints.forEach(point => {
        html += `
            <div class="keyPoint">
                ${point}
            </div>
        `;
    });

    html += `
            </div>
            
            <div class="realWorldSection">
                <h3>🌍 Real-World Examples:</h3>
    `;

    concept.realWorldExamples.forEach(example => {
        html += `
            <div class="realWorldExample">
                ✨ ${example}
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}

function displayTopicConcept(topicKey) {
    const container = document.getElementById('conceptCard');
    if (!container) return;

    const html = displayConceptCard(topicKey);
    container.innerHTML = html;
}

// Show concept when topic page loads
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    if (topic && questionsDB[topic]) {
        displayTopicConcept(topic);
    }
});

// Function to create interactive concept preview
function createConceptPreview(topicKey) {
    const topic = questionsDB[topicKey];
    if (!topic || !topic.concept) return '';

    return `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
            <h3 style="margin-top: 0; font-size: 1.3rem;">${topic.icon || '💡'} ${topic.title} Concept</h3>
            <p style="margin: 0.5rem 0; font-size: 0.95rem;"><strong>Quick Overview:</strong></p>
            <p style="margin: 0.5rem 0; font-size: 0.9rem;">${topic.concept.definition}</p>
            <p style="margin: 0.5rem 0; font-size: 0.85rem; opacity: 0.9;"><em>${topic.concept.explanation}</em></p>
        </div>
    `;
}

// Function to get all real-world examples for a topic
function getRealWorldExamples(topicKey) {
    const topic = questionsDB[topicKey];
    if (!topic || !topic.concept) return [];
    return topic.concept.realWorldExamples;
}

// Function to get key learning points for a topic
function getKeyPoints(topicKey) {
    const topic = questionsDB[topicKey];
    if (!topic || !topic.concept) return [];
    return topic.concept.keyPoints;
}

// Display concept in card format
function displayTopicInfo(topicKey) {
    const topic = questionsDB[topicKey];
    if (!topic) return '';

    let html = `
        <div style="padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
            <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">
                ${topic.icon || '💡'}
            </div>
            <h1 style="text-align: center; color: #333; margin: 0 0 1rem 0;">
                ${topic.title}
            </h1>
            
            <!-- Key Concepts -->
            <div style="margin: 2rem 0; padding: 1.5rem; background: #f5f7fa; border-radius: 12px; border-left: 4px solid #667eea;">
                <h3 style="margin-top: 0; color: #667eea;">📖 Core Concept</h3>
                <p style="margin: 0.5rem 0; font-size: 1rem; color: #444;">
                    <strong>${topic.concept.definition}</strong>
                </p>
                <p style="margin: 0.5rem 0; font-size: 0.95rem; color: #555; line-height: 1.6;">
                    ${topic.concept.explanation}
                </p>
            </div>
            
            <!-- Key Points -->
            <div style="margin: 2rem 0;">
                <h3 style="color: #333; margin-bottom: 1rem;">🎯 Key Points to Remember:</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    `;

    topic.concept.keyPoints.forEach((point, index) => {
        html += `
            <div style="padding: 1rem; background: #f0f4ff; border-radius: 8px; border-left: 3px solid #667eea;">
                <p style="margin: 0; font-size: 0.9rem; color: #333;">${point}</p>
            </div>
        `;
    });

    html += `
                </div>
            </div>
            
            <!-- Real-World Applications -->
            <div style="margin: 2rem 0;">
                <h3 style="color: #333; margin-bottom: 1rem;">🌍 Where is it Used in Real Life?</h3>
                <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
    `;

    topic.concept.realWorldExamples.forEach(example => {
        html += `
            <div style="padding: 1rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); 
                        color: white; border-radius: 8px; font-size: 0.95rem;">
                📌 ${example}
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    return html;
}

// Easy utility function to insert concept info
function insertTopicInfo(topicKey, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = displayTopicInfo(topicKey);
    }
}
