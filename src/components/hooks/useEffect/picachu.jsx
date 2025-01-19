import { useEffect, useState } from "react";

export const Picachu = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  const api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //   const apiFetch = () => {
  //     fetch(api)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPokemon(data), setLoding(false);
  //       })
  //       .catch((error) => (setError(error), setLoding(false)));
  //   };

  const apiFetch = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setPokemon(data);
      setLoding(false);
    } catch (error) {
      setError(error);
      setLoding(false);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);
  console.log(pokemon);

  if (loding) {
    console.log("api Loding...");
    return (
      <>
        <h1>Loding...</h1>
      </>
    );
  }
  if (error) {
    console.log("Something went wrong...");
    console.error(error);

    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <>
      <section>
        <header>
          <h1>lets catch pokemon</h1>
        </header>
        <ul>
          <li>
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            </figure>
            <h1>{pokemon.name}</h1>
          </li>
        </ul>
      </section>
    </>
  );
};
