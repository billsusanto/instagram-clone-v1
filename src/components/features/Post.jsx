import React, { useState, useCallback, useMemo } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { formatTimeAgo, formatNumber, parseTextWithLinks } from '../../utils/helpers';
import clsx from 'clsx';

/**
 * Post component - Main feed post with image, caption, and interactions
 */
const Post = React.memo(({ post, onLike, onComment, onSave, onShare }) => {
  const [isLiked, setIsLiked] = useState(post.liked);
  const [isSaved, setIsSaved] = useState(post.saved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle like action
  const handleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
    onLike?.(post.id, !isLiked);
  }, [isLiked, onLike, post.id]);

  // Handle double-tap to like
  const handleDoubleTap = useCallback(() => {
    if (!isLiked) {
      handleLike();
    }
  }, [isLiked, handleLike]);

  // Handle save action
  const handleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
    onSave?.(post.id, !isSaved);
  }, [isSaved, onSave, post.id]);

  // Parse caption with hashtags and mentions
  const captionSegments = useMemo(() => {
    const segments = parseTextWithLinks(post.caption);
    if (!showFullCaption && post.caption.length > 100) {
      const truncated = post.caption.slice(0, 100);
      return parseTextWithLinks(truncated);
    }
    return segments;
  }, [post.caption, showFullCaption]);

  const timeAgo = useMemo(() => formatTimeAgo(post.timestamp), [post.timestamp]);

  return (
    <article className="bg-white border border-border-light rounded-lg mb-4 animate-fade-in">
      {/* Post Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <Avatar
            src={post.user.avatar}
            alt={post.user.username}
            size="medium"
            showVerified={post.user.verified}
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <a 
                href={`/${post.user.username}`}
                className="text-body2 font-semibold text-text-primary hover:text-text-secondary transition-colors"
              >
                {post.user.username}
              </a>
              {post.user.verified && (
                <svg className="w-3.5 h-3.5 text-primary-main" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            {post.location && (
              <span className="text-caption text-text-secondary">{post.location}</span>
            )}
          </div>
        </div>
        <button 
          className="p-2 hover:bg-bg-secondary rounded-full transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal size={20} className="text-text-primary" />
        </button>
      </header>

      {/* Post Image */}
      <div 
        className="relative w-full aspect-square bg-bg-secondary cursor-pointer"
        onDoubleClick={handleDoubleTap}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-main border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={post.images[0]}
          alt={`Post by ${post.user.username}`}
          className={clsx(
            'w-full h-full object-cover transition-opacity duration-300',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800/f5f5f5/cccccc?text=Image+Not+Found';
            setImageLoaded(true);
          }}
        />
      </div>

      {/* Post Actions */}
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className="hover-scale transition-transform"
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart
                size={24}
                className={clsx(
                  'transition-colors',
                  isLiked ? 'fill-accent-like text-accent-like' : 'text-text-primary'
                )}
              />
            </button>
            <button
              onClick={() => onComment?.(post.id)}
              className="hover-scale transition-transform"
              aria-label="Comment"
            >
              <MessageCircle size={24} className="text-text-primary" />
            </button>
            <button
              onClick={() => onShare?.(post.id)}
              className="hover-scale transition-transform"
              aria-label="Share"
            >
              <Send size={24} className="text-text-primary" />
            </button>
          </div>
          <button
            onClick={handleSave}
            className="hover-scale transition-transform"
            aria-label={isSaved ? 'Unsave' : 'Save'}
          >
            <Bookmark
              size={24}
              className={clsx(
                'transition-colors',
                isSaved ? 'fill-text-primary text-text-primary' : 'text-text-primary'
              )}
            />
          </button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <button className="text-body2 font-semibold text-text-primary hover:text-text-secondary transition-colors">
            {formatNumber(likesCount)} likes
          </button>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <div className="text-body2">
            <a 
              href={`/${post.user.username}`}
              className="font-semibold text-text-primary hover:text-text-secondary transition-colors mr-2"
            >
              {post.user.username}
            </a>
            <span className="text-text-primary">
              {captionSegments.map((segment, index) => {
                if (segment.type === 'hashtag' || segment.type === 'mention') {
                  return (
                    <a
                      key={index}
                      href={`/${segment.type === 'hashtag' ? 'explore/tags' : ''}${segment.content.slice(1)}`}
                      className="text-text-link hover:text-primary-dark transition-colors"
                    >
                      {segment.content}
                    </a>
                  );
                }
                return <span key={index}>{segment.content}</span>;
              })}
              {post.caption.length > 100 && !showFullCaption && (
                <button
                  onClick={() => setShowFullCaption(true)}
                  className="text-text-secondary hover:text-text-primary ml-1 transition-colors"
                >
                  more
                </button>
              )}
            </span>
          </div>
        </div>

        {/* Comments Count */}
        {post.comments > 0 && (
          <button 
            onClick={() => onComment?.(post.id)}
            className="text-body2 text-text-secondary hover:text-text-primary transition-colors mb-2 block"
          >
            View all {formatNumber(post.comments)} comments
          </button>
        )}

        {/* Timestamp */}
        <time className="text-caption text-text-secondary uppercase block mb-3">
          {timeAgo} ago
        </time>
      </div>

      {/* Comment Input */}
      <div className="border-t border-border-light px-4 py-3">
        <form className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 text-body2 bg-transparent border-none outline-none placeholder-text-secondary text-text-primary"
          />
          <button
            type="submit"
            className="text-body2 font-semibold text-primary-main hover:text-primary-dark transition-colors disabled:opacity-30"
            disabled
          >
            Post
          </button>
        </form>
      </div>
    </article>
  );
});

Post.displayName = 'Post';

export default Post;