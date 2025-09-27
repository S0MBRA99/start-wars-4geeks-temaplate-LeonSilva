import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <section className="m-5">
		<h2 className="section-title">Characters</h2>
		<article className="article-config">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>	
		</article>
	  </section>
      <section className="m-5">
		<h2 className="section-title">Planets</h2>
		<article className="article-config">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>	
		</article>
	  </section>
      <section className="m-5">
		<h2 className="section-title">StarShips</h2>
		<article className="article-config">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>	
		</article>
	  </section>
    </>
  );
};
