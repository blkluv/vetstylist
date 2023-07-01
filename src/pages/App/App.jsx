import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'booking' ? (
        <Booking />
      ) : currentPage === 'dates' ? (
        <Dates />
      ) : currentPage === 'about' ? (
        <About />
      ) : (
        <div className="home">
          <img src="/assets/paint.png" alt="" />
          <div className="centered">
            <p className="sunghoon">Master Cosmetologist</p>
          </div>
          <h1>Hair Stylist</h1>
        </div>
      )}
    </>
  );
}
