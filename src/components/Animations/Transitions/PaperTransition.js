import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

// background-color: ${theme.palette.primary.main};
// background-color: ${theme.palette.secondary.main};

const Styledvatar = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  padding: 15px;
  background-color: #fff;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: #fff;
    box-shadow: 0 8px 6px -6px black;;
    transform: scale(1.03);
  }
  `}
`;

function PaperTransition(props) {
    return (
        <NoSsr>
            <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
                    <Styledvatar>{props.children}</Styledvatar>
                </ThemeProvider>
            </MuiThemeProvider>
        </NoSsr>
    );
}


export default PaperTransition;