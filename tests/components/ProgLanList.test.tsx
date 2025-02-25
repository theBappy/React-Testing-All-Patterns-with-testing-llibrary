import {render, screen} from '@testing-library/react'
import ProgLanList from '../../src/components/ProgLanList'


describe('Programming Languages List component', ()=>{
    it('should render a list of programming languages', () =>{
      const languages =  ['JavaScript', 'Ruby', 'Python', 'Java', 'Golang']
      render(<ProgLanList languages={languages} />)
      languages.forEach((language) => {
        expect(screen.getByText(language)).toBeInTheDocument()
      });
    })


    
    it('should render a message when list is empty', () =>{
        render(<ProgLanList  languages={[]}/>)
        expect(screen.getByText(/No programming languages found./i)).toBeInTheDocument()
    })
})