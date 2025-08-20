import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import Navigation from './Navigation';

import MainPage from './components/pages/MainPage';
import PostViewPage from './components/pages/PostViewPage';
import PostWritePage from './components/pages/PostWritePage';
import Hook from './hook/Hook';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Day1_0807 from './day/day1_0807/Day1_0807';
import Day2_0808 from './day/day2_0808/Day2_0808';
import Day3_0811 from './day/day3_0811/Day3_0811';
import Day4_0812 from './day/day4_0812/Day4_0812';
import Day7_0818 from './day/day7_0818/Day7_0818';

function App() {

  return (
    <>

      <Header />
      <Navigation />
      {/* </Header> */}
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/day1" element={<Day1_0807 />} />
          <Route path="/day2" element={<Day2_0808 />} />
          <Route path="/day3" element={<Day3_0811 />} />
          <Route path="/day4" element={<Day4_0812 />} />
          <Route path="/day7" element={<Day7_0818 />} />
          <Route path="/miniblog" element={<MainPage />} />
          <Route path="/post-write" element={<PostWritePage />} />
          <Route path="/post/:postId" element={<PostViewPage />} />
          {/* <Route path="/miniblog/post-write" element={<PostWritePage />} /> */}
          {/* <Route path="/miniblog/post/:postId" element={<PostViewPage />} /> */}

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />

    </>
  )
}
export default App
