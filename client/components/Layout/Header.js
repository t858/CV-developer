export const Header = () => {
  return (
    <header className="bg-red-200 py-4 h-full flex items-center justify-between px-10">
      <div>logo</div>
      <nav>
        <ul className="flex space-x-3">
          <li>Home</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};
