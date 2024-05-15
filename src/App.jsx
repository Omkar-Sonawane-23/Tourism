

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homeque />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
