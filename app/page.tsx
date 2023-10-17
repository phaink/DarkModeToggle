import { ThemeProvider } from "@/context/ThemeContext";
import DarkModeToggle from "./components/darkmodetoggle/DarkModeToggle";

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <DarkModeToggle />
        <h1>Traffic Rules</h1>
      </main>
    </ThemeProvider>
  );
}
