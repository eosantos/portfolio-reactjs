import NavBar from "../components/Navbar";

export function NotFound() {
  return (
    <div>
      <NavBar />
      <div className="h-screen bg-gray-900 text-9xl text-gray-50 pt-96">
        <h1 className="flex justify-center">Page 404 !</h1>
      </div>
    </div>
  );
}
