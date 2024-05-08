import NavMenu from "../_component/NavMenu/NavMenu"

export default function Discover() {
    return (
        <div>
            <NavMenu />
            <div>
                <p>어디로 가시나요</p>
                <div>
                    <input
                        placeholder="서울" 
                        type="text"
                    />
                    <button>검색</button>
                </div>
            </div>
            <div>
                이미지 슬라이더
            </div>
            <div>
                명소
            </div>
            <div>
                축제
            </div>
            <div>
                쇼핑
            </div>
            <div>
                즐길거리
            </div>
        </div>
    )
}