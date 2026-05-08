export default function ToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="toTopBtn" onClick={scrollToTop}>
      <img src="/assets/icos/up.png" alt="to top btn"></img>
    </button>
  );
}
