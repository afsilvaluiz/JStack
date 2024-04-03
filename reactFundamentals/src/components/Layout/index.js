import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostLists from '../PostList';

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scrolled...')
  }

  render () {
    return (
      <>
        <Header />
        <PostLists />
        <Footer />
      </>
    );
  }
}



