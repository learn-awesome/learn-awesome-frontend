import { createGlobalStyle, css } from 'styled-components';

// CSS Normalize ~ polished (Styled-Components)
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
 ${normalize()};
   html{
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;

    ${'' /* Theme Background */}
    ${({ theme }) => {
      return css`
        background: ${theme.colors.background};
      `;
    }}
  }

  ${'' /* Theme ~ Styling */}

  h1, p, svg {
    color: ${({ theme }) => theme.colors.text};
  }

  `;

export default GlobalStyles;
