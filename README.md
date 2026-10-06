* {
  box-sizing: border-box;
}

:root {
  --bg: #06090d;
  --bg-alt: #0d1218;
  --panel: rgba(17, 21, 28, 0.94);
  --panel-strong: #121a23;
  --panel-soft: #181f2a;
  --card: #0f141b;
  --text: #edf5ff;
  --muted: #94a3b8;
  --soft: #bcc8d8;
  --cyan: #68e1ff;
  --cyan-strong: #1fd2ff;
  --cyan-soft: rgba(104, 225, 255, 0.18);
  --grey: #7d8797;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  --glow: 0 0 24px rgba(104, 225, 255, 0.35);
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(104,225,255,0.18), transparent 18%),
    radial-gradient(circle at bottom right, rgba(115,126,140,0.15), transparent 28%),
    var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 320px;
  gap: 24px;
  max-width: 1500px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
}

.sidebar,
.right-panel,
.main-panel {
  background: rgba(15, 20, 27, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: var(--shadow);
  border-radius: 28px;
  backdrop-filter: blur(20px);
}

.sidebar {
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px 18px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--cyan), #d4f6ff);
  color: #041018;
  font-weight: 800;
  box-shadow: var(--glow);
}

.eyebrow {
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 10px;
  color: var(--muted);
}

.brand-wrap h1,
.topbar h2,
.panel-box h3 {
  margin: 0;
  font-weight: 700;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 6px 18px;
}

.nav-item {
  width: 100%;
  background: transparent;
  color: var(--soft);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  font-weight: 500;
  transition: 0.2s ease;
}

.nav-item span {
  width: 22px;
  text-align: center;
  font-size: 18px;
}

.nav-item:hover,
.nav-item.active {
  background: linear-gradient(90deg, rgba(104,225,255,0.12), rgba(255,255,255,0.02));
  color: var(--text);
  box-shadow: inset 0 0 0 1px rgba(104,225,255,0.12);
}

.profile-card {
  background: linear-gradient(135deg, rgba(104,225,255,0.07), rgba(125,135,151,0.06));
  border: 1px solid rgba(104,225,255,0.09);
  border-radius: 18px;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-card strong,
.poster-name-row strong {
  display: block;
}

.profile-card span,
.poster-subline,
.panel-header button,
.trend-item small {
  color: var(--muted);
}

.avatar {
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 2px solid rgba(104,225,255,0.7);
  box-shadow: var(--glow);
}

.avatar.large {
  width: 52px;
  height: 52px;
}

.avatar.small {
  width: 42px;
  height: 42px;
}

.main-panel {
  padding: 20px 22px 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.top-actions {
  display: flex;
  gap: 12px;
}

.ghost-button,
.primary-button,
.panel-header button,
.more-button,
.post-actions button {
  border-radius: 12px;
  font-weight: 600;
}

.ghost-button,
.panel-header button,
.more-button {
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border: 1px solid rgba(255,255,255,0.04);
}

.ghost-button {
  padding: 10px 16px;
}

.primary-button {
  background: linear-gradient(135deg, var(--cyan), #d9f7ff);
  color: #03151b;
  padding: 10px 18px;
  box-shadow: var(--glow);
}

.story-strip {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 4px 20px;
  overflow-x: auto;
}

.story-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 72px;
  color: var(--soft);
  font-size: 12px;
}

.story-ring {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--cyan), rgba(255,255,255,0.18));
  box-shadow: var(--glow);
}

.story-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(5,10,15,0.9);
}

.composer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  background: rgba(15, 20, 27, 0.9);
  border: 1px solid rgba(104,225,255,0.06);
  border-radius: 18px;
}

.composer input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text);
  outline: none;
}

.composer input::placeholder {
  color: var(--muted);
}

.feed {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 22px;
}

.post-card {
  background: rgba(15, 20, 27, 0.9);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 24px;
  padding: 18px 18px 14px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.poster-meta {
  flex: 1;
}

.poster-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.verified {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  background: var(--cyan);
  color: #03161d;
}

.poster-subline {
  display: flex;
  gap: 8px;
  font-size: 12px;
  margin-top: 4px;
}

.more-button {
  width: 34px;
  height: 34px;
}

.post-text {
  margin: 18px 0 16px;
  line-height: 1.7;
  color: #e7edf5;
}

.post-image {
  border-radius: 20px;
  height: 340px;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255,255,255,0.03);
}

.post-actions {
  display: flex;
  gap: 10px;
  padding-top: 16px;
}

.post-actions button {
  flex: 1;
  background: rgba(255,255,255,0.02);
  color: var(--soft);
  padding: 12px 14px;
}

.right-panel {
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.panel-box {
  background: rgba(16, 20, 27, 0.9);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 22px;
  padding: 18px 16px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.panel-header button {
  padding: 8px 10px;
}

.trend-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.trend-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
}

.trend-tag {
  font-weight: 600;
}

.mini-card {
  overflow: hidden;
}

.sparkline {
  display: flex;
  align-items: end;
  gap: 8px;
  height: 90px;
  padding-top: 18px;
}

.sparkline span {
  flex: 1;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(180deg, var(--cyan), rgba(104,225,255,0.2));
  box-shadow: var(--glow);
}

.sparkline span:nth-child(1) { height: 26%; }
.sparkline span:nth-child(2) { height: 42%; }
.sparkline span:nth-child(3) { height: 58%; }
.sparkline span:nth-child(4) { height: 76%; }
.sparkline span:nth-child(5) { height: 64%; }
.sparkline span:nth-child(6) { height: 88%; }
.sparkline span:nth-child(7) { height: 100%; }

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 220px 1fr;
  }

  .right-panel {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .app-shell {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .sidebar,
  .right-panel {
    width: 100%;
  }

  .sidebar {
    padding-bottom: 16px;
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .right-panel {
    display: grid;
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
