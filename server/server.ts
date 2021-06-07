import {createHttpHandler, html} from '@quilted/http-handlers';

const handler = createHttpHandler();

handler.get(() => html('Hello world!'));

export default handler;
