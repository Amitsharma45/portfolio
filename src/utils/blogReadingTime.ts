export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): string => {
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);

    return `${minutes} min read`;
};