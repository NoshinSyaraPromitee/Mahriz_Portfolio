export default function Round({ item, index }) {
  const top = index % 2 === 0

  return (
    <div className={`cal__slot ${top ? 'is-top' : 'is-bottom'} ${item.final ? 'is-final' : ''}`}>
      <article className="cal__card">
        <small>{item.round}</small>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>
      <span className="cal__stem" />
      <span className="cal__node" />
    </div>
  )
}