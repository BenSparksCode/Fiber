import React, { Component, createContext } from 'react'

export const AppContext = createContext()

class AppContextProvider extends Component {
    state = {
        FLs: [],
        selectedFL: null
    }

    setSelectedFL = (FL) => {
        this.setState({
            selectedFL: FL
        })
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                setSelectedFL: this.setSelectedFL,
            }}>
                { this.props.children}
            </AppContext.Provider >
        )
    }
}

export default AppContextProvider