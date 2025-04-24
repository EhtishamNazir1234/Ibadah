import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import ScrollValueIndicator from "./Components/ScrollValueIndicator.jsx";


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <ScrollValueIndicator/>
  </AuthProvider>
);
