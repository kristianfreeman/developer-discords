function App() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h1 className="text-4xl font-bold mb-4">
        Developer Discords
      </h1>

      <h2 className="text-2xl">A directory of great developer Discord communities</h2>

      <div className='mt-8'>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrotg81mSSIjkwlH?backgroundColor=gray&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="600" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
      </div>

      <div className="mt-6">
        <a className="underline text-blue-800 hover:text-blue-600" href="https://airtable.com/shrnzSPjSLOVipQRY">Submit a new Developer Discord →</a>
      </div>

      <div className="mt-4">
        <small>Built by <a className="underline text-blue-800 hover:text-blue-600" href="https://twitter.com/signalnerve">@signalnerve</a>. <a className="underline text-blue-800 hover:text-blue-600" href="https://github.com/signalnerve/developer-discords">Check out the source on GitHub!</a></small>
      </div>
    </div>
  );
}

export default App;
