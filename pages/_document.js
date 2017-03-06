import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';
import Navigation from '../components/Navigation';
import stylesheet from '../css/style.scss';


export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head} = renderPage();
    const styles = flush();
    return {html, head, styles};
  }

  render () {
    return (
     <html>
       <Head>
         <style dangerouslySetInnerHTML={{__html: stylesheet}} />
       </Head>
       <body>
        <Navigation />
          <div className='wrapper'>
            {this.props.customValue}
            <Main />
            <NextScript />
          </div>
       </body>
     </html>
    );
  }
}
