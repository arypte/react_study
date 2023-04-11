images/~~ 로 되어있는게 왜 public으로 가지??

<img
className="w-full h-full object-cover rounded-t-xl"
src={`${process.env.PUBLIC_URL}/${image}`} ></img>

:)

{projectData.map((v, i) => {
return <PortfolioCard title={v.title} desc={v.desc} image={v.image} />;
})}

이렇게 두개만 되면 나머진 그렇게 생각할게 많진 않은듯
map함수 편하게 쓰기가 어색하다
