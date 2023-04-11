function Header() {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center  p-1 md:p-2">
        {' '}
        <div>
          {/* Logo - 이미지로 교체가능 */}
          <div>STUDY_UI</div>
        </div>
        <ul className="flex text-xs md:text-base gap-2 md:gap-8">
          <li>Introduce</li>
          <li>Protfolio</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
