import { atom } from "recoil";


export const Noticeform = atom({
    key: "noticeform",
    default: {
        nNo: "",
        nTitle: "",
        nContent: "",
        userId: "",
        regDate: "",
    },
});

export const Noticelist = atom({
    key: "noticelist",
    default: true,
})

