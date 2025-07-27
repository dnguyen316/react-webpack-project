import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe('App', () => {
    it('should render correctly', () => {
        render(<App/>)
        
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        const count = screen.getByTestId('count');
        expect(count).toBeInTheDocument()
    })
})