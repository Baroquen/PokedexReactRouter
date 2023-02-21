import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useGetPokemonQuery, PokemonCard, UrlBase } from "./";
import { useFilter } from "../../Components/Layout";

export function Pokedex() {
  const { data } = useGetPokemonQuery();
  const [display, setDisplay] = useState<UrlBase[]>([]);
  const { filter } = useFilter();

  useEffect(() => {
    if (!!data) {
      setDisplay(data.results);
    }
  }, [data]);

  return (
    <>
      {filter === "" && (
        <Row className="row-cols-md-6">
          {display.map((pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name} />;
          })}
        </Row>
      )}
      {filter !== "" && (
        <Row className="row-cols-md-6">
          {display
            .filter((x) => x.name.startsWith(filter))
            .map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
        </Row>
      )}
    </>
  );
}
