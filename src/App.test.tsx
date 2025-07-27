import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe('App', () => {
    it('should render correctly', () => {
        render(<App/>)
        
        const title = screen.getAllByRole('heading');
        expect(title).toBeInTheDocument()
    })
})