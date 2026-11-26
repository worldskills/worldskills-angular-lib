/**
 * The formats the rich text editor offers (Quill format names): bold, italic, underline,
 * bulleted and numbered lists, and links.
 *
 * The stored value is Quill's HTML for these. Sanitise it on the server to the same set:
 * p, br, strong / b, em / i, u, ul / ol / li, and a (http, https and mailto links only).
 */
export const WS_RICH_TEXT_FORMATS = ['bold', 'italic', 'underline', 'list', 'link'];
