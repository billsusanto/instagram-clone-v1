import React, { useCallback } from 'react';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { formatNumber } from '../../utils/helpers';

/**
 * User suggestion item
 */
const UserSuggestion = React.memo(({ user, onFollow }) => {
  const handleFollow = useCallback(() => {
    onFollow?.(user.id);
  }, [onFollow, user.id]);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        <Avatar
          src={user.avatar}
          alt={user.username}
          size="medium"
          showVerified={user.verified}
        />
        <div className="flex-1 min-w-0">
          <a 
            href={`/${user.username}`}
            className="block text-body2 font-semibold text-text-primary hover:text-text-secondary transition-colors truncate"
          >
            {user.username}
          </a>
          <p className="text-caption text-text-secondary truncate">
            {user.fullName}
          </p>
          {user.followedBy && user.followedBy.length > 0 && (
            <p className="text-caption text-text-secondary">
              Followed by {user.followedBy.length} {user.followedBy.length === 1 ? 'person' : 'people'} you follow
            </p>
          )}
        </div>
      </div>
      <Button
        variant="link"
        size="small"
        onClick={handleFollow}
        className="text-primary-main hover:text-primary-dark font-semibold flex-shrink-0"
      >
        Follow
      </Button>
    </div>
  );
});

UserSuggestion.displayName = 'UserSuggestion';

/**
 * Sidebar component - User profile and suggestions
 */
const Sidebar = React.memo(({ currentUser, suggestedUsers, onFollow, onSwitchAccount }) => {
  return (
    <aside className="w-80 hidden xl:block sticky top-6 self-start">
      {/* Current User Profile */}
      <div className="mb-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <Avatar
              src={currentUser.avatar}
              alt={currentUser.username}
              size="xlarge"
              showVerified={currentUser.verified}
            />
            <div className="flex-1 min-w-0">
              <a 
                href={`/${currentUser.username}`}
                className="block text-body2 font-semibold text-text-primary hover:text-text-secondary transition-colors truncate"
              >
                {currentUser.username}
              </a>
              <p className="text-body2 text-text-secondary truncate">
                {currentUser.fullName}
              </p>
            </div>
          </div>
          <Button
            variant="link"
            size="small"
            onClick={onSwitchAccount}
            className="text-primary-main hover:text-primary-dark font-semibold flex-shrink-0"
          >
            Switch
          </Button>
        </div>

        {/* User Stats */}
        <div className="flex items-center justify-around py-4 border-t border-border-light mt-3">
          <div className="text-center">
            <div className="text-body1 font-semibold text-text-primary">
              {formatNumber(currentUser.posts)}
            </div>
            <div className="text-caption text-text-secondary">posts</div>
          </div>
          <div className="text-center">
            <div className="text-body1 font-semibold text-text-primary">
              {formatNumber(currentUser.followers)}
            </div>
            <div className="text-caption text-text-secondary">followers</div>
          </div>
          <div className="text-center">
            <div className="text-body1 font-semibold text-text-primary">
              {formatNumber(currentUser.following)}
            </div>
            <div className="text-caption text-text-secondary">following</div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-body2 font-semibold text-text-secondary">
            Suggestions For You
          </h3>
          <button className="text-caption font-semibold text-text-primary hover:text-text-secondary transition-colors">
            See All
          </button>
        </div>

        <div className="space-y-1">
          {suggestedUsers.map((user) => (
            <UserSuggestion key={user.id} user={user} onFollow={onFollow} />
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <footer className="mt-8 pt-6 border-t border-border-light">
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-caption text-text-muted mb-4">
          <a href="#" className="hover:underline">About</a>
          <span>·</span>
          <a href="#" className="hover:underline">Help</a>
          <span>·</span>
          <a href="#" className="hover:underline">Press</a>
          <span>·</span>
          <a href="#" className="hover:underline">API</a>
          <span>·</span>
          <a href="#" className="hover:underline">Jobs</a>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Locations</a>
          <span>·</span>
          <a href="#" className="hover:underline">Language</a>
        </div>
        <p className="text-caption text-text-muted">
          © 2024 INSTAGRAM CLONE BY BILLSUSANTO
        </p>
      </footer>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;