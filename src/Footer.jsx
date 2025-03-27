

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="my-8 text-lineColor text-center mx-auto">
      <p>&copy; <span>{year}</span> Hugo Bastos | All Rights Reserved</p>
    </footer>
  )
}

export default Footer