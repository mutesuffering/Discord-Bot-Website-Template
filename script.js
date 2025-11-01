// Theme definitions expressed as CSS variable overrides.
const themeSettings = {
    purple: {
        '--color-bg': '#160f26',
        '--color-surface': 'rgba(36, 23, 63, 0.72)',
        '--color-surface-strong': 'rgba(36, 23, 63, 0.85)',
        '--color-text': '#f1e7ff',
        '--color-muted': '#c4b5fd',
        '--color-accent': '#b892ff',
        '--color-accent-soft': 'rgba(184, 146, 255, 0.25)',
        '--shadow-soft': '0 20px 55px -35px rgba(184, 146, 255, 0.9)'
    },
    void: {
        '--color-bg': '#050510',
        '--color-surface': 'rgba(20, 20, 45, 0.76)',
        '--color-surface-strong': 'rgba(28, 28, 61, 0.88)',
        '--color-text': '#e5f1ff',
        '--color-muted': '#94a3b8',
        '--color-accent': '#38bdf8',
        '--color-accent-soft': 'rgba(56, 189, 248, 0.22)',
        '--shadow-soft': '0 26px 55px -34px rgba(56, 189, 248, 0.65)'
    },
    green: {
        '--color-bg': '#04150f',
        '--color-surface': 'rgba(10, 45, 30, 0.7)',
        '--color-surface-strong': 'rgba(14, 60, 38, 0.82)',
        '--color-text': '#eafff7',
        '--color-muted': '#a8e6c2',
        '--color-accent': '#34d399',
        '--color-accent-soft': 'rgba(52, 211, 153, 0.25)',
        '--shadow-soft': '0 26px 55px -34px rgba(52, 211, 153, 0.6)'
    },
    yellow: {
        '--color-bg': '#1a1200',
        '--color-surface': 'rgba(60, 45, 5, 0.72)',
        '--color-surface-strong': 'rgba(75, 56, 6, 0.85)',
        '--color-text': '#fff8e7',
        '--color-muted': '#f4d58d',
        '--color-accent': '#fbbf24',
        '--color-accent-soft': 'rgba(251, 191, 36, 0.25)',
        '--shadow-soft': '0 26px 55px -34px rgba(251, 191, 36, 0.5)'
    },
    blue: {
        '--color-bg': '#041225',
        '--color-surface': 'rgba(18, 54, 96, 0.72)',
        '--color-surface-strong': 'rgba(23, 73, 128, 0.85)',
        '--color-text': '#eaf4ff',
        '--color-muted': '#b4cdf4',
        '--color-accent': '#60a5fa',
        '--color-accent-soft': 'rgba(96, 165, 250, 0.25)',
        '--shadow-soft': '0 26px 55px -34px rgba(96, 165, 250, 0.55)'
    },
    red: {
        '--color-bg': '#25050a',
        '--color-surface': 'rgba(75, 15, 24, 0.72)',
        '--color-surface-strong': 'rgba(96, 20, 30, 0.85)',
        '--color-text': '#ffe8ec',
        '--color-muted': '#f9a8b5',
        '--color-accent': '#f87171',
        '--color-accent-soft': 'rgba(248, 113, 113, 0.25)',
        '--shadow-soft': '0 26px 55px -34px rgba(248, 113, 113, 0.6)'
    }
};

// Base command list for commands page.
const commands = [
    { name: 'ping', category: 'Utility', usage: '!ping' },
    { name: 'uptime', category: 'Utility', usage: '!uptime' },
    { name: 'ban', category: 'Moderation', usage: '!ban <user>' },
    { name: 'kick', category: 'Moderation', usage: '!kick <user>' },
    { name: 'mute', category: 'Moderation', usage: '!mute <user> [duration]' },
    { name: 'warn', category: 'Moderation', usage: '!warn <user> <reason>' },
    { name: 'play', category: 'Music', usage: '!play <song or url>' },
    { name: 'queue', category: 'Music', usage: '!queue' },
    { name: 'skip', category: 'Music', usage: '!skip' },
    { name: 'help', category: 'General', usage: '!help [command]' },
    { name: 'stats', category: 'General', usage: '!stats' },
    { name: 'remind', category: 'Utility', usage: '!remind <time> <message>' },
    { name: 'giveaway', category: 'Engagement', usage: '!giveaway <prize> <duration>' },
    { name: 'poll', category: 'Engagement', usage: '!poll <question>' },
    { name: 'ticket', category: 'Support', usage: '!ticket open/close' },
    { name: 'logs', category: 'Moderation', usage: '!logs [user]' },
    { name: 'autorole', category: 'Automation', usage: '!autorole add <role>' },
    { name: 'schedule', category: 'Automation', usage: '!schedule <event> <time>' },
    { name: 'translate', category: 'Utility', usage: '!translate <lang> <text>' },
    { name: 'level', category: 'Engagement', usage: '!level [user]' }
];

const THEME_STORAGE_KEY = 'novabot-theme';

/**
 * Applies the given theme name by setting CSS custom properties.
 * @param {string} themeName - Key from themeSettings.
 */
function applyTheme(themeName) {
    const theme = themeSettings[themeName] || themeSettings.purple;
    const root = document.documentElement;

    Object.entries(theme).forEach(([token, value]) => {
        root.style.setProperty(token, value);
    });
}

/**
 * Populate page elements, attach listeners, and hydrate UI.
 */
function initSite() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const themeSelector = document.getElementById('theme-selector');
    const activeTheme = storedTheme && themeSettings[storedTheme] ? storedTheme : 'purple';

    applyTheme(activeTheme);

    if (themeSelector) {
        themeSelector.value = activeTheme;
        themeSelector.addEventListener('change', event => {
            const nextTheme = event.target.value;
            applyTheme(nextTheme);
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        });
    }

    // Highlight the active navigation item for assistive tech.
    const currentPage = document.body.dataset.page;
    if (currentPage) {
        const pageToHref = {
            home: 'index.html',
            features: 'features.html',
            commands: 'commands.html',
            team: 'team.html'
        };

        const activeHref = pageToHref[currentPage];

        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === activeHref) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    injectCurrentYear();
    hydrateCommandsTable();
}

/**
 * Writes the current year into footer spans to keep the site evergreen.
 */
function injectCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Renders command data and sets up filtering when on the commands page.
 */
function hydrateCommandsTable() {
    const tableBody = document.getElementById('command-body');
    const filterSelect = document.getElementById('command-filter');

    if (!tableBody || !filterSelect) {
        return;
    }

    const categories = Array.from(new Set(commands.map(command => command.category))).sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterSelect.append(option);
    });

    /**
     * Builds table rows that match the selected category.
     * @param {string} filter - Either "all" or a category name.
     */
    const renderRows = filter => {
        tableBody.innerHTML = '';

        commands
            .filter(command => filter === 'all' || command.category === filter)
            .forEach(command => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${command.name}</td>
                    <td>${command.category}</td>
                    <td>${command.usage}</td>
                `;
                tableBody.append(row);
            });
    };

    filterSelect.addEventListener('change', event => {
        renderRows(event.target.value);
    });

    renderRows(filterSelect.value || 'all');
}

document.addEventListener('DOMContentLoaded', initSite);
