import { create } from "zustand";
import axios from '../lib/axios'
import {toast} from 'react-hot-toast'

export const useCartStore = create((set, get) => ({
    cart : [],
    total : 0
}))