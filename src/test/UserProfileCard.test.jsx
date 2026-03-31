import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import UserProfileCard from '../components/UserProfileCard'

const defaultProps = {
  name: 'Jane Doe',
  bio: 'Full-stack developer & open-source enthusiast.',
  avatarUrl: 'https://i.pravatar.cc/150?img=47',
  socialLinks: [
    { platform: 'github', url: 'https://github.com/janedoe' },
    { platform: 'twitter', url: 'https://twitter.com/janedoe' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe' },
  ],
}

describe('UserProfileCard', () => {
  it('renders the user name', () => {
    render(<UserProfileCard {...defaultProps} />)
    expect(screen.getByRole('heading', { name: 'Jane Doe' })).toBeInTheDocument()
  })

  it('renders the avatar with correct alt text', () => {
    render(<UserProfileCard {...defaultProps} />)
    expect(screen.getByAltText("Jane Doe's avatar")).toBeInTheDocument()
  })

  it('renders the bio text', () => {
    render(<UserProfileCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.bio)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<UserProfileCard {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/janedoe'
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/janedoe'
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/janedoe'
    )
  })

  it('social links open in a new tab with safe rel attribute', () => {
    render(<UserProfileCard {...defaultProps} />)
    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render the social links list when no links are provided', () => {
    render(<UserProfileCard name="Jane Doe" avatarUrl={defaultProps.avatarUrl} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('does not render the bio when it is not provided', () => {
    render(<UserProfileCard name="Jane Doe" avatarUrl={defaultProps.avatarUrl} />)
    expect(screen.queryByText(defaultProps.bio)).not.toBeInTheDocument()
  })
})
