export default function Greeting({username}) {
  return (
    <div className="border-bottom pb-3 mb-3">
      <h4>Greeting</h4>
      <p className="mb-0">Hello {username}!</p>
    </div>
  )
}