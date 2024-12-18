
import { useState } from "react";
import { Header } from "../Header/Header";
import { Card } from './../Card/Card';
import { Paginator } from "../Shared/Paginator/Paginator";
import { useAllCharacters } from './../../hooks/useAllCharacters';

export const Home = () => {
	const [page, setPage] = useState(1)
	const { data: charactersData, isFetching } = useAllCharacters({page: page})

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <div className="wrapper">
						{!isFetching ? charactersData?.results?.map(el => {
							return (
								<Card data={el} />
							)
						}) : <>Loading...</>}
          </div>
          <Paginator
          pages={charactersData?.info?.pages}
          pressHandler={setPage}
          prev={charactersData?.info?.prev}
          next={charactersData?.info?.next}
          {...{page}}
          />
        </div>
      </div>
    </div>
  );
}