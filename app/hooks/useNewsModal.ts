import { create } from "zustand";

interface useNewsModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useNewsModal = create<useNewsModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false})
})) 

export default useNewsModal;