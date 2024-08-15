export default function useMakeString(content: string, maxContentLength: number) {
    if (content.length > maxContentLength) {
        return content.substring(0, maxContentLength) + "...";
    }
    return content;
};
