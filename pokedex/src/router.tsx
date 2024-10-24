import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Pokedex } from "./pages/Pokedex/Pokedex";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Route>
    </Routes>
  );
}
