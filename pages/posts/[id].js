export default function Post({ url: { query } }) {
  return (
    <div>
      <h1>{query.id}</h1>
    </div>
  )
}
