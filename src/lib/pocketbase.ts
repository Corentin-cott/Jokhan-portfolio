import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from 'astro:env/server';

/** URL de l'instance de PocketBase */
export const pbBaseUrl = POCKETBASE_URL ?? 'http://127.0.0.1:8090';

export const pb = new PocketBase(pbBaseUrl);
pb.autoCancellation(false);

interface PbRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}

export interface FilmRecord extends PbRecord {
  titre: string;
  description: string;
  affiche: string;
  videoUrl: string;
  tags: string[];
  actif: boolean;
  dateSortie: string;
}

export interface AutreMediaRecord extends PbRecord {
  titre: string;
  description: string;
  image: string;
  audio: string;
  videoUrl: string;
  type: 'image' | 'audio' | 'video' | '';
  tags: string[];
  position: number;
  dateSortie: string;
}

interface TopFilmRecord extends PbRecord {
  film: string;
  position: number;
  expand?: { film?: FilmRecord };
}

export interface SiteConfigRecord extends PbRecord {
  image_header: string;
  image_footer: string;
  header_titre: string;
  header_sous_titre: string;
  footer_titre: string;
  footer_texte: string;
  top_description: string;
}

export interface SocialLinkRecord extends PbRecord {
  plateforme: string;
  description: string;
  url: string;
  position: number;
}

export function fileUrl(
  record: { collectionName: string; id: string },
  filename: string,
  thumb?: string,
): string {
  if (!filename) return '';
  const url = `${pbBaseUrl}/api/files/${record.collectionName}/${record.id}/${filename}`;
  return thumb ? `${url}?thumb=${encodeURIComponent(thumb)}` : url;
}

export async function getSiteConfig(): Promise<SiteConfigRecord | null> {
  try {
    return await pb.collection('site_config').getFirstListItem<SiteConfigRecord>('');
  } catch (e) {
    console.error('[pb] site_config:', (e as Error).message);
    return null;
  }
}

export async function getTopFilms(): Promise<FilmRecord[]> {
  try {
    const rows = await pb
      .collection('top_film')
      .getFullList<TopFilmRecord>({ sort: 'position', expand: 'film' });
    return rows.map((r) => r.expand?.film).filter((f): f is FilmRecord => Boolean(f));
  } catch (e) {
    console.error('[pb] top_film:', (e as Error).message);
    return [];
  }
}

export async function getFilms(): Promise<FilmRecord[]> {
  try {
    return await pb
      .collection('films')
      .getFullList<FilmRecord>({ sort: '-dateSortie', filter: 'actif = true' });
  } catch (e) {
    console.error('[pb] films:', (e as Error).message);
    return [];
  }
}

export async function getAutreMedias(): Promise<AutreMediaRecord[]> {
  try {
    return await pb.collection('autre_medias').getFullList<AutreMediaRecord>({ sort: 'position' });
  } catch (e) {
    console.error('[pb] autre_medias:', (e as Error).message);
    return [];
  }
}

export async function getSocialLinks(): Promise<SocialLinkRecord[]> {
  try {
    return await pb.collection('social_links').getFullList<SocialLinkRecord>({ sort: 'position' });
  } catch (e) {
    console.error('[pb] social_links:', (e as Error).message);
    return [];
  }
}
