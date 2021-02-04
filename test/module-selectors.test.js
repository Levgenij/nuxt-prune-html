/*
*   * Test utils
*/
import { setupTest } from '@nuxt/test-utils';

/*
*   * Utils
*/
import {
    getDomElements,
    BASE_URL,
    BOT_USER_AGENT,
} from './utils';

/*
*   * Module testing suite
*/
describe(
    'module-selectors',
    () => {

        /*
        *   * Nuxt setup
        */
        setupTest(
           {
                server: true,
                testDir: __dirname,
                fixture: '../src',
                config: {
                    dev: false,
                    head: {
                        script: [
                            {
                                src: '/scripts/keep-me.js',
                                once: true,
                                async: true,
                                defer: true,
                            },
                        ],
                    },
                    pruneHtml: {
                        enabled: true,
                        selectorsToKeep: [ '[src="/scripts/keep-me.js"]' ],
                        link: [
                            {
                                href: '/scripts/keep-me.js',
                                rel: 'preload',
                                as: 'script',
                                position: 'phead',
                                class: 'nuxt-prune--injected',
                            },
                        ],
                        script: [
                            {
                                src: '#',
                                position: 'head',
                                class: 'nuxt-prune--injected',
                            },
                            {
                                src: '#',
                                position: 'pbody',
                                class: 'nuxt-prune--injected',
                            },
                            {
                                src: '#',
                                class: 'nuxt-prune--injected',
                            },
                        ],
                    },
                },
            }
        );

        /*
        *   * Selectors
        */
        test(
            'selectors-to-keep',
            async() => {

                const { length } = await getDomElements(
                    BASE_URL,
                    'script[src="/scripts/keep-me.js"]',
                    BOT_USER_AGENT
                );

                // Test
                expect( length ).toEqual(
                    1
                );

            },
        );

        test(
            'scripts-and-links-injected',
            async() => {

                const { length } = await getDomElements(
                    BASE_URL,
                    '.nuxt-prune--injected',
                    BOT_USER_AGENT
                );

                // Test
                expect( length ).toEqual(
                    4
                );

            },
        );

        test(
            'scripts-and-links-positions',
            async() => {

                const { elements: [ html ] } = await getDomElements(
                        BASE_URL,
                        'html',
                        BOT_USER_AGENT
                    )
                    // HTML
                    , head = html.querySelector( 'head' )
                    , body = html.querySelector( 'body' )
                ;

                // Test
                expect( head.firstChild.tagName === 'LINK' ).toEqual(
                    true
                );

                expect( head.lastChild.tagName === 'SCRIPT' ).toEqual(
                    true
                );

                expect( body.firstChild.tagName === 'SCRIPT' ).toEqual(
                    true
                );

                expect( body.lastChild.tagName === 'SCRIPT' ).toEqual(
                    true
                );

            },
        );

    }
);
