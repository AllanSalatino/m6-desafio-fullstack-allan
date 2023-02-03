import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

	body {
		height: 100vh;
		width: 100vw;
	}


	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video, input, button, select, option {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif ;
		font-size: 1rem;
	}

	button{
		cursor: pointer;
		background-color: transparent;
		border: none;
		border-radius: 8px;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ul,ol {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
		button{
        background-color: transparent;
        border: none;
        border-radius: 8px;
				font-family: "Montserrat";
    }

		/* HTML5 display-role reset for older browsers */
		article, aside, details, figcaption, figure, 
		footer, header, hgroup, menu, nav, section {
			display: block;
		}
		body {
			line-height: 1;
			overflow-x: hidden;
		}
		ul,ol {
			list-style: none;
		}
		blockquote, q {
			quotes: none;
		}
		blockquote:before, blockquote:after,
		q:before, q:after {
			content: '';
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}
`;

export default GlobalStyle;
