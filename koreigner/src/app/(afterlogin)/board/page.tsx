import NavMenu from "../_component/NavMenu/NavMenu"

export default function Board() {
    return (
        <div>
            <NavMenu />
            <div>
                <div>
                    <p>게시판</p>
                    <button>더보기</button>
                </div>
                <div>
                    글들
                </div>
            </div>
            <div>
                <p>hot 게시판</p>
                <div>글들</div>
            </div>
        </div>
    )
}