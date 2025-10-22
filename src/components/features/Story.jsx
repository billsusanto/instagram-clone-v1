import React from 'react';
import Avatar from '../ui/Avatar';
import clsx from 'clsx';

/**
 * Story component - Individual story circle
 */
const Story = React.memo(({ story, onClick }) => {
  return (
    <button
      onClick={() => onClick?.(story.id)}
      className="flex flex-col items-center space-y-1 hover-scale cursor-pointer"
      aria-label={`View ${story.user.username}'s story`}
    >
      <Avatar
        src={story.user.avatar}
        alt={story.user.username}
        size="large"
        hasStory={true}
        hasUnseenStory={story.hasUnseenStories}
      />
      <span className="text-caption text-text-primary truncate max-w-[74px]">
        {story.user.username}
      </span>
    </button>
  );
});

Story.displayName = 'Story';

/**
 * Stories Container - Horizontal scrollable stories
 */
export const StoriesContainer = React.memo(({ stories, onStoryClick }) => {
  return (
    <div className="bg-white border border-border-light rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {stories.map((story) => (
          <Story key={story.id} story={story} onClick={onStoryClick} />
        ))}
      </div>
    </div>
  );
});

StoriesContainer.displayName = 'StoriesContainer';

export default Story;