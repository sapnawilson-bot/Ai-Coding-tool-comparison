import { render, screen } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

const defaultProps = {
  name: 'Jane Doe',
  bio: 'Software engineer & open-source enthusiast.',
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com/janedoe', label: 'Twitter' },
    { platform: 'github', url: 'https://github.com/janedoe', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe', label: 'LinkedIn' },
  ],
};

describe('UserProfileCard', () => {
  test('renders the user name', () => {
    render(<UserProfileCard {...defaultProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  test('renders the user bio', () => {
    render(<UserProfileCard {...defaultProps} />);
    expect(screen.getByText('Software engineer & open-source enthusiast.')).toBeInTheDocument();
  });

  test('renders the avatar with correct alt text', () => {
    render(<UserProfileCard {...defaultProps} avatarUrl="https://example.com/avatar.jpg" />);
    const avatar = screen.getByAltText("Jane Doe's avatar");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  test('renders a fallback avatar when avatarUrl is not provided', () => {
    render(<UserProfileCard {...defaultProps} />);
    const avatar = screen.getByAltText("Jane Doe's avatar");
    expect(avatar).toBeInTheDocument();
    expect(avatar.src).toContain('ui-avatars.com');
  });

  test('renders all social media links', () => {
    render(<UserProfileCard {...defaultProps} />);
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://twitter.com/janedoe');
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/janedoe');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://linkedin.com/in/janedoe');
  });

  test('social links open in a new tab', () => {
    render(<UserProfileCard {...defaultProps} />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders without bio when bio is not provided', () => {
    render(<UserProfileCard name="No Bio User" />);
    expect(screen.getByText('No Bio User')).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  test('renders without social links when none are provided', () => {
    render(<UserProfileCard name="No Links User" />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
