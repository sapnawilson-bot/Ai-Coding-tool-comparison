import UserProfileCard from './components/UserProfileCard'
import './App.css'

const DEMO_USER = {
  name: 'Jane Doe',
  bio: 'Full-stack developer & open-source enthusiast. Building things that matter.',
  avatarUrl: 'https://i.pravatar.cc/150?img=47',
  socialLinks: [
    { platform: 'github', url: 'https://github.com' },
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
    { platform: 'website', url: 'https://example.com' },
  ],
}

function App() {
  return (
    <main className="app-layout">
      <UserProfileCard
        name={DEMO_USER.name}
        bio={DEMO_USER.bio}
        avatarUrl={DEMO_USER.avatarUrl}
        socialLinks={DEMO_USER.socialLinks}
      />
    </main>
  )
}

export default App
