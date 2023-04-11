라우터 돔 설치 명령어
npm i react-router-dom

<!--
function App() {
return (
    <BrowserRouter>
        <div className="bg-red-100 min-h-screen"> // 링크 상관없이 공통
            <Header />
            <Routes>
                <Route path="/" element={<Main />} /> // 링크에 페이지 넣기
                <Route path="/portfolio/:projectTitle" element={<Portfolio />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
    );
} -->

라우팅을 할때 중요한것
라우팅페이지와 컴포넌트의 요소를 혼동하면 어려워짐
