// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import gfm from 'remark-gfm';
import wikiLink from 'remark-wiki-link';
// @ts-ignore
import admonitions from 'remark-admonitions';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import raw from 'rehype-raw';
import katex from 'rehype-katex';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],

  markdown: {
      // 1) GitHub-flavored Markdown 지원
      remarkPlugins: [
        gfm,
	
        // 2) Obsidian 위키링크 지원
        [wikiLink, {
          // [[Page|Alias]] 구문 허용
          aliasDivider: '|',
          // 링크 텍스트 → 페이지 파일명 매핑 함수			
          /** @type {(name: string) => string} */
          pageResolver: (name) =>
            /* 예: "My Page" → "my-page" */
            name
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-'),
          // 매핑된 파일명을 실제 주소로 변환
          /** @type {(permalink: string) => string} */
          hrefTemplate: (permalink) => `/docs/${permalink}/`,
        }],
	
        // 3) Obsidian 어드모니션(callout) 지원
        admonitions,
      ],
      // HTML 렌더링, 앵커 추가, 수학식 렌더링 등
      rehypePlugins: [
        raw,        // remark-raw 사용 시 필요
        slug,       // heading에 id 자동 부여
        autolink,   // heading에 앵커 링크 추가
        katex,      // LaTeX → HTML/CSS 렌더링
      ],
	  },

  vite: {
	// @ts-ignore
    plugins: [tailwindcss()],
  },
});