import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { GitHubActions } from "../store/gitHub.slice"

const actions = {
    ...GitHubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}