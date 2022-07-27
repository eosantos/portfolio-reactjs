import NavBar from "../components/Navbar";
import teste from "../styles/teste.css";

export function About() {
  return (
    <div>
      <NavBar />

      <div className="h-screen bg-gray-900 text-9xl text-gray-50 pt-96">
        <h1 className="flex justify-center">About</h1>
      </div>
    </div>
  );
}
