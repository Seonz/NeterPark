import { useEffect, useState } from 'react';
import '../../../assets/notice.css';
import apiClient from "../../../axiosConfig";
import Noticedetailform from './noticedetailform';
import { useRecoilState } from 'recoil';
import { Noticelist } from '../../../components/atoms/board';
import Replyform from './reply';

export default function Noticeviewform() {
    const [notice, setnotice] = useState([]);
    const [list, setlist] = useRecoilState(Noticelist);
    const [datail, setdatail] = useState("");
    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        getList();
    }, [list])

    const getList = () => {
        apiClient.get("/getnotice")
            .then((rep) => {
                setnotice(rep.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    const Aticle = () => {
        if (notice !== undefined) {
            return notice.map((noti, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <th><input style={{ border: "none", backgroundColor: "white" }}
                        type="button"
                        value={noti.ntitle}
                        onClick={() => {
                            setlist(false);
                            setdatail(noti.nno);
                        }}
                    /></th>
                    <td>{noti.regDate}</td>
                </tr>
            ))
        }
        else {
            return (
                <tr>
                    <td>1</td>
                    <th>공지사항이 없습니다.</th>
                    <td>2023.08.31</td>
                </tr>
            )
        }
    }
    return (
        <section className="notice">
            <div className="page-title">
                <div className="container">
                    <h3>공지사항</h3>
                </div>
            </div>
            <div id="board-search">
                <div className="container">
                    <div className="search-window">
                        <form action="">
                            <div class="search-wrap">
                                <label for="search" className="blind">공지사항 내용 검색</label>
                                <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value="" />
                                <button type="submit" className="btn btn-dark">검색</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {list && <div id="board-list">
                <div className="container">
                    <table className="board-table">
                        <thead>
                            <tr>
                                <th scope="col" className="th-num">번호</th>
                                <th scope="col" className="th-title">제목</th>
                                <th scope="col" className="th-date">등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Aticle />
                        </tbody>
                    </table>
                </div>
            </div>}
            {!list &&
                <>
                    <Noticedetailform number={datail} />
                </>
            }
        </section>
    )
}