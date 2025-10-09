export function formatVideoUrlByUrl(url: string): string {
    const match = url.match(/\/d\/([^/]+)\//);
    const videoId = match ? match[1] : '';
    return formatVideoUrlByVideoId(videoId);
}

export function formatVideoUrlByVideoId(videoId: string): string {
    return `https://drive.google.com/file/d/${videoId}/preview`
}