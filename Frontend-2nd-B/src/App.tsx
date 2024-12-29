
import { Dashboard } from "./components/pages/Dashboard"
import Signin from "./components/pages/Signin"
import Signup from "./components/pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import YoutubePage from "./components/pages/YoutubePage"
import { SharePage } from "./components/pages/SharePage"
import ContentPage from "./components/pages/ContentPage"
import { useState } from "react"
import SessionExpired from "./components/pages/SessionExpired"


function App() {
  const [searchQuery, setSearchQuery] = useState('');
     
  return <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path="/dashboard" element={<Dashboard searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}/>
        <Route path="/dashboard/share/:shareLink" element={<SharePage/>}/>
        <Route path="/content/youtube" element={<ContentPage searchQuery={searchQuery} setSearchQuery={setSearchQuery}  type="youtube" />} />
        <Route path="/content/twitter" element={<ContentPage searchQuery={searchQuery} setSearchQuery={setSearchQuery}  type="Twitter" />} />
        <Route path="/content/instagram" element={<ContentPage searchQuery={searchQuery} setSearchQuery={setSearchQuery}  type="instagram" />} />
        <Route path="/content/facebook" element={<ContentPage searchQuery={searchQuery} setSearchQuery={setSearchQuery}  type="facebook" />} />
      </Routes>
  
  </BrowserRouter>
}

export default App
