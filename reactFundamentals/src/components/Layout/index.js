import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostLists from '../PostList';

export default function Layout({ onToggleTheme, selectedTheme}) {
  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}        
      />
      <PostLists />
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}



