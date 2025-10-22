// Mock user data
export const currentUser = {
  id: 'user_1',
  username: 'johndoe',
  fullName: 'John Doe',
  avatar: 'https://i.pravatar.cc/150?img=12',
  bio: 'Photography enthusiast 📸 | Travel lover ✈️ | Coffee addict ☕',
  website: 'https://johndoe.com',
  followers: 1234,
  following: 567,
  posts: 89,
  verified: true,
};

// Mock users for suggestions
export const suggestedUsers = [
  {
    id: 'user_2',
    username: 'sarahwilson',
    fullName: 'Sarah Wilson',
    avatar: 'https://i.pravatar.cc/150?img=5',
    followedBy: ['user_3', 'user_4'],
    verified: false,
  },
  {
    id: 'user_3',
    username: 'mikejones',
    fullName: 'Mike Jones',
    avatar: 'https://i.pravatar.cc/150?img=13',
    followedBy: ['user_2'],
    verified: true,
  },
  {
    id: 'user_4',
    username: 'emilychen',
    fullName: 'Emily Chen',
    avatar: 'https://i.pravatar.cc/150?img=9',
    followedBy: ['user_2', 'user_3'],
    verified: false,
  },
  {
    id: 'user_5',
    username: 'davidbrown',
    fullName: 'David Brown',
    avatar: 'https://i.pravatar.cc/150?img=14',
    followedBy: ['user_1'],
    verified: false,
  },
  {
    id: 'user_6',
    username: 'lisaanderson',
    fullName: 'Lisa Anderson',
    avatar: 'https://i.pravatar.cc/150?img=27',
    followedBy: ['user_1', 'user_3'],
    verified: true,
  },
];

// Mock stories
export const stories = [
  {
    id: 'story_1',
    user: {
      id: 'user_2',
      username: 'sarahwilson',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    hasUnseenStories: true,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story_2',
    user: {
      id: 'user_3',
      username: 'mikejones',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    hasUnseenStories: true,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story_3',
    user: {
      id: 'user_4',
      username: 'emilychen',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    hasUnseenStories: false,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story_4',
    user: {
      id: 'user_5',
      username: 'davidbrown',
      avatar: 'https://i.pravatar.cc/150?img=14',
    },
    hasUnseenStories: true,
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story_5',
    user: {
      id: 'user_6',
      username: 'lisaanderson',
      avatar: 'https://i.pravatar.cc/150?img=27',
    },
    hasUnseenStories: true,
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
];

// Mock posts
export const posts = [
  {
    id: 'post_1',
    user: {
      id: 'user_2',
      username: 'sarahwilson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      verified: false,
    },
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
    ],
    caption: 'Golden hour at the beach 🌅 Nothing beats this view! #sunset #beach #nature',
    likes: 1234,
    comments: 89,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    liked: false,
    saved: false,
    location: 'Malibu Beach, CA',
  },
  {
    id: 'post_2',
    user: {
      id: 'user_3',
      username: 'mikejones',
      avatar: 'https://i.pravatar.cc/150?img=13',
      verified: true,
    },
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=800&fit=crop',
    ],
    caption: 'Urban exploration 🏙️ The city never sleeps and neither do I',
    likes: 2456,
    comments: 156,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    liked: true,
    saved: false,
    location: 'New York City',
  },
  {
    id: 'post_3',
    user: {
      id: 'user_4',
      username: 'emilychen',
      avatar: 'https://i.pravatar.cc/150?img=9',
      verified: false,
    },
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop',
    ],
    caption: 'Homemade pasta night 🍝 Recipe in bio!',
    likes: 892,
    comments: 43,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    liked: false,
    saved: true,
    location: 'San Francisco, CA',
  },
  {
    id: 'post_4',
    user: {
      id: 'user_5',
      username: 'davidbrown',
      avatar: 'https://i.pravatar.cc/150?img=14',
      verified: false,
    },
    images: [
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&h=800&fit=crop',
    ],
    caption: 'Mountain views that take your breath away 🏔️ #hiking #adventure #nature',
    likes: 3421,
    comments: 234,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    liked: true,
    saved: true,
    location: 'Rocky Mountains, CO',
  },
  {
    id: 'post_5',
    user: {
      id: 'user_6',
      username: 'lisaanderson',
      avatar: 'https://i.pravatar.cc/150?img=27',
      verified: true,
    },
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop',
    ],
    caption: 'New collection drop tomorrow! Stay tuned 👗✨ #fashion #style',
    likes: 5678,
    comments: 432,
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    liked: false,
    saved: false,
    location: 'Los Angeles, CA',
  },
];

// Mock comments
export const mockComments = {
  post_1: [
    {
      id: 'comment_1',
      user: {
        username: 'mikejones',
        avatar: 'https://i.pravatar.cc/150?img=13',
      },
      text: 'Stunning shot! 😍',
      likes: 12,
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment_2',
      user: {
        username: 'emilychen',
        avatar: 'https://i.pravatar.cc/150?img=9',
      },
      text: 'The colors are incredible!',
      likes: 8,
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    },
  ],
  post_2: [
    {
      id: 'comment_3',
      user: {
        username: 'sarahwilson',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      text: 'NYC vibes! Love it 🏙️',
      likes: 24,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
  ],
};