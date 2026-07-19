/**
 * KDE Plasma 6 desktop preview — interactive shell
 * Layout modelled on Breeze Dark + defaultPanel + Kickoff + Dolphin
 */

/* ---------- App / category data ---------- */

const FAVORITES = [
  { id: "firefox", name: "Firefox", icon: "assets/apps/firefox.svg" },
  { id: "dolphin", name: "Dolphin", icon: "assets/apps/system-file-manager.svg" },
  { id: "konsole", name: "Konsole", icon: "assets/apps/utilities-terminal.svg" },
  { id: "systemsettings", name: "System Settings", icon: "assets/apps/systemsettings.svg" },
  { id: "kate", name: "Kate", icon: "assets/apps/kate.svg" },
  { id: "discover", name: "Discover", icon: "assets/apps/system-software-update.svg" },
  { id: "okular", name: "Okular", icon: "assets/apps/okular.svg" },
  { id: "gwenview", name: "Gwenview", icon: "assets/apps/gwenview.svg" },
];

const CATEGORIES = [
  { id: "favorites", name: "Favorites", icon: "assets/places/favorites.svg" },
  { id: "all", name: "All Applications", icon: "assets/menu/applications-other.svg" },
  { id: "sep1", separator: true },
  { id: "development", name: "Development", icon: "assets/menu/applications-development.svg" },
  { id: "games", name: "Games", icon: "assets/menu/applications-games.svg" },
  { id: "graphics", name: "Graphics", icon: "assets/menu/applications-graphics.svg" },
  { id: "internet", name: "Internet", icon: "assets/menu/applications-internet.svg" },
  { id: "multimedia", name: "Multimedia", icon: "assets/menu/applications-multimedia.svg" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office.svg" },
  { id: "system", name: "System", icon: "assets/menu/applications-system.svg" },
  { id: "utilities", name: "Utilities", icon: "assets/menu/applications-utilities.svg" },
  { id: "settings", name: "Settings", icon: "assets/menu/preferences-system.svg" },
  { id: "help", name: "Help", icon: "assets/menu/system-help.svg" },
];

const PLACES_CATEGORIES = [
  { id: "computer", name: "Computer", icon: "assets/places/drive-harddisk.svg" },
  { id: "history", name: "History", icon: "assets/places/document-open-recent.svg" },
  { id: "frequent", name: "Frequently Used", icon: "assets/places/favorites.svg" },
];

const APPS = [
  {
    id: "firefox",
    name: "Firefox",
    desc: "Browse the World Wide Web",
    icon: "assets/apps/firefox.svg",
    categories: ["internet", "all"],
  },
  {
    id: "dolphin",
    name: "Dolphin",
    desc: "File Manager",
    icon: "assets/apps/system-file-manager.svg",
    categories: ["utilities", "system", "all"],
  },
  {
    id: "konsole",
    name: "Konsole",
    desc: "Terminal emulator",
    icon: "assets/apps/utilities-terminal.svg",
    categories: ["utilities", "system", "all"],
  },
  {
    id: "systemsettings",
    name: "System Settings",
    desc: "Configuration tools for your computer",
    icon: "assets/apps/systemsettings.svg",
    categories: ["settings", "system", "all"],
  },
  {
    id: "kate",
    name: "Kate",
    desc: "Advanced text editor",
    icon: "assets/apps/kate.svg",
    categories: ["utilities", "development", "all"],
  },
  {
    id: "kwrite",
    name: "KWrite",
    desc: "Text editor",
    icon: "assets/apps/kwrite.svg",
    categories: ["utilities", "all"],
  },
  {
    id: "okular",
    name: "Okular",
    desc: "Document viewer",
    icon: "assets/apps/okular.svg",
    categories: ["office", "utilities", "all"],
  },
  {
    id: "gwenview",
    name: "Gwenview",
    desc: "Image viewer",
    icon: "assets/apps/gwenview.svg",
    categories: ["graphics", "all"],
  },
  {
    id: "spectacle",
    name: "Spectacle",
    desc: "Screenshot capture utility",
    icon: "assets/apps/spectacle.svg",
    categories: ["utilities", "graphics", "all"],
  },
  {
    id: "ark",
    name: "Ark",
    desc: "Archiving Tool",
    icon: "assets/apps/ark.svg",
    categories: ["utilities", "all"],
  },
  {
    id: "elisa",
    name: "Elisa",
    desc: "Music player",
    icon: "assets/apps/elisa.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "dragon",
    name: "Dragon Player",
    desc: "Video player",
    icon: "assets/apps/dragonplayer.svg",
    categories: ["multimedia", "all"],
  },
  {
    id: "kmail",
    name: "KMail",
    desc: "Mail client",
    icon: "assets/apps/kmail.svg",
    categories: ["internet", "office", "all"],
  },
  {
    id: "neochat",
    name: "NeoChat",
    desc: "Matrix client",
    icon: "assets/apps/org.kde.neochat.svg",
    categories: ["internet", "all"],
  },
  {
    id: "calculator",
    name: "Calculator",
    desc: "Scientific calculator",
    icon: "assets/apps/accessories-calculator.svg",
    categories: ["utilities", "all"],
  },
  {
    id: "discover",
    name: "Discover",
    desc: "Software Center",
    icon: "assets/apps/system-software-update.svg",
    categories: ["system", "all"],
  },
  {
    id: "help",
    name: "Help",
    desc: "KDE Help Center",
    icon: "assets/apps/system-help.svg",
    categories: ["help", "all"],
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    desc: "Office suite",
    icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png",
    categories: ["office", "all"],
  },
  {
    id: "writer",
    name: "LibreOffice Writer",
    desc: "Word processor",
    icon: "assets/apps/org.libreoffice.LibreOffice.writer.png",
    categories: ["office", "all"],
  },
  {
    id: "calc",
    name: "LibreOffice Calc",
    desc: "Spreadsheet",
    icon: "assets/apps/org.libreoffice.LibreOffice.calc.png",
    categories: ["office", "all"],
  },
  {
    id: "impress",
    name: "LibreOffice Impress",
    desc: "Presentation program",
    icon: "assets/apps/org.libreoffice.LibreOffice.impress.png",
    categories: ["office", "all"],
  },
];

const COMPUTER_PLACES = [
  { id: "home", name: "Home", icon: "assets/places/user-home.svg", place: "home" },
  { id: "root", name: "Root", icon: "assets/places/drive-harddisk.svg", place: "computer" },
  { id: "network", name: "Network", icon: "assets/places/network-workgroup.svg" },
  { id: "trash", name: "Trash", icon: "assets/places/user-trash.svg", place: "trash" },
];

const HISTORY_ITEMS = [
  { id: "h1", name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg" },
  { id: "h2", name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png" },
  { id: "h3", name: "Firefox", icon: "assets/apps/firefox.svg" },
];

const FREQUENT_ITEMS = [
  { id: "f1", name: "Dolphin", icon: "assets/apps/system-file-manager.svg", launch: "dolphin" },
  { id: "f2", name: "Firefox", icon: "assets/apps/firefox.svg", launch: "firefox" },
  { id: "f3", name: "Konsole", icon: "assets/apps/utilities-terminal.svg", launch: "konsole" },
  { id: "f4", name: "Documents", icon: "assets/places/folder-documents.svg", place: "documents" },
];

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.svg",
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.svg", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.svg", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.svg", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.svg", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.svg", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.svg", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.svg", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.svg", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/user-desktop.svg",
    items: [],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.svg",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file", size: "2.1 KiB", modified: "Today" },
      { name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", type: "file", size: "48 KiB", modified: "Yesterday" },
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 KiB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.svg",
    items: [
      { name: "plasma-desktop.iso", icon: "assets/places/drive-harddisk.svg", type: "file", size: "3.2 GiB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/apps/okular.svg", type: "file", size: "340 KiB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.svg",
    items: [
      { name: "Playlist", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "1 Jun 2026" },
    ],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.svg",
    items: [
      { name: "Screenshots", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MiB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.svg",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.svg",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.svg",
    items: [],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.svg",
    items: [],
  },
  computer: {
    label: "/",
    icon: "assets/places/drive-harddisk.svg",
    items: [
      { name: "home", icon: "assets/places/user-home.svg", type: "folder", place: "home", size: "—", modified: "—" },
      { name: "usr", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
      { name: "etc", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
      { name: "var", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
    ],
  },
};

const SIDEBAR_PLACES = [
  { id: "home", label: "Home", icon: "assets/places/user-home.svg" },
  { id: "desktop", label: "Desktop", icon: "assets/places/user-desktop.svg" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents.svg" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download.svg" },
  { id: "music", label: "Music", icon: "assets/places/folder-music.svg" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures.svg" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos.svg" },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.svg" },
];

/* ---------- DOM ---------- */

const kickoffBtn = document.getElementById("kickoff-btn");
const kickoff = document.getElementById("kickoff");
const kickoffSearch = document.getElementById("kickoff-search");
const kickoffSidebar = document.getElementById("kickoff-sidebar");
const kickoffApps = document.getElementById("kickoff-apps");
const kickoffEmpty = document.getElementById("kickoff-empty");
const kickoffSectionTitle = document.getElementById("kickoff-section-title");
const tabApps = document.getElementById("tab-apps");
const tabPlaces = document.getElementById("tab-places");

const clockBtn = document.getElementById("clock-btn");
const clockTime = document.getElementById("clock-time");
const clockDate = document.getElementById("clock-date");
const calendarPopover = document.getElementById("calendar-popover");
const calTime = document.getElementById("cal-time");
const calFullDate = document.getElementById("cal-full-date");
const calMonthLabel = document.getElementById("cal-month-label");
const calGrid = document.getElementById("cal-grid");
const calPrev = document.getElementById("cal-prev");
const calNext = document.getElementById("cal-next");

const soundBtn = document.getElementById("sound-btn");
const soundPopover = document.getElementById("sound-popover");
const volumeSlider = document.getElementById("volume-slider");
const volumePct = document.getElementById("volume-pct");

const netBtn = document.getElementById("net-btn");
const netPopover = document.getElementById("net-popover");
const notifBtn = document.getElementById("notif-btn");
const notifPopover = document.getElementById("notif-popover");
const batteryBtn = document.getElementById("battery-btn");
const batteryPopover = document.getElementById("battery-popover");

const taskDolphin = document.getElementById("task-dolphin");
const showDesktopBtn = document.getElementById("show-desktop-btn");
const taskManager = document.getElementById("task-manager");

const dolphinWindow = document.getElementById("dolphin-window");
const dolphinClose = document.getElementById("dolphin-close");
const dolphinMax = document.getElementById("dolphin-max");
const dolphinTitle = document.getElementById("dolphin-title");
const dolphinPathLabel = document.getElementById("dolphin-path-label");
const dolphinPanesEl = document.getElementById("dolphin-panes");
const dolphinPaneA = document.getElementById("dolphin-pane-a");
const dolphinPaneB = document.getElementById("dolphin-pane-b");
const dolphinContentA = document.getElementById("dolphin-content-a");
const dolphinContentB = document.getElementById("dolphin-content-b");
const dolphinSidebar = document.getElementById("dolphin-sidebar");
const dolphinStatus = document.getElementById("dolphin-status");
const dolphinSearchBtn = document.getElementById("dolphin-search-btn");
const dolphinSearchBar = document.getElementById("dolphin-search-bar");
const dolphinSearchInput = document.getElementById("dolphin-search-input");
const dolphinViewIcons = document.getElementById("dolphin-view-icons");
const dolphinViewCompact = document.getElementById("dolphin-view-compact");
const dolphinViewDetails = document.getElementById("dolphin-view-details");
const dolphinSplitBtn = document.getElementById("dolphin-split");
const dolphinBack = document.getElementById("dolphin-back");
const dolphinForward = document.getElementById("dolphin-forward");
const dolphinUp = document.getElementById("dolphin-up");
const dolphinHome = document.getElementById("dolphin-home");

let selectedCategory = "favorites";
let kickoffMode = "applications"; // applications | places
let viewYear;
let viewMonth;
let desktopPeek = false;

/** Dual-pane Dolphin state (split view) */
const dolphinPanes = {
  a: { place: "home", history: ["home"], histIndex: 0 },
  b: { place: "documents", history: ["documents"], histIndex: 0 },
};
let activePane = "a";
let splitEnabled = false;
let dolphinViewMode = "icons";

function paneState(id = activePane) {
  return dolphinPanes[id];
}

function paneContentEl(id = activePane) {
  return id === "b" ? dolphinContentB : dolphinContentA;
}

function paneEl(id = activePane) {
  return id === "b" ? dolphinPaneB : dolphinPaneA;
}

/* ---------- Clock (Plasma digital clock: time + short date) ---------- */

function formatPanelClock(date) {
  const time = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const day = date.toLocaleDateString(undefined, { weekday: "short" });
  const dom = date.getDate();
  return { time, date: `${day} ${dom}` };
}

function tickClock() {
  const now = new Date();
  const { time, date } = formatPanelClock(now);
  clockTime.textContent = time;
  clockDate.textContent = date;
  if (calTime) {
    calTime.textContent = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }
}

tickClock();
setInterval(tickClock, 1000);

/* ---------- Calendar (Monday-first, common for Plasma locales) ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function buildCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  calFullDate.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const labelDate = new Date(viewYear, viewMonth, 1);
  calMonthLabel.textContent = labelDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  // Monday-first: convert JS Sunday=0 to Mon=0 … Sun=6
  const firstDowSun = new Date(viewYear, viewMonth, 1).getDay();
  const firstDow = (firstDowSun + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  calGrid.innerHTML = "";
  const TOTAL = 42;

  for (let i = 0; i < TOTAL; i++) {
    const dayOffset = i - firstDow;
    const el = document.createElement("div");

    if (dayOffset < 0) {
      el.className = "cal-day muted";
      el.textContent = String(daysInPrev + dayOffset + 1);
    } else if (dayOffset < daysInMonth) {
      const d = dayOffset + 1;
      const isToday = d === todayD && viewMonth === todayM && viewYear === todayY;
      el.className = "cal-day" + (isToday ? " today" : "");
      el.textContent = String(d);
    } else {
      el.className = "cal-day muted";
      el.textContent = String(dayOffset - daysInMonth + 1);
    }
    calGrid.appendChild(el);
  }
}

setViewToToday();

/* ---------- Kickoff rendering ---------- */

function categoryLabel(id) {
  if (kickoffMode === "places") {
    return PLACES_CATEGORIES.find((c) => c.id === id)?.name || id;
  }
  if (id === "favorites") return "Favorites";
  if (id === "all") return "All Applications";
  return CATEGORIES.find((c) => c.id === id)?.name || id;
}

function renderKickoffSidebar() {
  kickoffSidebar.innerHTML = "";
  const cats = kickoffMode === "places" ? PLACES_CATEGORIES : CATEGORIES;

  for (const cat of cats) {
    if (cat.separator) {
      const sep = document.createElement("div");
      sep.className = "kickoff-cat-sep";
      sep.setAttribute("role", "separator");
      kickoffSidebar.appendChild(sep);
      continue;
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "kickoff-cat" + (cat.id === selectedCategory ? " selected" : "");
    btn.dataset.category = cat.id;
    btn.innerHTML = `<img src="${cat.icon}" alt="" draggable="false" /><span>${cat.name}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectCategory(cat.id);
    });
    kickoffSidebar.appendChild(btn);
  }
}

function selectCategory(id) {
  selectedCategory = id;
  kickoffSidebar.querySelectorAll(".kickoff-cat").forEach((el) => {
    el.classList.toggle("selected", el.dataset.category === id);
  });
  kickoffSectionTitle.textContent = categoryLabel(id);
  renderKickoffApps();
}

function getKickoffItems(filter = "") {
  const q = filter.trim().toLowerCase();

  if (kickoffMode === "places") {
    let list;
    if (selectedCategory === "computer") list = COMPUTER_PLACES;
    else if (selectedCategory === "history") list = HISTORY_ITEMS;
    else list = FREQUENT_ITEMS;
    if (q) list = list.filter((a) => a.name.toLowerCase().includes(q));
    return list.map((a) => ({ ...a, isPlaceItem: true }));
  }

  if (selectedCategory === "favorites" && !q) {
    return FAVORITES.map((f) => ({ ...f, isFavorite: true }));
  }

  let list =
    selectedCategory === "favorites" || selectedCategory === "all"
      ? APPS.slice()
      : APPS.filter((a) => a.categories.includes(selectedCategory));

  if (q) {
    list = APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    );
  }

  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function renderKickoffApps(filter) {
  const q = filter !== undefined ? filter : kickoffSearch.value;
  const list = getKickoffItems(q);
  const useGrid =
    kickoffMode === "applications" &&
    (selectedCategory === "favorites" || !q) &&
    selectedCategory !== "all";

  // Favorites always grid; All Applications and search → list; categories → list
  const gridMode =
    kickoffMode === "applications" &&
    selectedCategory === "favorites" &&
    !q.trim();

  kickoffApps.classList.toggle("list-mode", !gridMode);
  kickoffApps.innerHTML = "";
  kickoffEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "kickoff-app";
    btn.setAttribute("role", "listitem");
    btn.title = app.desc || app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="kickoff-app-name">${app.name}</span>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (app.place) {
        closeKickoff();
        openDolphin(app.place);
        return;
      }
      if (app.launch) {
        launchApp(app.launch);
        return;
      }
      if (app.isPlaceItem && !app.place && !app.launch) {
        closeKickoff();
        return;
      }
      launchApp(app.id);
    });
    kickoffApps.appendChild(btn);
  }
}

function setKickoffTab(mode) {
  kickoffMode = mode;
  tabApps.classList.toggle("active", mode === "applications");
  tabPlaces.classList.toggle("active", mode === "places");
  tabApps.setAttribute("aria-selected", mode === "applications" ? "true" : "false");
  tabPlaces.setAttribute("aria-selected", mode === "places" ? "true" : "false");
  selectedCategory = mode === "places" ? "computer" : "favorites";
  kickoffSearch.value = "";
  renderKickoffSidebar();
  kickoffSectionTitle.textContent = categoryLabel(selectedCategory);
  renderKickoffApps("");
}

function launchApp(id) {
  closeKickoff();
  if (id === "dolphin" || id === "files") {
    openDolphin("home");
    return;
  }
  // Brief running indicator on matching task
  const task = document.querySelector(`.task[data-app="${id}"]`);
  if (task) {
    task.classList.add("running");
    setTimeout(() => {
      if (id !== "dolphin") task.classList.remove("running");
    }, 500);
  }
}

/* ---------- Popover helpers ---------- */

function setExpanded(btn, open) {
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeKickoff() {
  kickoff.hidden = true;
  setExpanded(kickoffBtn, false);
  kickoffSearch.value = "";
  selectedCategory = "favorites";
  kickoffMode = "applications";
  tabApps.classList.add("active");
  tabPlaces.classList.remove("active");
}

function openKickoff() {
  closeApplets();
  kickoff.hidden = false;
  setExpanded(kickoffBtn, true);
  setKickoffTab("applications");
  requestAnimationFrame(() => kickoffSearch.focus());
}

function toggleKickoff() {
  if (kickoff.hidden) openKickoff();
  else closeKickoff();
}

const APPLETS = [
  [calendarPopover, clockBtn],
  [soundPopover, soundBtn],
  [netPopover, netBtn],
  [notifPopover, notifBtn],
  [batteryPopover, batteryBtn],
];

function closeApplets() {
  for (const [pop, btn] of APPLETS) {
    if (pop) pop.hidden = true;
    setExpanded(btn, false);
  }
}

function closeAll() {
  closeKickoff();
  closeApplets();
}

function togglePopover(popover, btn) {
  const wasOpen = !popover.hidden;
  closeKickoff();
  closeApplets();
  if (!wasOpen) {
    popover.hidden = false;
    setExpanded(btn, true);
    if (popover === calendarPopover) {
      setViewToToday();
      buildCalendar();
    }
  }
}

/* ---------- Dolphin ---------- */

function updateTaskManager() {
  if (dolphinWindow.hidden || dolphinWindow.style.visibility === "hidden") {
    taskDolphin.classList.remove("running", "active");
  } else {
    taskDolphin.classList.add("running", "active");
  }
}

function setActivePane(id) {
  activePane = id;
  dolphinPaneA.classList.toggle("focused", id === "a");
  dolphinPaneB.classList.toggle("focused", id === "b");
  updateDolphinChrome();
  renderDolphinSidebar();
}

function applyViewClasses(contentEl) {
  contentEl.classList.remove("view-icons", "view-details", "view-compact", "view-list");
  if (dolphinViewMode === "icons") contentEl.classList.add("view-icons");
  else if (dolphinViewMode === "details") contentEl.classList.add("view-details");
  else if (dolphinViewMode === "compact") contentEl.classList.add("view-compact");
}

function renderDolphinSidebar() {
  const place = paneState().place;
  dolphinSidebar.innerHTML = "";

  const placesSec = document.createElement("div");
  placesSec.className = "dolphin-side-section";
  placesSec.innerHTML = `<div class="dolphin-side-label">Places</div>`;
  for (const p of SIDEBAR_PLACES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dolphin-side-item" + (p.id === place ? " active" : "");
    btn.innerHTML = `<img src="${p.icon}" alt="" draggable="false" /><span>${p.label}</span>`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateDolphin(p.id, true);
    });
    placesSec.appendChild(btn);
  }
  dolphinSidebar.appendChild(placesSec);

  const remote = document.createElement("div");
  remote.className = "dolphin-side-section";
  remote.innerHTML = `
    <div class="dolphin-side-label">Remote</div>
    <button type="button" class="dolphin-side-item">
      <img src="assets/places/network-workgroup.svg" alt="" draggable="false" />
      <span>Network</span>
    </button>
  `;
  dolphinSidebar.appendChild(remote);

  const devices = document.createElement("div");
  devices.className = "dolphin-side-section";
  devices.innerHTML = `
    <div class="dolphin-side-label">Devices</div>
    <button type="button" class="dolphin-side-item" data-place="computer">
      <img src="assets/places/drive-harddisk.svg" alt="" draggable="false" />
      <span>Root</span>
    </button>
  `;
  devices.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    navigateDolphin("computer", true);
  });
  dolphinSidebar.appendChild(devices);
}

function renderPaneContent(paneId, filter = "") {
  const state = paneState(paneId);
  const contentEl = paneContentEl(paneId);
  const folder = FS[state.place] || FS.home;
  const q = filter.trim().toLowerCase();
  let items = folder.items || [];
  if (q) items = items.filter((i) => i.name.toLowerCase().includes(q));

  applyViewClasses(contentEl);
  contentEl.innerHTML = "";

  if (dolphinViewMode === "details") {
    const h = document.createElement("div");
    h.className = "dolphin-list-header";
    h.setAttribute("aria-hidden", "true");
    h.innerHTML = "<span></span><span>Name</span><span>Size</span><span>Modified</span>";
    contentEl.appendChild(h);
  }

  for (const item of items) {
    const el = document.createElement("div");
    el.className = "dolphin-item";
    el.setAttribute("role", "listitem");
    el.tabIndex = 0;
    el.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <span class="dolphin-item-name">${item.name}</span>
      <span class="dolphin-item-meta">${item.size || "—"}</span>
      <span class="dolphin-item-meta">${item.modified || "—"}</span>
    `;
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      setActivePane(paneId);
      contentEl.querySelectorAll(".dolphin-item").forEach((n) => n.classList.remove("selected"));
      el.classList.add("selected");
    });
    el.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      setActivePane(paneId);
      if (item.type === "folder" && item.place) {
        navigateDolphin(item.place, true, paneId);
      }
    });
    contentEl.appendChild(el);
  }

  if (paneId === activePane) {
    const count = items.length;
    if (count === 0) {
      dolphinStatus.textContent =
        folder.items?.length === 0 ? "Folder is empty" : "No matching items";
    } else {
      dolphinStatus.textContent = count === 1 ? "1 item" : `${count} items`;
    }
  }
}

function renderAllPanes(filter) {
  const q = filter !== undefined ? filter : dolphinSearchInput.value;
  renderPaneContent("a", q);
  if (splitEnabled) renderPaneContent("b", q);
}

function updateDolphinChrome() {
  const state = paneState();
  const folder = FS[state.place] || FS.home;
  dolphinTitle.textContent = splitEnabled
    ? `${folder.label} — Dolphin`
    : folder.label;
  dolphinPathLabel.textContent = folder.label;
  const crumbIcon = dolphinWindow.querySelector(".dolphin-crumb img");
  if (crumbIcon) crumbIcon.src = folder.icon;

  dolphinBack.disabled = state.histIndex <= 0;
  dolphinForward.disabled = state.histIndex >= state.history.length - 1;
  dolphinUp.disabled = state.place === "home" || state.place === "computer";
}

function updateDolphinNav() {
  updateDolphinChrome();
  renderDolphinSidebar();
  renderAllPanes();
  updateTaskManager();
}

function navigateDolphin(place, pushHistory, paneId = activePane) {
  if (!FS[place]) place = "home";
  const state = paneState(paneId);
  state.place = place;
  if (pushHistory) {
    state.history = state.history.slice(0, state.histIndex + 1);
    state.history.push(place);
    state.histIndex = state.history.length - 1;
  }
  if (paneId === activePane) updateDolphinNav();
  else renderPaneContent(paneId, dolphinSearchInput.value);
}

function setSplitEnabled(on) {
  splitEnabled = on;
  dolphinPaneB.hidden = !on;
  dolphinPanesEl.classList.toggle("split", on);
  dolphinSplitBtn.classList.toggle("active", on);
  dolphinSplitBtn.setAttribute("aria-pressed", on ? "true" : "false");
  if (on) {
    // Open second pane on a sibling place for a useful default
    if (!dolphinPanes.b.history.length) {
      dolphinPanes.b = { place: "documents", history: ["documents"], histIndex: 0 };
    }
    renderPaneContent("b", dolphinSearchInput.value);
  } else {
    setActivePane("a");
  }
  updateDolphinChrome();
}

function openDolphin(place = "home") {
  closeAll();
  dolphinWindow.hidden = false;
  dolphinWindow.style.visibility = "";
  desktopPeek = false;
  dolphinWindow.classList.remove("maximized");
  const state = paneState("a");
  if (place !== state.place || state.history.length === 0) {
    state.history = [place];
    state.histIndex = 0;
    state.place = place;
  }
  setActivePane("a");
  updateDolphinNav();
}

function closeDolphin() {
  dolphinWindow.hidden = true;
  dolphinWindow.style.visibility = "";
  dolphinWindow.classList.remove("maximized");
  setSplitEnabled(false);
  updateTaskManager();
}

function toggleDolphin() {
  if (dolphinWindow.hidden) openDolphin(paneState("a").place || "home");
  else if (dolphinWindow.style.visibility === "hidden") {
    dolphinWindow.style.visibility = "";
    updateTaskManager();
  } else closeDolphin();
}

function setDolphinView(mode) {
  dolphinViewMode = mode;
  dolphinViewIcons.classList.toggle("active", mode === "icons");
  dolphinViewCompact.classList.toggle("active", mode === "compact");
  dolphinViewDetails.classList.toggle("active", mode === "details");
  dolphinViewIcons.setAttribute("aria-pressed", mode === "icons" ? "true" : "false");
  dolphinViewCompact.setAttribute("aria-pressed", mode === "compact" ? "true" : "false");
  dolphinViewDetails.setAttribute("aria-pressed", mode === "details" ? "true" : "false");
  renderAllPanes();
}

/* ---------- Volume ---------- */

function updateVolumeFill() {
  const pct = Number(volumeSlider.value);
  volumePct.textContent = `${pct}%`;
  volumeSlider.style.background = `linear-gradient(to right, var(--breeze-accent) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`;
}

/* ---------- Event wiring ---------- */

kickoffBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleKickoff();
});

kickoff.addEventListener("click", (e) => e.stopPropagation());

kickoffSearch.addEventListener("input", () => {
  if (kickoffSearch.value.trim() && kickoffMode === "applications") {
    selectedCategory = "all";
    kickoffSidebar.querySelectorAll(".kickoff-cat").forEach((el) => {
      el.classList.toggle("selected", el.dataset.category === "all");
    });
    kickoffSectionTitle.textContent = "Search Results";
  } else if (!kickoffSearch.value.trim()) {
    kickoffSectionTitle.textContent = categoryLabel(selectedCategory);
  }
  renderKickoffApps();
});

tabApps.addEventListener("click", (e) => {
  e.stopPropagation();
  setKickoffTab("applications");
});

tabPlaces.addEventListener("click", (e) => {
  e.stopPropagation();
  setKickoffTab("places");
});

clockBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(calendarPopover, clockBtn);
});
calendarPopover.addEventListener("click", (e) => e.stopPropagation());

calPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildCalendar();
});

calNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildCalendar();
});

soundBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(soundPopover, soundBtn);
});
soundPopover.addEventListener("click", (e) => e.stopPropagation());

netBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(netPopover, netBtn);
});
netPopover.addEventListener("click", (e) => e.stopPropagation());

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(notifPopover, notifBtn);
});
notifPopover.addEventListener("click", (e) => e.stopPropagation());

batteryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(batteryPopover, batteryBtn);
});
batteryPopover.addEventListener("click", (e) => e.stopPropagation());

volumeSlider.addEventListener("input", updateVolumeFill);
updateVolumeFill();

taskDolphin.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDolphin();
});

// Other pinned tasks: brief flash
taskManager.querySelectorAll(".task:not(#task-dolphin)").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAll();
    launchApp(btn.dataset.app);
  });
});

showDesktopBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  desktopPeek = !desktopPeek;
  if (!dolphinWindow.hidden) {
    dolphinWindow.style.visibility = desktopPeek ? "hidden" : "";
    updateTaskManager();
  }
  closeAll();
});

document.querySelectorAll(".pager-desk").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".pager-desk").forEach((b) => {
      b.classList.remove("active");
      b.removeAttribute("aria-current");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-current", "true");
  });
});

/* Dolphin controls */
dolphinClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeDolphin();
});

dolphinMax.addEventListener("click", (e) => {
  e.stopPropagation();
  dolphinWindow.classList.toggle("maximized");
});

dolphinWindow.querySelector(".dolphin-min")?.addEventListener("click", (e) => {
  e.stopPropagation();
  dolphinWindow.style.visibility = "hidden";
  updateTaskManager();
});

dolphinBack.addEventListener("click", (e) => {
  e.stopPropagation();
  const state = paneState();
  if (state.histIndex > 0) {
    state.histIndex -= 1;
    state.place = state.history[state.histIndex];
    updateDolphinNav();
  }
});

dolphinForward.addEventListener("click", (e) => {
  e.stopPropagation();
  const state = paneState();
  if (state.histIndex < state.history.length - 1) {
    state.histIndex += 1;
    state.place = state.history[state.histIndex];
    updateDolphinNav();
  }
});

dolphinUp.addEventListener("click", (e) => {
  e.stopPropagation();
  const place = paneState().place;
  if (place !== "home" && place !== "computer") {
    navigateDolphin("home", true);
  }
});

dolphinHome.addEventListener("click", (e) => {
  e.stopPropagation();
  navigateDolphin("home", true);
});

dolphinSearchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = dolphinSearchBar.hidden;
  dolphinSearchBar.hidden = !open;
  dolphinSearchBtn.classList.toggle("active", open);
  dolphinSearchBtn.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) {
    dolphinSearchInput.focus();
  } else {
    dolphinSearchInput.value = "";
    renderAllPanes("");
  }
});

dolphinSearchInput.addEventListener("input", () => {
  renderAllPanes(dolphinSearchInput.value);
});

dolphinViewIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  setDolphinView("icons");
});
dolphinViewCompact.addEventListener("click", (e) => {
  e.stopPropagation();
  setDolphinView("compact");
});
dolphinViewDetails.addEventListener("click", (e) => {
  e.stopPropagation();
  setDolphinView("details");
});

dolphinSplitBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  setSplitEnabled(!splitEnabled);
});

dolphinPaneA.addEventListener("mousedown", () => setActivePane("a"));
dolphinPaneB.addEventListener("mousedown", () => {
  if (splitEnabled) setActivePane("b");
});

dolphinWindow.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", () => closeAll());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!kickoff.hidden) closeKickoff();
    else if (!calendarPopover.hidden || !soundPopover.hidden || !netPopover.hidden || !notifPopover.hidden || !batteryPopover.hidden)
      closeApplets();
    else if (!dolphinWindow.hidden) closeDolphin();
  }
  // Meta / Super-like: Alt+F1 opens Kickoff (Plasma default shortcut)
  if (e.key === "F1" && e.altKey) {
    e.preventDefault();
    toggleKickoff();
  }
  // F3 toggles Dolphin split view (classic Dolphin shortcut)
  if (e.key === "F3" && !dolphinWindow.hidden) {
    e.preventDefault();
    setSplitEnabled(!splitEnabled);
  }
});

/* ---------- Init ---------- */

setDolphinView("icons");
