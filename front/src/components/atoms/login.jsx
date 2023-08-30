import { atom } from "recoil";


export const Userinfo = atom({
    key: "userinfo",
    default: {
        userId: "",
        userPwd: ""
    },
});