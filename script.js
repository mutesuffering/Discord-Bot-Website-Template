// Theme palettes defined as CSS custom property overrides.
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

const DEFAULT_SETTINGS = {
    botName: 'NovaBot',
    botTagline: 'A multipurpose Discord bot template.',
    botDescription: 'NovaBot blends moderation, engagement, and automation into a single easy-to-manage package.',
    theme: 'purple',
    inviteLink: '#',
    supportServer: '#',
    teamBackdrop: 'assets/team-backdrop.svg',
    teamMembers: [
        {
            name: 'Aria Chen',
            role: 'Lead Developer',
            bio: 'Architects {{botName}} and keeps every deployment reliable, fast, and secure.',
            avatar: 'assets/avatar-aria.svg',
            links: [
                { icon: 'fa-brands fa-github', url: '#', label: 'Aria GitHub' },
                { icon: 'fa-brands fa-x-twitter', url: '#', label: 'Aria Twitter' }
            ]
        },
        {
            name: 'Diego Marin',
            role: 'Product Designer',
            bio: 'Shapes intuitive control panels so every server owner can customise {{botName}} with confidence.',
            avatar: 'assets/avatar-diego.svg',
            links: [
                { icon: 'fa-brands fa-dribbble', url: '#', label: 'Diego Dribbble' },
                { icon: 'fa-brands fa-behance', url: '#', label: 'Diego Behance' }
            ]
        },
        {
            name: 'Sana Iqbal',
            role: 'Community Lead',
            bio: 'Builds partnerships and channels feedback to keep {{botName}} evolving alongside your members.',
            avatar: 'assets/avatar-sana.svg',
            links: [
                { icon: 'fa-brands fa-discord', url: '#', label: 'Sana Discord' },
                { icon: 'fa-brands fa-linkedin-in', url: '#', label: 'Sana LinkedIn' }
            ]
        },
        {
            name: 'Luca Romero',
            role: 'AI Specialist',
            bio: 'Develops adaptive automations that let {{botName}} answer questions and moderate conversations proactively.',
            avatar: 'assets/avatar-luca.svg',
            links: [
                { icon: 'fa-brands fa-github', url: '#', label: 'Luca GitHub' },
                { icon: 'fa-brands fa-medium', url: '#', label: 'Luca Medium' }
            ]
        }
    ]
};

const STORAGE_KEYS = {
    theme: 'discord-template-theme',
    name: 'discord-template-name'
};

// Base command list rendered on both the home and standalone commands page.
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

const state = {
    settings: null
};

document.addEventListener('DOMContentLoaded', initSite);

/**
 * Bootstraps the template: merges settings, applies theme, hooks UI helpers.
 */
function initSite() {
    state.settings = loadMergedSettings();
    applyTheme(state.settings.theme);
    bindThemeSelector();
    applySettingBindings();
    renderTeamMembers();
    configureNavigation();
    configureRevealAnimations();
    injectCurrentYear();
    hydrateCommandsTable();
    setupBackToTop();
    updateDocumentTitle();
}

/**
 * Merge defaults, user settings, and saved preferences.
 * @returns {Record<string, string>} resolved settings object.
 */
function loadMergedSettings() {
    const userSettings = window.settings || {};
    const merged = { ...DEFAULT_SETTINGS, ...userSettings };

    const storedName = localStorage.getItem(STORAGE_KEYS.name);
    if (!userSettings.botName && storedName) {
        merged.botName = storedName;
    }

    const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    if (storedTheme && themeSettings[storedTheme]) {
        merged.theme = storedTheme;
    }

    // Persist current values for use across pages.
    localStorage.setItem(STORAGE_KEYS.name, merged.botName);
    localStorage.setItem(STORAGE_KEYS.theme, merged.theme);

    const userTeam = Array.isArray(userSettings.teamMembers) ? userSettings.teamMembers : null;
    const baseTeam = userTeam && userTeam.length ? userTeam : DEFAULT_SETTINGS.teamMembers;
    merged.teamMembers = baseTeam.map(member => ({
        ...member,
        links: Array.isArray(member.links) ? member.links.map(link => ({ ...link })) : []
    }));

    return merged;
}

/**
 * Applies the given theme name by setting CSS custom properties.
 * @param {string} themeName - key from themeSettings.
 */
function applyTheme(themeName) {
    const theme = themeSettings[themeName] || themeSettings.purple;
    const root = document.documentElement;

    Object.entries(theme).forEach(([token, value]) => {
        root.style.setProperty(token, value);
    });
}

/**
 * Wires up the theme select element to update CSS variables and persist choice.
 */
function bindThemeSelector() {
    const themeSelector = document.getElementById('theme-selector');
    if (!themeSelector) {
        return;
    }

    const activeTheme = state.settings.theme;
    if (themeSettings[activeTheme]) {
        themeSelector.value = activeTheme;
    }

    themeSelector.addEventListener('change', event => {
        const nextTheme = event.target.value;
        if (!themeSettings[nextTheme]) {
            return;
        }
        applyTheme(nextTheme);
        state.settings.theme = nextTheme;
        localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    });
}

/**
 * Syncs text and links that reference editable settings.
 */
function applySettingBindings() {
    const { botName, botTagline, botDescription, inviteLink, supportServer, teamBackdrop } = state.settings;

    document.querySelectorAll('[data-setting="botName"]').forEach(el => {
        el.textContent = botName;
    });

    const taglineNodes = document.querySelectorAll('[data-setting="botTagline"]');
    taglineNodes.forEach(el => {
        el.textContent = botTagline;
    });

    document.querySelectorAll('[data-setting="botDescription"]').forEach(el => {
        el.textContent = botDescription;
    });

    document.querySelectorAll('[data-setting-link="inviteLink"]').forEach(link => {
        link.setAttribute('href', inviteLink || '#');
    });

    document.querySelectorAll('[data-setting-link="supportServer"]').forEach(link => {
        link.setAttribute('href', supportServer || '#');
    });

    applyTeamBackdrop(teamBackdrop);
}

/**
 * Applies the configured backdrop image to team sections if available.
 * @param {string} backdrop - path or URL to the backdrop asset.
 */
function applyTeamBackdrop(backdrop) {
    document.querySelectorAll('[data-team-section]').forEach(section => {
        if (backdrop) {
            section.classList.add('has-backdrop');
            section.style.setProperty('--team-backdrop-image', `url("${backdrop}")`);
        } else {
            section.classList.remove('has-backdrop');
            section.style.removeProperty('--team-backdrop-image');
        }
    });
}

/**
 * Builds the team cards for each grid based on settings configuration.
 */
function renderTeamMembers() {
    const grids = document.querySelectorAll('[data-team-grid]');
    if (!grids.length) {
        return;
    }

    const teamMembers = Array.isArray(state.settings.teamMembers) ? state.settings.teamMembers : [];

    grids.forEach(grid => {
        const variant = grid.dataset.teamGrid || 'compact';
        grid.innerHTML = '';

        if (!teamMembers.length) {
            const placeholder = document.createElement('p');
            placeholder.className = 'team-empty';
            placeholder.textContent = 'Team information coming soon.';
            grid.append(placeholder);
            return;
        }

        teamMembers.forEach(member => {
            const card = document.createElement('article');
            card.className = 'team-card';

            const avatarWrapper = document.createElement('div');
            avatarWrapper.className = 'avatar';

            if (member.avatar) {
                const img = document.createElement('img');
                img.src = member.avatar;
                img.alt = member.name ? `Portrait of ${member.name}` : 'Team member portrait';
                avatarWrapper.append(img);
            } else {
                const initials = document.createElement('span');
                initials.className = 'avatar-initial';
                const firstLetter = (member.name || '?').trim().charAt(0).toUpperCase();
                initials.textContent = firstLetter || '?';
                avatarWrapper.append(initials);
            }

            card.append(avatarWrapper);

            const headingTag = variant === 'expanded' ? 'h2' : 'h3';
            const nameEl = document.createElement(headingTag);
            nameEl.textContent = member.name || 'Team Member';
            card.append(nameEl);

            if (member.role) {
                const roleEl = document.createElement('p');
                roleEl.className = 'role';
                roleEl.textContent = member.role;
                card.append(roleEl);
            }

            if (member.bio) {
                const bioEl = document.createElement('p');
                bioEl.textContent = member.bio.replace(/{{botName}}/g, state.settings.botName);
                card.append(bioEl);
            }

            if (variant === 'expanded' && Array.isArray(member.links) && member.links.length) {
                const list = document.createElement('ul');
                list.className = 'team-links';

                member.links.forEach(link => {
                    if (!link || !link.url) {
                        return;
                    }

                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = link.url;
                    anchor.target = '_blank';
                    anchor.rel = 'noopener';
                    anchor.setAttribute('aria-label', link.label || `Open ${member.name || 'team member'} link`);

                    const icon = document.createElement('i');
                    icon.className = link.icon || 'fa-solid fa-link';
                    icon.setAttribute('aria-hidden', 'true');

                    anchor.append(icon);
                    listItem.append(anchor);
                    list.append(listItem);
                });

                if (list.children.length) {
                    card.append(list);
                }
            }

            grid.append(card);
        });
    });
}

/**
 * Updates the page title to reflect the bot name and current section.
 */
function updateDocumentTitle() {
    const page = document.body.dataset.page || 'home';
    const map = {
        home: 'Home',
        features: 'Features',
        commands: 'Commands',
        team: 'Team'
    };
    const suffix = map[page] || 'Home';
    document.title = `${state.settings.botName} | ${suffix}`;
}

/**
 * Adjusts navigation links and highlights the active section/page.
 */
function configureNavigation() {
    const bodyPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const anchorHref = link.getAttribute('href');
        const altHref = link.getAttribute('data-alt-href');

        if (bodyPage === 'home' && anchorHref && anchorHref.startsWith('#')) {
            // Already points to the section on the same page.
            return;
        }

        if (bodyPage !== 'home' && altHref) {
            link.setAttribute('href', altHref);
        }
    });

    if (bodyPage === 'home') {
        setupSectionHighlighting(navLinks);
    } else {
        applyPageHighlight(navLinks, bodyPage);
    }
}

/**
 * Adds IntersectionObserver based highlighting for in-page navigation.
 * @param {NodeListOf<Element>} navLinks - navigation links to evaluate.
 */
function setupSectionHighlighting(navLinks) {
    const linkMap = new Map();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            linkMap.set(href.slice(1), link);
        }
        link.removeAttribute('aria-current');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.target.id) {
                return;
            }
            const link = linkMap.get(entry.target.id);
            if (!link) {
                return;
            }
            if (entry.isIntersecting) {
                navLinks.forEach(item => item.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'page');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
}

/**
 * Highlights the active page link when not on the one-page layout.
 * @param {NodeListOf<Element>} navLinks - navigation links in the header.
 * @param {string} bodyPage - page identifier from body dataset.
 */
function applyPageHighlight(navLinks, bodyPage) {
    const hrefMap = {
        features: 'features.html',
        commands: 'commands.html',
        team: 'team.html'
    };
    const targetHref = hrefMap[bodyPage];

    navLinks.forEach(link => {
        if (targetHref && link.getAttribute('href') === targetHref) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

/**
 * Adds a subtle fade-in animation as sections enter the viewport.
 */
function configureRevealAnimations() {
    const revealNodes = document.querySelectorAll('.reveal');
    if (!revealNodes.length) {
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealNodes.forEach(node => observer.observe(node));
}

/**
 * Writes the current year into footer spans.
 */
function injectCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Renders command data and sets up filtering and search.
 */
function hydrateCommandsTable() {
    const tableBody = document.getElementById('command-body');
    if (!tableBody) {
        return;
    }

    const filterSelect = document.getElementById('command-filter');
    const searchInput = document.getElementById('command-search');

    const categories = Array.from(new Set(commands.map(command => command.category))).sort();
    if (filterSelect && filterSelect.options.length <= 1) {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterSelect.append(option);
        });
    }

    const renderRows = () => {
        const filterValue = filterSelect ? filterSelect.value : 'all';
        const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : '';

        tableBody.innerHTML = '';

        commands
            .filter(command => {
                const matchesCategory = filterValue === 'all' || command.category === filterValue;
                const matchesSearch = searchValue.length === 0 ||
                    command.name.toLowerCase().includes(searchValue) ||
                    command.usage.toLowerCase().includes(searchValue) ||
                    command.category.toLowerCase().includes(searchValue);
                return matchesCategory && matchesSearch;
            })
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

    if (filterSelect) {
        filterSelect.addEventListener('change', renderRows);
    }

    if (searchInput) {
        searchInput.addEventListener('input', renderRows);
    }

    renderRows();
}

/**
 * Shows a back-to-top toggle and scrolls when activated.
 */
function setupBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) {
        return;
    }

    const toggleVisibility = () => {
        if (window.scrollY > 320) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
