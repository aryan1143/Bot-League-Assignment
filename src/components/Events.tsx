
const Events = () => {
  const upcomintEventsDemoData = [
    {
      title: "Event in Mumbai",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
    {
      title: "Event in Delhi",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
  ];

  const pastResultsDemoData = [
    "Bengaluru Regionals",
    "Bengaluru Regionals",
    "Bengaluru Regionals",
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#0d0d0d] p-4 px-22 text-white w-full h-full snap-start"
      style={{
        backgroundImage:
          "radial-gradient(circle at top right, rgba(255, 76, 76, 0.18), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 76, 76, 0.12), transparent 28%)",
      }}
    >
      <div className="relative mx-auto max-w-420">
        <h2 className="font-orbitron text-5xl font-medium uppercase text-white tracking-wide">
          Competitions & Events
        </h2>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_1fr_1fr] gap-y-20">
          <div>
            <div className="mb-3 ml-5 font-orbitron text-2xl uppercase text-[#ff4c4c]">
              Live Now
            </div>

            <div className="flex flex-col rounded-xl border border-white/20 bg-[#1d1d1d] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm p-6 h-9/10">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-[2rem]">
                    Bengaluru Regionals
                  </h3>
                  <p className="mt-1 text-lg text-white/45 sm:text-[1.3rem]">
                    Event Description
                  </p>
                </div>
                <span className="rounded-md mt-3 bg-[#ff4c4c] px-3 py-1 text-sm font-semibold text-white flex items-center justify-center">
                  Ongoing
                </span>
              </div>

              <div className="mt-4 h-px bg-white/20" />

              <div className="grid grid-cols-[1fr_0.5fr_1fr_0.5fr_1fr] rounded-lg py-3 grow">
                <div className="flex flex-col justify-around h-full gap-6">
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                </div>

                <div className="flex flex-col justify-around h-full gap-6">
                  <div className="h-1/2 w-full flex">
                    <div className="h-6/10 w-1/2 my-auto border-2 border-l-0 border-[#ff4c4c] rounded-r"></div>
                    <span className="h-0 w-1/2 my-auto border-t-2 border-[#ff4c4c]"></span>
                  </div>
                  <div className="h-1/2 w-full flex">
                    <div className="h-6/10 w-1/2 my-auto border-2 border-l-0 border-[#ff4c4c] rounded-r"></div>
                    <span className="h-0 w-1/2 my-auto border-t-2 border-[#ff4c4c]"></span>
                  </div>
                </div>

                <div className="flex flex-col justify-around h-full gap-6">
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                </div>

                <div className="flex justify-around h-9/10 my-auto">
                  <div className="h-6/10 w-1/2 my-auto border-2 border-l-0 border-[#ff4c4c] rounded-r"></div>
                  <span className="h-0 w-1/2 my-auto border-t-2 border-[#ff4c4c]"></span>
                </div>

                <div className="flex flex-col justify-around h-full gap-6">
                  <div className="w-full h-10 bg-[#555555] rounded-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 ml-5 font-orbitron text-2xl uppercase text-white">
              Upcoming
            </div>

            <div className="space-y-5 px-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#ff4c4c]/20 scrollbar-track-transparent scrollbar-thumb-rounded-full">
              {/* scrollbar container cause there can be more upcoming events than fit */}
              {upcomintEventsDemoData.map((event) => (
                <article
                  key={event.title}
                  className="rounded-xl border border-white/20 bg-[#1d1d1d]/90 p-5 py-2 pb-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-semibold text-white sm:text-[2rem]">
                    {event.title}
                  </h3>

                  <div className="mt-3 grid grid-cols-3 gap-3 text-[0.98rem] leading-tight sm:text-[1.08rem]">
                    <div>
                      <div className="text-white">Date</div>
                      <div className="text-white/95">{event.date}</div>
                    </div>
                    <div>
                      <div className="text-white">Location</div>
                      <div className="text-white/95">{event.location}</div>
                    </div>
                    <div>
                      <div className="text-white">Category</div>
                      <div className="text-white/95">{event.category}</div>
                    </div>
                  </div>

                  <button className="mt-7 w-full rounded-sm bg-[#ff4c4c] py-2 text-[1.35rem] font-semibold uppercase text-white cursor-pointer transition-colors duration-200 hover:bg-[#fa3a3a] tracking-wider">
                    Register
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 ml-5 font-orbitron text-2xl uppercase text-white">
              Past Results
            </div>

            <div className="rounded-xl border border-white/20 bg-[#1d1d1d] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm h-9/10">
              <div className="space-y-5">
                {pastResultsDemoData.map((result, index) => (
                  <div key={`${result}-${index}`}>
                    <h3 className="text-2xl font-semibold text-white sm:text-[1.95rem]">
                      {result}
                    </h3>
                    <p className="mt-1 text-lg text-white/45 sm:text-[1.25rem]">
                      Lorem Ipsum
                    </p>
                    {index !== pastResultsDemoData.length - 1 && (
                      <div className="mt-4 h-px bg-white/55" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
