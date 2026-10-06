import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const stories = [
  { name: 'Alicia', color: '#58d9ff', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?...' },
  { name: 'Marcus', color: '#8a98b3', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?...' },
  { name: 'Yara', color: '#7ff0ff', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?...' },
  { name: 'Sam', color: '#dbe6ff', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?...' },
  { name: 'Lina', color: '#7ce7ff', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?...' },
]

const trending = [
  { tag: '#DesignRush', posts: '31.3k posts' },
  { tag: '#CyberMonday', posts: '18.7k posts' },
  { tag: '#NightMode', posts: '9.2k posts' },
  { tag: '#CreatorEconomy', posts: '7.9k posts' },
]

const posts = [
  {
    author: 'Noah Harper',
    handle: '@noahh',
    time: '12 min ago',
    text: 'Designing digital experiences that feel cinematic and human. The little details create the atmosphere.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?...',
    likes: 1842,
    comments: 329,
    shares: 128,
  },
  {
    author: 'Mila Chen',
    handle: '@milac',
    time: '52 min ago',
    text: 'Late-night ideas, glowing screens, and a strong cup of coffee. This is the energy behind our next launch.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?...',
    likes: 2631,
    comments: 417,
    shares: 219,
  },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">N</div>
          <div>
            <p className="eyebrow">Social</p>
            <h1>NovaSphere</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">
            <span>⌂</span>
            Home
          </button>
          <button className="nav-item">
            <span>◎</span>
            Explore
          </button>
          <button className="nav-item">
            <span>◌</span>
            Notifications
          </button>
          <button className="nav-item">
            <span>✉</span>
            Messages
          </button>
          <button className="nav-item">
            <span>☆</span>
            Bookmarks
          </button>
          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>
        </nav>

        <div className="profile-card">
          <div className="avatar large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?... )' }} />
          <div>
            <strong>Daniel Ross</strong>
            <span>@danross</span>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Discover</p>
            <h2>Community Feed</h2>
          </div>
          <div className="top-actions">
            <button className="ghost-button">Search</button>
            <button className="primary-button">Create</button>
          </div>
        </header>

        <section className="story-strip">
          {stories.map((story) => (
            <div key={story.name} className="story-item">
              <div className="story-ring" style={{ borderColor: story.color }}>
                <div className="story-avatar" style={{ backgroundImage: `url(${story.image})` }} />
              </div>
              <span>{story.name}</span>
            </div>
          ))}
        </section>

        <section className="composer">
          <div className="avatar small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?... )' }} />
          <input type="text" placeholder="Share an idea, update, or memory..." />
          <button className="primary-button">Post</button>
        </section>

        <section className="feed">
          {posts.map((post, index) => (
            <article className="post-card" key={`${post.author}-${index}`}>
              <div className="post-header">
                <div className="avatar small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?... )' }} />
                <div className="poster-meta">
                  <div className="poster-name-row">
                    <strong>{post.author}</strong>
                    <span className="verified">✓</span>
                  </div>
                  <div className="poster-subline">
                    <span>{post.handle}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
                <button className="more-button">•••</button>
              </div>

              <p className="post-text">{post.text}</p>

              <div className="post-image" style={{ backgroundImage: `url(${post.image})` }} />

              <div className="post-actions">
                <button>♡ {post.likes}</button>
                <button>💬 {post.comments}</button>
                <button>↻ {post.shares}</button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <aside className="right-panel">
        <div className="panel-box">
          <div className="panel-header">
            <h3>Trending</h3>
            <button>See all</button>
          </div>

          <div className="trend-list">
            {trending.map((item) => (
              <div key={item.tag} className="trend-item">
                <span className="trend-tag">{item.tag}</span>
                <small>{item.posts}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-box mini-card">
          <p className="eyebrow">Live Pulse</p>
          <h3>82K active voices</h3>
          <div className="sparkline">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </aside>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
