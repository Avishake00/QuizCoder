import { create } from 'zustand'



const defaultConfig = {
    numberOfQuestion:10,
    category:'',
    level:"",
    type:"",
    status:'',
    score:0
}

export const useQuizConfig = create((set) => ({
  config : {...defaultConfig},
  addLevel: (level) => set((state) => ({config:{...state.config,level:level}})),
  addCategory: (category) => set((state) => ({config:{...state.config,category:category}})),
  addQuestionNumber: (numberOfQuestion) => set((state) => ({config:{...state.config,numberOfQuestion:numberOfQuestion}})),
  setScore: () => set((state) => ({config:{...state.config,score:state.config.score+1}})),
}))

console.log(useQuizConfig);