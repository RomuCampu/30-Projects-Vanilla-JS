import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Cv from './pages/cv/Cv';
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import { IconsPack } from './components/icons/IconsPack';

// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './view/theme'
// import { GlobalStyles } from './view/global';
import BlogForm from './pages/blog/BlogForm';
import SingleBlogPage from './pages/blog/single-blog-page/SingleBlogPage';


const App = () => {

 // const [theme, setTheme] = useState('light')

 // const toggleTheme = () => {
 //  if (theme === 'light') {
 //   setTheme('dark');
 //   console.log("dark", darkTheme);
 //  } else {
 //   setTheme('light');
 //   console.log("light");
 //  }
 // }


 return (
  // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  // </ThemeProvider>
  <div className="App">
   <Header />
   {/* <IconsPack /> */}
   {/* <GlobalStyles /> */}
   <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/skills" component={About} />
    <Route path="/portfolio" component={Cv} />
    <Route exact path="/blog" component={Blog} />
    <Route path="/blog/:id" component={SingleBlogPage} />
    <Route path="/blogform" component={BlogForm} />
    <Route path="/contact" component={Contact} />
   </Switch>
   {/* <Footer /> */}
  </div>
 );
}

export default App;


// class App extends React.Component {


 // _handleNVEvent = (e) => {
 //  const cursor = document.querySelector('.cursor');
 //  // const cursor = React.createRef('.cursor');

 //  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")

 //  document.addEventListener('click', () => {
 //   cursor.classList.add("expand");

 //   setTimeout(() => {
 //    cursor.classList.remove("expand");
 //   }, 500)
 //  })
 // }

 // componentDidMount() {
 //  ReactDOM.findDOMNode(this).addEventListener('mousemove', this._handleNVEvent);
 // }
 // render() {
