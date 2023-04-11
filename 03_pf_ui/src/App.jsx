function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>
            {/* Logo - 이미지로 교체가능 */}
            <div>STUDY_UI</div>
          </div>
          <ul className="flex text-xs md:text-base gap-2 md:gap-8">
            <li>Introduce</li>
            <li>Protfolio</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </header>

      <main>
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          {/* 너비, 높이 정하고 mx-auto 로 가운데  flex와 justify-center 은 '자기소개' 가운데로 */}
          자기소개
        </div>

        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          <li className="bg-red-100 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이름
            </div>
            <div className="font-bold text-xl mt-2 mx-2">프로젝트 설명</div>
            <div className="mt-2 mx-2">
              갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다.
              눈에 미인을 때까지 굳세게 그들의 바이며,
            </div>
          </li>
          {/*           
          {projectData.map((v, i) => {
            return (
              <PortfolioCard
                key={i}
                index={i}
                title={v.title}
                desc={v.desc}
                image={v.image}
              />
            );
          })} */}
        </ul>

        <div className="bg-gray-100 max-w-screen-xl h-96 m-auto flex justify-center items-center">
          내 연락처
        </div>
      </main>

      <footer className="max-w-screen-xl mx-auto flex justify-end">
        Designed by H662
      </footer>
    </div>
  );
}

export default App;
