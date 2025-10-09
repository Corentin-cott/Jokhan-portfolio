export function formatVideoUrlByUrl(url: string): string {
    const match = url.match(/\/d\/([^/]+)\//);
    const videoId = match ? match[1] : '';

    const formattedVideoUrl: string = formatVideoUrlByVideoId(videoId);
    console.log("\nOG VIDEO URL : " + url + "\nVIDEO URL CONVERTED TO : " + formattedVideoUrl);
    return formattedVideoUrl;
}

export function formatVideoUrlByVideoId(videoId: string): string {
    return `https://drive.google.com/file/d/${videoId}/preview`
}

export function formatAfficheUrlByAfficheUrl(url: string): string {
    const match = url.match(/\/d\/([^/]+)\//);
    const afficheId = match ? match[1] : '';

    const formattedAfficheUrl: string = formatAfficheUrlByAfficheId(afficheId);
    console.log("\nOG AFFICHE URL : " + url + "\nAFFICHE URL CONVERTED TO : " + formattedAfficheUrl);
    return formattedAfficheUrl;
}

export function formatAfficheUrlByAfficheId(afficheId: string): string {
    if (!afficheId) return '';
    return `https://lh3.googleusercontent.com/d/${afficheId}=w1000?authuser=0`;
}