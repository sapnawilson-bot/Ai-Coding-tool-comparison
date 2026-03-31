import PropTypes from 'prop-types'
import './UserProfileCard.css'

const PLATFORM_LABELS = {
  github: 'GitHub',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  website: 'Website',
}

export default function UserProfileCard({ name, bio, avatarUrl, socialLinks = [] }) {
  return (
    <div className="profile-card">
      <div className="profile-card__avatar-wrapper">
        <img
          className="profile-card__avatar"
          src={avatarUrl}
          alt={`${name}'s avatar`}
        />
      </div>

      <div className="profile-card__body">
        <h2 className="profile-card__name">{name}</h2>
        {bio && <p className="profile-card__bio">{bio}</p>}

        {socialLinks.length > 0 && (
          <ul className="profile-card__social-links" aria-label="Social media links">
            {socialLinks.map(({ platform, url }) => (
              <li key={platform} className="profile-card__social-item">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`profile-card__social-link profile-card__social-link--${platform}`}
                  aria-label={PLATFORM_LABELS[platform] ?? platform}
                >
                  {PLATFORM_LABELS[platform] ?? platform}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

UserProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}
