import React, { useState, useCallback, useMemo } from 'react';
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  Menu,
  LogOut,
  Settings,
  Bookmark,
  Sun,
  Moon
} from 'lucide-react';
import Avatar from '../ui/Avatar';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useDebounce } from '../../hooks/useDebounce';
import clsx from 'clsx';

/**
 * Search component
 */
const SearchBar = React.memo(({ isExpanded, onExpand, onCollapse }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const searchRef = useClickOutside(onCollapse);

  const handleInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Mock search results
  const searchResults = useMemo(() => {
    if (!debouncedSearch) return [];
    return [
      { id: 1, username: 'johndoe', fullName: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=12' },
      { id: 2, username: 'janedoe', fullName: 'Jane Doe', avatar: 'https://i.pravatar.cc/150?img=5' },
    ];
  }, [debouncedSearch]);

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={onExpand}
          className="w-64 px-4 py-2 pl-10 bg-bg-secondary border border-border-light rounded-lg text-body2 focus:outline-none focus:border-border-medium transition-all"
          aria-label="Search"
        />
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
      </div>

      {/* Search Results Dropdown */}
      {isExpanded && (
        <div className="absolute top-full mt-2 w-96 bg-white border border-border-light rounded-lg shadow-strong max-h-96 overflow-y-auto animate-slide-up">
          {searchQuery ? (
            searchResults.length > 0 ? (
              <div className="py-2">
                {searchResults.map((result) => (
                  <a
                    key={result.id}
                    href={`/${result.username}`}
                    className="flex items-center space-x-3 px-4 py-2 hover:bg-bg-secondary transition-colors"
                  >
                    <Avatar src={result.avatar} alt={result.username} size="medium" />
                    <div>
                      <div className="text-body2 font-semibold text-text-primary">{result.username}</div>
                      <div className="text-caption text-text-secondary">{result.fullName}</div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-text-secondary">
                No results found
              </div>
            )
          ) : (
            <div className="px-4 py-8 text-center text-text-secondary">
              Search for users, hashtags, or places
            </div>
          )}
        </div>
      )}
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

/**
 * User menu dropdown
 */
const UserMenu = React.memo(({ currentUser, isOpen, onClose, onLogout }) => {
  const menuRef = useClickOutside(onClose);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute top-full right-0 mt-2 w-56 bg-white border border-border-light rounded-lg shadow-strong py-2 animate-scale-in"
      role="menu"
    >
      <a
        href={`/${currentUser.username}`}
        className="flex items-center space-x-3 px-4 py-2 hover:bg-bg-secondary transition-colors"
        role="menuitem"
      >
        <Avatar src={currentUser.avatar} alt={currentUser.username} size="small" />
        <span className="text-body2 text-text-primary">Profile</span>
      </a>
      <a
        href="/saved"
        className="flex items-center space-x-3 px-4 py-2 hover:bg-bg-secondary transition-colors"
        role="menuitem"
      >
        <Bookmark size={20} className="text-text-primary" />
        <span className="text-body2 text-text-primary">Saved</span>
      </a>
      <a
        href="/settings"
        className="flex items-center space-x-3 px-4 py-2 hover:bg-bg-secondary transition-colors"
        role="menuitem"
      >
        <Settings size={20} className="text-text-primary" />
        <span className="text-body2 text-text-primary">Settings</span>
      </a>
      <div className="border-t border-border-light my-2" />
      <button
        onClick={onLogout}
        className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-bg-secondary transition-colors text-left"
        role="menuitem"
      >
        <LogOut size={20} className="text-text-primary" />
        <span className="text-body2 text-text-primary">Log Out</span>
      </button>
    </div>
  );
});

UserMenu.displayName = 'UserMenu';

/**
 * Header component - Main navigation bar
 */
const Header = React.memo(({ currentUser, notificationCount = 0, onCreatePost, onLogout }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleSearchExpand = useCallback(() => setIsSearchExpanded(true), []);
  const handleSearchCollapse = useCallback(() => setIsSearchExpanded(false), []);
  const handleUserMenuToggle = useCallback(() => setIsUserMenuOpen((prev) => !prev), []);
  const handleUserMenuClose = useCallback(() => setIsUserMenuOpen(false), []);

  const navItems = useMemo(() => [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'explore', icon: Compass, label: 'Explore', href: '/explore' },
    { id: 'reels', icon: Film, label: 'Reels', href: '/reels' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', href: '/direct/inbox' },
    { id: 'notifications', icon: Heart, label: 'Notifications', badge: notificationCount },
  ], [notificationCount]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border-light z-40">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-h4 font-display font-bold text-text-primary hover:text-text-secondary transition-colors">
            Instagram
          </a>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-1 max-w-xs mx-4">
          <SearchBar 
            isExpanded={isSearchExpanded}
            onExpand={handleSearchExpand}
            onCollapse={handleSearchCollapse}
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (!item.href) e.preventDefault();
                  setActiveTab(item.id);
                }}
                className={clsx(
                  'relative p-2 rounded-lg transition-colors hover:bg-bg-secondary',
                  activeTab === item.id && 'text-text-primary',
                  activeTab !== item.id && 'text-text-secondary'
                )}
                aria-label={item.label}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                <item.icon size={24} />
                {item.badge > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-accent-like text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </a>
            ))}

            {/* Create Post Button */}
            <button
              onClick={onCreatePost}
              className="p-2 rounded-lg transition-colors hover:bg-bg-secondary text-text-secondary"
              aria-label="Create new post"
            >
              <PlusSquare size={24} />
            </button>

            {/* User Profile Menu */}
            <div className="relative">
              <button
                onClick={handleUserMenuToggle}
                className="p-1 rounded-full transition-transform hover:scale-105"
                aria-label="User menu"
                aria-expanded={isUserMenuOpen}
              >
                <Avatar
                  src={currentUser.avatar}
                  alt={currentUser.username}
                  size="medium"
                  className={clsx(
                    'ring-2 ring-offset-2 transition-all',
                    isUserMenuOpen ? 'ring-text-primary' : 'ring-transparent'
                  )}
                />
              </button>
              <UserMenu
                currentUser={currentUser}
                isOpen={isUserMenuOpen}
                onClose={handleUserMenuClose}
                onLogout={onLogout}
              />
            </div>
          </div>

          {/* Mobile Navigation - Menu Button */}
          <button className="md:hidden p-2 rounded-lg transition-colors hover:bg-bg-secondary text-text-primary">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;