// import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Appコンポーネントをラップし、スタイルを収集
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      // 初期プロパティを取得
      const initialProps = await Document.getInitialProps(ctx);

      // initialPropsにスタイルを追加して返す
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}