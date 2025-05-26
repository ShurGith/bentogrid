function App() {
  return (
    <div className="min-w-full w-full lg:h-screen bg-gray-100 lg:pb-50 flex justify-center ">
      <div className="min-w-full w-full flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-6 lg:gap-12 lg:w-5/6 lg:margin-auto">
        <div className="min-w-full  lg:col-start-1 lg:col-end-4 lg:row-span-6 bg-yelowone rounded-xl flex flex-col justify-center items-center px-18 gap-10 ">
          <h1 className="text-5xl/10 tracking-tighter font-light">
            Create and schedule content
            <span className="text-purpletwo italic">quicker.</span>
          </h1>
          <img
            className="w-48"
            src="/images/illustration-create-post.webp"
            alt=""
          />
        </div>
        <div className="col-start-4 col-end-10 row-span-4 bg-purpletwo rounded-xl text-center flex flex-col justify-start items-center px-18 pt-2">
          <h1 className="text-7xl text-white font-gross">
            Social Media <span className="text-yelowtwo">10x</span>
            <span className="italic"> Faster</span> with AI
          </h1>
          <img
            className="mt-6 w-62"
            src=" /images/illustration-five-stars.webp"
            alt=""
          />
          <h6 className="text-2xl text-purpleone">Over 4,000 5-star reviews</h6>
        </div>
        <div className="col-span-3 row-span-8 bg-purpleone rounded-xl flex flex-col gap-4 overflow-hidden">
          <h2 className="text-3xl font-medium pl-20 pr-20 ">Schedule to social media</h2>
          <img
            src="/images/illustration-schedule-posts.webp"
            alt="schedule posts"
            className="w-full transform translate-x-[37%] object-contain"
          />
          <h2 className="text-2xl/6 font-ligth pl-20 pr-24">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </h2>
        </div>
        <div className="col-start-1 col-end-4 row-start-7 row-end-13 bg-yelowtwo rounded-xl p-4 flex flex-col justify-around items-center">
          <h4 className="text-5xl pl-10 pr-26 ">Write your content using AI.</h4>
          <img
            className="w-62"
            src="/images/illustration-ai-content.webp"
            alt="content AI"
          />
        </div>
        <div className="col-start-4 col-end-7 row-start-5 row-end-9 bg-white rounded-xl overflow-hidden flex flex-col justify- pt-6">
          <img className="translate-x-25" src="/images/illustration-multiple-platforms.webp" />
          <h4 className="text-4xl/7 p-14 pr-28 font-medium">Manage multiple accounts and platforms.</h4>
        </div>
        <div className="col-start-4 col-end-7 row-start-9 row-end-13 bg-white rounded-xl flex flex-col items-center justify-around">
          <div><h4 className="text-7xl font-medium ">>56%</h4>
          <h6 className="text-2xl">faster audience growth</h6>
          </div>
          <img className="w-56" src="/images/illustration-audience-growth.webp" />
        </div>
        <div className="col-start-7 col-end-10 row-start-5 row-end-9 bg-yelowtwo rounded-xl px-12 flex flex-col items-center justify-center overflow-hidden">
          <h4 className="text-4xl font-medium pl-2 pr-4 translate-y-12">Maintain a consistent posting schedule.</h4>
          <img className="w-62 translate-y-14" src="/images/illustration-consistent-schedule.webp" />
        </div>
        <div className="col-start-7 col-end-13 row-start-9 row-end-13 bg-purpletwo rounded-xl flex items-center pl-8 ">
          <img className="w-56" src="/images/illustration-grow-followers.webp" />
          <h4 className="text-6xl font-medium text-white pl-6 pr-42">Grow followers with non-stop content.</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
