import fs from 'fs';
import path from 'path';

export class FileManager {
    private static instance: FileManager;

    private constructor() {}

    public static getInstance(): FileManager {
        if (!FileManager.instance) {
            FileManager.instance = new FileManager();
        }

        return FileManager.instance;
    }

    public async uploadFile(file: File, DIR_NAME: string): Promise<string> {
        const currentDate = new Date();
        const formattedDate = currentDate
            .toISOString()
            .replace(/[-:T.]/g, '')
            .slice(0, 14);

        const filename = `${formattedDate}-${file?.name?.replace(/\s+/g, '_')}`;
        const bufferFile = Buffer.from(await file?.arrayBuffer());
        const uploadDir = path.resolve(process.cwd(), 'public', DIR_NAME, filename);

        fs.writeFileSync(uploadDir, new Uint8Array(bufferFile));
        return `/${DIR_NAME}/${filename}`;
    }
}