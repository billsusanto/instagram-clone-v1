import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/features/Sidebar';
import Post from './components/features/Post';
import { StoriesContainer } from './components/features/Story';
import Modal from './components/ui/Modal';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Spinner from './components/ui/Spinner';
import { currentUser, suggestedUsers, stories, posts } from './utils/mockData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useToggle } from './hooks/useToggle';
import { useIsDesktop } from './hooks/useMediaQuery';
import { PlusSquare } from 'lucide-react';

/**
 * Create Post Modal Component
 */
const CreatePostModal = React.memo(({ isOpen, onClose }) => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setCaption('');
    setSelectedImage(null);
    onClose();
  }, [onClose]);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Create New Post"
      size="medium"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        {!selectedImage ? (
          <div className="border-2 border-dashed border-border-medium rounded-lg p-12 text-center">
            <PlusSquare size={48} className="mx-auto mb-4 text-text-secondary" />
            <p className="text-body1 text-text-secondary mb-4">Select a photo to share</p>
            <label className="inline-block">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <span className="btn btn-primary cursor-pointer">
                Choose File
              </span>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative w-full aspect-square bg-bg-secondary rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 px-3 py-1 bg-white rounded-full text-body2 font-semibold shadow-medium hover:bg-bg-secondary"
              >
                Change
              </button>
            </div>

            <Input
              type="text"
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              fullWidth
              label="Caption"
            />

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="secondary"
                onClick={onClose}
                fullWidth
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={isSubmitting}
                disabled={!selectedImage}
              >
                Share
              </Button>
            </div>
          </div>
        )}
      </form>
    </Modal>
  );
});

CreatePostModal.displayName = 'CreatePostModal';

/**
 * Feed Component - Main content area
 */
const Feed = React.memo(({ posts, onLike, onComment, onSave, onShare }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
          onSave={onSave}
          onShare={onShare}
        />
      ))}

      {/* End of Feed */}
      <div className="text-center py-8">
        <p className="text-body2 text-text-secondary">
          You're all caught up!
        </p>
        <p className="text-caption text-text-muted mt-1">
          You've seen all new posts from the past 3 days
        </p>
      </div>
    </div>
  );
});

Feed.displayName = 'Feed';

/**
 * Main App Component
 */
function App() {
  // State management
  const [user] = useLocalStorage('currentUser', currentUser);
  const [likedPosts, setLikedPosts] = useLocalStorage('likedPosts', {});
  const [savedPosts, setSavedPosts] = useLocalStorage('savedPosts', {});
  const [followedUsers, setFollowedUsers] = useLocalStorage('followedUsers', {});
  const [isCreatePostModalOpen, toggleCreatePostModal, openCreatePostModal, closeCreatePostModal] = useToggle(false);
  const [notificationCount] = useState(5);
  
  const isDesktop = useIsDesktop();

  // Post interaction handlers
  const handleLike = useCallback((postId, liked) => {
    setLikedPosts(prev => ({ ...prev, [postId]: liked }));
    console.log(`Post ${postId} ${liked ? 'liked' : 'unliked'}`);
  }, [setLikedPosts]);

  const handleComment = useCallback((postId) => {
    console.log(`Comment on post ${postId}`);
    // In a real app, this would open a comment modal or navigate to post detail
  }, []);

  const handleSave = useCallback((postId, saved) => {
    setSavedPosts(prev => ({ ...prev, [postId]: saved }));
    console.log(`Post ${postId} ${saved ? 'saved' : 'unsaved'}`);
  }, [setSavedPosts]);

  const handleShare = useCallback((postId) => {
    console.log(`Share post ${postId}`);
    // In a real app, this would open a share modal
  }, []);

  const handleStoryClick = useCallback((storyId) => {
    console.log(`View story ${storyId}`);
    // In a real app, this would open a story viewer modal
  }, []);

  const handleFollow = useCallback((userId) => {
    setFollowedUsers(prev => ({ ...prev, [userId]: true }));
    console.log(`Followed user ${userId}`);
  }, [setFollowedUsers]);

  const handleSwitchAccount = useCallback(() => {
    console.log('Switch account clicked');
    // In a real app, this would open account switcher
  }, []);

  const handleLogout = useCallback(() => {
    console.log('Logout clicked');
    // In a real app, this would clear auth state and redirect to login
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.clear();
      window.location.reload();
    }
  }, []);

  // Merge liked/saved state with posts
  const enrichedPosts = useMemo(() => {
    return posts.map(post => ({
      ...post,
      liked: likedPosts[post.id] ?? post.liked,
      saved: savedPosts[post.id] ?? post.saved,
    }));
  }, [posts, likedPosts, savedPosts]);

  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Header */}
      <Header 
        currentUser={user}
        notificationCount={notificationCount}
        onCreatePost={openCreatePostModal}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-8">
            {/* Feed Column */}
            <div className="w-full max-w-feed">
              {/* Stories */}
              <StoriesContainer 
                stories={stories}
                onStoryClick={handleStoryClick}
              />

              {/* Posts Feed */}
              <Feed
                posts={enrichedPosts}
                onLike={handleLike}
                onComment={handleComment}
                onSave={handleSave}
                onShare={handleShare}
              />
            </div>

            {/* Sidebar - Desktop Only */}
            {isDesktop && (
              <Sidebar
                currentUser={user}
                suggestedUsers={suggestedUsers}
                onFollow={handleFollow}
                onSwitchAccount={handleSwitchAccount}
              />
            )}
          </div>
        </div>
      </main>

      {/* Create Post Modal */}
      <CreatePostModal 
        isOpen={isCreatePostModalOpen}
        onClose={closeCreatePostModal}
      />

      {/* Mobile Bottom Navigation - Could be added here */}
      {!isDesktop && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-light py-2 px-4 md:hidden">
          <div className="flex items-center justify-around">
            <a href="/" className="p-2 text-text-primary">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" />
              </svg>
            </a>
            <a href="/explore" className="p-2 text-text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="16" strokeWidth="2" />
                <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2" />
              </svg>
            </a>
            <button onClick={openCreatePostModal} className="p-2 text-text-secondary">
              <PlusSquare size={24} />
            </button>
            <a href="/reels" className="p-2 text-text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2" />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
            </a>
            <a href={`/${user.username}`} className="p-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-text-primary">
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;