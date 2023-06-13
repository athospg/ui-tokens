export function applyTheme(isDark = true, size = 16): void {
  const sheetReplace = createCSSStyleSheet(isDark, size, ':root');

  // Create our shared stylesheet:
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(sheetReplace);

  // Apply the stylesheet to a document:
  document.adoptedStyleSheets = [sheet];
}

function createCSSStyleSheet(
  isDark: boolean,
  size: number,
  elementName: string,
) {
  return isDark
    ? `${elementName} {
  --font-size-base: ${size}px;

  --color-primary: #1890ff;
  --color-on-primary: #fff;
  --color-primary-container: #000;
  --color-on-primary-container: #fff;

  --color-secondary: #f0f2f5;
  --color-on-secondary: #000;
  --color-secondary-container: #fff;
  --color-on-secondary-container: #000;
}`
    : `${elementName} {
  --font-size-base: ${size}px;

  --color-primary: #1890ff;
  --color-on-primary: #fff;
  --color-primary-container: #f0f2f5;
  --color-on-primary-container: #000;

  --color-secondary: #f0f2f5;
  --color-on-secondary: #000;
  --color-secondary-container: #000;
  --color-on-secondary-container: #fff;
}`;
}
