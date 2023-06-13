import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import RefsDemo from "./components/RefsDemo";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import YouTubeForm from "./components/YouTubeForm";
import MuiLoginForm from "./components/MuiLoginForm";

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <MuiLoginForm />
      {/* <YouTubeForm /> */}
    </div>
  )
}

function App1() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">SuperHeroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ SuperHeroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

function App2() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
      <UserProvider value="Test Name">
        <ComponentC />
      </UserProvider>

      <ClickCounter />
      <ErrorBoundary>
        <PortalDemo />
        <RefsDemo />
        <Table />
        <FragmentDemo />
        <Stylesheet primary="primary" />
        <NameList />
        <ParentComponent />
        <EventBind />
        <FunctionClick />
        <ClassClick />
        <Message />
        <Counter addValue={1} />
        <Greet name="A" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="B" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="C" heroName="Wonder" />
        <Welcome name="A" heroName="Batman" />
        <Welcome name="A" heroName="Superman" />
        <Welcome name="A" heroName="Wonder" />
        {/* Uncomment below line to throw error */}
        {/* <Welcome name="A" heroName="Joker" /> */}
        <Hello />
      </ErrorBoundary>
    </div>
  );
}

export default App;
