export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id = obj.id || null;
        this.title = obj.title || null;
        this.description = obj.description || null;
        this.thumbnailUrl = obj.thumbnailUrl || null;
        this.videoUrl = obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}