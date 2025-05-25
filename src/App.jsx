function App() {


  return (
    <div className='w-full h-screen bg-gray-100 px-24 flex justify-center'>
      <div className='grid grid-cols-12 grid-rows-12 gap-6 w-full'>
        <div className='col-start-1 col-end-4 row-span-6 bg-yelowone rounded-xl flex flex-col justify-center items-center px-18 gap-10 '>
          <h1 className="text-5xl/10 tracking-tighter font-light">Create and schedule content <span className="text-purpletwo italic">quicker.</span></h1>
          <img className="w-2/3" src="/images/illustration-create-post.webp" alt="" />
        </div>
        <div className='col-start-4 col-end-10 row-span-5 bg-purpletwo rounded-xl text-center flex flex-col justify-start items-center px-18 pt-12' >
          <h1 className="text-8xl text-white font-gross mt-4">Social Media <span className="text-yelowtwo">10x</span> <span className="italic">Faster</span> with AI</h1>
          <img className="mt-6 w-62" src=" /images/illustration-five-stars.webp" alt="" />
          <h6 className="text-2xl text-purpleone">Over 4,000 5-star reviews</h6>
        </div>
        <div className='col-span-3 row-span-8 bg-purpleone rounded-xl'>
          <h1>Headdfasdfadsfasder</h1>
        </div>
        <div className='col-start-1 col-end-4 row-start-7 row-end-13  bg-yelowtwo rounded-xl'>
          <h1>Header</h1>
        </div>
        <div className='col-start-4 col-end-7 row-start-6 row-end-10  bg-white rounded-xl'>
          <h1>Header</h1>
        </div>
        <div className='col-start-4 col-end-7 row-start-10 row-end-13  bg-white rounded-xl'>
          <h1>Header</h1>
        </div>
        <div className='col-start-7 col-end-10 row-start-6 row-end-9  bg-yelowtwo rounded-xl'>
          <h1>Header</h1>
        </div>
        <div className='col-start-7 col-end-13 row-start-9 row-end-13  bg-purpletwo rounded-xl'>
          <h1>Header</h1>
        </div>
      </div>

    </div>
  )
}

export default App
