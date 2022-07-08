import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import OtpInputField from "./components/OtpInput";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<SignUp/>} />
    <Route exact path="/verification" element={<OtpInputField/>} />
    <Route exact path="/login" element={<SignIn/>} />
    <Route exact path="/home" element={<Dashboard/>} />
    <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
