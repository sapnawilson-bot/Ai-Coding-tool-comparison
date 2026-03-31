import './App.css';
import UserProfileCard from './components/UserProfileCard';

const sampleUser = {
  name: 'Jane Doe',
  bio: 'Software engineer & open-source enthusiast. Building things that matter. 🚀',
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com/janedoe', label: 'Twitter' },
    { platform: 'github', url: 'https://github.com/janedoe', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe', label: 'LinkedIn' },
    { platform: 'instagram', url: 'https://instagram.com/janedoe', label: 'Instagram' },
    { platform: 'website', url: 'https://janedoe.dev', label: 'Website' },
  ],
};

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1 className="App-title">User Profile Card</h1>
        <UserProfileCard
          name={sampleUser.name}
          bio={sampleUser.bio}
          socialLinks={sampleUser.socialLinks}
        />
      </main>
    </div>
  );
}

export default App;
