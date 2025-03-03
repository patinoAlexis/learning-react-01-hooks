import { useFetch } from "../hooks/useFetch.jsx";
import { useCounter } from "../hooks/useCounter.jsx";
import {LoadingMessage} from "../03-useFetch/LoadingMeassage.jsx";
import {PokemonCardLayoutEffect} from "./PokemonCard2.jsx";

export const LayoutPage = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${counter}`,
    );

    const sprites = data
        ? Object.values(data.sprites).filter(
            (res) => res && typeof res === "string",
        )
        : [];

    return (
        <>
            <h1>Pokemon Information</h1>
            {isLoading && <LoadingMessage></LoadingMessage>}
            {!isLoading && !hasError && (
                <PokemonCardLayoutEffect
                    name={data.name}
                    id={data.id}
                    sprites={sprites}
                ></PokemonCardLayoutEffect>
            )}
            <div className="tw-mt-5">
                <button
                    className="form-control tw-bg-blue-600 tw-text-white"
                    onClick={() => decrement()}
                    disabled={counter <= 1}
                >
                    Previous
                </button>
                <button
                    className="form-control tw-bg-blue-600 tw-text-white"
                    onClick={() => increment()}
                >
                    Next
                </button>
            </div>
        </>
    );
};
