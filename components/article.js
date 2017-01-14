import React from 'react'
import styled from 'styled-components'

import Head from './head'
import { PostTextTitle, PostTextMeta } from './post'

const ArticleBackground = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #111;
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 98px);
  margin-bottom: 2rem;
  position: relative;

  &:before {
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const ArticleBackgroundText = styled.div`
  position: static;
  text-align: center;
  z-index: 1;
`

const ArticleContent = styled.div`
  color: #666;
  font-family: Droid Serif, serif;
  font-size: 18px;
  line-height: 2rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 50rem;
  text-align: justify;

  img {
    display: block;
    margin-left: calc((50rem - 80vw)/ 2);
    width: 80vw;
  }

  pre {
    background-color: #111;
    color: #fff;
    font-size: 1rem;
    line-height: 1.5;
    overflow: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    text-align: left;
    word-break: break-all;
    white-space: pre;
  }

  p ~ p {
    margin-top: 1rem;
  }
`

export default ({ data }) => (
  <div>
    <Head />

    <ArticleBackground image={data.image}>
      <ArticleBackgroundText>
        <PostTextTitle>{data.title}</PostTextTitle>
        <PostTextMeta>{data.date}</PostTextMeta>
      </ArticleBackgroundText>
    </ArticleBackground>

    <ArticleContent dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
)