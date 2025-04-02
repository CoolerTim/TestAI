// Füge CSS für den "Code wird generiert" Indikator hinzu
const codeGeneratingCss = `
.code-generating {
    display: inline-block;
    color: var(--accent-color, #3498db);
    font-style: italic;
    animation: blink 1.2s infinite;
    margin-left: 8px;
}

@keyframes blink {
    0% { opacity: 0.4; }
    50% { opacity: 1; }
    100% { opacity: 0.4; }
}

/* Message bubble text wrapping */
.message-content {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: normal;
    max-width: 100%;
}

/* Ensure proper line breaks in generated text */
.ai-message .message-content p,
.user-message .message-content p {
    margin-bottom: 1em;
    white-space: pre-wrap;
}

/* Styles für generierte Bilder */
.generated-image-container {
    margin: 20px auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: var(--card-background);
    width: auto;
    max-width: 100%;
    display: block;
    position: relative;
    cursor: pointer;
}

.generated-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
}

.image-prompt {
    padding: 12px 16px;
    font-size: 0.9em;
    color: var(--text-secondary);
    background-color: var(--card-background);
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.image-actions {
    display: flex;
    gap: 8px;
}

.image-download-btn {
    background: none;
    border: none;
    color: var(--accent-color);
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.85em;
}

.image-download-btn:hover {
    background-color: rgba(52, 152, 219, 0.1);
}

.image-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2em;
    z-index: 5;
}

.image-loading-spinner {
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 6px solid var(--accent-green);
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Modal für Bildanzeige */
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-modal.active {
    opacity: 1;
}

.modal-image {
    max-width: 95%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-controls {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}

.modal-btn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.modal-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.modal-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5em;
    margin-bottom: 0.7em;
    color: var(--heading-color, var(--text-primary));
    font-weight: 600;
    line-height: 1.3;
}

h1 { font-size: 1.8em; }
h2 { font-size: 1.5em; }
h3 { font-size: 1.3em; }
h4 { font-size: 1.1em; }
h5 { font-size: 1em; }
h6 { font-size: 0.9em; }

pre {
    background-color: var(--code-bg-color, #1e1e1e) !important;
    border-radius: 8px !important;
    padding: 1em !important;
    margin: 1.2em 0 !important;
    overflow: auto !important;
    position: relative !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
}

code {
    font-family: 'Fira Code', 'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace !important;
}

pre code {
    display: block !important;
    overflow-x: auto !important;
    padding: 0 !important;
    background: none !important;
    color: var(--code-text-color, #f8f8f2) !important;
    line-height: 1.5 !important;
    font-size: 0.9em !important;
}

.code-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 0.5em 1em !important;
    background-color: var(--code-header-bg, rgba(30, 30, 30, 0.9)) !important;
    border-radius: 8px 8px 0 0 !important;
    font-size: 0.8em !important;
    font-family: 'Fira Code', 'Roboto Mono', Consolas, monospace !important;
}

.code-language-badge {
    color: var(--accent-color, #3498db) !important;
    background-color: rgba(52, 152, 219, 0.1) !important;
    padding: 0.2em 0.6em !important;
    border-radius: 4px !important;
    font-size: 0.85em !important;
}

.code-copy-button {
    background: var(--button-bg, rgba(255, 255, 255, 0.1)) !important;
    color: var(--button-text, rgba(255, 255, 255, 0.7)) !important;
    border: none !important;
    border-radius: 4px !important;
    padding: 0.2em 0.6em !important;
    cursor: pointer !important;
    font-size: 0.85em !important;
    transition: all 0.2s ease !important;
}

.code-copy-button:hover {
    background: var(--button-hover-bg, rgba(255, 255, 255, 0.2)) !important;
    color: var(--button-hover-text, rgba(255, 255, 255, 0.9)) !important;
}

.code-container {
    margin: 1.2em 0 !important;
    border-radius: 8px !important;
    overflow: hidden !important;
}

ul, ol {
    padding-left: 2em;
    margin-top: 0.8em;
    margin-bottom: 0.8em;
}

li + li {
    margin-top: 0.3em;
}
`;

// Füge das CSS zum Dokument hinzu, falls noch nicht vorhanden
function addCodeGeneratingStyles() {
    if (!document.getElementById('code-generating-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'code-generating-styles';
        styleEl.textContent = codeGeneratingCss;
        document.head.appendChild(styleEl);
    }
}

// Füge die Styles beim Laden hinzu
document.addEventListener('DOMContentLoaded', addCodeGeneratingStyles);

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('image-input');
const imagePreviewContainer = document.getElementById('image-preview-container');
const inputArea = document.getElementById('input-area');
const newChatButton = document.querySelector('.new-chat-button');
const chatHistoryList = document.querySelector('.chat-history ul');

const LOCAL_STORAGE_KEY = 'pollinations_chats';
const MEMORIES_STORAGE_KEY = 'pollinations_memories';
const SYSTEM_PROMPT = { 
    role: "system", 
    content: `Du bist ein hilfreicher Assistent mit vielen Fähigkeiten. Sei präzise und informativ. Formatiere Antworten mit Markdown.

FORMATIERUNGSRICHTLINIEN:
- Verwende Markdown (Überschriften, Listen, fett, kursiv) für übersichtliche Antworten
- Wenn du Fakten nennst, füge immer direkte Quellenangaben als Links an
- Verwende für Linkbeschriftung nur den Domain-Namen: [wikipedia.de](URL) statt [Quelle: Wikipedia](URL)
- Quellenangaben sollten direkt im Satz nach dem Fakt oder am Ende des Absatzes stehen
- Alle Quellenlinks müssen grün sein, im Format <span style="color: var(--accent-green)">[domain.de](URL)</span>
- Tabellen und Listen mit Markdown formatieren für bessere Lesbarkeit
- Code-Blöcke verwenden, wenn Code oder Befehle gezeigt werden (mit entsprechender Sprachmarkierung)

DEINE FÄHIGKEITEN:
1. WEB-SUCHE: Der Nutzer kann durch Klicken auf die Lupe (🔍) die Web-Suche aktivieren/deaktivieren. Bei aktivierter Web-Suche kannst du nach aktuellen Informationen im Internet suchen, um präzise und aktuelle Antworten zu geben.

2. KI-BILDGENERIERUNG: Du kannst Bilder basierend auf Textbeschreibungen erstellen. Wenn der Nutzer nach einem Bild fragt, antworte mit dem Bildgenerierungs-Tag und einer präzisen Beschreibung (auf Englisch für bessere Ergebnisse). Beispiel: [BILD: a photorealistic sunset over mountains]. Für spezifische Anforderungen kannst du Parameter hinzufügen: [BILD: a photorealistic sunset over mountains, width: 1024, height: 768]. Jedes Bild wird mit einem zufälligen Seed generiert, aber du kannst auch einen bestimmten Seed angeben für reproduzierbare Ergebnisse.

3. ERINNERUNGEN: Du kannst dir wichtige Informationen über den Nutzer merken (wie Wohnort, Präferenzen, etc.). Der Nutzer kann:
   - Dir wichtige Informationen mitteilen, die du automatisch speicherst
   - Dir ausdrücklich sagen "Merke dir, dass..." für bestimmte Fakten
   - Dir sagen "Vergiss..." oder "Entferne die Erinnerung..." um gespeicherte Informationen zu löschen
   - Dir sagen "Ändere die Erinnerung..." um gespeicherte Informationen zu korrigieren

4. DATEI-ANALYSE: Du kannst vom Nutzer hochgeladene Dateien analysieren, darunter:
   - Bilder (Beschreibung und Analyse von Bildinhalten)
   - Textdokumente (Analyse von Text, Zusammenfassung, etc.)
   - PDF-Dateien (Extraktion und Analyse von Text)
   - Tabellen und Daten

VERHALTENSREGELN:
- Antworte direkt auf die Fragen des Nutzers
- Verwende relevante Erinnerungen, wenn sie hilfreich sind, aber ohne sie explizit zu erwähnen
- Wenn Web-Suche aktiviert ist und du nach aktuellen Informationen gefragt wirst, nutze die bereitgestellten Suchergebnisse und zitiere die Quellen
- Bei fehlendem Wissen oder fehlendem Kontext frage nach weiteren Informationen
- Respektiere die Privatsphäre des Nutzers 
- Vermeide das Rendering von LaTeX-Code für normalen Text, der keine mathematischen Formeln enthält

Bei Anfragen, die du nicht verstehst oder nicht beantworten kannst, bitte höflich um Klarstellung oder erkläre deine Einschränkungen.` 
};

console.log('[DEBUG] SYSTEM_PROMPT defined globally:', typeof SYSTEM_PROMPT, SYSTEM_PROMPT);
const API_BASE_URL = "https://text.pollinations.ai/openai";

// Kostenloser DuckDuckGo API-Proxy statt SearchAPI.io
const FREE_SEARCH_URL = "https://api.duckduckgo.com/?format=json&pretty=1&no_html=1&skip_disambig=1&q=";

// Different model options
const MODEL_OPTIONS = {
    FAST: "openai",
    PRO: "openai-large",
    REASONING: "qwen-reasoning"
};

// Default model
let currentModel = MODEL_OPTIONS.FAST;

// Global memories array
let globalMemories = [];

// Backup-Speicher für Erinnerungen
let memoriesBackup = [];

// Web-Search Toggle Status (standardmäßig deaktiviert)
let webSearchEnabled = false;

// Initialize Showdown converter with besseren Optionen für Tabellen
const markdownConverter = new showdown.Converter({
    tables: true,                  // Tabellen aktivieren
    simplifiedAutoLink: true,      // URLs automatisch zu Links machen
    strikethrough: true,           // Durchgestrichenen Text ermöglichen
    tasklists: true,               // Checklisten ermöglichen
    simpleLineBreaks: true,        // Einzelne Zeilenumbrüche als <br> interpretieren
    openLinksInNewWindow: true,    // Links in neuem Tab öffnen
    emoji: true,                   // Emoji-Unterstützung
    backslashEscapesHTMLTags: true, // Escape HTML tags mit \
    ghCodeBlocks: true,           // GitHub style code blocks
    encodeEmails: true            // Email addresses werden encodiert
});

let conversationHistory = []; // Will be loaded from storage
let allChats = {}; // Object to store all chats { chatId: { id: chatId, history: [...], timestamp: ... }, ... }
let currentChatId = null;
let selectedFiles = null; // Will hold all selected files (images and documents)
let abortStreamController = null;

// --- Global Variable für API-Limit Handling ---
let lastApiRequestTime = 0;
let consecutiveRateLimitErrors = 0;
let isRateLimitCooldown = false;
const RATE_LIMIT_COOLDOWN = 10000; // 10 Sekunden Pause nach einem Rate-Limit-Fehler

// --- Utility function to encode file to base64 (data only) ---
function fileToBase64Data(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// --- Add a complete message or create a placeholder for streaming ---
function addMessage(sender, content, messageId = null) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message-container`);
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    
    // Generate a unique ID for the message for targeting with updates
    const id = messageId || `${sender}-msg-${Date.now()}`;
    messageElement.id = id;
    
    // Message Content Area
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    
    if (sender === 'user') {
        // For user messages
        if (content.text) {
            messageContent.innerHTML = escapeHtml(content.text).replace(/\n/g, '<br>');
        }
        
        // Display files if present (using the new files array for all file types)
        if (content.files && content.files.length > 0) {
            const fileGallery = document.createElement('div');
            fileGallery.classList.add('file-gallery');
            fileGallery.style.display = 'flex';
            fileGallery.style.flexWrap = 'wrap';
            fileGallery.style.gap = '5px';
            fileGallery.style.marginTop = content.text ? '10px' : '0';
            
            content.files.forEach(file => {
                if (file.type === 'image') {
                    // Handle image files
                    const imgContainer = document.createElement('div');
                    imgContainer.style.maxWidth = '200px';
                    imgContainer.style.maxHeight = '200px';
                    imgContainer.style.margin = '5px';
                    imgContainer.style.overflow = 'hidden';
                    imgContainer.style.borderRadius = '8px';
                    imgContainer.style.position = 'relative';
                    
                    const img = document.createElement('img');
                    img.src = file.src;
                    img.alt = file.name || 'Uploaded image';
                    img.style.maxWidth = '100%';
                    img.style.maxHeight = '100%';
                    img.style.objectFit = 'contain';
                    img.style.cursor = 'pointer';
                    
                    // File info overlay
                    const fileInfo = document.createElement('div');
                    fileInfo.classList.add('file-info');
                    fileInfo.style.position = 'absolute';
                    fileInfo.style.bottom = '0';
                    fileInfo.style.left = '0';
                    fileInfo.style.right = '0';
                    fileInfo.style.backgroundColor = 'rgba(0,0,0,0.6)';
                    fileInfo.style.color = 'white';
                    fileInfo.style.padding = '2px 5px';
                    fileInfo.style.fontSize = '10px';
                    fileInfo.style.opacity = '0';
                    fileInfo.style.transition = 'opacity 0.2s';
                    fileInfo.textContent = file.name ? `${file.name} (${file.size})` : file.size;
                    
                    imgContainer.addEventListener('mouseenter', () => {
                        fileInfo.style.opacity = '1';
                    });
                    
                    imgContainer.addEventListener('mouseleave', () => {
                        fileInfo.style.opacity = '0';
                    });
                    
                    // Add click handler to show full image in modal
                    img.addEventListener('click', function() {
                        const modal = document.createElement('div');
                        modal.classList.add('image-modal');
                        modal.style.position = 'fixed';
                        modal.style.top = '0';
                        modal.style.left = '0';
                        modal.style.width = '100%';
                        modal.style.height = '100%';
                        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                        modal.style.display = 'flex';
                        modal.style.alignItems = 'center';
                        modal.style.justifyContent = 'center';
                        modal.style.zIndex = '1000';
                        
                        const modalImg = document.createElement('img');
                        modalImg.src = file.src;
                        modalImg.style.maxWidth = '90%';
                        modalImg.style.maxHeight = '90%';
                        modalImg.style.objectFit = 'contain';
                        
                        const caption = document.createElement('div');
                        caption.style.position = 'absolute';
                        caption.style.bottom = '20px';
                        caption.style.left = '0';
                        caption.style.width = '100%';
                        caption.style.textAlign = 'center';
                        caption.style.color = 'white';
                        caption.style.padding = '5px';
                        caption.style.backgroundColor = 'rgba(0,0,0,0.5)';
                        caption.textContent = file.name ? `${file.name} (${file.size})` : 'Uploaded image';
                        
                        modal.addEventListener('click', function() {
                            document.body.removeChild(modal);
                        });
                        
                        modal.appendChild(modalImg);
                        modal.appendChild(caption);
                        document.body.appendChild(modal);
                    });
                    
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(fileInfo);
                    fileGallery.appendChild(imgContainer);
                } else {
                    // Handle document files
                    const docContainer = document.createElement('div');
                    docContainer.style.width = '120px';
                    docContainer.style.margin = '5px';
                    docContainer.style.padding = '10px';
                    docContainer.style.display = 'flex';
                    docContainer.style.flexDirection = 'column';
                    docContainer.style.alignItems = 'center';
                    docContainer.style.backgroundColor = 'var(--card-background)';
                    docContainer.style.borderRadius = '8px';
                    docContainer.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                    
                    // File icon based on type
                    const icon = document.createElement('div');
                    icon.style.fontSize = '36px';
                    icon.style.marginBottom = '5px';
                    
                    // Choose icon based on file extension
                    const ext = file.format || getFileExtension(file.name) || '';
                    if (ext === 'pdf') {
                        icon.innerHTML = '📄';
                        icon.style.color = '#e74c3c';
                    } else if (['doc', 'docx'].includes(ext)) {
                        icon.innerHTML = '📝';
                        icon.style.color = '#3498db';
                    } else if (['xls', 'xlsx', 'csv'].includes(ext)) {
                        icon.innerHTML = '📊';
                        icon.style.color = '#2ecc71';
                    } else if (['ppt', 'pptx'].includes(ext)) {
                        icon.innerHTML = '📊';
                        icon.style.color = '#e67e22';
                    } else if (['txt', 'md'].includes(ext)) {
                        icon.innerHTML = '📄';
                        icon.style.color = '#bdc3c7';
                    } else if (['html', 'htm', 'xml', 'json'].includes(ext)) {
                        icon.innerHTML = '📄';
                        icon.style.color = '#9b59b6';
                    } else {
                        icon.innerHTML = '📎';
                        icon.style.color = '#95a5a6';
                    }
                    
                    // File name
                    const name = document.createElement('div');
                    name.textContent = file.name || 'Document';
                    name.style.fontSize = '12px';
                    name.style.textAlign = 'center';
                    name.style.fontWeight = 'bold';
                    name.style.wordBreak = 'break-word';
                    name.style.maxWidth = '100%';
                    name.style.overflow = 'hidden';
                    name.style.textOverflow = 'ellipsis';
                    name.style.whiteSpace = 'nowrap';
                    
                    // File size
                    const size = document.createElement('div');
                    size.textContent = file.size || '';
                    size.style.fontSize = '10px';
                    size.style.color = 'var(--text-secondary)';
                    
                    docContainer.appendChild(icon);
                    docContainer.appendChild(name);
                    docContainer.appendChild(size);
                    
                    // Show full name on hover
                    docContainer.title = file.name;
                    
                    fileGallery.appendChild(docContainer);
                }
            });
            
            messageContent.appendChild(fileGallery);
        }
        // For backward compatibility - old image handling
        else if (content.imageSrcs && content.imageSrcs.length > 0) {
            // Keep existing image gallery code for backward compatibility
            const imageGallery = document.createElement('div');
            imageGallery.classList.add('image-gallery');
            imageGallery.style.display = 'flex';
            imageGallery.style.flexWrap = 'wrap';
            imageGallery.style.gap = '5px';
            imageGallery.style.marginTop = content.text ? '10px' : '0';
            
            content.imageSrcs.forEach(imageSrc => {
                const imgContainer = document.createElement('div');
                imgContainer.style.maxWidth = '200px';
                imgContainer.style.maxHeight = '200px';
                imgContainer.style.margin = '5px';
                imgContainer.style.overflow = 'hidden';
                imgContainer.style.borderRadius = '8px';
                
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = 'Uploaded image';
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                img.style.objectFit = 'contain';
                img.style.cursor = 'pointer';
                
                // Add click handler to show full image in modal
                img.addEventListener('click', function() {
                    const modal = document.createElement('div');
                    modal.classList.add('image-modal');
                    modal.style.position = 'fixed';
                    modal.style.top = '0';
                    modal.style.left = '0';
                    modal.style.width = '100%';
                    modal.style.height = '100%';
                    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    modal.style.display = 'flex';
                    modal.style.alignItems = 'center';
                    modal.style.justifyContent = 'center';
                    modal.style.zIndex = '1000';
                    
                    const modalImg = document.createElement('img');
                    modalImg.src = imageSrc;
                    modalImg.style.maxWidth = '90%';
                    modalImg.style.maxHeight = '90%';
                    modalImg.style.objectFit = 'contain';
                    
                    modal.addEventListener('click', function() {
                        document.body.removeChild(modal);
                    });
                    
                    modal.appendChild(modalImg);
                    document.body.appendChild(modal);
                });
                
                imgContainer.appendChild(img);
                imageGallery.appendChild(imgContainer);
            });
            
            messageContent.appendChild(imageGallery);
        }
        // For legacy single image support
        else if (content.imageSrc) {
            const imgContainer = document.createElement('div');
            imgContainer.style.maxWidth = '200px';
            imgContainer.style.maxHeight = '200px';
            imgContainer.style.margin = '5px 0';
            imgContainer.style.overflow = 'hidden';
            imgContainer.style.borderRadius = '8px';
            
            const img = document.createElement('img');
            img.src = content.imageSrc;
            img.alt = 'Uploaded image';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.style.objectFit = 'contain';
            img.style.cursor = 'pointer';
            
            // Add click handler to show full image
            img.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.classList.add('image-modal');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                modal.style.display = 'flex';
                modal.style.alignItems = 'center';
                modal.style.justifyContent = 'center';
                modal.style.zIndex = '1000';
                
                const modalImg = document.createElement('img');
                modalImg.src = content.imageSrc;
                modalImg.style.maxWidth = '90%';
                modalImg.style.maxHeight = '90%';
                modalImg.style.objectFit = 'contain';
                
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                modal.appendChild(modalImg);
                document.body.appendChild(modal);
            });
            
            imgContainer.appendChild(img);
            messageContent.appendChild(imgContainer);
        }
    } else {
        // For AI messages (streaming or complete)
        if (typeof content === 'string') {
            messageContent.textContent = content;
        } else if (content && typeof content === 'object') {
            // If content is directly an object (structured content)
            if (content.text) {
                messageContent.innerHTML = content.text;
            }
            if (content.html) {
                messageContent.innerHTML = content.html;
            }
        }
    }
    
    messageElement.appendChild(messageContent);
    
    // Message Actions Area (optional buttons, etc.)
    const messageActions = document.createElement('div');
    messageActions.classList.add('message-actions');
    
    if (sender === 'user') {
        // Edit button for user messages
        appendEditButton(messageActions, content.text, messageContainer);
    } else if (sender === 'ai') {
        // Copy button for AI messages
        const textContent = content.text || (typeof content === 'string' ? content : '');
        if (textContent) {
            appendCopyButton(messageActions, textContent);
        }
    }
    
    if (messageActions.childNodes.length > 0) {
        messageElement.appendChild(messageActions);
    }
    
    messageContainer.appendChild(messageElement);
    chatBox.appendChild(messageContainer);
    
    enhanceCodeBlocks(messageContent);
    enhanceTables(messageContent);
    
    scrollToBottom();
    
    return id; // Return ID for potential updates
}

// --- Utility to escape HTML --- 
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// --- NEW: Append Copy button to actions container --- 
function appendCopyButton(actionsContainer, textToCopy) {
    if (!actionsContainer || actionsContainer.querySelector('.copy-button')) return;

    const copyButton = document.createElement('button');
    copyButton.classList.add('action-button', 'copy-button'); // Add generic class
    copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM7.5 1.5v1h1v-1zM5.05 0A1.5 1.5 0 0 0 3.5 1.5v1A1.5 1.5 0 0 0 5 4h6a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 10.95 0z"/></svg>`;
    copyButton.title = 'Antwort kopieren';

    copyButton.onclick = (event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Optional: Show temporary feedback
                copyButton.innerHTML = '✓'; 
                setTimeout(() => {
                   copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>`;
                }, 1000); 
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                // Optional: Show error feedback
                copyButton.innerHTML = '✗';
                 setTimeout(() => {
                   copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>`;
                }, 1000); 
            });
    };
    actionsContainer.appendChild(copyButton);
}

// --- Helper to add edit button ---
function appendEditButton(actionsContainer, textToEdit, messageContainer) {
    if (!actionsContainer) return;
    
    const editButton = document.createElement('button');
    editButton.classList.add('action-button', 'edit-button');
    editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>`;
    editButton.title = 'Nachricht bearbeiten';
    
    editButton.onclick = (event) => {
        event.stopPropagation();
        editUserMessage(textToEdit);
    };
    
    actionsContainer.appendChild(editButton);
}

// --- Edit user message ---
function editUserMessage(text) {
    if (confirm("Diese Nachricht bearbeiten? Alle nachfolgenden Nachrichten werden gelöscht und eine neue Antwort wird generiert.")) {
        // Setze den Text in das Eingabefeld
        userInput.value = text;
        adjustTextAreaHeight();
        
        // Lösche alle nachfolgenden Nachrichten
        const messageContainers = document.querySelectorAll('.message-container');
        let foundUserMessage = false;
        let messagesToRemove = [];
        
        messageContainers.forEach(container => {
            if (foundUserMessage) {
                messagesToRemove.push(container);
            }
            
            const contentDiv = container.querySelector('.message-content');
            const isUserMessage = container.querySelector('.user-message');
            
            if (isUserMessage && contentDiv && contentDiv.textContent.trim() === text.trim()) {
                foundUserMessage = true;
                messagesToRemove.push(container);
            }
        });
        
        // Entferne die Nachrichten aus dem DOM
        messagesToRemove.forEach(container => container.remove());
        
        // Aktualisiere die Konversationshistorie
        if (currentChatId && allChats[currentChatId]) {
            const chatHistory = allChats[currentChatId].history;
            let foundIndex = -1;
            
            // Finde den Index der zu bearbeitenden Nachricht
            for (let i = 0; i < chatHistory.length; i++) {
                if (chatHistory[i].role === 'user') {
                    if (typeof chatHistory[i].content === 'string' && chatHistory[i].content.trim() === text.trim()) {
                        foundIndex = i;
                        break;
                    } else if (Array.isArray(chatHistory[i].content)) {
                        const textPart = chatHistory[i].content.find(part => part.type === 'text');
                        if (textPart && textPart.text.trim() === text.trim()) {
                            foundIndex = i;
                            break;
                        }
                    }
                }
            }
            
            // Kürze die Historie wenn die Nachricht gefunden wurde
            if (foundIndex >= 0) {
                // Behalte nur Nachrichten bis zum gefundenen Index (ausschließlich)
                allChats[currentChatId].history = chatHistory.slice(0, foundIndex);
                saveChatsToLocalStorage();
            }
        }
        
        // Fokussiere das Eingabefeld
        userInput.focus();
    }
}

/**
 * Updates the message content during streaming and renders Markdown and Math
 * @param {string} messageId - The ID of the message to update
 * @param {string} content - The new content to display
 */
function updateStreamingMessage(messageId, content) {
    const msgElement = document.getElementById(messageId);
    if (!msgElement) return;
    
    const contentDiv = msgElement.querySelector('.message-content');
    if (!contentDiv) return;
    
    // Entferne vorherige Ladeanimation, falls vorhanden
    contentDiv.classList.remove('search-loading-animation');
    
    // Prüfe, ob wir aktuell im Thinking-Modus sind (auch unvollständige Tags berücksichtigen)
    const hasThinkingStart = content.includes('<think>');
    const hasThinkingEnd = content.includes('</think>');
    const isInThinkingMode = hasThinkingStart && !hasThinkingEnd;
    
    // Extrahiere den Thinking-Block, falls vollständig oder unvollständig
    let thinkingContent = '';
    let mainContent = '';
    
    if (hasThinkingStart) {
        if (hasThinkingEnd) {
            // Vollständiger Thinking-Block
            const thinkingMatch = content.match(/<think>([\s\S]*?)<\/think>/);
            if (thinkingMatch) {
                thinkingContent = thinkingMatch[1].trim();
                // Extrahiere den Hauptinhalt (alles nach dem letzten </think> Tag)
                const parts = content.split('</think>');
                if (parts.length > 1) {
                    mainContent = parts[parts.length - 1].trim();
                }
            }
        } else {
            // Unvollständiger Thinking-Block (noch keine Ende-Tag)
            const parts = content.split('<think>');
            if (parts.length > 1) {
                thinkingContent = parts[1].trim();
                mainContent = ''; // Noch kein Hauptinhalt, da Thinking noch nicht abgeschlossen
            }
        }
        
        // Prüfe oder erstelle den Thinking-Container
        let thinkingContainer = contentDiv.querySelector('.thinking-container');
        
        if (!thinkingContainer) {
            // Leere den contentDiv für die Neuanordnung
            contentDiv.innerHTML = '';
            
            // Erstelle den Thinking-Container, wenn er noch nicht existiert
            thinkingContainer = document.createElement('div');
            thinkingContainer.className = 'thinking-container';
            
            // Erstelle Header mit Toggle-Button
            const thinkingHeader = document.createElement('div');
            thinkingHeader.className = 'thinking-header';
            thinkingHeader.innerHTML = '<span>Gedankenprozess</span><button class="thinking-toggle">▼</button>';
            
            // Erstelle Content-Bereich für die Gedanken
            const thinkingContentDiv = document.createElement('div');
            thinkingContentDiv.className = 'thinking-content';
            
            // Füge Header und Content zum Container hinzu
            thinkingContainer.appendChild(thinkingHeader);
            thinkingContainer.appendChild(thinkingContentDiv);
            
            // Füge den Container oben in die contentDiv ein
            contentDiv.appendChild(thinkingContainer);
            
            // Erstelle einen Bereich für die Hauptantwort
            const mainContentDiv = document.createElement('div');
            mainContentDiv.className = 'main-content-area';
            contentDiv.appendChild(mainContentDiv);
            
            // Toggle-Funktionalität hinzufügen (durch Klick auf Header oder Button)
            thinkingHeader.addEventListener('click', function(e) {
                if (e.target !== this && e.target.className !== 'thinking-toggle') return;
                
                const content = this.nextElementSibling; // der Content ist das nächste Element nach dem Header
                const button = this.querySelector('.thinking-toggle');
                const isVisible = content.style.display !== 'none';
                
                // Toggle Content anzeigen/ausblenden
                content.style.display = isVisible ? 'none' : 'block';
                
                // Toggle-Button-Symbol ändern
                button.textContent = isVisible ? '▶' : '▼';
            });
        }
        
        // Aktualisiere den Thinking-Content
        const thinkingContentDiv = thinkingContainer.querySelector('.thinking-content');
        thinkingContentDiv.textContent = thinkingContent;  // Text direkt als Monospace anzeigen
        
        // Auto-Scroll in der Thinking-Box zum neuesten Inhalt
        thinkingContentDiv.scrollTop = thinkingContentDiv.scrollHeight;
        
        // Aktualisiere die Hauptantwort, falls vorhanden und der Thinking-Block abgeschlossen ist
        const mainContentDiv = contentDiv.querySelector('.main-content-area');
        if (mainContentDiv && mainContent) {
            try {
                // Prüfe, ob der Inhalt Bildgenerierungs-Tags enthält und verarbeite diese
                if (mainContent.includes('[BILD:')) {
                    mainContent = processImageGenerationTags(mainContent);
                }
                
                // HTML-Code komplett escapen, damit er als Text angezeigt wird
                let escapedContent = mainContent;
                
                // Spezielle Behandlung für Code-Blöcke
                escapedContent = mainContent.replace(/```([\s\S]*?)```/g, function(match, codeContent) {
                    // HTML innerhalb des Code-Blocks escapen
                    return '```' + escapeHtml(codeContent) + '```';
                });
                
                // HTML tags in normalen Text escapen (außerhalb von Code-Blöcken)
                escapedContent = escapedContent.replace(/<(?!span|\/span|a|\/a|p|\/p|em|\/em|strong|\/strong|b|\/b|i|\/i|code|\/code|pre|\/pre|ul|\/ul|ol|\/ol|li|\/li|h[1-6]|\/h[1-6]|hr|br|img|\/img|div|\/div)([^>]*)>/g, 
                    function(match) {
                        return escapeHtml(match);
                    }
                );
                
                // Verbesserte Markdown-Konvertierung
                const rawHtml = markdownConverter.makeHtml(escapedContent);
                
                // Setze den konvertierten HTML-Inhalt
                mainContentDiv.innerHTML = rawHtml;
                
                // Nachbearbeitung für Tabellen - füge Container für horizontales Scrollen hinzu
                enhanceTables(mainContentDiv);
                
                // Code-Blöcke verbessern und Kopieren-Buttons hinzufügen
                enhanceCodeBlocks(mainContentDiv);
            } catch (error) {
                console.error('Error rendering markdown for main content:', error);
                mainContentDiv.textContent = mainContent; // Fallback zur Textdarstellung
            }
        }
    } else {
        // Kein Thinking Block, zeige den normalen Inhalt
        try {
            // Prüfe, ob der Inhalt Bildgenerierungs-Tags enthält und verarbeite diese
            if (content.includes('[BILD:')) {
                content = processImageGenerationTags(content);
            }
            
            // HTML-Code komplett escapen, damit er als Text angezeigt wird
            let escapedContent = content;
            
            // Spezielle Behandlung für Code-Blöcke
            escapedContent = content.replace(/```([\s\S]*?)```/g, function(match, codeContent) {
                // HTML innerhalb des Code-Blocks escapen
                return '```' + escapeHtml(codeContent) + '```';
            });
            
            // HTML tags in normalen Text escapen (außerhalb von Code-Blöcken)
            escapedContent = escapedContent.replace(/<(?!span|\/span|a|\/a|p|\/p|em|\/em|strong|\/strong|b|\/b|i|\/i|code|\/code|pre|\/pre|ul|\/ul|ol|\/ol|li|\/li|h[1-6]|\/h[1-6]|hr|br|img|\/img|div|\/div)([^>]*)>/g, 
                function(match) {
                    return escapeHtml(match);
                }
            );
            
            // Verbesserte Markdown-Konvertierung
            const rawHtml = markdownConverter.makeHtml(escapedContent);
            
            // Sicherstellen, dass Tabellen korrekt gerendert werden
            contentDiv.innerHTML = rawHtml;
            
            // Nachbearbeitung für Tabellen - füge Container für horizontales Scrollen hinzu
            enhanceTables(contentDiv);
            
            // Code-Blöcke verbessern und Kopieren-Buttons hinzufügen
            enhanceCodeBlocks(contentDiv);
        } catch (error) {
            console.error('Error rendering markdown:', error);
            contentDiv.textContent = content; // Fallback zur Textdarstellung
        }
    }
    
    // Zum Ende scrollen, wenn sich Inhalt ändert
    setTimeout(() => {
        const chatBox = document.getElementById('chat-box');
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, 10);
}

/**
 * Finalizes a streaming message, renders Markdown and Math, and adds action buttons
 * @param {string} messageId - The ID of the message to finalize
 * @param {string} content - The final content to display
 */
function finalizeStreamingMessage(messageId, content) {
    const msgElement = document.getElementById(messageId);
    if (!msgElement) return;
    
    const contentDiv = msgElement.querySelector('.message-content');
    if (!contentDiv) return;
    
    // Entferne vorherige Ladeanimation, falls vorhanden
    contentDiv.classList.remove('search-loading-animation');
    
    // Extrahiere den Thinking-Block, falls vorhanden
    const thinkingMatch = content.match(/<think>([\s\S]*?)<\/think>/);
    let thinkingContent = '';
    let mainContent = '';
    
    // Wenn Thinking-Block vorhanden ist
    if (thinkingMatch) {
        thinkingContent = thinkingMatch[1].trim();
        // Extrahiere den Hauptinhalt (alles nach dem letzten </think> Tag)
        const parts = content.split('</think>');
        if (parts.length > 1) {
            mainContent = parts[parts.length - 1].trim();
        }
        
        // Leere den contentDiv für die Neuanordnung
        contentDiv.innerHTML = '';
        
        // Erstelle den Thinking-Container
        const thinkingContainer = document.createElement('div');
        thinkingContainer.className = 'thinking-container';
        
        // Erstelle Header mit Toggle-Button (standardmäßig eingeklappt)
        const thinkingHeader = document.createElement('div');
        thinkingHeader.className = 'thinking-header';
        thinkingHeader.innerHTML = '<span>Gedankenprozess</span><button class="thinking-toggle">▶</button>';
        
        // Erstelle Content-Bereich für die Gedanken
        const thinkingContentDiv = document.createElement('div');
        thinkingContentDiv.className = 'thinking-content';
        thinkingContentDiv.style.display = 'none'; // Standardmäßig eingeklappt
        thinkingContentDiv.textContent = thinkingContent;
        
        // Füge Header und Content zum Container hinzu
        thinkingContainer.appendChild(thinkingHeader);
        thinkingContainer.appendChild(thinkingContentDiv);
        
        // Füge den Container oben in die contentDiv ein
        contentDiv.appendChild(thinkingContainer);
        
        // Erstelle einen Bereich für die Hauptantwort
        const mainContentDiv = document.createElement('div');
        mainContentDiv.className = 'main-content-area';
        contentDiv.appendChild(mainContentDiv);
        
        // Toggle-Funktionalität hinzufügen
        thinkingHeader.addEventListener('click', function(e) {
            if (e.target !== this && e.target.className !== 'thinking-toggle') return;
            
            const content = this.nextElementSibling; // der Content ist das nächste Element nach dem Header
            const button = this.querySelector('.thinking-toggle');
            const isVisible = content.style.display !== 'none';
            
            // Toggle Content anzeigen/ausblenden
            content.style.display = isVisible ? 'none' : 'block';
            
            // Toggle-Button-Symbol ändern
            button.textContent = isVisible ? '▶' : '▼';
            
            // Wenn angezeigt wird, scrolle zum Ende der Thinking-Box
            if (!isVisible) {
                setTimeout(() => {
                    content.scrollTop = content.scrollHeight;
                }, 10);
            }
        });
        
        // Stelle sicher, dass die Thinking-Box zum letzten Inhalt scrollt, auch wenn sie ausgeblendet ist
        setTimeout(() => {
            thinkingContentDiv.scrollTop = thinkingContentDiv.scrollHeight;
        }, 10);
        
        // Verarbeite den Hauptinhalt
        try {
            // Prüfe, ob der Inhalt Bildgenerierungs-Tags enthält und verarbeite diese
            if (mainContent.includes('[BILD:')) {
                mainContent = processImageGenerationTags(mainContent);
            }
            
            // HTML-Code komplett escapen, damit er als Text angezeigt wird
            let escapedContent = mainContent;
            
            // Spezielle Behandlung für Code-Blöcke
            escapedContent = mainContent.replace(/```([\s\S]*?)```/g, function(match, codeContent) {
                // HTML innerhalb des Code-Blocks escapen
                return '```' + escapeHtml(codeContent) + '```';
            });
            
            // HTML tags in normalen Text escapen (außerhalb von Code-Blöcken)
            escapedContent = escapedContent.replace(/<(?!span|\/span|a|\/a|p|\/p|em|\/em|strong|\/strong|b|\/b|i|\/i|code|\/code|pre|\/pre|ul|\/ul|ol|\/ol|li|\/li|h[1-6]|\/h[1-6]|hr|br|img|\/img|div|\/div)([^>]*)>/g, 
                function(match) {
                    return escapeHtml(match);
                }
            );
            
            // Verbesserte Markdown-Konvertierung
            const rawHtml = markdownConverter.makeHtml(escapedContent);
            
            // Setze den konvertierten HTML-Inhalt
            mainContentDiv.innerHTML = rawHtml;
            
            // Nachbearbeitung für Tabellen - füge Container für horizontales Scrollen hinzu
            enhanceTables(mainContentDiv);
            
            // Code-Blöcke verbessern und Kopieren-Buttons hinzufügen
            enhanceCodeBlocks(mainContentDiv);
        } catch (error) {
            console.error('Error rendering markdown for main content:', error);
            mainContentDiv.textContent = mainContent; // Fallback zur Textdarstellung
        }
    } else {
        // Kein Thinking Block, zeige den normalen Inhalt
        try {
            // Prüfe, ob der Inhalt Bildgenerierungs-Tags enthält und verarbeite diese
            if (content.includes('[BILD:')) {
                content = processImageGenerationTags(content);
            }
            
            // HTML-Code komplett escapen, damit er als Text angezeigt wird
            let escapedContent = content;
            
            // Spezielle Behandlung für Code-Blöcke
            escapedContent = content.replace(/```([\s\S]*?)```/g, function(match, codeContent) {
                // HTML innerhalb des Code-Blocks escapen
                return '```' + escapeHtml(codeContent) + '```';
            });
            
            // HTML tags in normalen Text escapen (außerhalb von Code-Blöcken)
            escapedContent = escapedContent.replace(/<(?!span|\/span|a|\/a|p|\/p|em|\/em|strong|\/strong|b|\/b|i|\/i|code|\/code|pre|\/pre|ul|\/ul|ol|\/ol|li|\/li|h[1-6]|\/h[1-6]|hr|br|img|\/img|div|\/div)([^>]*)>/g, 
                function(match) {
                    return escapeHtml(match);
                }
            );
            
            // Verbesserte Markdown-Konvertierung
            const rawHtml = markdownConverter.makeHtml(escapedContent);
            
            // Sicherstellen, dass Tabellen korrekt gerendert werden
            contentDiv.innerHTML = rawHtml;
            
            // Nachbearbeitung für Tabellen - füge Container für horizontales Scrollen hinzu
            enhanceTables(contentDiv);
            
            // Code-Blöcke verbessern und Kopieren-Buttons hinzufügen
            enhanceCodeBlocks(contentDiv);
        } catch (error) {
            console.error('Error rendering markdown in finalization:', error);
            contentDiv.textContent = content; // Fallback zur Textdarstellung
            return;
        }
    }
    
    // Optional, if available: Find parent container and add copy button for entire response
    const messageContainer = msgElement.closest('.message-container');
    if (messageContainer) {
        const actionsContainer = messageContainer.querySelector('.message-actions-container');
        if (actionsContainer && !actionsContainer.querySelector('.copy-button')) {
            // Nur den Hauptinhalt kopieren, oder den gesamten Inhalt wenn kein Thinking Block vorhanden ist
            const textToCopy = thinkingMatch ? mainContent : content;
            appendCopyButton(actionsContainer, textToCopy);
        }
        
        // Optional add TTS (text-to-speech) button here if desired
    }
    
    // Update conversation history - speichere den vollständigen Inhalt mit Gedanken
    if (currentChatId && allChats[currentChatId]) {
        updateHistory('assistant', content);
        saveChatsToLocalStorage();
        
        // Prüfe, ob die letzte Verarbeitung länger als 10 Sekunden her ist
        const timeSinceLastProcessing = Date.now() - lastProcessingTime;
        
        // Bestimme, ob es sich um einen neuen Chat handelt (wenige Nachrichten)
        const isNewChat = allChats[currentChatId].history.length <= 4;
        
        // Verzögerung zufällig wählen (3-6 Sekunden), um zeitliche Kollisionen zu vermeiden
        const randomDelay = 3000 + Math.floor(Math.random() * 3000);
        
        if (timeSinceLastProcessing > metadataProcessingCooldown * 2 || lastProcessedChatId !== currentChatId) {
            // Bei neuen Chats warten wir länger, um den Server zu entlasten
            const delayTime = isNewChat ? randomDelay * 2 : randomDelay;
            
            console.log(`Starte Metadaten-Verarbeitung in ${Math.round(delayTime/1000)} Sekunden...`);
            setTimeout(() => processChatMetadata(), delayTime);
        } else {
            console.log(`Überspringe Metadaten-Verarbeitung (letzte Verarbeitung vor ${Math.round(timeSinceLastProcessing/1000)}s)`);
        }
    }
    
    // Ein letztes Mal zum Ende scrollen
    setTimeout(() => {
        const chatBox = document.getElementById('chat-box');
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, 50);
    
    // Stoppe das automatische Scrollen
    stopAutoScroll();
}

// --- Scroll chat to the bottom ---
function scrollToBottom() {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;
    
    // Verwende eine kleine Verzögerung, um sicherzustellen, dass neue Inhalte gerendert wurden
    setTimeout(() => {
    chatBox.scrollTop = chatBox.scrollHeight;
        console.log("📜 Scroll to bottom: Scrolled to", chatBox.scrollHeight);
    }, 10);
}

// Variablen für Auto-Scroll-Funktion
let autoScrollInterval = null;
let lastScrollHeight = 0;

function startAutoScroll() {
    // Beende zuerst alle eventuell noch laufenden Intervalle
    stopAutoScroll();
    
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;
    
    console.log("🔄 Auto-Scroll gestartet");
    lastScrollHeight = chatBox.scrollHeight;
    
    // Initiales Scrollen
    scrollToBottom();
    
    // Regelmäßig überprüfen, ob sich der Inhalt geändert hat
    autoScrollInterval = setInterval(() => {
        if (chatBox.scrollHeight > lastScrollHeight) {
            chatBox.scrollTop = chatBox.scrollHeight;
            lastScrollHeight = chatBox.scrollHeight;
            console.log("🔄 Auto-Scroll: Neuer Inhalt erkannt, scrolle nach unten");
        }
    }, 300);
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        console.log("⏹️ Auto-Scroll gestoppt");
    }
    
    // Ein letztes Mal zum Ende scrollen
    scrollToBottom();
}

// --- Prepare System Prompt With Memories ---
function getEnhancedSystemPrompt() {
    // SYSTEM_PROMPT wird global definiert, stellt sicher, dass wir einen Fallback haben
    const basePrompt = window.SYSTEM_PROMPT || `Du bist ein hilfreicher KI-Assistent.

Deine Antworten können kreativ oder informativ sein, je nach Kontext. Für Entscheidungen wäge verschiedene Optionen ab. Antworte auf der gleichen Sprache, in der der Benutzer fragt. Verwende die Du-Form.`;

    console.log("🧠 Hole gespeicherte Erinnerungen...");
    
    // Memories zusammenfügen
    const memoriesBackupString = localStorage.getItem('memories_backup');
    if (memoriesBackupString) {
        try {
            memoriesBackup = JSON.parse(memoriesBackupString);
            console.log(`📚 ${memoriesBackup.length} Erinnerungen im Backup gefunden`);
        } catch (e) {
            console.error("❌ Fehler beim Laden des Erinnerungs-Backups:", e);
            memoriesBackup = [];
        }
    }
    
    // Erinnerungsliste aufbauen
    let memoriesList = "";
    const allMemories = [...globalMemories, ...memoriesBackup];
    
    // Deduplizieren der Erinnerungen basierend auf ihrem Text
    const uniqueMemories = Array.from(new Set(allMemories));
    
    if (uniqueMemories.length > 0) {
        memoriesList = uniqueMemories.map((memory, index) => `${index + 1}. ${memory}`).join('\n');
        console.log(`📋 ${uniqueMemories.length} Erinnerungen in Systemprompt eingefügt`);
    } else {
        memoriesList = "Keine gespeicherten Erinnerungen vorhanden.";
        console.log("ℹ️ Keine Erinnerungen zum Einfügen");
    }
    
    // Erweitertes System-Prompt mit Erinnerungen
    const enhancedPrompt = {
        role: "system",
        content: `${basePrompt}

WICHTIGE BENUTZERINFORMATIONEN (Berücksichtige diesen Kontext in Deinen Antworten):
${memoriesList}

Berücksichtige bitte die obigen Informationen über den Benutzer in Deinen Antworten. Du solltest auf diese Informationen Bezug nehmen, wenn sie eindeutig für das Gespräch relevant sind, aber erwähne nicht explizit, dass Du "gespeicherte Erinnerungen" oder ähnliche technische Begriffe verwendest.`
    };
    
    console.log("✅ Erweiterter System-Prompt erstellt");
    return enhancedPrompt;
}

// --- Handle sending a message (STREAMING) ---
async function sendMessage(retryCount = 0) {
    const messageText = userInput.value.trim();
    
    const currentFiles = selectedFiles ? [...selectedFiles] : null;

    if (!messageText && (!currentFiles || currentFiles.length === 0)) return;

    // Existing rate-limit code
    if (isRateLimitCooldown && retryCount === 0) {
        console.log("⚠️ API-Cooldown ist aktiv, Anfrage wird verzögert");
        showNotification("API-Limit wurde erreicht. Bitte warte einen Moment.", 3000);
        return;
    }
    
    // Existing API request time handling
    const now = Date.now();
    if (retryCount === 0 && now - lastApiRequestTime < 1000) {
        const waitTime = 1000 - (now - lastApiRequestTime);
        console.log(`⚠️ API-Anfragen zu schnell, warte ${waitTime}ms`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    if (retryCount === 0) {
        lastApiRequestTime = Date.now();
    }

    const isRetry = retryCount > 0;
    
    if (!isRetry) {
    setInputAreaDisabled(true);
    }

    let userMessageContent = {};
    let apiMessagePayload = { role: "user", content: [] };

    // Add user message only on first attempt, not on retry
    if (!isRetry) {
    if (messageText) {
        userMessageContent.text = messageText;
        apiMessagePayload.content.push({ type: "text", text: messageText });
    }

        if (currentFiles && currentFiles.length > 0) {
            // Store file information for display
            userMessageContent.files = [];
            
            // We'll store images separately for backward compatibility
            userMessageContent.imageSrcs = [];
            
            // Process each file
            try {
                for (const file of currentFiles) {
                    // Add name and size metadata to all files for better tracking
                    const fileMetadata = {
                        name: file.name,
                        size: formatFileSize(file.size)
                    };
                    
                    if (file.type.startsWith('image/')) {
                        // Handle images for vision-enabled models
                        const base64Image = await fileToBase64Data(file);
                        const imageFormat = file.type.split('/')[1] || 'jpeg';
                        const imageSrcForDisplay = `data:image/${imageFormat};base64,${base64Image}`;
                        
                        // Add to legacy image array
                        userMessageContent.imageSrcs.push(imageSrcForDisplay);
                        
                        // Add to files array with proper metadata
                        userMessageContent.files.push({
                            type: 'image',
                            name: file.name,
                            src: imageSrcForDisplay,
                            size: formatFileSize(file.size)
                        });
                        
                        // Add to API payload with name and size metadata
            apiMessagePayload.content.push({
                type: "image_url",
                            image_url: { url: `data:image/${imageFormat};base64,${base64Image}` },
                            ...fileMetadata
                        });
                    } else {
                        // Handle non-image files
                        try {
                            // Extract text content where possible
                            const fileContent = await extractFileContent(file);
                            
                            // Add to files array for display
                            userMessageContent.files.push({
                                type: 'document',
                                name: file.name,
                                size: formatFileSize(file.size),
                                format: getFileExtension(file.name)
                            });
                            
                            // Add document content to API payload
                            const fileDescription = `--- Datei: ${file.name} (${formatFileSize(file.size)}) ---\n\n`;
                            apiMessagePayload.content.push({ 
                                type: "text", 
                                text: fileDescription + fileContent,
                                ...fileMetadata
                            });
                            
        } catch (error) {
                            console.error(`Error processing file ${file.name}:`, error);
                            addInternalMessage(`Fehler beim Verarbeiten der Datei "${file.name}".`);
                        }
                    }
                }
            } catch (error) {
                console.error("Error processing files:", error);
                addInternalMessage('Fehler beim Verarbeiten der Dateien.');
            resetInputArea();
            return;
        }
    }

    // Display user message & add to history
    addMessage('user', userMessageContent);
        updateHistory('user', apiMessagePayload.content);
        saveChatsToLocalStorage();

        // Update chat history list
    updateChatHistoryList();

    userInput.value = '';
        clearImagePreview(); // Now clears all files
        adjustTextAreaHeight();
        updateSendButtonState();
    }

    // Setup for Streaming Response
    // Erstelle die AI-Antwortblase bereits vor der Websuche, um die Animation anzuzeigen
    const aiMessageId = `ai-msg-${retryCount > 0 ? `retry-${retryCount}` : Date.now()}`;
    
    // Wenn wir einen Retry machen und das vorherige Element noch existiert, entfernen wir es
    if (isRetry) {
        const previousId = `ai-msg-retry-${retryCount-1}`;
        const previousElement = document.getElementById(previousId);
        if (previousElement) {
            const container = previousElement.closest('.message-container');
            if (container) container.remove();
        }
    }
    
    // Füge die neue Nachricht hinzu (jetzt immer, auch vor der Websuche)
    const initialText = isRetry ? 'Versuche erneut zu antworten...' : '';
    addMessage('ai', { text: initialText }, aiMessageId);
    
    // Lade-Animation für die KI-Nachricht während der Websuche
    if (!isRetry && webSearchEnabled && messageText) {
        // Finde die gerade erstellte Nachricht und aktualisiere sie mit der Ladeanimation
        const msgElement = document.getElementById(aiMessageId);
        if (msgElement) {
            const contentDiv = msgElement.querySelector('.message-content');
            if (contentDiv) {
                contentDiv.classList.add('search-loading-animation');
                contentDiv.innerHTML = 'Führe Websuche durch...';
            }
        }
        
        try {
            // Zeige Suchstatus an
            showNotification("KI-Websuche wird durchgeführt...", 2000);
            
            // Führe die KI-Websuche mit searchgpt durch
            const searchResults = await performAIWebSearch(messageText);
            
            // Entferne die Ladeanimation nach Abschluss der Suche
            if (msgElement) {
                const contentDiv = msgElement.querySelector('.message-content');
                if (contentDiv) {
                    contentDiv.classList.remove('search-loading-animation');
                    contentDiv.innerHTML = 'Erstelle Antwort...';
                }
            }
            
            // Wenn Suchergebnisse gefunden wurden, füge sie als zusätzliche Systemnachricht ein
            if (searchResults.success && searchResults.content) {
                // Bereite den Inhalt für die Systemnachricht vor
                const searchContent = `Ergebnisse der Web-Suche zu "${messageText}":\n\n${searchResults.content}\n\nBitte berücksichtige diese Informationen in deiner Antwort und bette die Quellenlinks direkt im Text ein. Verwende beim Zitieren von Fakten die Quellen mit dem Format <span style="color: var(--accent-green)">[domain.de](URL)</span> statt [Quelle: Name](URL). Zitiere Fakten NICHT ohne Quellenangabe und setze die Links immer in grün.`;
                
                console.log("📄 KI-Suchergebnisse für Kontext:", searchContent);
                
                // Füge die Suchergebnisse als Systemnachricht in die Konversation ein
                if (currentChatId && allChats[currentChatId]) {
                    allChats[currentChatId].history.push({
                        role: "system",
                        content: searchContent
                    });
                    saveChatsToLocalStorage();
                }
                
                console.log("✅ KI-Websuche erfolgreich durchgeführt");
                showNotification("KI-Websuche abgeschlossen", 2000);
            } else if (searchResults.error) {
                console.warn("⚠️ Fehler bei der KI-Websuche:", searchResults.error);
                showNotification("Fehler bei der KI-Websuche", 2000);
                
                // Aktualisiere die Nachricht bei Fehler
                if (msgElement) {
                    const contentDiv = msgElement.querySelector('.message-content');
                    if (contentDiv) {
                        contentDiv.classList.remove('search-loading-animation');
                        contentDiv.innerHTML = 'Erstelle Antwort ohne Websuche...';
                    }
                }
            } else {
                console.log("ℹ️ Keine KI-Suchergebnisse gefunden");
                showNotification("Keine relevanten Suchergebnisse gefunden", 2000);
                
                // Aktualisiere die Nachricht, wenn keine Ergebnisse gefunden wurden
                if (msgElement) {
                    const contentDiv = msgElement.querySelector('.message-content');
                    if (contentDiv) {
                        contentDiv.classList.remove('search-loading-animation');
                        contentDiv.innerHTML = 'Erstelle Antwort mit eingeschränkten Informationen...';
                    }
                }
            }
        } catch (error) {
            console.error("❌ Fehler bei der KI-Websuche:", error);
            showNotification("Fehler bei der KI-Websuche", 2000);
            
            // Aktualisiere die Nachricht bei Ausnahmefehlern
            const msgElement = document.getElementById(aiMessageId);
            if (msgElement) {
                const contentDiv = msgElement.querySelector('.message-content');
                if (contentDiv) {
                    contentDiv.classList.remove('search-loading-animation');
                    contentDiv.innerHTML = 'Erstelle Antwort ohne Websuche...';
                }
            }
        }
    }
    
    let fullAiResponse = "";
    abortStreamController = new AbortController();
    
    // Starte das automatische Scrollen
    startAutoScroll();

    // Get chat history with enhanced system prompt
    const chatHistory = [...allChats[currentChatId]?.history || []];
    if (chatHistory.length > 0 && chatHistory[0].role === 'system') {
        chatHistory[0] = getEnhancedSystemPrompt();
    } else {
        chatHistory.unshift(getEnhancedSystemPrompt());
    }

    try {
        // Versuche abzubrechen, falls ein vorheriger Retry noch läuft
        const signal = abortStreamController?.signal;
        
        console.log(`🚀 Sende API-Anfrage (Versuch ${retryCount + 1})`);
        
        // API-Parameter vorbereiten
        const apiParams = {
                model: currentModel, // Use the current selected model
                messages: chatHistory, // Use chat history with enhanced system prompt
                stream: true,
                private: true,
        };
        
        // Spezielle Anweisung für das Reasoning-Modell, um chinesische Schriftzeichen zu vermeiden
        if (currentModel === MODEL_OPTIONS.REASONING) {
            apiParams.messages.push({
                role: "system",
                content: "WICHTIGE ANWEISUNG FÜR DAS KI-MODELL: Du darfst in deinen Antworten und Gedanken AUSSCHLIESSLICH das lateinische Alphabet und entsprechende westliche Schriftzeichen verwenden. Benutze unter KEINEN Umständen chinesische, japanische, koreanische oder andere nicht-lateinische Schriftzeichen in deinen Gedanken (<think>-Tags) oder Antworten. Alle deine Ausgaben müssen ausschließlich in der Sprache des Nutzers (z.B. Deutsch, Englisch, Französisch) erfolgen, ohne jegliche Verwendung von asiatischen Schriftzeichen. Dies ist eine ABSOLUTE ANFORDERUNG.\n\nBESCHRÄNKUNG DER GEDANKENLÄNGE: Beschränke deine Gedanken innerhalb der <think>-Tags auf MAXIMAL 7500 Zeichen. Die API schneidet längere Antworten ab, was zu unvollständigen Antworten führt. Sei präzise und klar in deinen Gedanken, aber halte sie unter diesem Limit von 7500 Zeichen. Wenn du merkst, dass deine Gedanken zu lang werden, fasse sie zusammen und konzentriere dich auf die wichtigsten Aspekte."
            });
        }
        
        // Aktuelle Datum und Uhrzeit hinzufügen
        const currentDateTime = getCurrentDateTimeInfo();
        apiParams.messages.push({
            role: "system",
            content: currentDateTime
        });
        
        console.log(`🚀 Sende API-Anfrage an ${currentModel}`);
        
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
            body: JSON.stringify(apiParams),
            signal: signal
        });

        if (!response.ok) {
            const errorText = await response.text();
            
            // Wenn wir einen erfolgreichen Request haben, setze den Zähler für Rate-Limit-Fehler zurück
            if (retryCount === 0) {
                consecutiveRateLimitErrors = 0;
            }
            
            // Verbesserte Fehlerbehandlung für spezifische HTTP-Statuscodes
            if (response.status === 429 || (response.status === 500 && errorText.includes("429"))) {
                console.warn("⚠️ API-Rate-Limit erreicht (Status: " + response.status + ")");
                console.log("📄 Fehlermeldung:", errorText);
                
                // Erhöhe den Zähler für aufeinanderfolgende Rate-Limit-Fehler
                consecutiveRateLimitErrors++;
                
                // Bei mehrfachen Rate-Limit-Fehlern verwenden wir einen exponentiellen Backoff
                const baseRetryDelay = 3000; // 3 Sekunden Basis
                const retryMultiplier = Math.min(5, Math.pow(1.5, consecutiveRateLimitErrors)); // Exponentieller Faktor, max 5x
                const retryDelay = Math.min(30000, Math.round(baseRetryDelay * retryMultiplier)); // Maximal 30 Sekunden
                
                console.log(`⚠️ Aufeinanderfolgende Rate-Limit-Fehler: ${consecutiveRateLimitErrors}, Verzögerung: ${retryDelay/1000}s`);
                
                // Aktualisiere die Platzhalternachricht mit einer benutzerfreundlichen Meldung
                const msgElement = document.getElementById(aiMessageId);
                if (msgElement) {
                    const contentDiv = msgElement.querySelector('.message-content');
                    if (contentDiv) {
                        contentDiv.classList.remove('search-loading-animation');
                        contentDiv.innerHTML = `<span style="color: var(--warning-orange);">Das API-Anfragelimit wurde erreicht. Warte ${retryDelay/1000} Sekunden auf automatischen Wiederholungsversuch...</span>`;
                    }
                }
                
                // Zeige Benachrichtigung, aber nicht für jede wiederholte Anfrage
                if (retryCount === 0) {
                    showNotification(`API-Limit erreicht. Automatischer Wiederholungsversuch in ${retryDelay/1000} Sekunden...`, 5000);
                }
                
                // Aktiviere globalen Rate-Limit-Cooldown
                isRateLimitCooldown = true;
                
                // Nach Ablauf des regulären Cooldowns wieder deaktivieren
                setTimeout(() => {
                    isRateLimitCooldown = false;
                }, retryDelay * 1.5); // Etwas länger als der eigentliche Retry
                
                // Maximale Anzahl von Wiederholungen
                if (retryCount < 3) { // Reduziert von 5 auf 3 maximale Versuche
                    // Setze einen Timeout und speichere ihn für mögliche Abbrüche
                    const retryTimerId = setTimeout(() => {
                        console.log(`🔄 Starte Wiederholungsversuch ${retryCount + 1}`);
                        // Stelle sicher, dass die vorherige abortController abgebrochen wurde
                        if (abortStreamController) {
                            abortStreamController.abort();
                        }
                        // Erstelle einen neuen abortController
                        abortStreamController = new AbortController();
                        // Deaktiviere Cooldown für diesen speziellen Retry
                        const tempCooldown = isRateLimitCooldown;
                        isRateLimitCooldown = false;
                        sendMessage(retryCount + 1);
                        isRateLimitCooldown = tempCooldown;
                    }, retryDelay);
                    
                    // Speichere die timeoutId, um sie bei Bedarf abbrechen zu können
                    window._retryTimeoutId = retryTimerId;
                } else {
                    // Nach 3 Versuchen aufgeben
                    showNotification("Maximale Anzahl von Wiederholungsversuchen erreicht. Bitte versuche es später erneut.", 5000);
                    
                    if (msgElement) {
                        const contentDiv = msgElement.querySelector('.message-content');
                        if (contentDiv) {
                            contentDiv.classList.remove('search-loading-animation');
                            contentDiv.innerHTML = `<span style="color: var(--error-red);">Die maximale Anzahl von Wiederholungsversuchen wurde erreicht. Bitte versuche es später erneut.</span>`;
                        }
                    }
                }
                
                return; // Beende die Funktion hier, um den Wiederholungsversuch abzuwarten
            } else {
                // Bei anderen Fehlern setzen wir den Rate-Limit-Zähler zurück
                consecutiveRateLimitErrors = 0;
            }
            
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        // Entferne die Lade-Animation, falls noch vorhanden
        const msgElement = document.getElementById(aiMessageId);
        if (msgElement) {
            const contentDiv = msgElement.querySelector('.message-content');
            if (contentDiv && contentDiv.classList.contains('search-loading-animation')) {
                contentDiv.classList.remove('search-loading-animation');
                contentDiv.innerHTML = '';
            }
        }

        // Bei erfolgreicher Anfrage setzen wir den Zähler zurück
        consecutiveRateLimitErrors = 0;

        // Process Stream
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n\n");
            buffer = lines.pop(); // Keep potential partial line

            for (const line of lines) {
                if (line.startsWith("data: ")) {
                    const dataStr = line.substring(6).trim();
                    if (dataStr === "[DONE]") continue; // Handled by `done`
                    try {
                        const chunk = JSON.parse(dataStr);
                        const content = chunk?.choices?.[0]?.delta?.content;
                        if (content) {
                            fullAiResponse += content;
                            updateStreamingMessage(aiMessageId, fullAiResponse); // Re-render Markdown
                        }
                    } catch (e) { console.error("Failed to parse stream chunk:", dataStr, e); }
                }
            }
        } // end while

        finalizeStreamingMessage(aiMessageId, fullAiResponse); // Final render + TTS button
        
        // Löschen des Timeout, falls einer existiert
        if (window._retryTimeoutId) {
            clearTimeout(window._retryTimeoutId);
            window._retryTimeoutId = null;
        }

    } catch (error) {
        // Entferne die Reasoning-Modell-Fallback-Logik und behandle alle Fehler gleich
        handleStreamError(error, aiMessageId);
    } finally {
        resetInputArea();
        abortStreamController = null;
        stopAutoScroll(); // Sicherstellen, dass das Auto-Scroll gestoppt wird
    }
}

// --- Update Conversation History ---
function updateHistory(role, content) {
    // Check if we have a valid chat to update
    if (!currentChatId || !allChats[currentChatId]) {
        console.error("Cannot update history: No current chat ID or chat not found");
        return;
    }
    
    // For user messages with file uploads, we need to store the file info
    if (role === 'user' && Array.isArray(content)) {
        // Save files information for later display
        const fileInfoArray = [];
        let hasFileContent = false;
        
        content.forEach(item => {
            if (item.type === 'image_url' && item.image_url) {
                fileInfoArray.push({
                    type: 'image',
                    src: item.image_url.url,
                    name: item.name || 'Image',
                    size: item.size || ''
                });
                hasFileContent = true;
            } else if (item.type === 'text' && item.text && item.text.startsWith('--- Datei:')) {
                // Extract file info from the document description
                const fileNameMatch = item.text.match(/--- Datei: (.+?) \(/);
                const fileSizeMatch = item.text.match(/\((.+?)\)/);
                
                if (fileNameMatch && fileSizeMatch) {
                    fileInfoArray.push({
                        type: 'document',
                        name: fileNameMatch[1],
                        size: fileSizeMatch[1],
                        format: getFileExtension(fileNameMatch[1])
                    });
                    hasFileContent = true;
                }
            }
        });
        
        // Store file info in a metadata field
        if (hasFileContent) {
            allChats[currentChatId].history.push({
                role: role,
                content: content,
                fileInfo: fileInfoArray  // Store file metadata for display
            });
    } else {
            // No files, just regular content
            allChats[currentChatId].history.push({
                role: role,
                content: content
            });
        }
    } else {
        // For AI messages or simple user messages without files
        allChats[currentChatId].history.push({
            role: role,
            content: content
        });
    }
    
    console.log(`Added ${role} message to history`);
}

// --- Handle Stream Errors ---
function handleStreamError(error, messageId) {
    const msgElement = document.getElementById(messageId);
    let errorText = `Stream Error: ${error.message}`;

    if (error.name === 'AbortError') {
        console.log('Stream fetch aborted.');
        if (msgElement) msgElement.remove();
        // Use current chat history
        const currentChatHistory = allChats[currentChatId]?.history;
        if (currentChatHistory && currentChatHistory[currentChatHistory.length - 1]?.role === 'assistant') {
             currentChatHistory.pop();
             saveChatsToLocalStorage();
             updateChatHistoryList();
        }
        return;
    }

    console.error("Error during streaming:", error);

    // Prüfe auf spezifische Fehlertypen, um benutzerfreundlichere Meldungen anzuzeigen
    let userFriendlyMessage = errorText;
    
    // Prüfe auf Rate-Limit Fehler (429)
    if (error.message && (error.message.includes("429") || error.message.includes("Too Many Requests"))) {
        userFriendlyMessage = "Das API-Anfragelimit wurde erreicht. Bitte warte einen Moment und versuche es erneut.";
        console.log("⏳ Rate-Limit erreicht (429 Fehler). Warte auf Reset des Limits...");
        
        // Aktiviere Rate-Limit-Cooldown
        isRateLimitCooldown = true;
        consecutiveRateLimitErrors++;
        
        // Berechne die Cooldown-Zeit basierend auf der Anzahl der aufeinanderfolgenden Fehler
        const cooldownTime = Math.min(60000, RATE_LIMIT_COOLDOWN * Math.pow(2, consecutiveRateLimitErrors - 1));
        
        console.log(`⏳ API-Cooldown aktiv für ${cooldownTime/1000} Sekunden`);
        
        // Setze Timer zum Zurücksetzen des Cooldowns
        setTimeout(() => {
            isRateLimitCooldown = false;
            console.log("✅ API-Cooldown beendet, Anfragen sind wieder möglich");
        }, cooldownTime);
        
        // Zeige eine Benachrichtigung an
        showNotification(`API-Limit erreicht. Bitte warte ${Math.round(cooldownTime/1000)} Sekunden.`, 5000);
    } 
    // Prüfe auf Server-Fehler (500)
    else if (error.message && error.message.includes("500")) {
        if (error.message.includes("429") || error.message.includes("Too Many Requests")) {
            userFriendlyMessage = "Das API-Anfragelimit wurde erreicht. Bitte warte einen Moment und versuche es erneut.";
            console.log("⏳ Rate-Limit erreicht (500/429 Fehler). Warte auf Reset des Limits...");
            
            // Aktiviere Rate-Limit-Cooldown
            isRateLimitCooldown = true;
            consecutiveRateLimitErrors++;
            
            // Berechne die Cooldown-Zeit basierend auf der Anzahl der aufeinanderfolgenden Fehler
            const cooldownTime = Math.min(60000, RATE_LIMIT_COOLDOWN * Math.pow(2, consecutiveRateLimitErrors - 1));
            
            console.log(`⏳ API-Cooldown aktiv für ${cooldownTime/1000} Sekunden`);
            
            // Setze Timer zum Zurücksetzen des Cooldowns
            setTimeout(() => {
                isRateLimitCooldown = false;
                console.log("✅ API-Cooldown beendet, Anfragen sind wieder möglich");
            }, cooldownTime);
            
            // Zeige eine Benachrichtigung an
            showNotification(`API-Limit erreicht. Bitte warte ${Math.round(cooldownTime/1000)} Sekunden.`, 5000);
        } else {
            userFriendlyMessage = "Ein Serverfehler ist aufgetreten. Bitte versuche es später erneut.";
            showNotification("Serverfehler. Bitte versuche es später erneut.", 5000);
        }
    } else {
        // Bei anderen Fehlern setzen wir den Rate-Limit-Zähler zurück
        consecutiveRateLimitErrors = 0;
    }

    if (msgElement) {
       const contentDiv = msgElement.querySelector('.message-content');
       if (contentDiv) contentDiv.innerHTML = `<span style="color: var(--error-red);">${userFriendlyMessage}</span>`;
    } else {
        addInternalMessage(userFriendlyMessage);
    }

    // Clean up history if placeholder was added, then SAVE
    // Use current chat history
    const currentChatHistoryOnErr = allChats[currentChatId]?.history;
    if (currentChatHistoryOnErr && currentChatHistoryOnErr[currentChatHistoryOnErr.length - 1]?.role === 'assistant') {
        currentChatHistoryOnErr.pop();
        saveChatsToLocalStorage();
        updateChatHistoryList();
    }
}

// --- Add Internal Error/Info Message ---
function addInternalMessage(text) {
    // Use a more specific class or style for internal messages if desired
    addMessage('ai', { text: `<span class="internal-error">${escapeHtml(text)}</span>` });
}


// --- Disable/Enable Input Area ---
function setInputAreaDisabled(disabled) {
    inputArea.dataset.disabled = disabled.toString(); // Use data attribute for styling
    userInput.disabled = disabled;
    sendButton.disabled = disabled || (!userInput.value.trim() && !selectedFiles); // Also check content
    uploadButton.disabled = disabled;
}

// --- Reset Input Area State ---
function resetInputArea() {
    setInputAreaDisabled(false);
    userInput.focus();
}

// --- Handle Image Selection ---
function handleImageUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    // Check if we're trying to add too many images
    if (selectedFiles && selectedFiles.length + files.length > 4) {
        showNotification("Maximal 4 Bilder erlaubt", 3000);
        return;
    }
    
    // Initialize the array if it doesn't exist
    if (!selectedFiles) {
        selectedFiles = [];
    }
    
    // Process each selected file
    for (let i = 0; i < files.length && selectedFiles.length < 4; i++) {
        const file = files[i];
    if (file && file.type.startsWith('image/')) {
            selectedFiles.push(file);
        displayImagePreview(file);
    }
    }
    
    fileInput.value = null; // Reset file input
    updateSendButtonState(); // Update send button based on selection
}

// --- Display Image Preview ---
function displayImagePreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        // Create preview container if it doesn't exist yet
        if (imagePreviewContainer.style.display === 'none') {
        imagePreviewContainer.innerHTML = '';
            imagePreviewContainer.style.display = 'flex';
            imagePreviewContainer.style.position = 'absolute';
            imagePreviewContainer.style.bottom = '100%'; // Position above input field
            imagePreviewContainer.style.left = '0';
            imagePreviewContainer.style.right = '0';
            imagePreviewContainer.style.flexWrap = 'wrap';
            imagePreviewContainer.style.gap = '5px';
            imagePreviewContainer.style.padding = '5px';
            imagePreviewContainer.style.backgroundColor = 'var(--bg-color)';
            imagePreviewContainer.style.borderTop = '1px solid var(--border-color)';
            imagePreviewContainer.style.borderRadius = '5px 5px 0 0';
            imagePreviewContainer.style.zIndex = '10';
        }
        
        // Create an image preview element
        const previewWrapper = document.createElement('div');
        previewWrapper.classList.add('image-preview-wrapper');
        previewWrapper.style.position = 'relative';
        previewWrapper.style.width = '80px';
        previewWrapper.style.height = '80px';
        previewWrapper.style.margin = '2px';
        
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Preview';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '4px';
        
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-image-button');
        removeBtn.innerHTML = '&times;';
        removeBtn.title = 'Bild entfernen';
        removeBtn.style.position = 'absolute';
        removeBtn.style.top = '0';
        removeBtn.style.right = '0';
        removeBtn.style.background = 'rgba(0,0,0,0.5)';
        removeBtn.style.color = 'white';
        removeBtn.style.border = 'none';
        removeBtn.style.borderRadius = '0 4px 0 4px';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.fontSize = '16px';
        removeBtn.style.padding = '0 5px';
        
        // Store the file reference to identify which image to remove
        removeBtn.dataset.fileIndex = selectedFiles.indexOf(file);
        
        removeBtn.onclick = function(event) {
            event.stopPropagation();
            const fileIndex = parseInt(this.dataset.fileIndex);
            // Remove this specific image
            if (fileIndex >= 0 && fileIndex < selectedFiles.length) {
                selectedFiles.splice(fileIndex, 1);
                previewWrapper.remove();
                
                // If no images left, hide the container
                if (selectedFiles.length === 0) {
                    imagePreviewContainer.style.display = 'none';
                    selectedFiles = null;
                } else {
                    // Update indices for remaining remove buttons
                    const remainingButtons = imagePreviewContainer.querySelectorAll('.remove-image-button');
                    remainingButtons.forEach((btn, idx) => {
                        btn.dataset.fileIndex = idx;
                    });
                }
                
                updateSendButtonState();
            }
        };
        
        previewWrapper.appendChild(img);
        previewWrapper.appendChild(removeBtn);
        imagePreviewContainer.appendChild(previewWrapper);
    }
    reader.readAsDataURL(file);
}

// --- Clear All Image Previews ---
function clearImagePreview(event) {
    if(event) event.stopPropagation(); // Prevent triggering other clicks if called from button
    selectedFiles = null;
    imagePreviewContainer.innerHTML = '';
    imagePreviewContainer.style.display = 'none';
    fileInput.value = null;
    updateSendButtonState(); // Update send button state
    userInput.focus(); // Focus input after removing image
}

// --- Adjust Textarea Height --- (Simple version)
function adjustTextAreaHeight() {
    userInput.style.height = 'auto'; // Reset height
    let scrollHeight = userInput.scrollHeight;
    const maxHeight = 150; // Match CSS max-height
    if (scrollHeight > maxHeight) {
        userInput.style.height = maxHeight + 'px';
    } else {
        userInput.style.height = scrollHeight + 'px';
    }
}

// --- Update Send Button State ---
function updateSendButtonState() {
    const hasText = userInput.value.trim().length > 0;
    const hasImages = selectedFiles && selectedFiles.length > 0;
    sendButton.disabled = !hasText && !hasImages;
}

// --- Event Listeners ---
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!sendButton.disabled) {
             sendMessage();
        }
    }
    // Adjust height slightly delayed to catch paste etc.
    setTimeout(adjustTextAreaHeight, 0);
});
userInput.addEventListener('input', () => {
    adjustTextAreaHeight();
    updateSendButtonState();
});
uploadButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleImageUpload);

// --- Local Storage Functions ---
function saveChatsToLocalStorage() {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allChats));
    } catch (error) {
        console.error("Error saving chats to localStorage:", error);
        // Optionally notify the user that saving failed
    }
}

function loadChatsFromLocalStorage() {
    try {
        const storedChats = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedChats) {
            allChats = JSON.parse(storedChats);
            // Ensure all chats have a history array starting with system prompt if empty
            Object.values(allChats).forEach(chat => {
                if (!chat.history || chat.history.length === 0) {
                    chat.history = [SYSTEM_PROMPT];
                }
            });
        } else {
            allChats = {};
        }
    } catch (error) {
        console.error("Error loading chats from localStorage:", error);
        allChats = {}; // Reset to empty if loading fails
    }
}

function getChatTitle(chatHistory, customTitle) {
    // Return custom title if provided
    if (customTitle) return customTitle;
    
    // Find the first user message with text content
    const firstUserTextMessage = chatHistory.find(msg => msg.role === 'user' && Array.isArray(msg.content) && msg.content.find(part => part.type === 'text'));
    if (firstUserTextMessage) {
        const textPart = firstUserTextMessage.content.find(part => part.type === 'text');
        const text = textPart.text.trim();
        if (text) {
             // Take first few words, up to ~20 chars (reduziert von 35)
            const words = text.split(' ');
            let title = '';
            for (const word of words) {
                if ((title + word).length < 20) {
                    title += (title ? ' ' : '') + word;
                } else {
                    break;
                }
            }
            return title + (text.length > title.length ? '...' : '');
        }
    }

    // Fallback for older format or text-only user messages (less likely now)
    const legacyFirstUserMessage = chatHistory.find(msg => msg.role === 'user' && typeof msg.content === 'string' && msg.content.trim());
     if (legacyFirstUserMessage) {
        const text = legacyFirstUserMessage.content.trim();
        const words = text.split(' ');
        let title = '';
        for (const word of words) {
            if ((title + word).length < 20) {
                title += (title ? ' ' : '') + word;
            } else {
                break;
            }
        }
        return title + (text.length > title.length ? '...' : '');
    }

    // Fallback if first user message is image-only
    const firstUserImage = chatHistory.find(msg => msg.role === 'user' && Array.isArray(msg.content) && msg.content.some(part => part.type === 'image_url'));
    if (firstUserImage) {
        return "Chat mit Bild";
    }

    return "Neuer Chat"; // Should rarely happen now
}

// --- Chat Management Functions ---
function createNewChat() {
    console.log('[DEBUG] SYSTEM_PROMPT inside createNewChat:', typeof SYSTEM_PROMPT);
    const newChatId = `chat-${Date.now()}`;
    const newChat = {
        id: newChatId,
        history: [SYSTEM_PROMPT], // Start with system prompt
        timestamp: Date.now()
    };
    allChats[newChatId] = newChat;
    currentChatId = newChatId;
    clearChatDisplay();
    resetInputArea();
    updateChatHistoryList();
    console.log("Created new chat in memory:", newChatId);
}

function loadChat(chatId) {
    if (!allChats[chatId]) {
        console.error("Chat not found:", chatId);
        createNewChat(); // Fallback to creating a new chat
        return;
    }
    currentChatId = chatId;

    clearChatDisplay();
    displayChatMessages(allChats[chatId].history);
    resetInputArea();

    // Remove active class from previously active item
    const previousActive = chatHistoryList.querySelector('.history-item.active');
    if (previousActive) {
        previousActive.classList.remove('active');
    }
    // Add active class to the newly selected item
    const newActive = chatHistoryList.querySelector(`.history-item[data-chat-id="${chatId}"]`);
    if (newActive) {
        newActive.classList.add('active');
    } else {
        updateChatHistoryList(); // Redraw list if item not found
    }
    
    console.log("Loaded chat:", chatId);
}

function deleteChat(chatId) {
    if (!allChats[chatId]) return;

    const wasCurrentChat = currentChatId === chatId;
    const chatTitle = allChats[chatId].customTitle || getChatTitle(allChats[chatId].history); // Use customTitle if available

    delete allChats[chatId];
    saveChatsToLocalStorage();
    console.log(`Deleted chat: ${chatTitle} (${chatId})`); // Log deletion

    if (wasCurrentChat) {
        // If the deleted chat was the current one, load the most recent remaining chat or create a new one
        const remainingChats = Object.values(allChats).sort((a, b) => b.timestamp - a.timestamp);
        if (remainingChats.length > 0) {
            loadChat(remainingChats[0].id); // loadChat handles its own UI updates internally now
        } else {
            createNewChat(); // createNewChat handles its own UI updates
        }
    } 
    // Always update the list *after* potential chat switching is done
    updateChatHistoryList(); 
}

// --- UI Update Functions ---
function clearChatDisplay() {
    chatBox.innerHTML = '';
}

// --- Display Chat Messages (Apply Markdown render *before* calling addMessage) ---
function displayChatMessages(history) {
    console.log("Displaying chat messages from history:", history);
    
    if (!history || !Array.isArray(history) || history.length === 0) {
        console.log("No messages to display");
        return;
    }
    
    // Clear the current display
    clearChatDisplay();
    
    // Loop through all messages except system messages
    for (let i = 0; i < history.length; i++) {
        const message = history[i];
        
        // Skip system messages - they're used internally
        if (message.role === 'system') continue;
        
        console.log(`Displaying message: ${message.role}`, message);
        
        // For user messages
        if (message.role === 'user') {
            // Check if we have file information
            if (message.fileInfo && Array.isArray(message.fileInfo)) {
                // Create content with both text and files
                const userContent = {
                    files: message.fileInfo
                };
                
                // Extract text if present
                if (Array.isArray(message.content)) {
                    const textContent = message.content.find(item => item.type === 'text');
                    if (textContent) {
                        userContent.text = textContent.text;
                    }
                } else if (typeof message.content === 'string') {
                    userContent.text = message.content;
                }
                
                // Display the message with files
                addMessage('user', userContent);
            } else {
                // Standard text-only message
                let text = '';
                
                // Handle different content formats
                if (Array.isArray(message.content)) {
                    const textContent = message.content.find(item => item.type === 'text');
                    if (textContent) {
                        text = textContent.text;
                    }
                } else if (typeof message.content === 'string') {
                    text = message.content;
                }
                
                addMessage('user', { text: text });
            }
        } 
        // For assistant messages
        else if (message.role === 'assistant') {
            let content = '';
            let rawText = '';
            
            // Handle different content formats
            if (typeof message.content === 'string') {
                rawText = message.content;
                
                // Prüfe auf <think>-Tags in der Nachricht (Reasoning-Modell)
                if (rawText.includes('<think>') && rawText.includes('</think>')) {
                    // Extrahiere Thinking-Content und Hauptinhalt
                    const thinkingMatch = rawText.match(/<think>([\s\S]*?)<\/think>/);
                    if (thinkingMatch) {
                        const thinkingContent = thinkingMatch[1].trim();
                        
                        // Extrahiere den Hauptinhalt (alles nach dem letzten </think> Tag)
                        const parts = rawText.split('</think>');
                        const mainContent = parts[parts.length - 1].trim();
                        
                        // Erstelle eine KI-Nachricht und füge dann direkt die Thinking-Box hinzu
                        const messageId = `ai-msg-${Date.now()}`;
                        const messageElement = document.createElement('div');
                        messageElement.classList.add('message-container', 'ai-message-container');
                        
                        const aiMessage = document.createElement('div');
                        aiMessage.classList.add('message', 'ai-message');
                        aiMessage.id = messageId;
                        
                        const messageContent = document.createElement('div');
                        messageContent.classList.add('message-content');
                        
                        aiMessage.appendChild(messageContent);
                        messageElement.appendChild(aiMessage);
                        chatBox.appendChild(messageElement);
                        
                        // Direkt den Thinking-Content hinzufügen ohne Loading-Nachricht
                        updateStreamingMessage(messageId, rawText);
                        
                        // Nach dem Hinzufügen des Inhalts die Box standardmäßig einklappen
                        setTimeout(() => {
                            const thinkingContainer = messageElement.querySelector('.thinking-container');
                            if (thinkingContainer) {
                                const thinkingHeader = thinkingContainer.querySelector('.thinking-header');
                                const thinkingContent = thinkingContainer.querySelector('.thinking-content');
                                const toggleButton = thinkingHeader.querySelector('.thinking-toggle');
                                
                                // Box einklappen
                                thinkingContent.style.display = 'none';
                                toggleButton.textContent = '▶';
                            }
                        }, 50);
                        
                        continue; // Überspringen der normalen Nachrichtenverarbeitung
                    }
                }
                
                // Convert markdown to HTML (für normale Nachrichten ohne Thinking)
                content = markdownConverter.makeHtml(rawText);
            } else if (message.content && typeof message.content.text === 'string') {
                rawText = message.content.text;
                
                // Auch hier auf <think>-Tags prüfen
                if (rawText.includes('<think>') && rawText.includes('</think>')) {
                    // Extrahiere Thinking-Content und Hauptinhalt
                    const thinkingMatch = rawText.match(/<think>([\s\S]*?)<\/think>/);
                    if (thinkingMatch) {
                        const thinkingContent = thinkingMatch[1].trim();
                        
                        // Extrahiere den Hauptinhalt (alles nach dem letzten </think> Tag)
                        const parts = rawText.split('</think>');
                        const mainContent = parts[parts.length - 1].trim();
                        
                        // Erstelle eine KI-Nachricht und füge dann direkt die Thinking-Box hinzu
                        const messageId = `ai-msg-${Date.now()}`;
                        const messageElement = document.createElement('div');
                        messageElement.classList.add('message-container', 'ai-message-container');
                        
                        const aiMessage = document.createElement('div');
                        aiMessage.classList.add('message', 'ai-message');
                        aiMessage.id = messageId;
                        
                        const messageContent = document.createElement('div');
                        messageContent.classList.add('message-content');
                        
                        aiMessage.appendChild(messageContent);
                        messageElement.appendChild(aiMessage);
                        chatBox.appendChild(messageElement);
                        
                        // Direkt den Thinking-Content hinzufügen ohne Loading-Nachricht
                        updateStreamingMessage(messageId, rawText);
                        
                        // Nach dem Hinzufügen des Inhalts die Box standardmäßig einklappen
                        setTimeout(() => {
                            const thinkingContainer = messageElement.querySelector('.thinking-container');
                            if (thinkingContainer) {
                                const thinkingHeader = thinkingContainer.querySelector('.thinking-header');
                                const thinkingContent = thinkingContainer.querySelector('.thinking-content');
                                const toggleButton = thinkingHeader.querySelector('.thinking-toggle');
                                
                                // Box einklappen
                                thinkingContent.style.display = 'none';
                                toggleButton.textContent = '▶';
                            }
                        }, 50);
                        
                        continue; // Überspringen der normalen Nachrichtenverarbeitung
                    }
                }
                
                content = markdownConverter.makeHtml(rawText);
            }
            
            // Add the AI message with HTML and raw text for copy actions (für normale Nachrichten)
            addMessage('ai', { 
                html: content, 
                rawText: rawText 
            });
        }
    }
    
    // Render LaTeX if MathJax is available
    if (window.MathJax) {
        setTimeout(() => {
            try {
            MathJax.typesetPromise([chatBox])
                .then(() => {
                    console.log('MathJax successfully typeset chat after loading');
                })
                .catch(err => {
                    console.error('MathJax typeset error after loading chat:', err);
                });
            } catch (error) {
                console.error('Error when calling MathJax typeset:', error);
            }
        }, 100);
    }
    
    // Always scroll to bottom after displaying chat
    scrollToBottom();
}

function updateChatHistoryList() {
    // Clear current history list
    chatHistoryList.innerHTML = '';
    
    // Sort chats by timestamp
    const sortedChats = Object.values(allChats)
                        .filter(chat => chat.history.length > 1) // Only show chats with more than the system prompt
                        .sort((a, b) => b.timestamp - a.timestamp); // Show newest first

    if (sortedChats.length === 0) {
        // Optionally display a message indicating no chats yet
        // chatHistoryList.innerHTML = '<li class="no-chats">Keine Chats vorhanden</li>';
        return; // Don't proceed if empty
    }

    sortedChats.forEach(chat => {
        const li = document.createElement('li');
        li.classList.add('history-item');
        li.dataset.chatId = chat.id;
        if (chat.id === currentChatId) {
            li.classList.add('active');
        }

        const titleSpan = document.createElement('span');
        titleSpan.textContent = chat.customTitle || getChatTitle(chat.history);
        titleSpan.classList.add('history-item-title'); // Add class for potential styling
        li.appendChild(titleSpan);

        // Container for action buttons
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('history-item-actions');
        
        // Ellipsis button that shows on hover
        const ellipsisBtn = document.createElement('button');
        ellipsisBtn.innerHTML = '&#8942;'; // Ellipsis character
        ellipsisBtn.classList.add('ellipsis-button');
        ellipsisBtn.title = 'Optionen';
        
        // Delete button (initially hidden)
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.classList.add('delete-chat-button');
        deleteBtn.title = 'Chat löschen';
        deleteBtn.style.display = 'none'; // Hide initially

        ellipsisBtn.onclick = (e) => {
            e.stopPropagation();
            // Hide ellipsis, show delete
            ellipsisBtn.style.display = 'none';
            deleteBtn.style.display = 'inline-block';
        };

        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            // REMOVED confirm() call for immediate deletion
            deleteChat(chat.id);
            // No need for the 'else' block anymore as deletion is immediate
        };

        actionsContainer.appendChild(ellipsisBtn);
        actionsContainer.appendChild(deleteBtn);
        li.appendChild(actionsContainer);
        
        li.onclick = () => {
            loadChat(chat.id);
            
            // Auf mobilen Geräten die Sidebar einklappen
            if (window.innerWidth <= 768) {
                const sidebar = document.querySelector('.sidebar');
                const toggleButton = document.getElementById('toggle-sidebar');
                
                if (sidebar) {
                    sidebar.classList.remove('expanded');
                }
                
                if (toggleButton) {
                    // Icon zurücksetzen
                    const icon = toggleButton.querySelector('svg');
                    if (icon) {
                        icon.innerHTML = `
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        `;
                    }
                }
            }
        };
        
        chatHistoryList.appendChild(li);
    });
}

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Füge die Warnfarbe zur bestehenden CSS hinzu
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        :root {
            --warning-orange: #ff9800;
        }
        
        /* Grüne Links in den AI-Antworten */
        .ai-message a {
            color: var(--accent-green) !important;
        }
        
        /* Websuche-Button Styling - wie die anderen Buttons */
        #web-search-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin-right: 8px;
            border-radius: 50%;
            border: none;
            background-color: var(--card-background);
            cursor: pointer;
            transition: all 0.2s ease;
            padding: 0;
            font-size: 18px;
        }
        
        #web-search-button:hover {
            background-color: var(--hover-overlay);
        }
        
        #web-search-button.active {
            color: var(--accent-green);
            background-color: var(--hover-overlay);
        }
        
        /* Lade-Animation für Websuche in der AI-Nachricht */
        @keyframes searchLoading {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
        }
        
        .search-loading-animation {
            display: flex;
            align-items: center;
            animation: searchLoading 1.5s infinite;
        }
        
        .search-loading-animation::before {
            content: "🔍";
            margin-right: 8px;
        }
        
        /* Verbesserte Tabellen-Darstellung */
        .message-content table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
            font-size: 0.9em;
            overflow-x: auto;
            display: block;
        }
        
        .message-content table th,
        .message-content table td {
            padding: 0.5em;
            text-align: left;
            border: 1px solid var(--border-color);
        }
        
        .message-content table th {
            background-color: var(--card-background);
            font-weight: bold;
        }
        
        .message-content table tr:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.05);
        }
    `;
    document.head.appendChild(styleElement);
    
    // Load chats and memories from localStorage
    loadChatsFromLocalStorage();
    loadMemoriesFromLocalStorage();

    // Immer einen neuen Chat erstellen, anstatt den letzten zu laden
    createNewChat();

    // Add event listener for the new chat button
    newChatButton.addEventListener('click', createNewChat);
    
    // Add event listener for the memories button
    const memoriesButton = document.getElementById('memories-button');
    if (memoriesButton) {
        memoriesButton.addEventListener('click', showMemoriesModal);
    }
    
    // Set up model selection
    setupModelSelection();
    
    // Web Search Button hinzufügen
    addWebSearchButton();

    // Initial UI setup (moved from end of file)
    clearImagePreview();
    resetInputArea();
    adjustTextAreaHeight();
    updateSendButtonState();
    userInput.focus();
    
    // Setup image upload capability
    // Instead of "imageInput = document.getElementById('image-input');"
    if (!fileInput) {
        // If imageInput isn't already set, set it now
        console.log("Setting up image input element");
    }
    // Update properties on the existing imageInput element
    fileInput.setAttribute('accept', 'image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.html,.htm,.md,.json,.xml,.ppt,.pptx,.rtf,.zip'); // Accept common file types
    fileInput.setAttribute('multiple', 'true'); // Allow multiple file selection
});

// Function to set up model selection
function setupModelSelection() {
    // Get all radio buttons for model selection
    const modelRadios = document.querySelectorAll('input[name="model"]');
    
    // Add event listeners to each radio button
    modelRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Update current model when selection changes
            currentModel = this.value;
            console.log('Model changed to:', currentModel);
            
            // Speichern der Modelleinstellung im localStorage
            localStorage.setItem('preferred_model', currentModel);
        });
    });
    
    // Lade gespeicherte Einstellung oder verwende Standard
    const savedModel = localStorage.getItem('preferred_model');
    if (savedModel && Object.values(MODEL_OPTIONS).includes(savedModel)) {
        currentModel = savedModel;
    }
    
    // Set initial state based on saved or default model
    const defaultRadio = document.querySelector(`input[name="model"][value="${currentModel}"]`);
    if (defaultRadio) {
        defaultRadio.checked = true;
    }
}

// --- Load Memories from LocalStorage ---
function loadMemoriesFromLocalStorage() {
    try {
        console.log("📂 Lade Erinnerungen aus LocalStorage...");
        const storedMemories = localStorage.getItem(MEMORIES_STORAGE_KEY);
        if (storedMemories) {
            const parsedMemories = JSON.parse(storedMemories);
            if (Array.isArray(parsedMemories)) {
                globalMemories = parsedMemories;
                console.log(`✅ ${globalMemories.length} Erinnerungen geladen`);
            } else {
                console.error("❌ Gespeicherte Erinnerungen sind kein Array:", typeof parsedMemories);
                globalMemories = [];
            }
        } else {
            console.log("ℹ️ Keine gespeicherten Erinnerungen gefunden");
            globalMemories = [];
        }
    } catch (error) {
        console.error("❌ Fehler beim Laden der Erinnerungen:", error);
        globalMemories = []; // Reset to empty if loading fails
        
        // Versuche, den fehlerhaften Eintrag zu löschen
        try {
            localStorage.removeItem(MEMORIES_STORAGE_KEY);
            console.log("🗑️ Fehlerhafter Erinnerungseintrag entfernt");
        } catch (e) {
            console.error("❌ Konnte fehlerhaften Eintrag nicht entfernen:", e);
        }
    }
}

// --- Save Memories to LocalStorage ---
function saveMemoriesToLocalStorage() {
    try {
        console.log(`💾 Speichere ${globalMemories.length} Erinnerungen in LocalStorage...`);
        localStorage.setItem(MEMORIES_STORAGE_KEY, JSON.stringify(globalMemories));
        console.log("✅ Erinnerungen erfolgreich gespeichert");
        
        // Validiere die gespeicherten Daten
        const verification = localStorage.getItem(MEMORIES_STORAGE_KEY);
        if (verification) {
            const parsedVerification = JSON.parse(verification);
            if (Array.isArray(parsedVerification) && parsedVerification.length === globalMemories.length) {
                console.log("✓ Speichervalidierung erfolgreich");
            } else {
                console.warn("⚠️ Speichervalidierung fehlgeschlagen: Länge stimmt nicht überein");
            }
        } else {
            console.warn("⚠️ Speichervalidierung fehlgeschlagen: Keine Daten gefunden");
        }
    } catch (error) {
        console.error("❌ Fehler beim Speichern der Erinnerungen:", error);
        showNotification("Fehler beim Speichern der Erinnerungen", 4000);
    }
}

// --- Process Memories and Update Chat Name ---
let isMetadataProcessing = false; // Flag to prevent multiple concurrent executions
let lastProcessedChatId = null;   // Track which chat was last processed
let metadataProcessingCooldown = 10000; // 10 seconds cooldown between processing the same chat
let lastProcessingTime = 0;       // Track when we last processed any chat
let consecutiveApiErrors = 0;     // Track consecutive API errors
const maxConsecutiveErrors = 3;   // Maximum number of consecutive errors before backing off

async function processChatMetadata() {
    const currentTime = Date.now();
    
    // Check if we're already processing or in cooldown
    if (isMetadataProcessing) {
        console.log("⚠️ Metadatenverarbeitung läuft bereits, überspringe diese Anfrage");
        return;
    }
    
    // Check if this chat was recently processed
    if (lastProcessedChatId === currentChatId && 
        (currentTime - lastProcessingTime) < metadataProcessingCooldown) {
        console.log(`⚠️ Chat wurde kürzlich verarbeitet (vor ${Math.round((currentTime - lastProcessingTime)/1000)}s), überspringe diese Anfrage (Cooldown: 10s)`);
        return;
    }
    
    // If we've had consecutive errors, implement exponential backoff
    if (consecutiveApiErrors >= maxConsecutiveErrors) {
        const backoffTime = Math.min(60000, 5000 * Math.pow(2, consecutiveApiErrors - maxConsecutiveErrors));
        if ((currentTime - lastProcessingTime) < backoffTime) {
            console.log(`⚠️ API-Fehler Backoff aktiv, überspringe Verarbeitung für ${Math.round(backoffTime/1000)}s`);
            return;
        }
    }
    
    console.log("⏳ processChatMetadata wird ausgeführt...");
    console.log("📋 Aktueller Chat:", currentChatId);
    console.log("💾 Alle Chats:", Object.keys(allChats));
    
    // Set the processing flag to prevent concurrent executions
    isMetadataProcessing = true;
    
    try {
    if (!currentChatId || !allChats[currentChatId]) {
        console.error("❌ processChatMetadata: Kein gültiger currentChatId oder Chat nicht gefunden");
            isMetadataProcessing = false;
        return;
    }
    
    const currentChat = allChats[currentChatId];
    const chatHistory = currentChat.history;
    
    console.log("📝 Chat History Länge:", chatHistory.length);
    
    // Only process if there are at least 2 messages (system + 1 user/assistant)
    if (chatHistory.length < 2) {
        console.log("⚠️ processChatMetadata: Nicht genug Nachrichten zum Verarbeiten");
            isMetadataProcessing = false;
        return;
    }
    
    // Get current chat name
    const currentChatName = currentChat.customTitle || getChatTitle(chatHistory);
    console.log("📄 Aktueller Chat-Name:", currentChatName);
    
        // Get more messages for improved context (use more messages for better extraction)
    const recentMessages = chatHistory
        .filter(msg => msg.role !== 'system')
            .slice(-10); // Increase from 6 to 10 messages for better context
        
    if (recentMessages.length === 0) {
        console.log("⚠️ processChatMetadata: Keine gültigen Nachrichten nach dem Filtern gefunden");
            isMetadataProcessing = false;
        return;
    }
    
    console.log("📨 Anzahl der verarbeiteten Nachrichten:", recentMessages.length);
    
    try {
        console.log("🔄 Verarbeitung der Chat-Metadaten...");
        
        // Create a simplified version of messages for the API
        const simplifiedMessages = recentMessages.map(msg => {
            // Handle both string content and array content
            let content = "";
            if (typeof msg.content === 'string') {
                content = msg.content;
            } else if (Array.isArray(msg.content)) {
                // Extract text parts from content array
                const textParts = msg.content
                    .filter(part => part.type === 'text')
                    .map(part => part.text);
                content = textParts.join(" ");
            }
            
            return {
                role: msg.role,
                content: content
            };
        });
        
        console.log("📤 Vereinfachte Nachrichten erstellt:", simplifiedMessages.length);
        
        // Bestimme die Sprache der Konversation basierend auf den letzten Nachrichten
        const userMessages = simplifiedMessages.filter(msg => msg.role === 'user');
        const userContent = userMessages.map(msg => msg.content).join(' ');
        
        // Prepare the request body
        const requestBody = {
            model: MODEL_OPTIONS.FAST, // Always use fast model for metadata
            messages: [
                { 
                    role: "system", 
                    content: `Du bist ein KI-Assistent mit zwei Aufgaben:
1. Schlage einen präzisen, kurzen Titel für die Konversation basierend auf dem Inhalt vor.
2. Führe eine Liste wichtiger Erinnerungen AUSSCHLIESSLICH über den Benutzer selbst.

WICHTIG: Erkenne die Sprache der Konversation und generiere den Titel und die Erinnerungen in GENAU DIESER SPRACHE.

SEHR WICHTIG - WAS IN ERINNERUNGEN GESPEICHERT WERDEN SOLL:
- Persönliche Informationen über den Benutzer (Name, Wohnort, Beruf, Alter)
- Präferenzen des Benutzers (Lieblingsessen, bevorzugte Sprache, UI-Vorlieben)
- Kommunikationsstil (formell/informell, detailliert/kurz)
- Gesundheitliche Informationen (Allergien, Unverträglichkeiten, Diäten)
- Familiensituation (Kinder, Partner, Haustiere) wenn vom Benutzer mitgeteilt
- Explizit geäußerte Vorlieben und Abneigungen des Benutzers
- Bildungsgrad und Expertise des Benutzers in bestimmten Bereichen
- Persönliche Ziele, die der Benutzer erreichen möchte
- Vom Benutzer gewünschte Anpassungen im Kommunikationsstil der KI
- Auch beiläufig erwähnte persönliche Informationen wie "ich komme aus...", "ich wohne in..." usw.

ACHTE BESONDERS AUF PERSÖNLICHE INFORMATIONEN, DIE NEBENBEI ERWÄHNT WERDEN:
- Ausdrücke wie "bei uns in [Ort]..." oder "hier in [Stadt]..." deuten auf den Wohnort hin
- Formulierungen wie "ich als [Beruf]...", "in meinem Job als [Beruf]..." zeigen den Beruf
- Sätze wie "meine Kinder...", "mein Partner/meine Partnerin..." verraten Familiensituation
- Aussagen wie "ich esse gerne/nicht gerne..." zeigen Vorlieben/Abneigungen

WAS NIEMALS IN ERINNERUNGEN GESPEICHERT WERDEN DARF:
- Fakten und Informationen, nach denen der Benutzer nur gefragt hat
- Rechercheergebnisse oder Web-Suchergebnisse
- Allgemeine Fakten (historische Daten, wissenschaftliche Fakten, etc.)
- Temporäre oder einmalige Anfragen
- Themen der Konversation (speichere nur Eigenschaften des Benutzers)
- Stimmungen oder Zustände des Benutzers, die nur temporär sind
- Fragen, auf die der Benutzer Antworten sucht
- Technische Details der Anfragen, sofern sie nicht den Kommunikationsstil betreffen

RICHTLINIEN ZUR ERINNERUNGSÜBERPRÜFUNG:
- Würde ein anderer Assistent diese Information über den Benutzer benötigen, um besser helfen zu können?
- Ist die Information ein langfristiges Attribut des Benutzers und nicht nur für das aktuelle Gespräch relevant?
- Hat der Benutzer diese Information über SICH SELBST mitgeteilt (nicht über andere Personen oder allgemeine Fakten)?

SEHR WICHTIG ZUM UMGANG MIT BESTEHENDEN ERINNERUNGEN:
- Bestehende Erinnerungen haben PRIORITÄT und sollten in der Regel BEIBEHALTEN werden
- Lösche NIEMALS alle Erinnerungen auf einmal
- Entferne nur eindeutig veraltete oder nachweislich falsche Informationen
- Im Zweifelsfall behalte eine bestehende Erinnerung bei
- Füge lieber neue Erinnerungen hinzu, als bestehende zu ersetzen

Deine Ausgabe muss gültiges JSON mit folgender Struktur sein:
{
  "suggestedTitle": "Kurzer, beschreibender Titel für die Konversation (max. 20 Zeichen)",
  "memories": [
    "Erinnerung 1: Wichtiger Fakt über den Benutzer selbst",
    "Erinnerung 2: Eine weitere wichtige Information über den Benutzer",
    ...
  ]
}

Überprüfe die vorhandenen Erinnerungen und entscheide, welche Informationen es wert sind, behalten, aktualisiert oder hinzugefügt zu werden. Entferne nur Erinnerungen, die KEINE Informationen über den Benutzer enthalten, sondern allgemeine Fakten oder Themen.

DER TITEL MUSS UNTER 20 ZEICHEN SEIN! GENERIERE ALLES IN DER SPRACHE DER KONVERSATION!`
                },
                { 
                    role: "user", 
                    content: JSON.stringify({
                        currentTitle: currentChatName,
                        recentMessages: simplifiedMessages,
                        existingMemories: globalMemories
                    })
                }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7,
            private: true
        };
        
        console.log("🛠️ API-Anfrage wird vorbereitet...");
                
        console.log("📡 Sende Metadaten-Anfrage an API...");
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ API-Fehler:", response.status, errorText);
                
                // Speziell für 429 Too Many Requests
                if (response.status === 429 || errorText.includes("429 Too Many Requests")) {
                    consecutiveApiErrors++;
                    console.error(`⚠️ API-Rate-Limit erreicht. Fehler #${consecutiveApiErrors}`);
                    if (consecutiveApiErrors >= maxConsecutiveErrors) {
                        const backoffTime = Math.min(60000, 5000 * Math.pow(2, consecutiveApiErrors - maxConsecutiveErrors));
                        console.error(`⚠️ Exponentieller Backoff: Nächste Anfrage frühestens in ${Math.round(backoffTime/1000)}s`);
                        
                        // Benachrichtigung bei wiederholten API-Fehlern anzeigen
                        if (consecutiveApiErrors === maxConsecutiveErrors) {
                            showNotification("API-Limit erreicht. Die Hintergrundverarbeitung wird pausiert.", 5000);
                        }
                    }
                    return;
                }
                
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

            // Reset consecutive errors counter on success
            consecutiveApiErrors = 0;

        console.log("✅ API-Antwort erhalten");
        const responseText = await response.text();
        console.log("📥 Antwortlänge:", responseText.length);
        
        let data;
        try {
            data = JSON.parse(responseText);
            console.log("🔄 Antwort geparst");
        } catch (error) {
            console.error("❌ Fehler beim Parsen der JSON-Antwort:", error);
            console.error("🔍 Erste 200 Zeichen der Antwort:", responseText.substring(0, 200));
            return;
        }
        
        // Check if we have a valid response with a message content
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            console.log("📤 Extrahiere Content aus der Antwort");
            // The actual JSON is in the content field
            try {
                const contentData = JSON.parse(data.choices[0].message.content);
                console.log("📋 Geparste Daten:", contentData);
                
                // Update chat title if provided
                if (contentData.suggestedTitle && contentData.suggestedTitle !== currentChatName) {
                    currentChat.customTitle = contentData.suggestedTitle;
                    console.log(`🏷️ Chat-Titel aktualisiert: ${contentData.suggestedTitle}`);
                    showNotification(`Chat umbenannt: "${contentData.suggestedTitle}"`);
                } else {
                    console.log("ℹ️ Kein neuer Titel vorgeschlagen oder Titel unverändert");
                }
                
                // Update memories if provided
                if (Array.isArray(contentData.memories)) {
                    // Make sure memories are not duplicated
                    const uniqueMemories = Array.from(new Set(contentData.memories));
                    console.log("🧠 Einzigartige Erinnerungen:", uniqueMemories.length);
                    const previousCount = globalMemories.length;
                        
                        // Erstelle Backup vor Änderungen
                        backupMemories();
                        
                        // SCHUTZ: Verhindere, dass alle Erinnerungen auf einmal gelöscht werden
                        if (previousCount > 0 && uniqueMemories.length === 0) {
                            console.warn("⚠️ Schutz: KI versucht alle Erinnerungen zu löschen, dies wird verhindert");
                            showNotification("Erinnerungen wurden geschützt", 3000);
                            // Behalte bestehende Erinnerungen
                        } else {
                            // Wenn nicht alle gelöscht werden oder es keine gab, update normal
                    globalMemories = uniqueMemories;
                    saveMemoriesToLocalStorage();
                    console.log(`📝 Erinnerungen aktualisiert (${uniqueMemories.length} Einträge)`);
                    
                    // Show notification about memory updates
                    if (previousCount < uniqueMemories.length) {
                        showNotification(`${uniqueMemories.length - previousCount} neue Erinnerung(en) hinzugefügt`);
                    } else if (previousCount > uniqueMemories.length) {
                        showNotification(`${previousCount - uniqueMemories.length} Erinnerung(en) entfernt`);
                    } else if (previousCount > 0 && JSON.stringify(globalMemories) !== JSON.stringify(uniqueMemories)) {
                        showNotification("Erinnerungen aktualisiert");
                            }
                    }
                } else {
                    console.error("❌ Ungültiges memories-Array in der API-Antwort:", contentData.memories);
                }
                
                // Save changes to chat
                console.log("💾 Speichere Änderungen in LocalStorage");
                saveChatsToLocalStorage();
                
                // Update UI
                console.log("🔄 Aktualisiere Chat-Verlauf in der UI");
                updateChatHistoryList();
            } catch (error) {
                console.error("❌ Fehler beim Parsen des Content-JSON:", error);
                console.error("🔍 Content-Rohtext:", data.choices[0].message.content);
            }
        } else {
            console.error("❌ Unerwartetes API-Antwortformat:", data);
        }
        
    } catch (error) {
            consecutiveApiErrors++;
        console.error("❌ Fehler bei der Verarbeitung der Chat-Metadaten:", error);
            console.error(`⚠️ Fehler #${consecutiveApiErrors} in Folge`);
        // Don't show error to user as this is a background task
        }
    } finally {
        // Update tracking variables
        lastProcessedChatId = currentChatId;
        lastProcessingTime = Date.now();
        
        // Reset processing flag when done (whether success or error)
        isMetadataProcessing = false;
    }
}

// --- Show Memories Modal ---
function showMemoriesModal() {
    // Remove any existing modal
    const existingModal = document.getElementById('memories-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'memories-modal';
    modal.className = 'memories-modal';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'memories-modal-content';
    
    // Add header with title and close button
    const header = document.createElement('div');
    header.className = 'memories-modal-header';
    
    const title = document.createElement('h3');
    title.textContent = 'Erinnerungen';
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'memories-modal-close';
    closeButton.onclick = () => modal.remove();
    
    header.appendChild(title);
    header.appendChild(closeButton);
    
    // Add memory list
    const memoryList = document.createElement('ul');
    memoryList.className = 'memories-list';
    
    if (globalMemories.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'memory-item empty';
        emptyItem.textContent = 'Keine Erinnerungen gespeichert.';
        memoryList.appendChild(emptyItem);
    } else {
        globalMemories.forEach((memory, index) => {
            const item = document.createElement('li');
            item.className = 'memory-item';
            
            // Memory content container
            const contentDiv = document.createElement('div');
            contentDiv.className = 'memory-content';
            contentDiv.textContent = memory;
            item.appendChild(contentDiv);
            
            // Delete button for each memory
            const deleteButton = document.createElement('button');
            deleteButton.className = 'memory-delete-button';
            deleteButton.innerHTML = '&times;';
            deleteButton.title = 'Erinnerung löschen';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Remove memory from array
                globalMemories.splice(index, 1);
                
                // Save updated memories
                saveMemoriesToLocalStorage();
                
                // Refresh the modal to reflect changes
                showMemoriesModal();
                
                // Show notification
                showNotification("Erinnerung gelöscht", 2000);
            });
            
            item.appendChild(deleteButton);
            memoryList.appendChild(item);
        });
    }
    
    // Add action buttons area
    const actionsArea = document.createElement('div');
    actionsArea.className = 'memories-actions';
    
    // Wiederherstellungs-Button
    const restoreButton = document.createElement('button');
    restoreButton.className = 'memories-restore-button';
    restoreButton.textContent = 'Erinnerungen wiederherstellen';
    restoreButton.addEventListener('click', () => {
        if (confirm('Möchten Sie die Erinnerungen aus dem letzten Backup wiederherstellen?')) {
            restoreMemoriesFromBackup();
            showMemoriesModal(); // Aktualisiere die Anzeige
        }
    });
    actionsArea.appendChild(restoreButton);
    
    // Add delete all button
    if (globalMemories.length > 0) {
        const deleteAllButton = document.createElement('button');
        deleteAllButton.className = 'memories-delete-all-button';
        deleteAllButton.textContent = 'Alle Erinnerungen löschen';
        deleteAllButton.addEventListener('click', () => {
            if (confirm('Sind Sie sicher, dass Sie alle Erinnerungen löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.')) {
                // Erstelle Backup vor dem Löschen
                backupMemories();
                globalMemories = [];
                saveMemoriesToLocalStorage();
                showMemoriesModal();
                showNotification("Alle Erinnerungen gelöscht", 2000);
            }
        });
        actionsArea.appendChild(deleteAllButton);
    }
    
    // Assemble modal
    modalContent.appendChild(header);
    modalContent.appendChild(memoryList);
    modalContent.appendChild(actionsArea);
    modal.appendChild(modalContent);
    
    // Add to document
    document.body.appendChild(modal);
    
    // Add event listener to close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Simple notification function
function showNotification(message, duration = 3000) {
    // Check if there's already a notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to the document
    document.body.appendChild(notification);
    
    // Show animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-hide after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300); // Wait for animation to complete
    }, duration);
} 

// --- Backup erstellen vor Aktualisierung der Erinnerungen ---
function backupMemories() {
    memoriesBackup = [...globalMemories];
    console.log(`📥 Backup von ${memoriesBackup.length} Erinnerungen erstellt`);
    
    // Speichere Backup auch im localStorage für Sicherheit
    try {
        localStorage.setItem('pollinations_memories_backup', JSON.stringify(memoriesBackup));
    } catch (error) {
        console.error("❌ Fehler beim Speichern des Erinnerungs-Backups:", error);
    }
}

// --- Erinnerungen aus Backup wiederherstellen ---
function restoreMemoriesFromBackup() {
    if (memoriesBackup.length > 0) {
        globalMemories = [...memoriesBackup];
        saveMemoriesToLocalStorage();
        console.log(`🔄 ${globalMemories.length} Erinnerungen aus Backup wiederhergestellt`);
        showNotification("Erinnerungen wiederhergestellt", 3000);
        return true;
    } else {
        // Versuche, aus localStorage zu laden
        try {
            const backupFromStorage = localStorage.getItem('pollinations_memories_backup');
            if (backupFromStorage) {
                const parsedBackup = JSON.parse(backupFromStorage);
                if (Array.isArray(parsedBackup) && parsedBackup.length > 0) {
                    globalMemories = parsedBackup;
                    saveMemoriesToLocalStorage();
                    console.log(`🔄 ${globalMemories.length} Erinnerungen aus localStorage-Backup wiederhergestellt`);
                    showNotification("Erinnerungen wiederhergestellt", 3000);
                    return true;
                }
            }
        } catch (error) {
            console.error("❌ Fehler beim Laden des Erinnerungs-Backups:", error);
        }
        
        console.warn("⚠️ Kein Backup verfügbar zum Wiederherstellen");
        showNotification("Kein Backup verfügbar", 3000);
        return false;
    }
}

// --- Web Search mit SearchGPT ---
async function performAIWebSearch(query) {
    if (!query || query.trim().length === 0) {
        console.error("❌ Leere Suchanfrage");
        return { error: "Leere Suchanfrage" };
    }
    
    console.log(`🔍 Starte KI-Websuche mit searchgpt für: "${query}"`);
    showNotification("KI-Websuche wird durchgeführt...", 2000);
    
    try {
        // Hole den aktuellen Chat-Kontext für relevanten Kontext
        let contextMessages = [];
        
        if (currentChatId && allChats[currentChatId]) {
            // Filtere die letzten 5 Nachrichten (ohne Systemnachrichten)
            const chatHistory = allChats[currentChatId].history;
            contextMessages = chatHistory
                .filter(msg => msg.role !== 'system')
                .slice(-5)
                .map(msg => {
                    // Extrahiere den Text aus verschiedenen Content-Formaten
                    let content = "";
                    if (typeof msg.content === 'string') {
                        content = msg.content;
                    } else if (Array.isArray(msg.content)) {
                        content = msg.content
                            .filter(part => part.type === 'text')
                            .map(part => part.text)
                            .join(" ");
                    }
                    return {
                        role: msg.role,
                        content: content
                    };
                });
        }
        
        // Aktuelle Datum und Uhrzeit hinzufügen
        const currentDateTime = getCurrentDateTimeInfo();
        
        // Erstelle einen speziellen System-Prompt für die Websuche
        const searchSystemPrompt = {
            role: "system", 
            content: `Du bist SearchGPT, ein KI-Assistent mit der Fähigkeit, im Internet zu suchen.
Deine Aufgabe ist es, präzise und aktuelle Informationen zu Anfragen des Benutzers zu liefern.

${currentDateTime}

Befolge diese Anweisungen:
1. Analysiere die Anfrage des Benutzers und den Konversationskontext sorgfältig.
2. Suche im Internet nach relevanten und aktuellen Informationen.
3. Antworte faktenbasiert und sachlich.
4. Füge für JEDEN einzelnen Fakt ZWINGEND die Quelle als Hyperlink direkt im Satz hinzu. Format: [domain.de](URL) - verwende NUR den Domain-Namen ohne "Quelle:"
5. Stelle sicher, dass jede wichtige Information mit einer direkten Quelle versehen ist.
6. Zitiere die wichtigsten und vertrauenswürdigsten Quellen und priorisiere aktuelle Quellen.
7. Für jeden Absatz sollte mindestens eine Quelle vorhanden sein.
8. Wenn zu einer Frage verschiedene Standpunkte existieren, präsentiere diese ausgewogen mit Quellen.
9. Halte deine Antwort informativ und prägnant.
10. Verweise explizit auf das Datum der Informationen, wenn relevant.
11. Wenn du keine aktuellen oder relevanten Informationen finden kannst, gib dies ehrlich an.
12. Formatiere deine Antwort gut lesbar mit Markdown.

Die folgenden Nachrichten sind der Konversationskontext, berücksichtige diesen in deiner Antwort.`
        };
        
        // Bereite die Anfrage für das searchgpt-Modell vor
        const messages = [searchSystemPrompt, ...contextMessages, { role: "user", content: query }];
        
        console.log("📤 Sende Anfrage an searchgpt mit Kontext", messages);
        
        // Sende die Anfrage an das searchgpt-Modell von Pollinations AI
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "searchgpt", // Verwende searchgpt Modell
                messages: messages,
                stream: false, // Kein Streaming für Suchresultate
                private: true,
            })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ SearchGPT API Fehler:", errorText);
            return { error: `Fehler bei der KI-Websuche: ${response.status}` };
        }
        
        const data = await response.json();
        console.log("✅ SearchGPT Antwort erhalten:", data);
        
        // Extrahiere die Antwort
        const searchResult = data.choices[0].message.content;
        
        if (!searchResult || searchResult.trim().length === 0) {
            return { error: "Die KI-Websuche lieferte keine Ergebnisse." };
        }
        
        return {
            success: true,
            content: searchResult,
            query: query
        };
        
    } catch (error) {
        console.error("❌ Fehler bei der KI-Websuche:", error);
        return { error: `Fehler bei der KI-Websuche: ${error.message}` };
    }
}

// --- Funktion zum Hinzufügen des Websuche-Buttons ---
function addWebSearchButton() {
    // Richtige Selektoren verwenden, die tatsächlich in der HTML existieren
    const inputArea = document.querySelector('#input-area') || document.querySelector('.input-area');
    const sendButton = document.getElementById('send-button');
    
    if (!inputArea || !sendButton) {
        console.error("❌ Konnte Input-Area oder Send-Button nicht finden!");
        return;
    }

    console.log("🔍 Füge Web-Search-Button hinzu...");

    // Prüfen, ob der Button bereits existiert, um Duplikate zu vermeiden
    if (document.getElementById('web-search-button')) {
        console.log("⚠️ Web-Search-Button existiert bereits, wird nicht erneut hinzugefügt");
        updateWebSearchButtonStatus();
        return;
    }

    const searchButton = document.createElement('button');
    searchButton.id = 'web-search-button';
    searchButton.classList.add('action-button');
    
    // Verwende ein Suchsymbol (immer dasselbe Symbol, unabhängig vom Status)
    if (document.querySelector('link[href*="font-awesome"]') || document.querySelector('script[src*="font-awesome"]')) {
        searchButton.innerHTML = '<i class="fas fa-search"></i>';
    } else {
        searchButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        `;
    }
    
    searchButton.title = 'Web-Suche aktivieren';
    
    // Event-Listener für den Click
    searchButton.addEventListener('click', function() {
        // Umschalten des Status
        webSearchEnabled = !webSearchEnabled;
        
        // UI aktualisieren
        updateWebSearchButtonStatus();
        
        // Benachrichtigung anzeigen
        showNotification(webSearchEnabled ? "Web-Suche aktiviert" : "Web-Suche deaktiviert", 2000);
    });
    
    // Füge den Button vor dem Send-Button ein
    inputArea.insertBefore(searchButton, sendButton);
    console.log("✅ Web-Search-Button erfolgreich hinzugefügt");
    
    // Setze den Button auf den Standard-Status
    updateWebSearchButtonStatus();
}

// --- Funktion zum Aktualisieren der Anzeige des Web-Suche-Buttons ---
function updateWebSearchButtonStatus() {
    const searchButton = document.getElementById('web-search-button');
    if (!searchButton) return;
    
    if (webSearchEnabled) {
        searchButton.classList.add('active');
        searchButton.title = 'Web-Suche ist aktiviert (Standard)';
        // Nur die Farbe ändern, nicht das Symbol
        searchButton.style.color = 'var(--accent-green)';
    } else {
        searchButton.classList.remove('active');
        searchButton.title = 'Web-Suche für diese Anfrage aktivieren';
        searchButton.style.color = '';
    }
    console.log(`Web-Suche Status aktualisiert: ${webSearchEnabled ? 'Aktiviert' : 'Deaktiviert'}`);
}

// Hilfsfunktion zum Escapen von HTML in Code-Blöcken
function escapeHtmlInCodeBlocks(content) {
    // Regulärer Ausdruck für Code-Blöcke (```code```)
    return content.replace(/```([\s\S]*?)```/g, function(match, codeContent) {
        // Escape HTML innerhalb des Code-Blocks, aber behalte die Backticks
        return '```' + escapeHtml(codeContent) + '```';
    });
}

// Hilfsfunktion zum Verbessern von Tabellen
function enhanceTables(contentDiv) {
    const tables = contentDiv.querySelectorAll('table');
    tables.forEach(table => {
        // Prüfe, ob die Tabelle bereits in einem Container ist
        if (table.parentElement.classList.contains('table-container')) {
            return;
        }
        
        // Erstelle einen Container für horizontales Scrollen
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        tableContainer.style.overflowX = 'auto';
        tableContainer.style.width = '100%';
        tableContainer.style.marginBottom = '1em';
        
        // Bewege die Tabelle in den Container
        table.parentNode.insertBefore(tableContainer, table);
        tableContainer.appendChild(table);
    });
}

// Verbesserte Funktion zur Erkennung und Verbesserung echter Codeblöcke und LaTeX
function enhanceCodeBlocks(container) {
    // Stellen sicher, dass die Styles hinzugefügt wurden
    addCodeGeneratingStyles();

    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        // Prüfe, ob der Block bereits verbessert wurde
        if (codeBlock.parentElement.classList.contains('enhanced-code-block')) {
            return;
        }
        
        // Sicherstellen, dass HTML im Code-Block als Text angezeigt wird
        const originalContent = codeBlock.textContent;
        if (originalContent.includes('<') || originalContent.includes('>')) {
            // Erneut escapen um sicherzustellen, dass kein HTML gerendert wird
            codeBlock.textContent = originalContent;
        }
        
        // Identifiziere die Sprache
        let language = '';
        const classNames = Array.from(codeBlock.classList);
        for (const className of classNames) {
            if (className.startsWith('language-')) {
                language = className.replace('language-', '');
                break;
            }
        }
        
        // LaTeX-Prüfung
        if (looksLikeLaTeX(codeBlock.textContent)) {
            if (!codeBlock.classList.contains('language-latex')) {
                codeBlock.classList.add('language-latex');
                language = 'latex';
            }
            return; // Keine weiteren Verbesserungen für LaTeX
        }
        
        // Container für den Code-Block erstellen
        const codeContainer = document.createElement('div');
        codeContainer.className = 'code-container';
        
        // Header für die Code-Sprache und Kopieren-Button erstellen
        const codeHeader = document.createElement('div');
        codeHeader.className = 'code-header';
        
        // Sprach-Badge erstellen
        const languageBadge = document.createElement('span');
        languageBadge.className = 'code-language-badge';
        languageBadge.textContent = language || 'Text';
        codeHeader.appendChild(languageBadge);
        
        // Kopieren-Button erstellen
        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-button';
        copyButton.textContent = 'Kopieren';
        copyButton.onclick = function() {
            // Kopiere den Inhalt, ohne den "Code wird generiert..."-Indikator
            const tempElement = document.createElement('div');
            tempElement.innerHTML = codeBlock.innerHTML;
            const generatingIndicator = tempElement.querySelector('.code-generating');
            if (generatingIndicator) {
                generatingIndicator.remove();
            }
            
            navigator.clipboard.writeText(tempElement.textContent).then(() => {
                copyButton.textContent = 'Kopiert!';
                copyButton.style.backgroundColor = 'var(--accent-green, #2ecc71)';
                setTimeout(() => {
                    copyButton.textContent = 'Kopieren';
                    copyButton.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Fehler beim Kopieren:', err);
                copyButton.textContent = 'Fehler!';
                setTimeout(() => {
                    copyButton.textContent = 'Kopieren';
                }, 2000);
            });
        };
        codeHeader.appendChild(copyButton);
        
        // Ursprünglichen Code-Block in einen Container einpacken
        const originalParent = codeBlock.parentElement;
        originalParent.classList.add('enhanced-code-block');
        
        // Container und Header vor dem Code-Block einfügen
        originalParent.before(codeContainer);
        codeContainer.appendChild(codeHeader);
        codeContainer.appendChild(originalParent);
        
        // Prüfen, ob der Code leer ist oder nur Whitespace enthält
        const codeContent = codeBlock.textContent.trim();
        if (codeContent === '' && !codeBlock.querySelector('.code-generating')) {
            // Erzeuge einen "Code wird generiert..."-Indikator
            const generatingIndicator = document.createElement('span');
            generatingIndicator.className = 'code-generating';
            generatingIndicator.textContent = 'Code wird generiert...';
            codeBlock.appendChild(generatingIndicator);
            
            // Beobachter für Änderungen
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        const content = codeBlock.textContent.trim();
                        if (content !== '' && content !== 'Code wird generiert...') {
                            // Entferne den Indikator, wenn Inhalt hinzugefügt wurde
                            const indicator = codeBlock.querySelector('.code-generating');
                            if (indicator) indicator.remove();
                            observer.disconnect();
                            
                            // Wenn Syntax-Highlighting verfügbar ist, führe es aus
                            applySyntaxHighlighting(codeBlock, language);
                        }
                    }
                });
            });
            
            observer.observe(codeBlock, { 
                childList: true, 
                characterData: true,
                subtree: true
            });
        } else if (codeContent !== '') {
            // Wenn Inhalt vorhanden ist, Syntax-Highlighting direkt anwenden
            applySyntaxHighlighting(codeBlock, language);
        }
    });
}

// Update handleImageUpload to handle all types of files
function handleFileUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    // Check if we're trying to add too many files
    if (selectedFiles && selectedFiles.length + files.length > 4) {
        showNotification("Maximal 4 Dateien erlaubt", 3000);
        return;
    }
    
    // Initialize the array if it doesn't exist
    if (!selectedFiles) {
        selectedFiles = [];
    }
    
    // Process each selected file
    for (let i = 0; i < files.length && selectedFiles.length < 4; i++) {
        const file = files[i];
        selectedFiles.push(file);
        displayFilePreview(file);
    }
    
    fileInput.value = null; // Reset file input
    updateSendButtonState(); // Update send button based on selection
}

// Display a preview for each file type
function displayFilePreview(file) {
    // Create the preview wrapper if it doesn't exist
    if (imagePreviewContainer.style.display === 'none') {
        imagePreviewContainer.innerHTML = '';
        imagePreviewContainer.style.display = 'flex';
        imagePreviewContainer.style.position = 'absolute';
        imagePreviewContainer.style.bottom = '100%'; // Position above input field
        imagePreviewContainer.style.left = '0';
        imagePreviewContainer.style.right = '0';
        imagePreviewContainer.style.flexWrap = 'wrap';
        imagePreviewContainer.style.gap = '5px';
        imagePreviewContainer.style.padding = '5px';
        imagePreviewContainer.style.backgroundColor = 'var(--bg-color)';
        imagePreviewContainer.style.borderTop = '1px solid var(--border-color)';
        imagePreviewContainer.style.borderRadius = '5px 5px 0 0';
        imagePreviewContainer.style.zIndex = '10';
    }
    
    // Create preview wrapper
    const previewWrapper = document.createElement('div');
    previewWrapper.classList.add('file-preview-wrapper');
    previewWrapper.style.position = 'relative';
    previewWrapper.style.width = '80px';
    previewWrapper.style.height = '80px';
    previewWrapper.style.margin = '2px';
    previewWrapper.style.display = 'flex';
    previewWrapper.style.flexDirection = 'column';
    previewWrapper.style.alignItems = 'center';
    previewWrapper.style.justifyContent = 'center';
    previewWrapper.style.backgroundColor = 'var(--card-background)';
    previewWrapper.style.borderRadius = '4px';
    previewWrapper.style.overflow = 'hidden';
    
    // Store the file reference to identify which file to remove
    previewWrapper.dataset.fileIndex = selectedFiles.indexOf(file);
    
    // Create different previews based on file type
    if (file.type.startsWith('image/')) {
        // For images, create an image preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '4px';
            previewWrapper.appendChild(img);
            
            // Add file name as tooltip
            previewWrapper.title = file.name;
            
            addRemoveButton(previewWrapper, file);
        };
        reader.readAsDataURL(file);
    } else {
        // For other files, create an icon and name
        const icon = document.createElement('div');
        icon.style.fontSize = '30px';
        icon.style.height = '40px';
        icon.style.display = 'flex';
        icon.style.alignItems = 'center';
        icon.style.justifyContent = 'center';
        
        // Choose icon based on file type
        if (file.type.includes('pdf')) {
            icon.innerHTML = '📄';
            icon.style.color = '#e74c3c';
        } else if (file.type.includes('word') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
            icon.innerHTML = '📝';
            icon.style.color = '#3498db';
        } else if (file.type.includes('excel') || file.name.endsWith('.xls') || file.name.endsWith('.xlsx') || file.name.endsWith('.csv')) {
            icon.innerHTML = '📊';
            icon.style.color = '#2ecc71';
        } else if (file.type.includes('powerpoint') || file.name.endsWith('.ppt') || file.name.endsWith('.pptx')) {
            icon.innerHTML = '📊';
            icon.style.color = '#e67e22';
        } else if (file.type.includes('text') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
            icon.innerHTML = '📄';
            icon.style.color = '#bdc3c7';
        } else {
            icon.innerHTML = '📎';
            icon.style.color = '#95a5a6';
        }
        
        // Add file name
        const name = document.createElement('div');
        name.textContent = file.name.length > 10 ? file.name.substring(0, 7) + '...' : file.name;
        name.style.fontSize = '10px';
        name.style.textAlign = 'center';
        name.style.wordBreak = 'break-word';
        name.style.padding = '2px';
        name.style.overflow = 'hidden';
        
        // Add file name as tooltip
        previewWrapper.title = file.name;
        
        previewWrapper.appendChild(icon);
        previewWrapper.appendChild(name);
        
        addRemoveButton(previewWrapper, file);
    }
    
    // Add the preview to the container
    imagePreviewContainer.appendChild(previewWrapper);
}

// Helper function to add remove button
function addRemoveButton(previewWrapper, file) {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-file-button');
    removeBtn.innerHTML = '&times;';
    removeBtn.title = 'Datei entfernen';
    removeBtn.style.position = 'absolute';
    removeBtn.style.top = '0';
    removeBtn.style.right = '0';
    removeBtn.style.background = 'rgba(0,0,0,0.5)';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.style.borderRadius = '0 4px 0 4px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.fontSize = '16px';
    removeBtn.style.padding = '0 5px';
    
    removeBtn.onclick = function(event) {
        event.stopPropagation();
        const fileIndex = parseInt(previewWrapper.dataset.fileIndex);
        // Remove this specific file
        if (fileIndex >= 0 && fileIndex < selectedFiles.length) {
            selectedFiles.splice(fileIndex, 1);
            previewWrapper.remove();
            
            // If no files left, hide the container
            if (selectedFiles.length === 0) {
                imagePreviewContainer.style.display = 'none';
                selectedFiles = null;
            } else {
                // Update indices for remaining remove buttons
                const remainingPreviews = imagePreviewContainer.querySelectorAll('.file-preview-wrapper');
                remainingPreviews.forEach((preview, idx) => {
                    preview.dataset.fileIndex = idx;
                });
            }
            
            updateSendButtonState();
        }
    };
    
    previewWrapper.appendChild(removeBtn);
}

// Change event listener from handleImageUpload to handleFileUpload
fileInput.removeEventListener('change', handleImageUpload);
fileInput.addEventListener('change', handleFileUpload);

// Function to extract text content from files
async function extractFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        // Handle different file types
        if (file.type.includes('text') || 
            file.name.endsWith('.txt') || 
            file.name.endsWith('.csv') || 
            file.name.endsWith('.md') || 
            file.name.endsWith('.json') || 
            file.name.endsWith('.xml') || 
            file.name.endsWith('.html') || 
            file.name.endsWith('.htm') || 
            file.name.endsWith('.js') || 
            file.name.endsWith('.css')) {
            
            // Text files can be read directly
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsText(file);
            
        } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
            // For PDF files, try to extract text if PDF.js is available
            try {
                extractPdfText(file)
                    .then(text => {
                        resolve(text);
                    })
                    .catch(error => {
                        console.error("Error extracting PDF text:", error);
                        // Fallback to sending a more detailed message about the PDF
                        reader.onload = () => {
                            const base64Content = reader.result.split(',')[1]; // Get base64 data
                            // Inform the AI that this is a PDF but we couldn't extract text
                            const fileInfo = `[PDF Datei: ${file.name}, Größe: ${formatFileSize(file.size)}]`;
                            resolve(fileInfo + `\n\nDiese PDF-Datei konnte nicht analysiert werden. Sie wurde dem KI-Modell jedoch für die Analyse zur Verfügung gestellt. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus der PDF wissen möchten.`);
                        };
                        reader.onerror = () => reject(new Error("Failed to read PDF file"));
                        reader.readAsDataURL(file);
                    });
            } catch (error) {
                console.error("PDF extraction error:", error);
                // If PDF.js is not available or has errors, include the file info
                reader.onload = () => {
                    const base64Content = reader.result.split(',')[1]; // Get base64 data
                    const fileInfo = `[PDF Datei: ${file.name}, Größe: ${formatFileSize(file.size)}]`;
                    resolve(fileInfo + `\n\nDiese PDF-Datei konnte nicht analysiert werden. Sie wurde dem KI-Modell jedoch für die Analyse zur Verfügung gestellt. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus der PDF wissen möchten.`);
                };
                reader.onerror = () => reject(new Error("Failed to read PDF file"));
                reader.readAsDataURL(file);
            }
        } else if (file.type.includes('word') || 
                  file.name.endsWith('.doc') || 
                  file.name.endsWith('.docx')) {
                  
            // For Word documents
            reader.onload = () => {
                const fileInfo = `[Word-Dokument: ${file.name}, Größe: ${formatFileSize(file.size)}]`;
                resolve(fileInfo + `\n\nWord-Dokumente können nicht direkt als Text extrahiert werden. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus dem Dokument wissen möchten.`);
            };
            reader.onerror = () => reject(new Error("Failed to read Word document"));
            reader.readAsDataURL(file);
                  
        } else if (file.type.includes('excel') || 
                  file.name.endsWith('.xls') || 
                  file.name.endsWith('.xlsx') || 
                  file.name.endsWith('.csv')) {
                  
            // For Excel spreadsheets
            if (file.name.endsWith('.csv')) {
                // CSV files can be read as text
                reader.onload = () => resolve(reader.result);
                reader.onerror = () => reject(new Error("Failed to read CSV file"));
                reader.readAsText(file);
            } else {
                reader.onload = () => {
                    const fileInfo = `[Excel-Tabelle: ${file.name}, Größe: ${formatFileSize(file.size)}]`;
                    resolve(fileInfo + `\n\nExcel-Tabellen können nicht direkt als Text extrahiert werden. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus der Tabelle wissen möchten.`);
                };
                reader.onerror = () => reject(new Error("Failed to read Excel spreadsheet"));
                reader.readAsDataURL(file);
            }
                  
        } else if (file.type.includes('powerpoint') ||
                  file.name.endsWith('.ppt') || 
                  file.name.endsWith('.pptx')) {
                  
            // For PowerPoint presentations
            reader.onload = () => {
                const fileInfo = `[PowerPoint-Präsentation: ${file.name}, Größe: ${formatFileSize(file.size)}]`;
                resolve(fileInfo + `\n\nPowerPoint-Präsentationen können nicht direkt als Text extrahiert werden. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus der Präsentation wissen möchten.`);
            };
            reader.onerror = () => reject(new Error("Failed to read PowerPoint presentation"));
            reader.readAsDataURL(file);
                  
        } else {
            // For unknown formats, provide basic info
            reader.onload = () => {
                const fileInfo = `[Datei: ${file.name}, Typ: ${file.type || 'unbekannt'}, Größe: ${formatFileSize(file.size)}]`;
                resolve(fileInfo + `\n\nDieser Dateityp kann nicht direkt analysiert werden. Bitte beschreiben Sie in Ihrer Anfrage, was Sie aus dieser Datei wissen möchten.`);
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        }
    });
}

// Function to extract text from PDF using PDF.js if available
async function extractPdfText(file) {
    return new Promise((resolve, reject) => {
        // Check if PDF.js is loaded
        if (typeof pdfjsLib === 'undefined') {
            // If PDF.js is not available, load it dynamically
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
            script.onload = () => {
                // Now that PDF.js is loaded, try extraction again
                extractPdfWithPdfJs();
            };
            script.onerror = () => {
                reject(new Error("Failed to load PDF.js library"));
            };
            document.head.appendChild(script);
        } else {
            // PDF.js is already available
            extractPdfWithPdfJs();
        }
        
        function extractPdfWithPdfJs() {
            const reader = new FileReader();
            reader.onload = async function() {
                try {
                    const typedArray = new Uint8Array(reader.result);
                    
                    // Initialize PDF.js
                    if (typeof pdfjsLib.getDocument === 'undefined') {
                        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
                    }
                    
                    // Load the PDF document
                    const loadingTask = pdfjsLib.getDocument({ data: typedArray });
                    const pdf = await loadingTask.promise;
                    
                    let fullText = `[PDF Dokument: ${file.name}, ${pdf.numPages} Seiten]\n\n`;
                    
                    // Extract text from each page (limit to first 30 pages for performance)
                    const maxPages = Math.min(pdf.numPages, 30);
                    for (let i = 1; i <= maxPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items.map(item => item.str).join(' ');
                        
                        fullText += `--- Seite ${i} ---\n${pageText}\n\n`;
                    }
                    
                    if (pdf.numPages > maxPages) {
                        fullText += `[Hinweis: Das Dokument hat insgesamt ${pdf.numPages} Seiten, aber aus Leistungsgründen wurden nur die ersten ${maxPages} Seiten extrahiert.]`;
                    }
                    
                    resolve(fullText);
                } catch (error) {
                    console.error("PDF extraction error:", error);
                    reject(error);
                }
            };
            reader.onerror = () => reject(new Error("Failed to read PDF file"));
            reader.readAsArrayBuffer(file);
        }
    });
}

// Helper functions
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

/**
 * Prüft, ob ein Text wie eine LaTeX-Formel aussieht
 * @param {string} text - Der zu prüfende Text
 * @returns {boolean} True, wenn der Text einer LaTeX-Formel ähnelt
 */
function looksLikeLaTeX(text) {
    // Typische LaTeX-Muster
    const latexPatterns = [
        /\$\$[\s\S]+?\$\$/,     // Blockformel: $$...$$
        /\$[\s\S]+?\$/,         // Inlineformel: $...$
        /\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/,  // \begin{...}...\end{...}
        /\\[a-zA-Z]+\{/,        // LaTeX-Befehle: \command{
        /[^\\]\^{[^}]*}/,       // Exponent: ^{...}
        /[^\\]_{[^}]*}/         // Index: _{...}
    ];
    
    // Wenn der Text ein LaTeX-Muster enthält und mindestens 60% des Textes ausmacht
    for (const pattern of latexPatterns) {
        if (pattern.test(text)) {
            const matches = text.match(pattern);
            if (matches) {
                const matchLength = matches.reduce((sum, match) => sum + match.length, 0);
                const ratio = matchLength / text.length;
                if (ratio > 0.6) return true;
            }
        }
    }
    
    return false;
}

/**
 * Wendet Syntax-Highlighting auf einen Code-Block an
 * @param {HTMLElement} codeBlock - Der Code-Block-Element
 * @param {string} language - Die Sprache des Codes
 */
function applySyntaxHighlighting(codeBlock, language) {
    // Versuche zuerst, vorhandene Syntax-Highlighting-Bibliotheken zu nutzen
    if (window.Prism) {
        Prism.highlightElement(codeBlock);
    } else if (window.hljs) {
        hljs.highlightBlock(codeBlock);
    } else {
        // Einfaches Syntax-Highlighting als Fallback
        const code = codeBlock.textContent;
        
        // Einfaches Syntax-Highlighting für verschiedene Sprachen
        let highlightedCode = code;
        
        if (['javascript', 'js', 'typescript', 'ts'].includes(language)) {
            // JavaScript/TypeScript Highlighting
            highlightedCode = code
                // Kommentare
                .replace(/(\/\/.*)/g, '<span style="color:#6a9955">$1</span>')
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color:#6a9955">$1</span>')
                // Strings
                .replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/g, '<span style="color:#ce9178">$1</span>')
                // Keywords
                .replace(/\b(const|let|var|function|class|if|else|return|for|while|switch|case|break|continue|new|this|import|export|from|async|await|try|catch|throw)\b/g, 
                         '<span style="color:#569cd6">$1</span>')
                // Klassen und Typen
                .replace(/\b([A-Z][A-Za-z0-9_]*)\b/g, '<span style="color:#4ec9b0">$1</span>')
                // Zahlen
                .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color:#b5cea8">$1</span>');
        } else if (['html', 'xml'].includes(language)) {
            // HTML/XML Highlighting
            highlightedCode = code
                // Tags
                .replace(/(&lt;\/?)([a-zA-Z0-9_-]+)/g, '$1<span style="color:#569cd6">$2</span>')
                // Attribute
                .replace(/\s([a-zA-Z0-9_-]+)=/g, ' <span style="color:#9cdcfe">$1</span>=')
                // Attributwerte
                .replace(/"([^"]*)"/g, '"<span style="color:#ce9178">$1</span>"');
        } else if (['css', 'scss', 'less'].includes(language)) {
            // CSS Highlighting
            highlightedCode = code
                // Selektoren
                .replace(/([.#][a-zA-Z0-9_-]+)/g, '<span style="color:#d7ba7d">$1</span>')
                // Eigenschaften
                .replace(/([a-zA-Z-]+):/g, '<span style="color:#9cdcfe">$1</span>:')
                // Werte
                .replace(/:\s*([^;]+);/g, ': <span style="color:#ce9178">$1</span>;');
        } else if (['python', 'py'].includes(language)) {
            // Python Highlighting
            highlightedCode = code
                // Kommentare
                .replace(/(#.*)/g, '<span style="color:#6a9955">$1</span>')
                // Strings
                .replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|'''[\s\S]*?'''|"""[\s\S]*?""")/g, '<span style="color:#ce9178">$1</span>')
                // Keywords
                .replace(/\b(def|class|if|elif|else|for|while|return|import|from|as|try|except|finally|with|lambda|None|True|False)\b/g, 
                         '<span style="color:#569cd6">$1</span>')
                // Zahlen
                .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color:#b5cea8">$1</span>');
        }
        
        // Wende das Highlighting an
        codeBlock.innerHTML = highlightedCode;
    }
}

/**
 * Verbessert Code-Blöcke mit Syntax-Highlighting und Kopieren-Button
 * @param {HTMLElement} container - Der Container, in dem nach Code-Blöcken gesucht werden soll
 */
function enhanceCodeBlocks(container) {
    // Stellen sicher, dass die Styles hinzugefügt wurden
    addCodeGeneratingStyles();

    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        // Prüfe, ob der Block bereits verbessert wurde
        if (codeBlock.parentElement.classList.contains('enhanced-code-block')) {
            return;
        }
        
        // Sicherstellen, dass HTML im Code-Block als Text angezeigt wird
        const originalContent = codeBlock.textContent;
        if (originalContent.includes('<') || originalContent.includes('>')) {
            // Erneut escapen um sicherzustellen, dass kein HTML gerendert wird
            codeBlock.textContent = originalContent;
        }
        
        // Identifiziere die Sprache
        let language = '';
        const classNames = Array.from(codeBlock.classList);
        for (const className of classNames) {
            if (className.startsWith('language-')) {
                language = className.replace('language-', '');
                break;
            }
        }
        
        // LaTeX-Prüfung
        if (looksLikeLaTeX(codeBlock.textContent)) {
            if (!codeBlock.classList.contains('language-latex')) {
                codeBlock.classList.add('language-latex');
                language = 'latex';
            }
            return; // Keine weiteren Verbesserungen für LaTeX
        }
        
        // Container für den Code-Block erstellen
        const codeContainer = document.createElement('div');
        codeContainer.className = 'code-container';
        
        // Header für die Code-Sprache und Kopieren-Button erstellen
        const codeHeader = document.createElement('div');
        codeHeader.className = 'code-header';
        
        // Sprach-Badge erstellen
        const languageBadge = document.createElement('span');
        languageBadge.className = 'code-language-badge';
        languageBadge.textContent = language || 'Text';
        codeHeader.appendChild(languageBadge);
        
        // Kopieren-Button erstellen
        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-button';
        copyButton.textContent = 'Kopieren';
        copyButton.onclick = function() {
            // Kopiere den Inhalt, ohne den "Code wird generiert..."-Indikator
            const tempElement = document.createElement('div');
            tempElement.innerHTML = codeBlock.innerHTML;
            const generatingIndicator = tempElement.querySelector('.code-generating');
            if (generatingIndicator) {
                generatingIndicator.remove();
            }
            
            navigator.clipboard.writeText(tempElement.textContent).then(() => {
                copyButton.textContent = 'Kopiert!';
                copyButton.style.backgroundColor = 'var(--accent-green, #2ecc71)';
                setTimeout(() => {
                    copyButton.textContent = 'Kopieren';
                    copyButton.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Fehler beim Kopieren:', err);
                copyButton.textContent = 'Fehler!';
                setTimeout(() => {
                    copyButton.textContent = 'Kopieren';
                }, 2000);
            });
        };
        codeHeader.appendChild(copyButton);
        
        // Ursprünglichen Code-Block in einen Container einpacken
        const originalParent = codeBlock.parentElement;
        originalParent.classList.add('enhanced-code-block');
        
        // Container und Header vor dem Code-Block einfügen
        originalParent.before(codeContainer);
        codeContainer.appendChild(codeHeader);
        codeContainer.appendChild(originalParent);
        
        // Prüfen, ob der Code leer ist oder nur Whitespace enthält
        const codeContent = codeBlock.textContent.trim();
        if (codeContent === '' && !codeBlock.querySelector('.code-generating')) {
            // Erzeuge einen "Code wird generiert..."-Indikator
            const generatingIndicator = document.createElement('span');
            generatingIndicator.className = 'code-generating';
            generatingIndicator.textContent = 'Code wird generiert...';
            codeBlock.appendChild(generatingIndicator);
            
            // Beobachter für Änderungen
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        const content = codeBlock.textContent.trim();
                        if (content !== '' && content !== 'Code wird generiert...') {
                            // Entferne den Indikator, wenn Inhalt hinzugefügt wurde
                            const indicator = codeBlock.querySelector('.code-generating');
                            if (indicator) indicator.remove();
                            observer.disconnect();
                            
                            // Wenn Syntax-Highlighting verfügbar ist, führe es aus
                            applySyntaxHighlighting(codeBlock, language);
                        }
                    }
                });
            });
            
            observer.observe(codeBlock, { 
                childList: true, 
                characterData: true,
                subtree: true
            });
        } else if (codeContent !== '') {
            // Wenn Inhalt vorhanden ist, Syntax-Highlighting direkt anwenden
            applySyntaxHighlighting(codeBlock, language);
        }
    });
}

// --- KI-Bildgenerierung mit Pollinations API ---
const IMAGE_API_BASE_URL = "https://image.pollinations.ai/prompt/";

/**
 * Generiert ein Bild mit der Pollinations API basierend auf einem Prompt
 * @param {string} prompt - Der Bildgenerierungsprompt (bevorzugt auf Englisch)
 * @param {Object} options - Zusätzliche Optionen für die Bildgenerierung
 * @returns {string} Die URL zum generierten Bild
 */
function generateImage(prompt, options = {}) {
    // Standardwerte für die Optionen
    const defaults = {
        width: 1024,
        height: 1024,
        nologo: true,
        private: true,
        enhance: true,
        seed: Math.floor(Math.random() * 1000000) // Zufälliger Seed-Wert zwischen 0 und 999999
    };
    
    // Kombiniere die Standardwerte mit den übergebenen Optionen
    const settings = { ...defaults, ...options };
    
    // Erstelle die URL-Parameter
    const params = new URLSearchParams();
    Object.entries(settings).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            params.append(key, value);
        }
    });
    
    // Kodiere den Prompt für die URL
    const encodedPrompt = encodeURIComponent(prompt);
    
    // Erstelle die vollständige URL
    const imageUrl = `${IMAGE_API_BASE_URL}${encodedPrompt}?${params.toString()}`;
    
    console.log("🖼️ Bild wird generiert mit URL:", imageUrl);
    return imageUrl;
}

/**
 * Verarbeitet den Text und ersetzt Bildgenerierungs-Tags mit tatsächlichen Bildern
 * @param {string} content - Der zu verarbeitende Text
 * @returns {string} Der Text mit eingebetteten Bildern
 */
function processImageGenerationTags(content) {
    // Erkenne das Format [BILD: prompt] oder [BILD: prompt, width: 512, height: 512]
    const regex = /\[BILD:\s*(.*?)(?:,\s*width:\s*(\d+))?(?:,\s*height:\s*(\d+))?(?:,\s*enhance:\s*(true|false))?(?:,\s*private:\s*(true|false))?(?:,\s*seed:\s*(\d+))?\]/g;
    
    // Generiere eine eindeutige ID für jedes Bild
    let imageCounter = 0;
    
    // Ersetze alle gefundenen Tags mit den entsprechenden Bild-HTML-Tags
    const processedContent = content.replace(regex, (match, prompt, width, height, enhance, isPrivate, seed) => {
        const imageId = `generated-image-${Date.now()}-${imageCounter++}`;
        
        // Erstelle die Optionen für die Bildgenerierung
        const options = {};
        if (width) options.width = parseInt(width);
        if (height) options.height = parseInt(height);
        if (enhance) options.enhance = enhance === 'true';
        if (isPrivate) options.private = isPrivate === 'true';
        if (seed) options.seed = parseInt(seed);
        
        // Generiere die Bild-URL
        const imageUrl = generateImage(prompt.trim(), options);
        
        // Zeitstempel für Cache-Busting hinzufügen
        const cacheBust = `?_t=${Date.now()}`;
        const imageUrlWithCache = imageUrl + cacheBust;
        
        // Erstelle das HTML für das eingebettete Bild mit Ladeanimation
        return `<div class="generated-image-container" data-image-id="${imageId}">
            <div class="image-loading" id="loading-${imageId}">
                <div class="image-loading-spinner"></div>
                <span>Bild wird generiert...</span>
            </div>
            <img src="${imageUrlWithCache}" alt="${prompt}" class="generated-image" loading="lazy" 
                onload="document.getElementById('loading-${imageId}').style.display='none';"
                onerror="handleImageError('${imageId}')" />
        </div>`;
    });
    
    return processedContent;
}

// Funktion, um sicherzustellen, dass alle generierten Bilder klickbar sind
function makeImagesClickable() {
    document.querySelectorAll('.generated-image-container').forEach(function(container) {
        // Wenn der Container keinen Click-Handler hat
        if (!container.hasAttribute('data-has-click')) {
            container.setAttribute('data-has-click', 'true');
            
            // Click-Handler zum Container hinzufügen
            container.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img && img.src) {
                    viewFullImage(img.src.split('?')[0], img.alt);
                }
            });
            
            // Auch dem Bild innerhalb des Containers einen Click-Handler hinzufügen
            const img = container.querySelector('img');
            if (img) {
                img.addEventListener('click', function(e) {
                    e.stopPropagation();
                    viewFullImage(this.src.split('?')[0], this.alt);
                });
            }
        }
    });
}

// Globale Funktionen für Bildanzeige
window.viewFullImage = function(imageUrl, prompt) {
    // Prüfen, ob bereits ein Modal existiert, ansonsten erstellen
    let modal = document.getElementById('image-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-view-modal';
        modal.className = 'image-modal';
        
        // Modal-Inhalt hinzufügen
        modal.innerHTML = `
            <button class="modal-close-btn" onclick="closeImageModal()">&times;</button>
            <img id="modal-image" class="modal-image" src="" alt="" />
            <div class="modal-controls">
                <button class="modal-btn" id="download-btn" onclick="downloadModalImage()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Herunterladen
                </button>
                <button class="modal-btn" onclick="closeImageModal()">Schließen</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    // Bild und Prompt im Modal setzen
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    modalImage.alt = prompt;
    
    // Setze Attribute für den Download-Button
    document.getElementById('download-btn').setAttribute('data-url', imageUrl);
    document.getElementById('download-btn').setAttribute('data-prompt', prompt);
    
    // Modal anzeigen
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Event-Listener für Escape-Taste hinzufügen
    document.addEventListener('keydown', handleEscapeKey);
};

window.closeImageModal = function() {
    const modal = document.getElementById('image-view-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.removeEventListener('keydown', handleEscapeKey);
};

window.handleEscapeKey = function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
};

window.downloadModalImage = function() {
    const btn = document.getElementById('download-btn');
    const url = btn.getAttribute('data-url');
    const prompt = btn.getAttribute('data-prompt');
    downloadImage(url, prompt);
};

window.downloadImage = function(url, prompt) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-image-' + prompt.replace(/[^a-z0-9]/gi, '-').substring(0, 30) + '.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// Beobachter einrichten, um Bilder klickbar zu machen, sobald sie zum DOM hinzugefügt werden
document.addEventListener('DOMContentLoaded', function() {
    // Initial alle Bilder klickbar machen
    makeImagesClickable();
    
    // Beobachter für DOM-Änderungen einrichten
    const observer = new MutationObserver(function(mutations) {
        makeImagesClickable();
    });
    
    // Chat-Box beobachten
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
        observer.observe(chatBox, { childList: true, subtree: true });
    }
    
    // Periodischer Check als Fallback
    setInterval(makeImagesClickable, 2000);
});

window.handleImageError = function(imageId) {
    const loading = document.getElementById(`loading-${imageId}`);
    if (loading) {
        loading.innerHTML = '<span style="color: #ff6b6b;">Fehler beim Laden des Bildes</span>';
    }
};

// --- Hilfsfunktion für Datum und Uhrzeit ---
function getCurrentDateTimeInfo() {
    const now = new Date();
    
    // Formatiere Datum: DD.MM.YYYY
    const date = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Formatiere Uhrzeit: HH:MM:SS
    const time = now.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    return `Das aktuelle Datum ist ${date} und die aktuelle Uhrzeit ist ${time}.`;
}

// --- Domain aus URL extrahieren ---
function extractDomain(url) {
    try {
        const hostname = new URL(url).hostname;
        // Entferne "www." vom Anfang, falls vorhanden
        return hostname.replace(/^www\./, '');
    } catch (e) {
        return url;
    }
}

// --- Wikipedia Suche ---
async function searchWikipedia(query) {
    try {
        const encodedQuery = encodeURIComponent(query);
        const wikiApiUrl = `https://de.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&explaintext=1&titles=${encodedQuery}&origin=*`;
        
        console.log("🔍 Sende Anfrage an Wikipedia API");
        const response = await fetch(wikiApiUrl);
        
        if (!response.ok) {
            throw new Error(`Wikipedia Fehler: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extrahiere den Seiteninhalt
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        
        // "-1" bedeutet, dass keine Seite gefunden wurde
        if (pageId === "-1") {
            return null;
        }
        
        const extract = pages[pageId].extract;
        const title = pages[pageId].title;
        const wikiUrl = `https://de.wikipedia.org/wiki/${encodeURIComponent(title)}`;
        
        if (extract && extract.length > 0) {
            return `${extract.substring(0, 1000)}${extract.length > 1000 ? '...' : ''} [wikipedia.org](${wikiUrl})\n\n`;
        }
        
        return null;
    } catch (error) {
        console.error("❌ Fehler bei der Wikipedia-Suche:", error);
        return null;
    }
}

// --- Google Suche über SerpApi ---
async function performGoogleSearch(query) {
    // Diese Funktion ist ein Fallback, wenn DuckDuckGo und Wikipedia keine Ergebnisse liefern
    // In einer echten Implementation würde hier eine API wie SerpApi oder ein anderer Dienst genutzt werden
    console.log("🔍 Google-Suche ist aktuell nicht implementiert");
    
    // Gib nur eine Info zurück, dass keine weiteren Suchergebnisse verfügbar sind
    return "Keine weiteren spezifischen Suchergebnisse für diese Anfrage gefunden. Wenn Sie mehr Informationen benötigen, versuchen Sie bitte eine spezifischere Suchanfrage.";
}

// Dokument bereit Event-Handler
document.addEventListener('DOMContentLoaded', function() {
    // ... existing DOMContentLoaded code
    
    // Responsive Design: Sidebar Toggle für mobile Geräte
    setupSidebarToggle();
});

// ... existing code ...

// Sidebar Toggle für mobile Geräte einrichten
function setupSidebarToggle() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    
    if (!toggleButton || !sidebar) return;
    
    // Toggle-Funktion für die Sidebar
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
        
        // Ändere das Icon je nach Zustand
        const icon = this.querySelector('svg');
        if (sidebar.classList.contains('expanded')) {
            // Zu X-Symbol ändern wenn ausgeklappt
            icon.innerHTML = `
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            `;
        } else {
            // Zurück zu Hamburger-Menü
            icon.innerHTML = `
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            `;
        }
    });
    
    // Chat-History-Items sollten die Sidebar einklappen, wenn auf mobilen Geräten
    const chatHistoryItems = document.querySelectorAll('.chat-history li');
    chatHistoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Nur auf mobilen Geräten die Sidebar einklappen
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('expanded');
                // Icon zurücksetzen
                const icon = toggleButton.querySelector('svg');
                icon.innerHTML = `
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `;
            }
        });
    });
    
    // Bei Größenänderung prüfen und anpassen
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Auf Desktop die expanded-Klasse entfernen
            sidebar.classList.remove('expanded');
            // Icon zurücksetzen
            const icon = toggleButton.querySelector('svg');
            icon.innerHTML = `
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            `;
        }
    });
}

// ... existing code ...