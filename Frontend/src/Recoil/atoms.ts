import { atom } from "recoil";

export const modeAtom = atom({
    key: 'mode',
    default: false
})

export const imgPromptsAtom = atom({
    key: 'img',
    default: ""
})

export const imgUrlAtom = atom({
    key: 'imgUrl',
    default: ""
})

export const textOutputAtom = atom({
    key: 'text',
    default: ""
})

export const textInputAtom = atom({
    key:'textIp',
    default: ""
})

export const loadingAtom = atom({
    key:'loading',
    default: false
})