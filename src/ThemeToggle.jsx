import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark-mode"); //Default será dark-mode

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light-mode", "dark-mode"); // Remover classes anteriores de tema (para evitar duplicados)
    html.classList.add(theme); // Adicionar a nova classe
    localStorage.setItem("theme", theme); //Guardar o novo tema na localStorage
  }, [theme]);

  const changeTheme = () => {
    if(theme === "dark-mode") {
      setTheme("light-mode");
    }
    if(theme === "light-mode") {
      setTheme("dark-mode");
    }
  };

  return (
    <button onClick={changeTheme} aria-label="Toggle Light/Dark Mode" className="h-full hover:-rotate-90 focus-visible:-rotate-90 transition-transform duration-300 hover:text-lineColor focus-visible:text-lineColor">
      {theme === "dark-mode" ? <MdLightMode title="Toggle Light Mode"/> : <MdDarkMode title="Toggle Dark Mode"/>}
    </button>
  )
}

export default ThemeToggle