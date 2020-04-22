export declare class StringUtils {
    /**
     * Returns a string in which all characters not allowed in form-encoded data
     * is replaced with dashes. Originally written to make sure that non-ASCII
     * characters don't get passed into HTTP headers, where they aren't allowed.
     *
     * In the future, we might want to be smarter about these character
     * replacements, switching Latin-like characters to their ASCII equivalent
     * (ex: å -> a).
     */
    static sanitizeNonAsciiToDashes(input: string): string;
    /**
     * The page title is passed in HTTP headers, and we want to make sure that
     * that title is sanitized to the point where we feel comfortable putting
     * that value in those headers. This function returns a sanitized version
     * of the string (with non-ascii characters replaced with dashes) or, if the
     * entire string is non-ascii, returns null, signifying that the page title
     * could not be adequately sanitized.
     *
     * The caller can then decide to use a different value in place of the page
     * title, such as window.location.
     */
    static sanitizePageTitle(input: string): string;
    static formEncode(object: Object, prefix?: String): String;
}
export default StringUtils;
