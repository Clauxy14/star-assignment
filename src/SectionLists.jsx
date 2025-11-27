import StarRating from './StarRating'

function SectionLists({ name, rating }) {
  const TOTAL = 5

  return (
    <section>
      <h2>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>
      <StarRating rating={rating} />
    </section>
  )
}

export default SectionLists
