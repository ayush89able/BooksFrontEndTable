import styled from 'styled-components'

export const CustomDiv = styled.div`
    display: flex;
    align-items: baseline;
`

export const CenteredDiv = styled.div`
    margin: 5em
`

export const CustomWrapper = styled.div`
    & > div  {
        width: 100%
    }

    & > div > div {
        display: block;
    }

    & > div > div > div {
        width: 100%
    }
`
